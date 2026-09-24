import React, { useState, useMemo } from "react";
import { Github, ExternalLink, ArrowUpRight, Layers, Cpu, CheckCircle, X, ChevronRight, Zap, Search, LayoutGrid, Sliders, Activity, Terminal } from "lucide-react";
import { projectsData } from "../data";
import { Project, ProjectCategory } from "../types";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"inspector" | "grid">("inspector");
  const [selectedProjectId, setSelectedProjectId] = useState<string>(projectsData[0].id);
  const [modalProject, setModalProject] = useState<Project | null>(null);

  const categories: ProjectCategory[] = [
    "All",
    "AI & Computer Vision",
    "Full-Stack Web",
    "Developer Tools"
  ];

  const filteredProjects = useMemo(() => {
    return projectsData.filter((p) => {
      const matchesCategory = activeCategory === "All" || p.category === activeCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        p.title.toLowerCase().includes(query) ||
        p.tagline.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.tech.some((t) => t.toLowerCase().includes(query));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Ensure active selected project is valid in filtered list, or fallback to first
  const activeProject = useMemo(() => {
    const found = filteredProjects.find((p) => p.id === selectedProjectId);
    return found || filteredProjects[0] || projectsData[0];
  }, [filteredProjects, selectedProjectId]);

  return (
    <section id="projects" className="py-20 border-t border-amber-950/60 relative scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-mono font-semibold text-amber-400 tracking-wider uppercase mb-2 flex items-center gap-1.5">
              <Zap size={14} className="text-cyan-400" />
              <span>PROJECTS • FEATURED WORK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Featured Projects & Engineered Systems
            </h2>
            <p className="text-stone-300 text-sm sm:text-base mt-2">
              Production-grade computer vision pipelines, full-stack microservice backends, and performance developer tooling.
            </p>
          </div>

          {/* View Mode Switcher */}
          <div className="flex items-center gap-2">
            <div className="flex items-center p-1 rounded-xl bg-black/60 border border-amber-500/25">
              <button
                onClick={() => setViewMode("inspector")}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                  viewMode === "inspector"
                    ? "bg-gradient-to-r from-red-600 to-amber-600 text-white font-bold shadow-sm"
                    : "text-stone-400 hover:text-stone-200"
                }`}
                title="Interactive Console & Pipeline Inspector"
              >
                <Sliders size={13} />
                <span>Inspector Mode</span>
              </button>

              <button
                onClick={() => setViewMode("grid")}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                  viewMode === "grid"
                    ? "bg-gradient-to-r from-red-600 to-amber-600 text-white font-bold shadow-sm"
                    : "text-stone-400 hover:text-stone-200"
                }`}
                title="Bento Grid View"
              >
                <LayoutGrid size={13} />
                <span>Bento Grid</span>
              </button>
            </div>
          </div>
        </div>

        {/* Filter Controls & Live Search Bar */}
        <div className="mb-8 p-4 rounded-2xl bg-gradient-to-r from-[#170509]/80 via-[#110407]/90 to-black border border-amber-500/25 flex flex-col md:flex-row items-center justify-between gap-4 shadow-lg shadow-red-950/20">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 text-white font-bold shadow-sm border border-amber-400/40"
                    : "text-stone-400 hover:text-amber-200 hover:bg-red-950/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-500" />
            <input
              type="text"
              placeholder="Search tech, title, or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3.5 py-1.5 rounded-xl bg-[#090204] border border-amber-950 text-xs text-white placeholder:text-stone-600 focus:outline-none focus:border-amber-400 transition-colors font-mono"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-500 hover:text-stone-300 text-xs"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Empty Search State */}
        {filteredProjects.length === 0 && (
          <div className="p-12 text-center rounded-2xl bg-red-950/20 border border-amber-950">
            <Terminal size={32} className="mx-auto text-amber-500 mb-3" />
            <h3 className="text-base font-bold text-white mb-1">No Matching Systems Found</h3>
            <p className="text-xs text-stone-400 mb-4">Try adjusting your search query or switching domain filter.</p>
            <button
              onClick={() => {
                setActiveCategory("All");
                setSearchQuery("");
              }}
              className="px-4 py-2 rounded-xl bg-red-950/60 hover:bg-red-900/80 text-amber-300 text-xs font-mono border border-amber-500/30"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* 1. INSPECTOR MODE (High-Tech Interactive Console) */}
        {viewMode === "inspector" && filteredProjects.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left System Selector List (5 cols) */}
            <div className="lg:col-span-5 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-amber-400 mb-1 px-1">
                <span>PROJECT INDEX ({filteredProjects.length})</span>
                <span className="text-stone-400">SELECT TO INSPECT</span>
              </div>

              <div className="space-y-2.5 max-h-[640px] overflow-y-auto pr-1">
                {filteredProjects.map((project) => {
                  const isSelected = project.id === activeProject.id;
                  return (
                    <button
                      key={project.id}
                      onClick={() => setSelectedProjectId(project.id)}
                      className={`w-full text-left p-4 rounded-xl transition-all cursor-pointer border flex flex-col justify-between ${
                        isSelected
                          ? "bg-gradient-to-r from-red-950/95 via-[#1e070c]/90 to-[#120508]/90 border-amber-400/80 shadow-lg shadow-red-950/50 -translate-y-0.5"
                          : "bg-[#140508]/65 hover:bg-[#18060a]/80 border-amber-500/20 text-stone-300 hover:border-amber-500/40"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2 mb-1.5">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-red-950/80 text-amber-300 border border-amber-500/30">
                          {project.category}
                        </span>
                        {isSelected && (
                          <span className="flex items-center gap-1 text-[11px] font-mono text-cyan-300 font-semibold">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#38bdf8]" />
                            <span>ACTIVE</span>
                          </span>
                        )}
                      </div>

                      <h3
                        className={`text-sm font-bold tracking-tight mb-1 ${
                          isSelected ? "text-white font-extrabold" : "text-stone-200"
                        }`}
                      >
                        {project.title}
                      </h3>

                      <p className="text-xs text-stone-400 line-clamp-1 mb-2">
                        {project.tagline}
                      </p>

                      <div className="flex flex-wrap gap-1 font-mono text-[10px]">
                        {project.tech.slice(0, 4).map((t) => (
                          <span
                            key={t}
                            className="px-1.5 py-0.5 rounded bg-red-950/40 text-amber-200/80 border border-amber-500/20"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right System Deep-Dive Console (7 cols) */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl bg-gradient-to-br from-[#1c060b]/95 via-[#130508]/90 to-[#0c0305]/95 border-2 border-amber-400/60 p-6 sm:p-8 shadow-2xl shadow-red-950/40 relative">
                
                {/* Header Bar */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-4 border-b border-amber-950/70">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-red-950/90 text-amber-300 border border-amber-500/40 font-semibold">
                        {activeProject.category}
                      </span>
                      {activeProject.featured && (
                        <span className="text-[10px] font-mono text-cyan-300 uppercase tracking-wider flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                          <span>Key Architecture</span>
                        </span>
                      )}
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                      {activeProject.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-amber-300 font-medium mt-1">
                      {activeProject.tagline}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <a
                      href={activeProject.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white font-bold text-xs transition-all shadow-md shadow-red-950/60 border border-amber-400/40"
                    >
                      <Github size={15} />
                      <span>Code Repository</span>
                    </a>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed mb-6">
                  {activeProject.description}
                </p>

                {/* Architecture Pipeline Flow Diagram */}
                {activeProject.architecture && (
                  <div className="mb-6 p-4 rounded-xl bg-[#090204] border border-amber-950">
                    <div className="text-xs font-mono font-semibold text-amber-400 mb-2 flex items-center gap-1.5">
                      <Activity size={14} className="text-cyan-400" />
                      <span>SYSTEM ARCHITECTURE & INFERENCE FLOW</span>
                    </div>
                    <div className="p-3 rounded-lg bg-red-950/40 border border-amber-500/25 text-xs font-mono text-stone-200 leading-relaxed overflow-x-auto">
                      {activeProject.architecture}
                    </div>
                  </div>
                )}

                {/* Key Performance & Benchmark Metrics */}
                {activeProject.keyMetrics && activeProject.keyMetrics.length > 0 && (
                  <div className="mb-6">
                    <div className="text-xs font-mono font-semibold text-amber-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                      <Zap size={13} className="text-cyan-400" />
                      <span>Verified Performance Metrics</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      {activeProject.keyMetrics.map((metric, idx) => (
                        <div
                          key={idx}
                          className="p-2.5 rounded-xl bg-[#0e0306] border border-amber-950/80 flex items-start gap-2 text-xs text-stone-200 font-mono"
                        >
                          <CheckCircle size={14} className="text-cyan-400 shrink-0 mt-0.5" />
                          <span className="leading-snug">{metric}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Engineering Highlights */}
                <div className="mb-6">
                  <div className="text-xs font-mono font-semibold text-amber-400 uppercase tracking-wider mb-2.5">
                    Engineering Highlights & Innovations
                  </div>
                  <ul className="space-y-2 text-xs text-stone-300">
                    {activeProject.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2">
                        <span className="text-amber-400 font-bold mt-0.5">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="pt-4 border-t border-amber-950/70 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {activeProject.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-red-950/60 text-amber-200 border border-amber-500/30"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href={activeProject.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1"
                  >
                    <span>Inspect GitHub Commits</span>
                    <ArrowUpRight size={13} />
                  </a>
                </div>

              </div>
            </div>

          </div>
        )}

        {/* 2. BENTO GRID MODE (Dense simultaneous catalog) */}
        {viewMode === "grid" && filteredProjects.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="rounded-2xl bg-gradient-to-br from-[#18060a]/90 via-[#130508]/85 to-[#0e0406]/95 border border-amber-500/25 hover:border-amber-400/60 p-6 flex flex-col justify-between transition-all group hover:shadow-xl hover:shadow-red-950/40 hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-red-950/70 text-amber-300 border border-amber-500/30">
                      {project.category}
                    </span>
                    <a
                      href={project.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 text-stone-400 hover:text-amber-300 rounded-lg hover:bg-red-950/60 transition-colors"
                      title="GitHub"
                    >
                      <Github size={15} />
                    </a>
                  </div>

                  <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-amber-300 transition-colors mb-1.5">
                    {project.title}
                  </h3>

                  <p className="text-xs text-amber-200/90 font-medium mb-3 leading-snug">
                    {project.tagline}
                  </p>

                  <p className="text-xs text-stone-300 leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {project.keyMetrics && project.keyMetrics[0] && (
                    <div className="mb-4 p-2 rounded-lg bg-[#0a0204] border border-amber-950 text-[11px] text-stone-300 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#38bdf8] shrink-0" />
                      <span className="truncate">{project.keyMetrics[0]}</span>
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-amber-950/60 flex flex-col gap-3">
                  <div className="flex flex-wrap gap-1 font-mono text-[10px]">
                    {project.tech.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="px-1.5 py-0.5 rounded bg-red-950/40 text-amber-200 border border-amber-900/40"
                      >
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-1.5 py-0.5 rounded text-stone-500">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <button
                      onClick={() => setModalProject(project)}
                      className="text-xs text-stone-300 hover:text-amber-300 font-medium inline-flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      <span>Deep Dive</span>
                      <ChevronRight size={13} className="text-amber-400" />
                    </button>

                    <a
                      href={project.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-amber-400 hover:text-amber-300 font-medium inline-flex items-center gap-1"
                    >
                      <span>GitHub</span>
                      <ArrowUpRight size={13} />
                    </a>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

        {/* Modal for Grid Mode deep dive */}
        {modalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-150">
            <div className="relative w-full max-w-2xl bg-gradient-to-br from-[#1c080d] via-[#140509] to-[#0d0305] border-2 border-amber-400/70 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-red-950/60 overflow-y-auto max-h-[90vh]">
              <button
                onClick={() => setModalProject(null)}
                className="absolute top-5 right-5 p-2 rounded-lg text-stone-400 hover:text-white hover:bg-red-950/60 transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>

              <div className="mb-4 pr-8">
                <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-red-950/80 text-amber-300 border border-amber-500/40 mb-2 inline-block">
                  {modalProject.category}
                </span>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  {modalProject.title}
                </h3>
                <p className="text-xs sm:text-sm text-amber-300 font-medium mt-1">
                  {modalProject.tagline}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed mb-5">
                {modalProject.description}
              </p>

              {modalProject.architecture && (
                <div className="mb-5 p-3.5 rounded-xl bg-[#090204] border border-amber-950">
                  <div className="text-xs font-mono font-semibold text-amber-400 mb-1.5 flex items-center gap-1.5">
                    <Activity size={14} className="text-cyan-400" />
                    <span>Pipeline Architecture</span>
                  </div>
                  <div className="text-xs font-mono text-stone-200 bg-red-950/40 p-2.5 rounded-lg border border-amber-500/20 overflow-x-auto">
                    {modalProject.architecture}
                  </div>
                </div>
              )}

              <div className="flex items-center gap-3 pt-4 border-t border-amber-950/60">
                <a
                  href={modalProject.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white font-bold text-xs"
                >
                  <Github size={15} />
                  <span>View Repository on GitHub</span>
                </a>
                <button
                  onClick={() => setModalProject(null)}
                  className="px-4 py-2.5 rounded-xl bg-red-950/40 text-stone-300 text-xs font-medium border border-amber-500/30 cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
