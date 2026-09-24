import React, { useState, useMemo } from "react";
import { Cpu, Code2, Server, Database, CheckCircle2, Zap, Sparkles, Filter, Terminal, Shield, ArrowUpRight } from "lucide-react";
import { skillsCategories } from "../data";

export default function Skills() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [selectedSkillName, setSelectedSkillName] = useState<string | null>(null);

  const categoryIcons = [Cpu, Code2, Server, Database];

  // Flattened skills for comprehensive matrix view
  const allSkills = useMemo(() => {
    return skillsCategories.flatMap((cat, catIdx) =>
      cat.skills.map((s) => ({
        ...s,
        categoryTitle: cat.title,
        categoryIcon: categoryIcons[catIdx % categoryIcons.length]
      }))
    );
  }, []);

  const filteredCategories = useMemo(() => {
    if (activeTab === "all") return skillsCategories;
    return skillsCategories.filter((c) =>
      c.title.toLowerCase().includes(activeTab.toLowerCase())
    );
  }, [activeTab]);

  return (
    <section id="skills" className="py-20 border-t border-amber-950/60 relative scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-mono font-semibold text-amber-400 tracking-wider uppercase mb-2 flex items-center gap-1.5">
              <Zap size={14} className="text-cyan-400" />
              <span>SKILLS • TECHNICAL EXPERTISE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Technical Stack & Competency Matrix
            </h2>
            <p className="text-stone-300 text-sm sm:text-base mt-2">
              Battle-tested tools, frameworks, and infrastructure deployed across production vision pipelines, microservices, and web clients.
            </p>
          </div>

          {/* Quick Metrics Capsule */}
          <div className="flex items-center gap-2 p-2 rounded-2xl bg-black/60 border border-amber-500/25">
            <div className="px-3 py-1.5 rounded-xl bg-red-950/60 border border-amber-500/30 text-center">
              <div className="text-xs font-mono text-stone-400">TOTAL TECHNOLOGIES</div>
              <div className="text-lg font-black font-mono text-amber-300">{allSkills.length} Verified</div>
            </div>
            <div className="px-3 py-1.5 rounded-xl bg-[#0e0306] border border-amber-950 text-center">
              <div className="text-xs font-mono text-stone-400">STACK PROFILE</div>
              <div className="text-sm font-bold font-mono text-cyan-300">Full-Stack + ML</div>
            </div>
          </div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8 p-2 rounded-2xl bg-gradient-to-r from-[#170509]/80 via-[#110407]/90 to-black border border-amber-500/25">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium transition-all cursor-pointer ${
              activeTab === "all"
                ? "bg-gradient-to-r from-red-600 to-amber-600 text-white font-bold shadow-md shadow-red-950/60 border border-amber-400/40"
                : "text-stone-400 hover:text-amber-200"
            }`}
          >
            All Competencies ({allSkills.length})
          </button>

          {skillsCategories.map((cat) => (
            <button
              key={cat.title}
              onClick={() => setActiveTab(cat.title)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium transition-all cursor-pointer ${
                activeTab === cat.title
                  ? "bg-gradient-to-r from-red-600 to-amber-600 text-white font-bold shadow-md shadow-red-950/60 border border-amber-400/40"
                  : "text-stone-400 hover:text-amber-200"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Bento Grid of Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {filteredCategories.map((category, idx) => {
            const Icon = categoryIcons[idx % categoryIcons.length];
            return (
              <div
                key={category.title}
                className="rounded-2xl bg-gradient-to-br from-[#18060a]/90 via-[#130508]/85 to-[#0e0406]/95 border-2 border-amber-500/25 p-6 sm:p-7 flex flex-col justify-between hover:border-amber-400/60 hover:shadow-2xl hover:shadow-red-950/40 transition-all"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between gap-3 mb-4 pb-4 border-b border-amber-950/70">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-600 to-amber-600 border border-amber-400/60 text-white flex items-center justify-center shadow-md">
                        <Icon size={18} />
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                          {category.title}
                        </h3>
                        <p className="text-xs text-stone-400">
                          {category.description}
                        </p>
                      </div>
                    </div>

                    <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-red-950/80 text-amber-300 border border-amber-500/30">
                      {category.skills.length} Tools
                    </span>
                  </div>

                  {/* Skills Grid within Category */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {category.skills.map((skill) => {
                      const isSelected = selectedSkillName === skill.name;
                      return (
                        <div
                          key={skill.name}
                          onClick={() => setSelectedSkillName(isSelected ? null : skill.name)}
                          className={`p-3 rounded-xl transition-all cursor-pointer border ${
                            isSelected
                              ? "bg-red-950/70 border-amber-400 shadow-md shadow-red-950/50"
                              : "bg-[#0c0205] border-amber-950/80 hover:border-amber-500/40 hover:bg-[#120408]"
                          }`}
                        >
                          <div className="flex items-center justify-between gap-1 mb-1">
                            <span className="font-bold text-xs text-white">
                              {skill.name}
                            </span>
                            {skill.badge && (
                              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-red-950/90 text-amber-300 border border-amber-500/30 font-medium">
                                {skill.badge}
                              </span>
                            )}
                          </div>
                          {skill.context && (
                            <p className="text-[11px] text-stone-300 leading-snug">
                              {skill.context}
                            </p>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Footer Telemetry */}
                <div className="mt-6 pt-4 border-t border-amber-950/70 flex items-center justify-between text-xs font-mono text-stone-400">
                  <div className="flex items-center gap-1.5 text-cyan-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_5px_#38bdf8]" />
                    <span>Production Verified</span>
                  </div>
                  <span className="text-amber-400/80">Active in projects</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Engineering Protocol Banner */}
        <div className="rounded-2xl bg-gradient-to-r from-red-950/60 via-[#19060b]/70 to-[#0e0305]/90 border border-amber-500/35 p-6 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xl shadow-red-950/30">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-950/80 border border-amber-400/40 text-amber-400 flex items-center justify-center shrink-0">
              <Terminal size={20} />
            </div>
            <div>
              <div className="text-xs font-mono text-amber-300 font-bold uppercase tracking-wider">
                System Engineering Standard
              </div>
              <div className="text-sm text-stone-200 mt-0.5">
                Every tool is applied with strict type-safety, low-latency execution budgets, and clean architectural separation.
              </div>
            </div>
          </div>

          <a
            href="https://github.com/swadeshnarwariya"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-red-950/70 hover:bg-red-900/80 text-amber-300 border border-amber-500/30 font-mono text-xs font-bold transition-colors shrink-0"
          >
            <span>Review GitHub Commits</span>
            <ArrowUpRight size={14} />
          </a>
        </div>

      </div>
    </section>
  );
}
