import express from "express";
import path from "path";
import fs from "fs";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
const PORT = 3000;
const ADMIN_PASSCODE = process.env.ADMIN_PASSCODE || "admin123";

// Initialize Gemini Client
let ai: GoogleGenAI | null = null;
if (process.env.GEMINI_API_KEY) {
  ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });
} else {
  console.warn("WARNING: GEMINI_API_KEY environment variable is not set. The AI chatbot will fall back to local responses.");
}

// Middleware
app.use(express.json());

// Path to data files
const DATA_DIR = path.join(process.cwd(), "data");
const MESSAGES_FILE = path.join(DATA_DIR, "messages.json");
const STATS_FILE = path.join(DATA_DIR, "stats.json");

// Ensure data files exist helper
function initFiles() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(MESSAGES_FILE)) {
    fs.writeFileSync(MESSAGES_FILE, "[]", "utf8");
  }
  if (!fs.existsSync(STATS_FILE)) {
    fs.writeFileSync(
      STATS_FILE,
      JSON.stringify({ totalViews: 0, uniqueVisitors: 0, submissions: 0 }, null, 2),
      "utf8"
    );
  }
}
initFiles();

// Database read/write helpers
function readData<T>(filePath: string, defaultValue: T): T {
  try {
    if (!fs.existsSync(filePath)) return defaultValue;
    const data = fs.readFileSync(filePath, "utf8");
    return JSON.parse(data) as T;
  } catch (error) {
    console.error(`Error reading ${filePath}:`, error);
    return defaultValue;
  }
}

function writeData<T>(filePath: string, data: T): boolean {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");
    return true;
  } catch (error) {
    console.error(`Error writing ${filePath}:`, error);
    return false;
  }
}

// Security Middleware for Admin endpoints
const authenticateAdmin = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ error: "No authorization passcode provided." });
  }
  const passcode = authHeader.replace("Bearer ", "").trim();
  if (passcode === ADMIN_PASSCODE) {
    next();
  } else {
    return res.status(403).json({ error: "Invalid admin passcode." });
  }
};

// --- API ROUTES ---

// 1. Visitor stats tracking endpoint
app.post("/api/stats", (req, res) => {
  const { visitorId, isNewSession } = req.body;

  let stats = readData<{ totalViews: number; uniqueVisitors: number; submissions: number }>(STATS_FILE, {
    totalViews: 0,
    uniqueVisitors: 0,
    submissions: 0,
  });

  // Increment page views
  stats.totalViews = (stats.totalViews || 0) + 1;

  // Check if new visitor
  if (isNewSession) {
    stats.uniqueVisitors = (stats.uniqueVisitors || 0) + 1;
  }

  writeData(STATS_FILE, stats);
  res.json(stats);
});

// GET stats (for dashboard - Admin only)
app.get("/api/stats", authenticateAdmin, (req, res) => {
  const stats = readData(STATS_FILE, { totalViews: 0, uniqueVisitors: 0, submissions: 0 });
  res.json(stats);
});

// 2. Submit Contact Form
app.post("/api/contact", (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "All fields (name, email, subject, message) are required." });
  }

  interface ContactMessage {
    id: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    date: string;
  }

  const messages = readData<ContactMessage[]>(MESSAGES_FILE, []);
  const newMessage: ContactMessage = {
    id: Date.now().toString(36) + Math.random().toString(36).substring(2, 7),
    name,
    email,
    subject,
    message,
    date: new Date().toISOString(),
  };
  messages.push(newMessage);
  writeData(MESSAGES_FILE, messages);

  // Update stats submissions count
  const stats = readData(STATS_FILE, { totalViews: 0, uniqueVisitors: 0, submissions: 0 });
  stats.submissions = (stats.submissions || 0) + 1;
  writeData(STATS_FILE, stats);

  console.log(`[Form Submission] New message from ${name} (${email}): ${subject}`);

  res.status(201).json({ success: true, message: "Message recorded successfully!" });
});

// 3. Admin endpoints
app.post("/api/admin/login", (req, res) => {
  const { passcode } = req.body;
  if (passcode === ADMIN_PASSCODE) {
    res.json({ success: true, token: ADMIN_PASSCODE });
  } else {
    res.status(401).json({ success: false, error: "Incorrect passcode." });
  }
});

// GET all messages (Admin only)
app.get("/api/admin/messages", authenticateAdmin, (req, res) => {
  interface ContactMessage {
    id: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    date: string;
  }
  const messages = readData<ContactMessage[]>(MESSAGES_FILE, []);
  // Return sorted by date descending (newest first)
  messages.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  res.json(messages);
});

// DELETE a message (Admin only)
app.delete("/api/admin/messages/:id", authenticateAdmin, (req, res) => {
  const { id } = req.params;
  interface ContactMessage {
    id: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    date: string;
  }
  let messages = readData<ContactMessage[]>(MESSAGES_FILE, []);
  const initialLength = messages.length;
  messages = messages.filter((msg) => msg.id !== id);

  if (messages.length === initialLength) {
    return res.status(404).json({ error: "Message not found." });
  }

  writeData(MESSAGES_FILE, messages);

  // Update stats submissions count
  const stats = readData(STATS_FILE, { totalViews: 0, uniqueVisitors: 0, submissions: 0 });
  stats.submissions = Math.max(0, (stats.submissions || 0) - 1);
  writeData(STATS_FILE, stats);

  res.json({ success: true, message: "Message deleted successfully." });
});

// 4. Smart Gemini Chatbot Assistant Endpoint
app.post("/api/chatbot", async (req, res) => {
  const { message } = req.body;
  if (!message) {
    return res.status(400).json({ error: "Message field is required." });
  }

  const query = message.toLowerCase().trim();

  // If Gemini API is available, use it!
  if (ai) {
    try {
      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: message,
        config: {
          systemInstruction: `You are the AI portfolio assistant for Swadesh Narwariya. Your job is to answer questions about Swadesh's skills, education, projects, timeline, and how to contact him.
Here is the official background info about Swadesh:
- Name: Swadesh Narwariya
- Role: Data Scientist, Full-Stack Developer, and AI Enthusiast pursuing a B.Tech in Computer Science & Engineering (2023 - 2027) at Acropolis Institute of Research & Technology, Indore, India.
- High School: Completed Class XII (PCM) at Excellence Bal Vinay Mandir (2023) with 84.6%.
- Tech Arsenal (Skills):
  * Languages: Python, JavaScript, C/C++, SQL
  * Frameworks & Libraries: React.js, Node.js, Express.js, Django, FastAPI, Next.js, Tailwind CSS, Redux
  * AI & Data Science: Machine Learning, Deep Learning (PyTorch, TensorFlow), Computer Vision (OpenCV, MediaPipe), NLP (Hugging Face)
  * Databases & Cloud: PostgreSQL, MongoDB, Supabase, Firebase, AWS
  * Developer Tools: Git & GitHub, Docker, Postman, VS Code, Power BI
- Core Projects:
  1. AI Wildlife Guardian:
     * Purpose: Real-time computer vision system to detect and track endangered wildlife, identify poachers, and log anomalies to combat illegal hunting and protect ecosystems.
     * Tech Stack: Python, PyTorch, OpenCV, Raspberry Pi, Twilio API.
     * Key Features: Embedded poacher alerts, SMS warnings via Twilio, localized image classification maps.
  2. FinSight:
     * Purpose: AI financial commodity analytics engine to track commodity price signals, forecast gold/silver prices, and suggest automated portfolio metrics.
     * Tech Stack: React.js, Node.js, Express, LSTM, XGBoost, Plotly.
     * Key Features: Interactive price forecasting signals, future daily metal forecasts, asset allocation advice dashboards.
  3. DisasterSense:
     * Purpose: Real-time disaster warning and zone mapping portal.
     * Tech Stack: JavaScript, Google Maps API, Django, Python, WebSockets.
     * Key Features: Live interactive disaster tracker, safety coordinates sharing, and automatic warning broadcasts.
  4. AI Healthcare Assistant:
     * Purpose: Deep-learning medical diagnosis helper that classifies anomalies in chest X-Rays and MRI scans and provides virtual voice consultations.
     * Tech Stack: PyTorch, FastAPI, React.js, Tailwind CSS.
     * Key Features: Medical image classification pipelines, patient symptom voice triage, and visual dashboard statistics.
  5. DmaanEngg:
     * Purpose: Industrial engineering client quotation and parts catalog portal with dynamic quoting scripts, service request workflows, and automated PDF catalog generation.
     * Tech Stack: React.js, Django Web Framework, PostgreSQL, Bootstrap.
- Timeline & Journey:
  * 2026: Sanjeevani AI Healthcare Portal (Developed diagnostic pipeline using PyTorch for scanning MRI/X-Rays, linked to FastAPI backend with voice consultation bot)
  * 2026: SUVIDHA-Setu AI Platform (Built an AI-powered citizen services kiosk for rural communities with voice chatbot, entity extraction, and multi-language support)
  * 2025: FinVesta & Market Prediction (Developed full-stack fintech platform and AI-driven gold/silver price prediction engine with live dashboard)
  * 2025: DisasterSense & SafetyNet (Created comprehensive disaster monitoring and safety platforms with real-time interactive maps and zone tracking)
  * 2024: Computer Vision Projects (Built hand gesture recognition systems for 3D model control and AI face insight analytics using MediaPipe and OpenCV)
  * 2023: Started B.Tech CSE at Acropolis Institute
- Contact Details:
  * Email: swadeshnarwariya66@gmail.com
  * LinkedIn: https://www.linkedin.com/in/swadesh-narwariya
  * GitHub: https://github.com/swadeshnarwariya or https://github.com/swadesh-hub

Instructions for responding:
1. Always maintain a highly professional, helpful, polite, and confident tone. Speak as Swadesh's personal assistant.
2. Keep your answers concise, engaging, and easy to read. Use Markdown lists, bolding, and clear paragraphs.
3. If a user asks a question not related to Swadesh or his portfolio, gently steer them back, e.g., "While I can answer general questions, I'm here primarily as Swadesh's portfolio assistant. Let me tell you about his projects, like the AI Wildlife Guardian!"
4. Do not make up facts. If asked something about Swadesh that is not in this background, say politely that you don't have that specific information but can share his official contact info so they can ask him directly!`,
        },
      });

      const reply = response.text || "Sorry, I couldn't formulate a response.";
      return res.json({ reply });
    } catch (error) {
      console.error("Gemini API Error, falling back to local router:", error);
    }
  }

  // --- LOCAL FALLBACK ROUTER (If Gemini is missing or fails) ---
  let responseText = "";
  if (query.includes("hello") || query.includes("hi ") || query.includes("hey") || query.includes("greetings")) {
    responseText = `Hello! 👋 I am Swadesh's AI Assistant. You can ask me questions about his skills, education, projects, or how to contact him. What would you like to know?`;
  } else if (query.includes("wildlife") || query.includes("guardian") || query.includes("poacher") || query.includes("animal")) {
    responseText = `**AI Wildlife Guardian** is a real-time computer vision system built to protect wildlife.
    
- **Purpose**: Detects and tracks endangered wildlife, alerts about poachers, and reports ecological anomalies.
- **Tech Stack**: Python, PyTorch, OpenCV, Raspberry Pi, and Twilio API.
- **Key Features**: Embedded poacher alerts, SMS warnings via Twilio, and localized image classification maps.`;
  } else if (query.includes("finsight") || query.includes("financial") || query.includes("analytics") || query.includes("stock") || query.includes("gold") || query.includes("silver")) {
    responseText = `**FinSight** is an AI financial commodity analytics engine.
    
- **Purpose**: Tracks commodity price signals, forecasts gold/silver prices, and suggests automated portfolio metrics.
- **Tech Stack**: React.js, Node.js, Express, LSTM, XGBoost, and Plotly.
- **Key Features**: Interactive signal charts, future daily metal forecasts, and asset allocation advice dashboards.`;
  } else if (query.includes("disastersense") || query.includes("disaster") || query.includes("alert") || query.includes("map") || query.includes("emergency")) {
    responseText = `**DisasterSense** is a real-time disaster warning and zone mapping portal.
    
- **Purpose**: Displays safe zone mapping, coordinates emergency helpers, and logs community alert statuses.
- **Tech Stack**: JavaScript, Google Maps API, Django Web Framework, Python, and WebSocket.
- **Key Features**: Live interactive disaster tracker, safety coordinates sharing, and automatic warning broadcasts.`;
  } else if (query.includes("healthcare") || query.includes("assistant") || query.includes("medical") || query.includes("x-ray") || query.includes("mri") || query.includes("triage")) {
    responseText = `**AI Healthcare Assistant** is a deep-learning medical diagnosis helper.
    
- **Purpose**: Classifies anomalies in chest X-Rays and MRI scans and advises patients via virtual voice consultations.
- **Tech Stack**: PyTorch, FastAPI, React.js, and Tailwind CSS.
- **Key Features**: Medical image classification pipelines, patient symptom voice triage, and visual dashboard statistics.`;
  } else if (query.includes("dmaanengg") || query.includes("dmaan") || query.includes("industrial") || query.includes("quotation")) {
    responseText = `**DmaanEngg** is an industrial engineering client quotation and parts catalog portal.
    
- **Purpose**: Provides quick price calculators, parts search, and administrative order pipelines.
- **Tech Stack**: React.js, Django Web Framework, PostgreSQL, and Bootstrap.
- **Key Features**: Dynamic quoting scripts, service request workflows, and automated PDF catalog generation.`;
  } else if (query.includes("project") || query.includes("portfolio") || query.includes("work") || query.includes("code")) {
    responseText = `Swadesh has built 5 core projects:
1. **AI Wildlife Guardian** (Computer Vision protection)
2. **FinSight** (AI Financial Analytics engine)
3. **DisasterSense** (Real-time disaster warning mapping)
4. **AI Healthcare Assistant** (Medical image diagnosis)
5. **DmaanEngg** (Django + React engineering portal)

Which project would you like to know more about? Type its name (e.g. *FinSight* or *AI Wildlife Guardian*).`;
  } else if (query.includes("skill") || query.includes("tool") || query.includes("language") || query.includes("python") || query.includes("javascript") || query.includes("tech") || query.includes("arsenal") || query.includes("c++")) {
    responseText = `Swadesh's Tech Arsenal includes:
- **Languages**: Python, JavaScript, C/C++, SQL
- **Libraries & Frameworks**: React.js, Node.js, Express.js, Django, FastAPI, Next.js, Tailwind CSS, Redux
- **AI & Data Science**: Machine Learning, Deep Learning (PyTorch, TensorFlow), Computer Vision (OpenCV, MediaPipe), NLP (Hugging Face)
- **Databases & Cloud**: PostgreSQL, MongoDB, Supabase, Firebase, AWS
- **Developer Tools**: Git & GitHub, Docker, Postman, VS Code, Power BI`;
  } else if (query.includes("education") || query.includes("college") || query.includes("university") || query.includes("school") || query.includes("b.tech") || query.includes("acropolis")) {
    responseText = `Swadesh Narwariya is currently pursuing:
- **B.Tech in Computer Science & Engineering** (2023 - 2027) at **Acropolis Institute of Research & Technology, Indore, India**, focusing on ML, Algorithms, and Cloud computing.
- **Schooling**: Completed Higher Secondary Schooling (Class XII, PCM) at **Excellence Bal Vinay Mandir** in 2023 with **84.6%** in boards.`;
  } else if (query.includes("contact") || query.includes("email") || query.includes("hire") || query.includes("job") || query.includes("resume") || query.includes("internship")) {
    responseText = `You can reach Swadesh through the following channels:
- 📧 **Email**: swadeshnarwariya66@gmail.com
- 💼 **LinkedIn**: [Swadesh Narwariya](https://www.linkedin.com/in/swadesh-narwariya)
- 💻 **GitHub**: [swadeshnarwariya](https://github.com/swadeshnarwariya)

He is currently open to full-stack development, ML engineering internships, and freelancing!`;
  } else {
    responseText = `Thanks for asking! 😊 I am Swadesh's portfolio assistant. You can ask me details about his:
- **Skills**: ("What programming languages do you know?")
- **Projects**: ("Tell me about AI Wildlife Guardian", "FinSight", "DisasterSense", "AI Healthcare Assistant", or "DmaanEngg")
- **Journey**: ("Where do you study?")
- **Contact details**: ("How can I contact Swadesh?")`;
  }

  res.json({ reply: responseText });
});

// --- VITE MIDDLEWARE CONFIGURATION ---
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
