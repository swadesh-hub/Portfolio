import { Project, SkillCategory, TimelineItem, EducationItem } from "./types";

export const projectsData: Project[] = [
  {
    id: "smart-traffic-system",
    title: "Smart-Traffic-Management-System",
    description: "An intelligent urban transit optimization grid running deep learning computer vision. Analyzes real-time traffic camera feeds in real-time, computes high-fidelity vehicle density coefficients, and adapts traffic signal timings dynamically to eliminate urban gridlocks.",
    category: "AI & Computer Vision",
    tech: ["Python", "YOLOv8", "OpenCV", "FastAPI", "Streamlit", "TensorRT"],
    liveUrl: "https://github.com/swadeshnarwariya/Smart-Traffic-Management-System",
    sourceUrl: "https://github.com/swadeshnarwariya/Smart-Traffic-Management-System",
    featured: true
  },
  {
    id: "vanmitra",
    title: "VanMitra",
    description: "A comprehensive forestry protection and wildlife tracking ecosystem. Employs AI-driven remote sensing to detect forest fire alerts, log unauthorized animal habitat intrusion, and streamline ranger reporting dispatch workflows.",
    category: "AI & Computer Vision",
    tech: ["Python", "PyTorch", "FastAPI", "React Native", "PostgreSQL", "GIS"],
    liveUrl: "https://github.com/swadeshnarwariya/VanMitra",
    sourceUrl: "https://github.com/swadeshnarwariya/VanMitra",
    featured: true
  },
  {
    id: "clarity",
    title: "Clarity",
    description: "An automated UI layout analyzer and performance profiling toolkit for modern web apps. Empowers developers with interactive element alignment overlays, DOM weight auditing, and visual accessibility grade feedback.",
    category: "Web & Tools",
    tech: ["React.js", "TypeScript", "Chrome Extension API", "Tailwind CSS"],
    liveUrl: "https://github.com/swadeshnarwariya/Clarity",
    sourceUrl: "https://github.com/swadeshnarwariya/Clarity",
    featured: false
  },
  {
    id: "disastersense",
    title: "Disaster_Sense",
    description: "An advanced multi-hazard emergency warning and disaster monitoring web platform. Synthesizes real-time seismology telemetry, issues instantaneous safety alert broadcasts, and identifies optimal evacuation routes.",
    category: "Web & IoT",
    tech: ["Django", "Python", "Google Maps API", "WebSockets", "Leaflet.js"],
    liveUrl: "https://github.com/swadeshnarwariya/Disaster_Sense",
    sourceUrl: "https://github.com/swadeshnarwariya/Disaster_Sense",
    featured: false
  },
  {
    id: "apnacircle-ai",
    title: "ApnaCircle-AI",
    description: "A neighborhood discovery hub energized by localized AI models. Features cognitive sentiment-aware discussion boards, automatic local announcement summaries, and personalized neighborhood event aggregations.",
    category: "AI & Computer Vision",
    tech: ["Next.js", "Gemini API", "FastAPI", "ChromaDB", "Tailwind CSS"],
    liveUrl: "https://github.com/swadeshnarwariya/ApnaCircle-AI",
    sourceUrl: "https://github.com/swadeshnarwariya/ApnaCircle-AI",
    featured: false
  },
  {
    id: "supercar-seller",
    title: "supercar_seller",
    description: "An ultra-premium interactive luxury car digital showroom and valuation engine. Features customized colorway and performance component mockups combined with automated trade-in value prediction modeling.",
    category: "Web & Tools",
    tech: ["React.js", "Tailwind CSS", "Framer Motion", "FastAPI", "Scikit-Learn"],
    liveUrl: "https://github.com/swadeshnarwariya/supercar_seller",
    sourceUrl: "https://github.com/swadeshnarwariya/supercar_seller",
    featured: false
  },
  {
    id: "sports-management",
    title: "Sports-Management-",
    description: "A robust tournament coordination and athlete metrics portal. Utilizes conflict-free round-robin algorithms for schedules, automates roster check-ins, and tracks real-time match statistic graphics.",
    category: "Full-Stack Web",
    tech: ["Node.js", "Express", "MongoDB", "React.js", "Redux Toolkit"],
    liveUrl: "https://github.com/swadeshnarwariya/Sports-Management-",
    sourceUrl: "https://github.com/swadeshnarwariya/Sports-Management-",
    featured: false
  },
  {
    id: "finsight",
    title: "FinSight",
    description: "An AI financial commodity analytics engine providing price signal tracking, commodity price forecasting (Gold/Silver), and automated portfolio metrics dashboard.",
    category: "Full-Stack Web",
    tech: ["React.js", "Node.js", "Express", "LSTM / XGBoost", "Plotly"],
    liveUrl: "#",
    sourceUrl: "https://github.com/swadeshnarwariya",
    featured: false
  }
];

export const skillsData: SkillCategory[] = [
  {
    title: "Languages",
    icon: "Code",
    skills: [
      { name: "Python", level: 90, icon: "Terminal" },
      { name: "JavaScript", level: 85, icon: "Globe" },
      { name: "C / C++", level: 75, icon: "Cpu" },
      { name: "SQL", level: 80, icon: "Database" }
    ]
  },
  {
    title: "Frameworks & Libraries",
    icon: "Layers",
    skills: [
      { name: "React.js / Next.js", level: 85, icon: "React" },
      { name: "Django", level: 80, icon: "Server" },
      { name: "Node.js / Express", level: 75, icon: "Zap" },
      { name: "FastAPI", level: 80, icon: "Flame" },
      { name: "Tailwind CSS", level: 85, icon: "Palette" }
    ]
  },
  {
    title: "AI & Data Science",
    icon: "Brain",
    skills: [
      { name: "Machine Learning", level: 85, icon: "Activity" },
      { name: "Deep Learning / PyTorch", level: 80, icon: "GitCommit" },
      { name: "Computer Vision / OpenCV", level: 85, icon: "Eye" },
      { name: "NLP / Hugging Face", level: 70, icon: "MessageSquare" }
    ]
  },
  {
    title: "Tools & Platforms",
    icon: "Wrench",
    skills: [
      { name: "Git & GitHub", level: 90, icon: "GitBranch" },
      { name: "AWS & Supabase", level: 80, icon: "Cloud" },
      { name: "Docker", level: 70, icon: "Container" },
      { name: "Postman / VS Code", level: 85, icon: "Briefcase" }
    ]
  }
];

export const timelineData: TimelineItem[] = [
  {
    year: "2026",
    title: "VanMitra & Smart Traffic AI Systems",
    description: "Designed computer-vision traffic congestion adjusters and forest protection mapping frameworks using PyTorch and FastAPI.",
    side: "left"
  },
  {
    year: "2026",
    title: "ApnaCircle-AI & SUVIDHA-Setu Platforms",
    description: "Pioneered localized community discovery engines and voice-enabled citizen dashboards leveraging the Gemini API and ChromaDB vector search.",
    side: "right"
  },
  {
    year: "2025",
    title: "Clarity Web Profiler & Sports Management",
    description: "Launched high-utility developer layouts analyzer and robust algorithmic athlete rosters / scheduling engines in React & Redux.",
    side: "left"
  },
  {
    year: "2025",
    title: "Disaster_Sense Multi-Alert Platform",
    description: "Developed automated seismic and meteorologic sensor data processing with real-time zone alerting and Leaflet-based shelter route planning.",
    side: "right"
  },
  {
    year: "2024",
    title: "supercar_seller Digital Showroom & CV",
    description: "Built dynamic luxury vehicle configurations, Scikit-learn pricing predictor modules, and OpenCV hand-gesture interface trials.",
    side: "left"
  },
  {
    year: "2023",
    title: "Started B.Tech Journey",
    description: "Began Computer Science Engineering at Acropolis Institute, Indore, diving deep into advanced ML, Web Systems, and Cloud Architectures.",
    side: "right"
  }
];

export const educationData: EducationItem[] = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science & Engineering",
    institution: "Acropolis Institute of Research & Technology",
    location: "Indore, MP, India",
    year: "2023 – 2027",
    details: "Focusing on Machine Learning, Neural Networks, Cloud Architectures, Analysis of Algorithms, and Database Management Systems.",
    icon: "Award"
  },
  {
    degree: "Higher Secondary (Class XII)",
    field: "Science (Physics, Chemistry, Mathematics)",
    institution: "Excellence Bal Vinay Mandir",
    location: "Indore, MP, India",
    year: "2022 – 2023",
    grade: "84.6% Board Score",
    details: "Deep core foundations in advanced Mathematics, analytical Physics, and physical/organic Chemistry, graduating with honors.",
    icon: "BookOpen"
  }
];
