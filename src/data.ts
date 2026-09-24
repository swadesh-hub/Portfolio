import { Project, SkillCategory, TimelineItem, EducationItem, ContactInfo, CertificationItem, AccoladeItem } from "./types";

export const contactInfo: ContactInfo = {
  name: "Swadesh Narwariya",
  title: "Data Engineer & Full-Stack Developer",
  subTitle: "B.Tech CSE-DS @ AITR Indore (RGPV Bhopal) • CGPA 7.33/10.0",
  email: "swadeshnarwariya66@gmail.com",
  location: "Indore, Madhya Pradesh, India",
  status: "Available for Data Engineer, Analyst & Software Engineering roles",
  github: "https://github.com/swadeshnarwariya",
  linkedin: "https://www.linkedin.com/in/swadesh-narwariya",
  bio: "CSE–Data Science undergraduate at AITR, passionate about building data-driven applications, scalable data pipelines, cloud solutions, and full-stack software that turn real-world problems into practical technology."
};

export const projectsData: Project[] = [
  {
    id: "smart-traffic-system",
    title: "Smart Traffic Management System",
    tagline: "Autonomous traffic density estimation & dynamic signal timing using YOLOv8 & OpenCV",
    description: "An intelligent urban mobility platform that analyzes real-time traffic camera video feeds to compute vehicle density in milliseconds. Dynamically recalibrates traffic signal cycles to eliminate congestion bottlenecks and prioritize emergency vehicles.",
    category: "AI & Computer Vision",
    tech: ["Python", "YOLOv8", "OpenCV", "FastAPI", "Streamlit", "PyTorch"],
    liveUrl: "https://github.com/swadeshnarwariya/Smart-Traffic-Management-System",
    sourceUrl: "https://github.com/swadeshnarwariya/Smart-Traffic-Management-System",
    featured: true,
    keyMetrics: [
      "Sub-45ms inference latency per video frame",
      "Multi-class vehicle classification (98% precision)",
      "Adaptive cycle timing reducing intersection wait times by ~30%"
    ],
    architecture: "Edge Video Stream → OpenCV Preprocessing → YOLOv8 Detection → Fast Density Estimator → Dynamic Signal Controller",
    highlights: [
      "Trained custom YOLOv8 model for multi-lane intersection tracking under low-light and adverse weather conditions.",
      "Engineered an asynchronous FastAPI stream pipeline for live RTSP camera feeds with zero dropped frames.",
      "Integrated real-time dashboard displaying queue length analytics and density heatmaps."
    ]
  },
  {
    id: "vanmitra",
    title: "VanMitra - AI Wildlife Guardian",
    tagline: "AI-powered wildlife and tourist safety system with animal detection, geofencing & SOS alerts (Role: FullStack Developer • 6 Mos)",
    description: "AI-powered wildlife and tourist safety system designed to monitor animal behavior and provide real-time safety alerts in forest areas. The system uses AI-based animal detection, GPS tracking, geofencing, and behavior prediction to identify potential wildlife risks and recommend safer routes for tourists. It also provides SOS support and real-time alerts to improve tourist safety and enable better forest monitoring.",
    category: "AI & Computer Vision",
    tech: ["Python", "YOLO / PyTorch", "FastAPI", "React.js", "GPS & Geofencing", "PostgreSQL"],
    liveUrl: "https://github.com/swadeshnarwariya/VanMitra",
    sourceUrl: "https://github.com/swadeshnarwariya/VanMitra",
    featured: true,
    keyMetrics: [
      "AI-based animal behavior prediction & risk identification",
      "Real-time GPS tracking & tourist geofencing boundaries",
      "Instant SOS support & automated forest alert notifications"
    ],
    architecture: "Edge Sensor / Camera Feeds → Animal Detection & Behavior AI → GPS & Geofencing Engine → FastAPI Alert Dispatcher → Real-Time Tourist Portal",
    highlights: [
      "Served as FullStack Developer over 6-month project duration, engineering frontend interfaces and backend detection pipelines.",
      "Integrated AI-based animal detection and spatial geofencing to recommend safer alternative trekking routes.",
      "Designed SOS emergency alert system delivering instantaneous push notifications for forest ranger interventions."
    ]
  },
  {
    id: "apnacircle-ai",
    title: "ApnaCircle-AI - Hyperlocal Community Platform",
    tagline: "AI-driven neighborhood discovery and civic engagement platform with semantic search",
    description: "A community portal that unifies local civic announcements, neighborhood peer-to-peer assistance, and public grievance tracking. Leverages vector embeddings and generative models to summarize municipal updates and connect neighbors.",
    category: "Full-Stack Web",
    tech: ["Next.js", "Gemini API", "FastAPI", "ChromaDB", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://github.com/swadeshnarwariya/ApnaCircle-AI",
    sourceUrl: "https://github.com/swadeshnarwariya/ApnaCircle-AI",
    featured: true,
    keyMetrics: [
      "Vector search response under 120ms",
      "Multilingual support across English & Hindi",
      "Automated civic issue categorization"
    ],
    architecture: "Next.js App Router → FastAPI Gateway → ChromaDB Vector Store → LLM Context Synthesizer → PostgreSQL",
    highlights: [
      "Implemented semantic search allowing residents to query local announcements in natural language.",
      "Automated grievance triage pipeline classifying municipal complaints with severity ratings.",
      "Designed responsive, accessible UI adhering to modern web standards."
    ]
  },
  {
    id: "clarity",
    title: "Clarity - Web DOM Layout Profiler",
    tagline: "Lightweight browser extension for inspecting DOM weights, layout reflows, and WCAG accessibility",
    description: "A developer tool designed to audit frontend performance directly in the browser. Highlights layout reflow triggers, measures DOM node tree depth, calculates color contrast ratios against WCAG 2.1 AA standards, and exports audit reports.",
    category: "Developer Tools",
    tech: ["React.js", "TypeScript", "Chrome Extension API", "Tailwind CSS"],
    liveUrl: "https://github.com/swadeshnarwariya/Clarity",
    sourceUrl: "https://github.com/swadeshnarwariya/Clarity",
    featured: false,
    keyMetrics: [
      "Zero page execution overhead (< 2ms compute)",
      "Instant 1-click WCAG color contrast validation",
      "Visual DOM depth heatmapping"
    ],
    architecture: "Content Script Injection → DOM Tree Traversal → CSSOM Metric Analysis → React DevTools Overlay",
    highlights: [
      "Engineered non-invasive DOM observer calculating live paint costs without disrupting user interactions.",
      "Implemented automated contrast checking across arbitrary gradient and image backgrounds.",
      "Built one-click JSON/PDF audit export for design and engineering handover."
    ]
  },
  {
    id: "disastersense",
    title: "Disaster_Sense - Seismic Warning Hub",
    tagline: "Real-time tectonic telemetry monitoring and emergency evacuation coordination platform",
    description: "A disaster management portal that aggregates continuous seismic sensor feeds. When tremors breach safety thresholds, the system delivers immediate regional alerts and generates optimal evacuation paths away from structural hazards.",
    category: "Full-Stack Web",
    tech: ["Django", "Python", "Google Maps API", "WebSockets", "Leaflet.js", "PostgreSQL"],
    liveUrl: "https://github.com/swadeshnarwariya/Disaster_Sense",
    sourceUrl: "https://github.com/swadeshnarwariya/Disaster_Sense",
    featured: false,
    keyMetrics: [
      "Real-time WebSocket broadcasting < 200ms",
      "Dynamic Dijkstra evacuation routing",
      "Multi-sensor telemetry aggregation"
    ],
    architecture: "Seismic Feed Ingest → Django Channels (WebSockets) → Spatial Route Planner → Leaflet Client Map",
    highlights: [
      "Configured persistent WebSocket channels handling simultaneous emergency broadcasts to connected clients.",
      "Integrated dynamic map layers displaying safe shelter locations and road blockage hazards.",
      "Created administrative controls for emergency response teams to publish verified advisory bulletins."
    ]
  },
  {
    id: "supercar-seller",
    title: "supercar_seller - Vehicle Showroom & Valuation",
    tagline: "Automotive digital showroom and predictive market valuation platform",
    description: "An interactive vehicle procurement and valuation web app. Users can configure high-end vehicles in real-time, view detailed technical specifications, and receive machine-learning powered market resale value estimations.",
    category: "Full-Stack Web",
    tech: ["React.js", "Tailwind CSS", "Framer Motion", "FastAPI", "Scikit-Learn"],
    liveUrl: "https://github.com/swadeshnarwariya/supercar_seller",
    sourceUrl: "https://github.com/swadeshnarwariya/supercar_seller",
    featured: false,
    keyMetrics: [
      "91% valuation estimate accuracy on test benchmarks",
      "Smooth 60fps interactive 3D/canvas transitions",
      "Instant appraisal feedback"
    ],
    architecture: "React Client → FastAPI Inference API → Scikit-Learn Regression Pipeline → Vehicle DB",
    highlights: [
      "Trained multi-variable regression models taking mileage, brand heritage, and condition into account.",
      "Designed an intuitive vehicle configurator with real-time price calculation.",
      "Optimized frontend bundle size for fast sub-second initial page load."
    ]
  },
  {
    id: "sports-management",
    title: "Sports Management Platform",
    tagline: "End-to-end tournament orchestration and athlete performance analytics engine",
    description: "A centralized athletic tournament management platform that schedules round-robin and knockout fixtures without venue conflicts, logs live match scores, and provides comprehensive player statistics tracking.",
    category: "Full-Stack Web",
    tech: ["Node.js", "Express", "MongoDB", "React.js", "Redux Toolkit", "Tailwind CSS"],
    liveUrl: "https://github.com/swadeshnarwariya/Sports-Management-",
    sourceUrl: "https://github.com/swadeshnarwariya/Sports-Management-",
    featured: false,
    keyMetrics: [
      "Zero scheduling conflict guarantee algorithm",
      "Automated standings calculation",
      "Role-based access (Organizers, Referees, Players)"
    ],
    architecture: "React SPA + Redux → Express REST API → MongoDB Atlas → Automated Match Engine",
    highlights: [
      "Built deterministic scheduling algorithm handling complex venue, date, and team availability constraints.",
      "Implemented real-time score updates with automatic tiebreaker calculations.",
      "Delivered clean administrative dashboards for team registration and roster validation."
    ]
  },
  {
    id: "finsight",
    title: "FinSight - Commodity Market Forecasting",
    tagline: "Automated commodity time-series analytics and predictive price trend engine",
    description: "A financial intelligence dashboard tracking commodities (energy, precious metals, agriculture). Employs LSTM and gradient-boosted models to identify historical seasonality trends and provide predictive moving average projections.",
    category: "AI & Computer Vision",
    tech: ["React.js", "Python", "FastAPI", "LSTM / XGBoost", "Plotly.js", "Pandas"],
    liveUrl: "https://github.com/swadeshnarwariya",
    sourceUrl: "https://github.com/swadeshnarwariya",
    featured: false,
    keyMetrics: [
      "Historical data backtested over 5-year horizons",
      "Interactive candlestick & moving-average visualizer",
      "Automated daily market digest generation"
    ],
    architecture: "Financial Data Scraper → Pandas Pipeline → LSTM Model → FastAPI → Plotly React Charts",
    highlights: [
      "Cleaned and normalized heterogeneous time-series data with outlier detection and imputation.",
      "Built interactive charting dashboards allowing multi-timeframe technical indicator overlays.",
      "Created automated scheduled cron pipelines for daily market data updates."
    ]
  }
];

export const skillsCategories: SkillCategory[] = [
  {
    title: "Data Science, AI & Machine Learning",
    description: "Core algorithms, data analysis, deep neural networks, and vision pipelines.",
    skills: [
      { name: "Python for Data Science", badge: "Core", context: "Data pipelines & model engineering" },
      { name: "NumPy & Pandas", badge: "Core", context: "Data manipulation, ETL & vector ops" },
      { name: "Power BI", badge: "Proficient", context: "Business intelligence, dashboards & metrics" },
      { name: "Computer Vision (YOLOv8)", badge: "Core", context: "Real-time object detection & tracking" },
      { name: "OpenCV", badge: "Core", context: "Video frame processing & contour filtering" },
      { name: "Deep Learning (PyTorch)", badge: "Proficient", context: "Neural networks, CNNs & transfer learning" }
    ]
  },
  {
    title: "Programming Languages & Core CS",
    description: "System logic, analytical algorithms, data structures, and database queries.",
    skills: [
      { name: "Python", badge: "Primary", context: "Data science, automation & backend services" },
      { name: "SQL", badge: "Core", context: "Queries, joins, indexing, normalization & DBMS" },
      { name: "C++", badge: "Academic", context: "Data structures, algorithms & memory models" },
      { name: "JavaScript (ES6+)", badge: "Proficient", context: "Modern web architecture & DOM APIs" },
      { name: "TypeScript", badge: "Proficient", context: "Type-safe frontends & Node services" }
    ]
  },
  {
    title: "Full-Stack Web & API Frameworks",
    description: "Industrial product systems, asynchronous REST services, and responsive UIs.",
    skills: [
      { name: "Django", badge: "Core", context: "Industrial apps, ORM, auth & REST APIs" },
      { name: "React.js", badge: "Core", context: "Modular component architecture & SPAs" },
      { name: "FastAPI", badge: "Core", context: "High-throughput async REST endpoints" },
      { name: "Node.js & Express", badge: "Proficient", context: "Microservices & event-driven APIs" },
      { name: "Tailwind CSS", badge: "Core", context: "Responsive UI & design tokens" }
    ]
  },
  {
    title: "Cloud Computing, Databases & DevOps",
    description: "AWS cloud services, database systems, and modern developer workflows.",
    skills: [
      { name: "Cloud Computing (AWS)", badge: "Certified", context: "AWS Cloud Practitioner, compute & storage" },
      { name: "PostgreSQL & SQLite", badge: "Core", context: "Relational database modeling & schema design" },
      { name: "Git & GitHub", badge: "Daily Driver", context: "Branching, PRs, code review & CI" },
      { name: "MongoDB", badge: "Proficient", context: "NoSQL document persistence" },
      { name: "Docker", badge: "Working", context: "Containerization & reproducibility" },
      { name: "Linux / Bash", badge: "Daily Driver", context: "CLI workflows & server administration" }
    ]
  }
];

export const timelineData: TimelineItem[] = [
  {
    period: "April 2024 – June 2024",
    role: "Full Stack Developer (Industrial Training)",
    organization: "Dmaan Engineering",
    location: "Indore, India",
    description: "Completed industry training at Dmaan Engineering developing a full-stack web application using Django and React.js for managing industrial product data.",
    highlights: [
      "Engineered comprehensive full-stack product data management portal utilizing Django backend and React.js frontend.",
      "Gained hands-on experience in API integration, relational database schemas, and full-stack development workflows.",
      "Built dynamic product cataloging, search filters, and inventory administrative dashboards."
    ],
    skills: ["Django", "React.js", "Python", "SQL", "REST APIs", "Full-Stack Development"]
  },
  {
    period: "2024 – 2025",
    role: "AI & Minor Project Developer",
    organization: "Acropolis Institute / Open-Source",
    location: "Indore, India",
    description: "Built VanMitra - AI Wildlife Guardian and distributed edge vision systems focusing on real-world safety and automation.",
    highlights: [
      "Developed VanMitra (Minor Project, 6 months) integrating AI-based animal detection, GPS tracking, geofencing, and SOS alerts.",
      "Engineered Smart Traffic Management System utilizing YOLOv8 and OpenCV for real-time video density calculation.",
      "Authored research paper on NLP, Retrieval-Augmented Generation (RAG), and Edge-AI."
    ],
    skills: ["Python", "YOLOv8", "OpenCV", "FastAPI", "React.js", "PyTorch", "NLP / RAG"]
  },
  {
    period: "2023 – Present",
    role: "Undergraduate Computer Science & Leadership",
    organization: "Acropolis Institute of Technology & Research (AITR)",
    location: "Indore, India",
    description: "Pursuing B.Tech in CSE with specialization in Data Science (Current CGPA 7.33/10.0), alongside institute technical leadership.",
    highlights: [
      "Served as Technical Head of Acro-IDOL 3.0 and Technical Head in Ardor 3.0.",
      "Volunteered at Acropolis Tech Utsav 2025 organizing tech tracks.",
      "Secured 1st Runner Up in College AI-Manthan (2025) and 1st Runner Up of Innovation Expo (Tech Utsav 2024)."
    ],
    skills: ["Python for Data Science", "NumPy", "Pandas", "SQL", "Cloud Computing", "C++", "Power BI"]
  }
];

export const educationData: EducationItem[] = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science & Engineering (Specialization: CSE-DS)",
    institution: "Acropolis Institute of Technology & Research (AITR), Indore",
    location: "Indore, Madhya Pradesh, India (Affiliated to RGPV Bhopal)",
    period: "2023 – 2027",
    grade: "Current CGPA: 7.33 / 10.0",
    details: "Pursuing B.Tech from AITR Indore affiliated to RGPV Bhopal with specialization in CSE-Data Science (2023-27). Rigorous coursework spanning Python for Data Science, data structures, DBMS, cloud computing, and machine learning.",
    coursework: [
      "Python for Data Science",
      "Data Structures & Algorithms (C++)",
      "Database Management Systems (DBMS / SQL)",
      "Cloud Computing (AWS)",
      "Deep Learning & Neural Networks",
      "NumPy, Pandas & Power BI",
      "Operating Systems & Linux",
      "Computer Networks"
    ]
  },
  {
    degree: "Higher Secondary Certificate (HSC / Class XII)",
    field: "Science Stream (Physics, Chemistry, Mathematics)",
    institution: "Gov. Excellence Bal Vinay Mandir",
    location: "Indore, Madhya Pradesh (MP Board)",
    period: "2021 – 2023",
    grade: "84.6% in 2023",
    details: "Completed higher secondary education under MP Board with 84.6% distinction, establishing strong analytical foundations in calculus, mechanics, and computational logic.",
    coursework: [
      "Higher Mathematics & Calculus",
      "Physics & Mechanics",
      "Chemistry",
      "Computer Fundamentals"
    ]
  },
  {
    degree: "Secondary School Certificate (SSC / Class X)",
    field: "General Academic Curriculum",
    institution: "Ideal Academy",
    location: "Indore, Madhya Pradesh (MP Board)",
    period: "2020 – 2021",
    grade: "90.6% in 2021",
    details: "Secured 90.6% in 10th standard MP Board examinations with outstanding distinction across Mathematics, Science, and Social Studies.",
    coursework: [
      "Mathematics",
      "General Science & Laboratory",
      "Social Science",
      "Information Technology"
    ]
  }
];

export const certificationsData: CertificationItem[] = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    category: "Cloud Computing",
    skillsCovered: ["AWS Core Services", "Cloud Architecture & Security", "EC2, S3 & IAM", "Cloud Economics"]
  },
  {
    name: "NPTEL: Python for Data Science",
    issuer: "NPTEL / IIT Madras",
    category: "Data Science",
    skillsCovered: ["Python Data Structures", "NumPy & Pandas", "Data Visualization", "Statistical Analysis"]
  },
  {
    name: "NPTEL: Database Management Systems (DBMS)",
    issuer: "NPTEL / IIT Kharagpur",
    category: "Databases",
    skillsCovered: ["Relational Algebra", "SQL Queries & Joins", "Normalization", "Concurrency & Recovery"]
  },
  {
    name: "NPTEL: Cloud Computing",
    issuer: "NPTEL / IIT",
    category: "Cloud Computing",
    skillsCovered: ["Virtualization", "Cloud Storage Architectures", "Distributed Systems", "Resource Management"]
  },
  {
    name: "NPTEL: Deep Learning",
    issuer: "NPTEL / IIT",
    category: "Machine Learning",
    skillsCovered: ["Neural Networks", "Backpropagation", "CNN Architectures", "Optimization Techniques"]
  },
  {
    name: "Matlab Certification in Data Science",
    issuer: "MathWorks",
    category: "Data Science",
    skillsCovered: ["Matrix Computations", "Data Modeling & Preprocessing", "Statistical Visuals", "Predictive Analytics"]
  },
  {
    name: "Python Programming",
    issuer: "Coursera",
    period: "2024",
    category: "Programming",
    skillsCovered: ["Object-Oriented Programming", "Data Structures", "APIs & Web Scraping", "Python Scripting"]
  }
];

export const accoladesData: AccoladeItem[] = [
  {
    title: "1st Runner Up",
    event: "College AI-Manthan (2025)",
    year: "2025",
    type: "award",
    description: "Secured 1st Runner Up across competitive college-wide artificial intelligence innovation hackathon."
  },
  {
    title: "1st Runner Up",
    event: "Innovation Expo (Tech Utsav 2024)",
    year: "2024",
    type: "award",
    description: "Awarded 1st Runner Up for engineered technical prototype demonstration and real-world system viability."
  },
  {
    title: "Research Paper Author",
    event: "Research Publication on NLP, RAG, Edge-AI",
    year: "2024 – 2025",
    type: "publication",
    description: "Authored and published research paper exploring Natural Language Processing (NLP), Retrieval-Augmented Generation (RAG), and Edge-AI efficiency."
  },
  {
    title: "Technical Head",
    event: "Acro-IDOL 3.0",
    year: "2024 – 2025",
    type: "leadership",
    description: "Appointed Technical Head, leading event digital operations, scoring systems, and technical infrastructure."
  },
  {
    title: "Technical Head",
    event: "Ardor 3.0",
    year: "2024 – 2025",
    type: "leadership",
    description: "Directed technical setup, stage digital logistics, and technical execution for the institute's flagship event."
  },
  {
    title: "Event Volunteer",
    event: "Acropolis Tech Utsav 2025",
    year: "2025",
    type: "leadership",
    description: "Volunteered and contributed to coordinating hackathon venues, mentoring attendee teams, and organizing tech tracks."
  }
];
