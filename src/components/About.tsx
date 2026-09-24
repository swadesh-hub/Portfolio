import React, { useState } from "react";
import { Eye, Layers, Server, Database, CheckCircle2, Terminal, Zap, Shield, Sparkles, ArrowRight, Code, Activity, User, MapPin, GraduationCap, Briefcase, Award, Cloud } from "lucide-react";
import { contactInfo } from "../data";

export default function About() {
  const [activePillarIndex, setActivePillarIndex] = useState<number>(0);

  const pillars = [
    {
      id: "data-pipelines",
      icon: Database,
      title: "Data-Driven Systems & Scalable Pipelines",
      summary: "ETL pipelines, data wrangling, relational modeling, and business intelligence.",
      description: "Engineering scalable data ingestion, transformation, and analytical pipelines using Python, NumPy, Pandas, and SQL. Transforming raw multi-source datasets into normalized relational databases and interactive Power BI analytical dashboards.",
      pipeline: "Raw Datasets (CSV/SQL) → NumPy & Pandas ETL → Schema Normalization & Joins → Relational Store → Power BI Visual Analytics",
      metrics: ["Normalized SQL schemas", "Vectorized Pandas ops", "Actionable BI insights"],
      tags: ["Python for Data Science", "NumPy & Pandas", "SQL / DBMS", "Power BI", "Data Pipelines", "ETL"]
    },
    {
      id: "cloud-solutions",
      icon: Cloud,
      title: "Cloud Solutions & Infrastructure (AWS)",
      summary: "Scalable cloud deployments, secure AWS infrastructure, and containerized microservices.",
      description: "Certified AWS Cloud Practitioner architecting robust cloud environments with Amazon EC2, S3 storage, IAM security policies, and Docker containers. Designed for reliable uptime, cost efficiency, and automated deployments.",
      pipeline: "Application Code → Docker Containerization → AWS EC2 / Container Registry → S3 Asset Storage & IAM Access Control → Production Cloud Endpoint",
      metrics: ["AWS Certified Practitioner", "Stateless Docker containers", "Least-privilege IAM security"],
      tags: ["AWS Cloud Practitioner", "EC2 & S3", "IAM Security", "Docker", "Linux / Bash", "Cloud Architecture"]
    },
    {
      id: "fullstack-software",
      icon: Layers,
      title: "Full-Stack Software Engineering",
      summary: "Production web applications, industrial product data management, and REST APIs.",
      description: "Hands-on industry training at Dmaan Engineering developing full-stack web applications with Django and React.js. Implementing secure RESTful endpoints, relational ORMs, dynamic state-driven UIs, and cataloging systems.",
      pipeline: "React Client Request → Django REST Framework → ORM Database Transaction → Relational Database (SQL) → Dynamic JSON Response",
      metrics: ["Django ORM optimization", "Modular React components", "Industrial product management"],
      tags: ["Django", "React.js", "Python", "TypeScript", "REST APIs", "Tailwind CSS"]
    },
    {
      id: "ai-vision",
      icon: Eye,
      title: "AI, Machine Learning & Edge Solutions",
      summary: "YOLOv8 edge vision, deep neural networks, and real-world safety systems.",
      description: "Engineering real-world intelligent systems like VanMitra (AI Wildlife Guardian with animal detection and geofencing), Smart Traffic Management (real-time vehicle density with YOLOv8 & OpenCV), and authoring research in NLP & RAG.",
      pipeline: "Video / Sensor Feed → OpenCV Preprocessing → YOLOv8 Inference → Geofence & Classification → Real-Time Alerts & SOS",
      metrics: ["Real-time edge detection", "YOLOv8 & OpenCV accuracy", "Published NLP/RAG research"],
      tags: ["YOLOv8", "OpenCV", "PyTorch", "Deep Learning", "NLP & RAG", "FastAPI"]
    }
  ];

  const selectedPillar = pillars[activePillarIndex];
  const SelectedIcon = selectedPillar.icon;

  return (
    <section id="about" className="py-20 border-t border-amber-950/60 relative scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-mono font-semibold text-amber-400 tracking-wider uppercase mb-2 flex items-center gap-1.5">
              <Zap size={14} className="text-cyan-400" />
              <span>ABOUT • ENGINEERING PROFILE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              About Me & Technical Focus
            </h2>
            <p className="text-stone-300 text-sm sm:text-base mt-2">
              CSE–Data Science undergraduate at AITR, passionate about building data-driven applications, scalable data pipelines, cloud solutions, and full-stack software that turn real-world problems into practical technology.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-stone-400">
            <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_6px_#38bdf8]" />
            <span>Profile & Architectural Pillars</span>
          </div>
        </div>

        {/* Top Bio & Background Card */}
        <div className="rounded-2xl bg-gradient-to-br from-[#18060a]/95 via-[#130508]/90 to-[#0e0406]/95 border border-amber-500/30 p-6 sm:p-8 mb-12 shadow-xl shadow-red-950/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Narrative Bio (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/60 border border-amber-500/30 text-xs font-mono text-amber-300">
                <User size={12} className="text-cyan-400" />
                <span>BIOGRAPHY & MISSION</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Turning Real-World Challenges into Scalable, Practical Technology
              </h3>

              <div className="p-4 rounded-xl bg-[#0f0407] border border-amber-500/25 border-l-4 border-l-amber-400 text-stone-200 text-sm sm:text-base leading-relaxed font-medium">
                "{contactInfo.bio}"
              </div>

              <p className="text-sm text-stone-300 leading-relaxed">
                Currently pursuing B.Tech from <strong className="text-amber-300 font-semibold">Acropolis Institute of Technology & Research (AITR)</strong>, affiliated to RGPV Bhopal with current <strong className="text-cyan-300 font-semibold">CGPA 7.33/10.0</strong> in CSE-Data Science. Completed industrial training in full-stack product management systems with Django and React.js at Dmaan Engineering, alongside AWS Cloud Practitioner accreditation, NPTEL data science credentials, and research in NLP, RAG, and Edge-AI.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white font-semibold text-xs transition-all shadow-md shadow-red-950/50"
                >
                  <span>Explore Featured Projects</span>
                  <ArrowRight size={13} />
                </a>

                <a
                  href="#education"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-red-950/50 hover:bg-red-900/60 text-stone-200 text-xs font-medium border border-amber-500/30 transition-colors"
                >
                  <GraduationCap size={13} className="text-cyan-400" />
                  <span>Certifications & Academics</span>
                </a>

                <a
                  href="#experience"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-red-950/50 hover:bg-red-900/60 text-stone-200 text-xs font-medium border border-amber-500/30 transition-colors"
                >
                  <Briefcase size={13} className="text-amber-400" />
                  <span>View Experience Timeline</span>
                </a>
              </div>
            </div>

            {/* Right Quick Facts & Fast Metrics (5 cols) */}
            <div className="lg:col-span-5 space-y-3">
              <div className="p-4 rounded-xl bg-[#0d0305]/90 border border-amber-950/80">
                <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-semibold mb-1">
                  <GraduationCap size={14} className="text-cyan-400" />
                  <span>EDUCATION & ACADEMICS</span>
                </div>
                <div className="text-sm font-bold text-white">
                  B.Tech in CSE - Data Science (2023 – 2027)
                </div>
                <div className="text-xs text-stone-300">
                  AITR Indore (RGPV Bhopal) • <span className="text-cyan-300 font-bold">Current CGPA: 7.33 / 10.0</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#0d0305]/90 border border-amber-950/80">
                <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-semibold mb-1">
                  <MapPin size={14} className="text-cyan-400" />
                  <span>LOCATION & AVAILABILITY</span>
                </div>
                <div className="text-sm font-bold text-white">
                  Indore, Madhya Pradesh, India
                </div>
                <div className="text-xs text-emerald-400 flex items-center gap-1 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Open for Data Engineer, Analyst & SDE Opportunities</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#0d0305]/90 border border-amber-950/80">
                <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-semibold mb-1">
                  <Award size={14} className="text-cyan-400" />
                  <span>CORE PILLARS</span>
                </div>
                <div className="text-xs text-stone-300 leading-relaxed">
                  Data Pipelines (NumPy, Pandas, SQL, Power BI) • Cloud Solutions (AWS Certified) • Full-Stack (Django & React.js) • Real-Time AI (YOLOv8, OpenCV).
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Sub-header for Architecture console */}
        <div className="flex items-center justify-between mb-6 pb-2 border-b border-amber-950/60">
          <div className="text-xs font-mono font-semibold text-amber-400 tracking-wider uppercase flex items-center gap-1.5">
            <Zap size={13} className="text-cyan-400" />
            <span>ARCHITECTURAL BLUEPRINTS & DOMAIN COMPETENCIES</span>
          </div>
          <span className="text-xs font-mono text-stone-400 hidden sm:inline">Select domain for pipeline details</span>
        </div>

        {/* Interactive Architecture Console (Split Deck) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Left Column: Pillar Navigation Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs font-mono text-amber-400 font-semibold uppercase tracking-wider mb-2 flex items-center justify-between">
              <span>Select Engineering Domain</span>
              <span className="text-stone-400 font-normal">{activePillarIndex + 1} / 4</span>
            </div>

            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              const isActive = idx === activePillarIndex;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setActivePillarIndex(idx)}
                  className={`w-full text-left p-4 rounded-xl transition-all cursor-pointer flex items-center gap-3.5 border ${
                    isActive
                      ? "bg-gradient-to-r from-red-950/90 via-[#1d070c]/90 to-[#120508]/90 border-amber-400/70 shadow-lg shadow-red-950/50"
                      : "bg-[#140508]/60 hover:bg-[#19060b]/80 border-amber-500/20 text-stone-300 hover:border-amber-500/40"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 border transition-all ${
                      isActive
                        ? "bg-gradient-to-br from-red-600 to-amber-600 text-white border-amber-300 shadow-md shadow-red-950/60"
                        : "bg-red-950/50 text-amber-400 border-amber-500/30"
                    }`}
                  >
                    <Icon size={18} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1">
                      <h3
                        className={`text-sm font-bold tracking-tight truncate ${
                          isActive ? "text-amber-200" : "text-white"
                        }`}
                      >
                        {pillar.title}
                      </h3>
                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_6px_#38bdf8] shrink-0" />
                      )}
                    </div>
                    <p className="text-xs text-stone-400 line-clamp-1 mt-0.5">
                      {pillar.summary}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Deep-Dive Blueprint Inspector (7 cols) */}
          <div className="lg:col-span-7">
            <div className="h-full rounded-2xl bg-gradient-to-br from-[#1c060b]/95 via-[#130508]/90 to-[#0c0305]/95 border-2 border-amber-400/50 p-6 sm:p-8 flex flex-col justify-between shadow-2xl shadow-red-950/40 relative">
              
              <div>
                {/* Header of Active Pillar */}
                <div className="flex items-center justify-between gap-4 mb-4 pb-4 border-b border-amber-950/70">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-600 to-amber-600 border border-amber-400/60 text-white flex items-center justify-center shadow-md">
                      <SelectedIcon size={20} />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-cyan-300 uppercase tracking-wider flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        <span>Active Domain Blueprint</span>
                      </div>
                      <h3 className="text-xl font-bold text-white tracking-tight">
                        {selectedPillar.title}
                      </h3>
                    </div>
                  </div>

                  <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-red-950/80 text-amber-300 border border-amber-500/30">
                    Production Track
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-stone-200 leading-relaxed mb-6">
                  {selectedPillar.description}
                </p>

                {/* Pipeline Flow Diagram */}
                <div className="mb-6 p-4 sm:p-5 rounded-xl bg-[#0a0204] border border-amber-950/90 shadow-inner">
                  <div className="text-xs font-mono font-semibold text-amber-400 mb-3 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <Activity size={13} className="text-cyan-400" />
                      <span>ENGINEERING DATAFLOW PIPELINE</span>
                    </div>
                    <span className="text-[10px] text-stone-400 font-mono hidden sm:inline">Stage-by-stage architecture</span>
                  </div>
                  
                  {/* Visual Node Flow */}
                  <div className="flex flex-wrap items-center gap-2 p-3 rounded-lg bg-red-950/25 border border-amber-500/20">
                    {selectedPillar.pipeline.split(" → ").map((stage, sIdx, arr) => (
                      <React.Fragment key={sIdx}>
                        <div className="px-3 py-1.5 rounded-md bg-[#130407] border border-amber-500/30 text-xs font-mono text-stone-200 flex items-center gap-1.5 shadow-sm hover:border-cyan-400/50 transition-colors">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 shadow-[0_0_4px_#38bdf8]" />
                          <span className="whitespace-nowrap">{stage}</span>
                        </div>
                        {sIdx < arr.length - 1 && (
                          <span className="text-amber-400 font-bold text-xs select-none shrink-0 px-0.5">
                            →
                          </span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* Key Metrics Badges */}
                <div className="mb-6">
                  <div className="text-xs font-mono text-stone-400 mb-2">
                    Verified Benchmark Standards:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {selectedPillar.metrics.map((metric, mIdx) => (
                      <div
                        key={mIdx}
                        className="p-2.5 rounded-lg bg-[#0e0306] border border-amber-950 flex items-center gap-2 text-xs text-stone-200 font-mono"
                      >
                        <CheckCircle2 size={14} className="text-cyan-400 shrink-0" />
                        <span className="truncate">{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Technology Tags */}
              <div className="pt-4 border-t border-amber-950/70 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {selectedPillar.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-red-950/60 text-amber-200 border border-amber-500/25"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href="#projects"
                  className="text-xs font-mono text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1"
                >
                  <span>View Projects</span>
                  <ArrowRight size={13} />
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* Engineering Standards & Philosophy Bar */}
        <div className="rounded-2xl bg-gradient-to-r from-red-950/60 via-[#180509]/70 to-[#0e0305]/90 border border-amber-500/30 p-6 shadow-xl shadow-red-950/30">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 pb-4 border-b border-amber-950/60">
            <div className="flex items-center gap-2.5">
              <Terminal size={18} className="text-amber-400" />
              <h3 className="text-base font-bold text-white tracking-tight">
                Software Engineering Philosophy & Quality Guarantees
              </h3>
            </div>
            <div className="text-xs font-mono text-stone-400">
              Department of Computer Science & Engineering • Acropolis
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div className="p-3 rounded-xl bg-[#0d0305] border border-amber-950">
              <div className="font-bold text-amber-300 mb-1 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>Low-Latency First</span>
              </div>
              <p className="text-stone-300 leading-snug">
                Heavy emphasis on video inference performance, guaranteeing sub-50ms execution loops on edge hardware.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-[#0d0305] border border-amber-950">
              <div className="font-bold text-amber-300 mb-1 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>End-to-End Type Safety</span>
              </div>
              <p className="text-stone-300 leading-snug">
                Strict TypeScript and Python Pydantic validation preventing runtime structural bugs across all data layers.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-[#0d0305] border border-amber-950">
              <div className="font-bold text-amber-300 mb-1 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>Pragmatic ML Utility</span>
              </div>
              <p className="text-stone-300 leading-snug">
                Neural networks deployed intentionally where deterministic mathematical rules fall short of human perception.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-[#0d0305] border border-amber-950">
              <div className="font-bold text-amber-300 mb-1 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>Clean Architecture</span>
              </div>
              <p className="text-stone-300 leading-snug">
                Decoupled microservices, reproducible Docker containers, and clear git commit history with semantic versioning.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

