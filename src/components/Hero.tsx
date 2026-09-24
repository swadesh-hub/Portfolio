import React, { useState } from "react";
import { ArrowRight, Github, Linkedin, Mail, MapPin, FileText, Terminal, ExternalLink, Zap, Cpu, Code2, Award, ChevronRight } from "lucide-react";
import { contactInfo } from "../data";

interface Props {
  onResumeClick: () => void;
}

export default function Hero({ onResumeClick }: Props) {
  const [profileTab, setProfileTab] = useState<"specs" | "focus" | "stack">("specs");

  const telemetryMetrics = [
    { label: "Current B.Tech CGPA", value: "7.33 / 10", note: "CSE-DS @ AITR Indore (RGPV)" },
    { label: "Industry Certifications", value: "4+ Accreditations", note: "AWS, NPTEL, Matlab & Coursera" },
    { label: "Secondary School (SSC)", value: "90.6%", note: "Ideal Academy (MP Board 2021)" },
    { label: "Higher Secondary (HSC)", value: "84.6%", note: "Gov. Excellence Bal Vinay Mandir" }
  ];

  return (
    <section id="hero" className="relative pt-24 pb-16 md:pt-32 md:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Arc Reactor Telemetry Banner */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-4 border-b border-amber-950/50 text-xs font-mono">
          <div className="flex items-center gap-2 text-stone-300">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#38bdf8] animate-pulse" />
            <span className="text-amber-400 font-semibold uppercase tracking-wider">SYSTEM STATUS:</span>
            <span className="text-stone-300 hidden sm:inline">ONLINE • AVAILABLE FOR INTERNSHIPS & SDE ROLES</span>
          </div>
          <div className="flex items-center gap-3 text-stone-400">
            <span className="text-amber-400/90 font-medium flex items-center gap-1">
              <MapPin size={12} className="text-amber-500" />
              {contactInfo.location}
            </span>
            <span className="text-red-900">•</span>
            <span className="text-amber-300/90">Acropolis Institute ('27)</span>
          </div>
        </div>

        {/* Main Hero Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Left Column: Developer Overview & Direct Actions (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              {/* Role Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/60 border border-amber-500/35 text-xs font-mono text-amber-300 mb-4 shadow-sm">
                <Zap size={13} className="text-cyan-400" />
                <span>DATA ENGINEER & FULL-STACK DEVELOPER • CSE-DS '27</span>
              </div>

              {/* Primary Name Display */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.08] mb-4">
                Hi, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 drop-shadow-sm">
                  Swadesh Narwariya
                </span>
                .
              </h1>

              {/* Crisp Value Proposition */}
              <p className="text-base sm:text-lg text-stone-200 leading-relaxed mb-4">
                <strong className="text-amber-300 font-semibold">CSE–Data Science undergraduate at AITR</strong>, passionate about building <strong className="text-white font-semibold">data-driven applications</strong>, <strong className="text-cyan-300 font-semibold">scalable data pipelines</strong>, <strong className="text-amber-300 font-semibold">cloud solutions</strong>, and <strong className="text-white font-semibold">full-stack software</strong> that turn real-world problems into practical technology.
              </p>

              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed mb-6 font-mono">
                Core Stack: Python for Data Science • NumPy & Pandas • SQL & DBMS • Cloud Computing (AWS) • Django & React.js • Power BI • C++.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-500 hover:to-rose-500 text-white font-bold text-xs transition-all shadow-md shadow-red-950/60 hover:shadow-[0_0_18px_rgba(220,38,38,0.5)] border border-red-500/40"
                >
                  <span>Explore Projects</span>
                  <ArrowRight size={14} className="text-amber-300" />
                </a>

                <button
                  onClick={onResumeClick}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 text-stone-950 text-xs font-bold transition-all shadow-md shadow-amber-950/40 cursor-pointer hover:shadow-[0_0_15px_rgba(251,191,36,0.4)]"
                >
                  <FileText size={14} className="text-red-950" />
                  <span>Resume (PDF)</span>
                </button>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-red-950/50 hover:bg-red-900/70 text-stone-200 hover:text-white text-xs font-medium border border-amber-500/30 transition-colors"
                >
                  <Mail size={14} className="text-amber-400" />
                  <span>Get in Touch</span>
                </a>

                <div className="flex items-center gap-1.5 pl-1">
                  <a
                    href={contactInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-red-950/40 hover:bg-red-900/60 text-stone-400 hover:text-amber-300 border border-amber-500/25 transition-colors"
                    title="GitHub Profile"
                  >
                    <Github size={16} />
                  </a>
                  <a
                    href={contactInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-red-950/40 hover:bg-red-900/60 text-stone-400 hover:text-amber-300 border border-amber-500/25 transition-colors"
                    title="LinkedIn Profile"
                  >
                    <Linkedin size={16} />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Status Bar */}
            <div className="p-3 rounded-xl bg-gradient-to-r from-red-950/40 via-[#180509]/60 to-black border border-amber-500/25 flex items-center justify-between text-xs font-mono">
              <span className="text-stone-300 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_6px_#38bdf8]" />
                <span>{contactInfo.status}</span>
              </span>
              <a href="#contact" className="text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1">
                <span>Contact</span>
                <ChevronRight size={13} />
              </a>
            </div>
          </div>

          {/* Right Column: Engineering Profile Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-gradient-to-br from-[#1c060b]/95 via-[#130508]/90 to-[#0c0305]/95 border-2 border-amber-400/60 p-5 sm:p-6 shadow-2xl shadow-red-950/60 relative">
              
              {/* Top: Engineer Photo and Status */}
              <div className="flex items-center gap-5 mb-6 pt-1">
                {/* Photo in Armor Bezel */}
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-amber-400/80 shrink-0 bg-gradient-to-br from-red-950 via-[#180509] to-black shadow-lg shadow-red-950/80">
                  <img
                    src="/my_photo.png"
                    alt="Swadesh Narwariya"
                    className="w-full h-full object-cover object-top filter contrast-105"
                  />
                  <div className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full bg-slate-950/80 border border-cyan-400/90 flex items-center justify-center shadow-[0_0_6px_rgba(56,189,248,0.8)]">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  </div>
                </div>

                <div className="flex flex-col justify-center">
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-amber-400/10 border border-amber-500/30 text-[10px] font-mono text-amber-300 mb-1.5 w-fit">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span>VERIFIED CANDIDATE</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    Swadesh Narwariya
                  </h3>
                  <div className="text-xs text-amber-300 font-mono mt-0.5">
                    Acropolis Institute (B.Tech CSE '27)
                  </div>
                  <div className="text-xs text-stone-400 font-mono mt-0.5">
                    Indore, Madhya Pradesh, India
                  </div>
                </div>
              </div>

              {/* Interactive Telemetry Tabs */}
              <div className="flex items-center gap-1 p-1 rounded-xl bg-black/50 border border-amber-950 mb-3 text-xs font-mono">
                <button
                  onClick={() => setProfileTab("specs")}
                  className={`flex-1 py-1.5 rounded-lg text-center transition-all cursor-pointer ${
                    profileTab === "specs"
                      ? "bg-red-950/90 text-amber-300 font-bold border border-amber-500/40 shadow-sm"
                      : "text-stone-400 hover:text-stone-200"
                  }`}
                >
                  System Specs
                </button>
                <button
                  onClick={() => setProfileTab("focus")}
                  className={`flex-1 py-1.5 rounded-lg text-center transition-all cursor-pointer ${
                    profileTab === "focus"
                      ? "bg-red-950/90 text-amber-300 font-bold border border-amber-500/40 shadow-sm"
                      : "text-stone-400 hover:text-stone-200"
                  }`}
                >
                  Active Focus
                </button>
                <button
                  onClick={() => setProfileTab("stack")}
                  className={`flex-1 py-1.5 rounded-lg text-center transition-all cursor-pointer ${
                    profileTab === "stack"
                      ? "bg-red-950/90 text-amber-300 font-bold border border-amber-500/40 shadow-sm"
                      : "text-stone-400 hover:text-stone-200"
                  }`}
                >
                  Core Stack
                </button>
              </div>

              {/* Tab Content Panels */}
              <div className="p-3.5 rounded-xl bg-[#0d0305] border border-amber-950/80 text-xs">
                {profileTab === "specs" && (
                  <div className="space-y-2 font-mono text-[11px]">
                    <div className="flex justify-between items-center text-stone-300">
                      <span className="text-amber-400/80">Institution:</span>
                      <span className="text-white text-right">AITR Indore (Affiliated to RGPV)</span>
                    </div>
                    <div className="flex justify-between items-center text-stone-300">
                      <span className="text-amber-400/80">Specialization:</span>
                      <span className="text-amber-300 font-bold">B.Tech CSE - Data Science (2023–27)</span>
                    </div>
                    <div className="flex justify-between items-center text-stone-300">
                      <span className="text-amber-400/80">Current CGPA:</span>
                      <span className="text-cyan-300 font-bold">7.33 / 10.0</span>
                    </div>
                    <div className="flex justify-between items-center text-stone-300">
                      <span className="text-amber-400/80">SSC (Class X):</span>
                      <span className="text-white font-semibold">90.6% (Ideal Academy, 2021)</span>
                    </div>
                    <div className="flex justify-between items-center text-stone-300">
                      <span className="text-amber-400/80">HSC (Class XII):</span>
                      <span className="text-white font-semibold">84.6% (Gov. Bal Vinay Mandir, 2023)</span>
                    </div>
                    <div className="flex justify-between items-center text-stone-300">
                      <span className="text-amber-400/80">Training:</span>
                      <span className="text-white">Full Stack Dev @ Dmaan Engineering</span>
                    </div>
                  </div>
                )}

                {profileTab === "focus" && (
                  <div className="space-y-2 text-stone-300 text-xs leading-relaxed">
                    <p>
                      <strong className="text-amber-300">Data Engineering & Analytics:</strong> Python for Data Science, NumPy, Pandas, SQL, and Power BI dashboards.
                    </p>
                    <p>
                      <strong className="text-amber-300">Full-Stack & Cloud:</strong> Django, React.js, AWS Cloud Practitioner, FastAPI, and real-time AI solutions like VanMitra Wildlife Guardian.
                    </p>
                  </div>
                )}

                {profileTab === "stack" && (
                  <div className="flex flex-wrap gap-1.5 font-mono text-[10px]">
                    {["Python for Data Science", "NumPy", "Pandas", "SQL", "Cloud Computing (AWS)", "C++", "Power BI", "Django", "React.js", "FastAPI", "PostgreSQL", "Docker", "Git"].map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded bg-red-950/70 text-amber-200 border border-amber-500/25"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Bento Telemetry Metrics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {telemetryMetrics.map((metric, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-gradient-to-br from-[#18060a]/90 via-[#120508]/80 to-[#0e0406]/95 border border-amber-500/25 hover:border-amber-400/50 transition-all shadow-md shadow-red-950/20"
            >
              <div className="flex items-center gap-1.5 text-xs font-mono text-amber-400 mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_4px_#38bdf8]" />
                <span className="truncate">{metric.label}</span>
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {metric.value}
              </div>
              <div className="text-[11px] text-stone-400 font-mono mt-1">
                {metric.note}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
