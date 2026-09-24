import React, { useState } from "react";
import { GraduationCap, BookOpen, Calendar, MapPin, Award, Zap, CheckCircle2, ShieldCheck, FileText, Trophy, Users } from "lucide-react";
import { educationData, certificationsData, accoladesData } from "../data";

export default function Education() {
  const [activeFilter, setActiveFilter] = useState<"all" | "degrees" | "certifications" | "accolades">("all");

  return (
    <section id="education" className="py-20 border-t border-amber-950/60 relative scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-mono font-semibold text-amber-400 tracking-wider uppercase mb-2 flex items-center gap-1.5">
              <Zap size={14} className="text-cyan-400" />
              <span>ACADEMICS • CERTIFICATIONS • HONORS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Education, Certifications & Accolades
            </h2>
            <p className="text-stone-300 text-sm sm:text-base mt-2">
              Verified educational background, cloud & data science certifications, technical accolades, and campus leadership.
            </p>
          </div>

          {/* Tab Filter Controls */}
          <div className="flex flex-wrap p-1.5 rounded-xl bg-[#140508] border border-amber-500/30 text-xs font-mono">
            {[
              { id: "all", label: "Overview" },
              { id: "degrees", label: "Academics" },
              { id: "certifications", label: "Certificates (4+)" },
              { id: "accolades", label: "Honors & Leadership" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as any)}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  activeFilter === tab.id
                    ? "bg-red-950 text-amber-300 font-bold border border-amber-500/40 shadow-sm"
                    : "text-stone-400 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 1. Academic Record Cards */}
        {(activeFilter === "all" || activeFilter === "degrees") && (
          <div className="mb-14">
            <div className="flex items-center gap-2 mb-6 pb-2 border-b border-amber-950/60">
              <GraduationCap size={16} className="text-cyan-400" />
              <h3 className="text-sm font-mono uppercase tracking-wider text-amber-400 font-bold">
                Academic Qualifications & Degrees
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {educationData.map((edu, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-gradient-to-br from-[#18060a]/90 via-[#130508]/85 to-[#0e0406]/95 border border-amber-500/25 p-6 flex flex-col justify-between hover:border-amber-400/50 hover:shadow-xl hover:shadow-red-950/40 transition-all"
                >
                  <div>
                    {/* Meta Header */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-1.5 text-xs font-mono text-amber-400 font-semibold">
                        <Calendar size={13} />
                        <span>{edu.period}</span>
                      </div>
                      {edu.grade && (
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-amber-400/10 text-cyan-300 border border-amber-500/30">
                          {edu.grade}
                        </span>
                      )}
                    </div>

                    {/* Degree & Institution */}
                    <h4 className="text-lg font-bold text-white tracking-tight mb-1">
                      {edu.degree}
                    </h4>
                    <div className="text-xs sm:text-sm font-semibold text-amber-300 mb-2">
                      {edu.field}
                    </div>
                    <div className="text-xs text-stone-200 font-medium mb-1">
                      {edu.institution}
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] text-stone-400 font-mono mb-4">
                      <MapPin size={11} className="text-amber-500/80" />
                      <span>{edu.location}</span>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-stone-300 leading-relaxed mb-5">
                      {edu.details}
                    </p>

                    {/* Key Coursework */}
                    <div>
                      <div className="text-[11px] font-mono font-semibold uppercase tracking-wider text-amber-400 mb-2 flex items-center gap-1.5">
                        <BookOpen size={12} className="text-cyan-400" />
                        <span>Curriculum Highlights</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {edu.coursework.map((course) => (
                          <span
                            key={course}
                            className="px-2 py-0.5 rounded text-[10px] font-mono bg-red-950/50 text-amber-200 border border-amber-500/20"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-amber-950/60 flex items-center justify-between text-[11px] text-stone-400 font-mono">
                    <span className="text-amber-400/90 flex items-center gap-1">
                      <CheckCircle2 size={11} className="text-emerald-400" />
                      Verified Record
                    </span>
                    <span>Indore (MP)</span>
                  </div>

                </div>
              ))}
            </div>
          </div>
        )}

        {/* 2. Certifications Section */}
        {(activeFilter === "all" || activeFilter === "certifications") && (
          <div className="mb-14">
            <div className="flex items-center justify-between mb-6 pb-2 border-b border-amber-950/60">
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-cyan-400" />
                <h3 className="text-sm font-mono uppercase tracking-wider text-amber-400 font-bold">
                  Professional Certifications & Accreditations
                </h3>
              </div>
              <span className="text-xs font-mono text-stone-400">AWS • NPTEL • MathWorks • Coursera</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {certificationsData.map((cert, idx) => (
                <div
                  key={idx}
                  className="rounded-xl bg-gradient-to-br from-[#18060a]/90 via-[#130508]/80 to-[#0e0406]/95 border border-amber-500/25 p-5 hover:border-amber-400/50 hover:shadow-lg hover:shadow-red-950/30 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold uppercase bg-red-950 text-amber-300 border border-amber-500/30">
                        {cert.category}
                      </span>
                      {cert.period && (
                        <span className="text-[11px] font-mono text-stone-400">
                          {cert.period}
                        </span>
                      )}
                    </div>

                    <h4 className="text-base font-bold text-white tracking-tight mb-1">
                      {cert.name}
                    </h4>

                    <div className="text-xs text-amber-300 font-medium mb-3 flex items-center gap-1.5">
                      <Award size={13} className="text-cyan-400" />
                      <span>{cert.issuer}</span>
                    </div>

                    <div className="pt-2 border-t border-amber-950/60">
                      <div className="text-[10px] font-mono uppercase text-stone-400 mb-1.5">
                        Competencies Validated:
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {cert.skillsCovered.map((skill) => (
                          <span
                            key={skill}
                            className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-amber-950/30 text-stone-300 border border-amber-500/15"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-amber-950/40 flex items-center justify-between text-[10px] font-mono text-stone-400">
                    <span className="text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 size={11} />
                      Credential Verified
                    </span>
                    <span className="text-stone-500">Official Exam</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 3. Rewards, Research & Leadership Section */}
        {(activeFilter === "all" || activeFilter === "accolades") && (
          <div>
            <div className="flex items-center justify-between mb-6 pb-2 border-b border-amber-950/60">
              <div className="flex items-center gap-2">
                <Trophy size={16} className="text-cyan-400" />
                <h3 className="text-sm font-mono uppercase tracking-wider text-amber-400 font-bold">
                  Rewards, Research Publications & Leadership
                </h3>
              </div>
              <span className="text-xs font-mono text-stone-400">Hackathons & Institute Leadership</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {accoladesData.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-xl bg-gradient-to-br from-[#18060a]/90 via-[#130508]/80 to-[#0e0406]/95 border border-amber-500/25 p-5 hover:border-amber-400/50 hover:shadow-lg hover:shadow-red-950/30 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase border ${
                        item.type === "award"
                          ? "bg-amber-500/15 text-amber-300 border-amber-500/40"
                          : item.type === "publication"
                          ? "bg-cyan-950/60 text-cyan-300 border-cyan-500/40"
                          : "bg-red-950/70 text-red-300 border-red-500/40"
                      }`}>
                        {item.type === "award" ? "Award / Podium" : item.type === "publication" ? "Research Paper" : "Leadership"}
                      </span>
                      <span className="text-[11px] font-mono text-stone-400">
                        {item.year}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-white tracking-tight mb-1">
                      {item.title}
                    </h4>

                    <div className="text-xs text-amber-300 font-semibold mb-2">
                      {item.event}
                    </div>

                    <p className="text-xs text-stone-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-amber-950/60 flex items-center justify-between text-[11px] font-mono text-stone-400">
                    <span className="text-amber-400/90 flex items-center gap-1">
                      {item.type === "award" ? <Trophy size={11} className="text-amber-400" /> : item.type === "publication" ? <FileText size={11} className="text-cyan-400" /> : <Users size={11} className="text-emerald-400" />}
                      {item.type === "award" ? "Podium Finish" : item.type === "publication" ? "Published Work" : "Institute Role"}
                    </span>
                    <span>Acropolis</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

