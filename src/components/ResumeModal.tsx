import React from "react";
import { X, Printer, Download, ExternalLink, Mail, MapPin, Github, Linkedin, CheckCircle2, Zap, Award, Briefcase, GraduationCap, ShieldCheck, Trophy } from "lucide-react";
import { contactInfo, projectsData, educationData, skillsCategories, certificationsData, accoladesData, timelineData } from "../data";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: Props) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-150">
      <div className="relative w-full max-w-4xl bg-[#120508] text-stone-100 border-2 border-amber-400/60 rounded-2xl shadow-2xl shadow-red-950/60 my-8 overflow-hidden">
        
        {/* Top bar controls */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-amber-950/70 bg-[#0d0305]/95 backdrop-blur">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-amber-300 font-semibold px-2.5 py-0.5 rounded bg-red-950/70 border border-amber-500/35 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              Curriculum Vitae
            </span>
            <span className="text-xs text-stone-300 hidden sm:inline">
              {contactInfo.name} — Data Engineer & Full-Stack Developer
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-950/50 hover:bg-red-900/70 text-amber-300 text-xs font-semibold border border-amber-500/35 transition-colors cursor-pointer"
              title="Print or Save as PDF"
            >
              <Printer size={14} />
              <span className="hidden sm:inline">Print / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-stone-400 hover:text-white hover:bg-red-950/60 transition-colors cursor-pointer"
              aria-label="Close resume preview"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Printable Resume Sheet */}
        <div className="p-6 sm:p-10 max-h-[80vh] overflow-y-auto font-sans space-y-8 bg-[#120508] print:bg-white print:text-black print:p-0">
          
          {/* Header */}
          <div className="border-b border-amber-950/70 pb-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {contactInfo.name}
            </h1>
            <p className="text-sm font-semibold text-amber-400 mt-1">
              Data Engineer & Full-Stack Developer • B.Tech CSE-DS (Current CGPA: 7.33/10.0)
            </p>
            
            <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-stone-400 mt-3 font-mono">
              <span className="flex items-center gap-1">
                <MapPin size={12} className="text-amber-500" />
                {contactInfo.location}
              </span>
              <a href={`mailto:${contactInfo.email}`} className="text-stone-300 hover:text-amber-300 flex items-center gap-1">
                <Mail size={12} className="text-amber-500" />
                {contactInfo.email}
              </a>
              <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" className="text-stone-300 hover:text-amber-300 flex items-center gap-1">
                <Github size={12} className="text-amber-500" />
                github.com/swadeshnarwariya
              </a>
              <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-stone-300 hover:text-amber-300 flex items-center gap-1">
                <Linkedin size={12} className="text-amber-500" />
                linkedin.com/in/swadesh-narwariya
              </a>
            </div>
          </div>

          {/* Professional Objective / Summary */}
          <div>
            <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-400 mb-2">
              Professional Objective & Summary
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              CSE–Data Science undergraduate at AITR, passionate about building data-driven applications, scalable data pipelines, cloud solutions, and full-stack software that turn real-world problems into practical technology. Current CGPA of 7.33/10.0 (RGPV Bhopal). Industry experience developing full-stack applications with Django and React.js at Dmaan Engineering. Certified AWS Cloud Practitioner and NPTEL certified in Python for Data Science, DBMS, Cloud Computing, and Deep Learning. Experienced in developing real-time AI solutions, managing relational databases, and designing scalable data pipelines.
            </p>
          </div>

          {/* Industrial Training & Experience */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Briefcase size={14} className="text-cyan-400" />
              <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-400">
                Industry Experience & Training
              </h2>
            </div>
            <div className="space-y-4">
              {timelineData.map((item, idx) => (
                <div key={idx} className="border-l-2 border-amber-500/40 pl-3">
                  <div className="flex flex-wrap justify-between items-baseline">
                    <span className="font-semibold text-sm text-white">
                      {item.role} — <span className="text-amber-300">{item.organization}</span>
                    </span>
                    <span className="text-xs font-mono text-amber-400">
                      {item.period}
                    </span>
                  </div>
                  <div className="text-xs text-stone-400 mt-0.5 font-mono">
                    {item.location}
                  </div>
                  <p className="text-xs text-stone-300 mt-1">
                    {item.description}
                  </p>
                  <ul className="mt-1.5 space-y-1 text-xs text-stone-300">
                    {item.highlights.map((hl, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-1.5">
                        <span className="text-amber-400 font-bold">•</span>
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-2 flex flex-wrap gap-1 font-mono text-[10px]">
                    {item.skills.map((s) => (
                      <span key={s} className="px-1.5 py-0.5 rounded bg-red-950/60 text-amber-200 border border-amber-500/25">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <GraduationCap size={14} className="text-cyan-400" />
              <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-400">
                Educational Qualifications
              </h2>
            </div>
            <div className="space-y-4">
              {educationData.map((edu, idx) => (
                <div key={idx} className="border-l-2 border-amber-500/40 pl-3">
                  <div className="flex flex-wrap justify-between items-baseline">
                    <span className="font-semibold text-sm text-white">
                      {edu.degree} — {edu.field}
                    </span>
                    <span className="text-xs font-mono text-cyan-300 font-bold">
                      {edu.period} {edu.grade ? `(${edu.grade})` : ""}
                    </span>
                  </div>
                  <div className="text-xs text-stone-400 mt-0.5">
                    {edu.institution}, {edu.location}
                  </div>
                  <div className="text-xs text-stone-300 mt-1">
                    <span className="font-medium text-amber-200">Coursework:</span>{" "}
                    {edu.coursework.join(", ")}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-400 mb-3">
              Minor Project & Key Technical Systems
            </h2>
            <div className="space-y-4">
              {projectsData.slice(0, 3).map((proj) => (
                <div key={proj.id} className="border-l-2 border-amber-500/40 pl-3">
                  <div className="flex flex-wrap justify-between items-baseline">
                    <span className="font-semibold text-sm text-white flex items-center gap-1.5">
                      {proj.title}
                    </span>
                    <span className="text-xs font-mono text-amber-400">
                      {proj.category}
                    </span>
                  </div>
                  <p className="text-xs text-stone-300 mt-1">
                    {proj.tagline}
                  </p>
                  <ul className="mt-1.5 space-y-1 text-xs text-stone-300">
                    {proj.highlights.map((item, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-1.5">
                        <span className="text-amber-400 font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-2 flex flex-wrap gap-1 font-mono text-[10px]">
                    {proj.tech.map((t) => (
                      <span key={t} className="px-1.5 py-0.5 rounded bg-red-950/60 text-amber-200 border border-amber-500/25">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <ShieldCheck size={14} className="text-cyan-400" />
              <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-400">
                Certifications & Accreditations
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {certificationsData.map((cert, idx) => (
                <div key={idx} className="p-2.5 rounded-lg bg-[#0e0306] border border-amber-950/80">
                  <div className="font-semibold text-amber-300">
                    {cert.name}
                  </div>
                  <div className="text-[11px] text-stone-400 mt-0.5 flex justify-between">
                    <span>{cert.issuer}</span>
                    {cert.period && <span>{cert.period}</span>}
                  </div>
                  <div className="text-[10px] text-stone-500 mt-1 font-mono">
                    {cert.skillsCovered.join(" • ")}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Rewards & Accolades */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Trophy size={14} className="text-cyan-400" />
              <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-400">
                Rewards, Accolades & Co-Curricular Leadership
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {accoladesData.map((acc, idx) => (
                <div key={idx} className="p-2.5 rounded-lg bg-[#0e0306] border border-amber-950/80">
                  <div className="flex justify-between items-start gap-1">
                    <span className="font-semibold text-white">{acc.title}</span>
                    <span className="font-mono text-[10px] text-amber-400">{acc.year}</span>
                  </div>
                  <div className="text-[11px] text-amber-300 mt-0.5 font-medium">{acc.event}</div>
                  <p className="text-[11px] text-stone-400 mt-1">{acc.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-400 mb-3">
              Technical Competencies & Tools
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {skillsCategories.map((cat) => (
                <div key={cat.title} className="p-3 rounded-lg bg-[#0e0306] border border-amber-950/80">
                  <div className="font-semibold text-amber-300 mb-1.5">
                    {cat.title}
                  </div>
                  <div className="text-stone-300 leading-relaxed font-mono text-[11px]">
                    {cat.skills.map((s) => s.name).join(" • ")}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer actions */}
        <div className="px-6 py-4 border-t border-amber-950/70 bg-[#0d0305]/95 flex items-center justify-between text-xs text-stone-400">
          <span className="text-amber-400/80">Verified Academic & Professional Record</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 text-white font-bold text-xs transition-all cursor-pointer shadow-md shadow-red-950/50"
          >
            Close Preview
          </button>
        </div>

      </div>
    </div>
  );
}

