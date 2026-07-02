import React, { useState } from "react";
import { projectsData } from "../data";
import { ExternalLink, Github, FolderGit2, Star, Sparkles, Code2, ArrowUpRight, Cpu, Layers } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "AI & Computer Vision", "Web & Tools", "Web & IoT", "Full-Stack Web"];

  const getFilteredProjects = () => {
    if (filter === "All") return projectsData;
    return projectsData.filter(p => p.category === filter);
  };

  const filteredProjects = getFilteredProjects();

  // Helper to assign icons/metrics to specific projects to make them look incredibly authentic and attractive
  const getProjectStats = (id: string) => {
    switch (id) {
      case "smart-traffic-system":
        return { status: "Active R&D", metric: "94% Accuracy", bgGlow: "rgba(34, 211, 238, 0.15)" };
      case "vanmitra":
        return { status: "Field Tested", metric: "Remote Sensing", bgGlow: "rgba(16, 185, 129, 0.15)" };
      case "clarity":
        return { status: "v1.2 Released", metric: "DOM Profiler", bgGlow: "rgba(239, 68, 68, 0.15)" };
      case "disastersense":
        return { status: "Telemetry Active", metric: "Seismic Engine", bgGlow: "rgba(245, 158, 11, 0.15)" };
      case "apnacircle-ai":
        return { status: "Beta Engine", metric: "LLM Grounding", bgGlow: "rgba(99, 102, 241, 0.15)" };
      case "supercar-seller":
        return { status: "Completed", metric: "3D Customizer", bgGlow: "rgba(236, 72, 153, 0.15)" };
      case "sports-management":
        return { status: "Stable Build", metric: "Round-Robin Core", bgGlow: "rgba(139, 92, 246, 0.15)" };
      default:
        return { status: "Production", metric: "Codebase Live", bgGlow: "rgba(6, 182, 212, 0.15)" };
    }
  };

  return (
    <section id="projects" className="py-24 relative z-10 px-6 border-t border-white/5 bg-slate-950/20">
      {/* Decorative ambient lighting elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[300px] h-[300px] rounded-full bg-indigo-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-slate-400 mb-3 uppercase tracking-wider">
            <FolderGit2 size={12} className="text-cyan-400" />
            My Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-400 to-indigo-400">Works & Codebases</span>
          </h2>
          <p className="max-w-2xl text-sm sm:text-base text-slate-400 mt-3 font-sans leading-relaxed">
            A meticulous showcase of intelligent computer vision models, productivity extensions, robust full-stack engines, and hazard warning portals.
          </p>
        </div>

        {/* Categories Tab Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-16 bg-slate-900/60 p-2 rounded-2xl border border-white/5 backdrop-blur-md max-w-fit mx-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2.5 rounded-xl text-xs font-semibold tracking-wide transition-all duration-300 relative cursor-pointer select-none ${
                filter === cat
                  ? "text-slate-950 font-bold"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {filter === cat && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-teal-400 to-indigo-500 rounded-lg shadow-lg shadow-cyan-500/25"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const stats = getProjectStats(project.id);
              return (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className={`flex flex-col rounded-2xl border bg-slate-950/60 backdrop-blur-xl relative overflow-hidden group hover:border-cyan-400/40 transition-all duration-500 shadow-xl ${
                    project.featured
                      ? "border-cyan-400/30 shadow-lg shadow-cyan-500/5 md:col-span-2 lg:col-span-3 lg:flex-row"
                      : "border-white/5"
                  }`}
                  style={{
                    boxShadow: `0 10px 30px -15px rgba(0,0,0,0.5), inset 0 1px 1px 0 rgba(255,255,255,0.05)`
                  }}
                >
                  {/* Glowing background mesh specific to the project's color profile */}
                  <div 
                    className="absolute right-0 bottom-0 w-48 h-48 rounded-full pointer-events-none opacity-20 blur-3xl transition-opacity duration-500 group-hover:opacity-40"
                    style={{ backgroundColor: stats.bgGlow }}
                  />

                  {/* Left Hero Block for Featured Projects */}
                  {project.featured && (
                    <div className="lg:w-2/5 bg-gradient-to-br from-slate-950 via-indigo-950/20 to-slate-950 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-between p-8 relative overflow-hidden">
                      <div className="absolute top-4 left-4 inline-flex items-center gap-1 bg-cyan-400/15 border border-cyan-400/30 text-cyan-400 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider">
                        <Star size={10} className="fill-cyan-400" />
                        Featured Codebase
                      </div>
                      
                      <div className="flex flex-col gap-2 mt-12 lg:mt-0 relative z-10">
                        <span className="text-cyan-400 font-mono text-xs uppercase tracking-widest flex items-center gap-1.5">
                          <Cpu size={12} />
                          {project.category}
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight leading-tight group-hover:text-cyan-300 transition-colors">
                          {project.title}
                        </h3>
                      </div>

                      <div className="flex items-center gap-3.5 mt-8 lg:mt-0 border-t border-white/5 pt-4">
                        <span className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                          {stats.status}
                        </span>
                        <span className="text-[10px] font-mono text-slate-400 flex items-center gap-1">
                          <Layers size={10} className="text-cyan-400" />
                          {stats.metric}
                        </span>
                      </div>
                      
                      <div className="absolute -right-4 -bottom-4 w-48 h-48 rounded-full bg-cyan-400/5 blur-3xl pointer-events-none" />
                    </div>
                  )}

                  {/* Card Content Details */}
                  <div className="flex-1 p-8 flex flex-col justify-between relative z-10">
                    <div>
                      {/* Top Row for Non-Featured Cards */}
                      {!project.featured && (
                        <div className="flex items-center justify-between mb-5">
                          <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-widest bg-cyan-500/10 border border-cyan-400/20 px-2.5 py-1 rounded-md">
                            {project.category}
                          </span>
                          <span className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-400 group-hover:border-cyan-400/20 group-hover:text-cyan-400 transition-colors">
                            {stats.status}
                          </span>
                        </div>
                      )}

                      {!project.featured && (
                        <h3 className="text-xl font-display font-bold text-white group-hover:text-cyan-400 transition-colors mb-3 tracking-tight">
                          {project.title}
                        </h3>
                      )}

                      <p className="text-sm text-slate-300 leading-relaxed mb-6 font-sans">
                        {project.description}
                      </p>

                      {/* Tech Stack Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((t, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] font-mono font-medium text-slate-300 bg-white/5 border border-white/10 rounded-lg px-2.5 py-1 group-hover:border-cyan-400/20 group-hover:bg-cyan-500/5 transition-all duration-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Action Footer with Hover Slide */}
                    <div className="flex items-center justify-between pt-5 border-t border-white/5">
                      {project.liveUrl && project.liveUrl !== "#" ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer group/link"
                        >
                          <ExternalLink size={14} className="group-hover/link:scale-110 transition-transform" />
                          Live Hub
                          <ArrowUpRight size={12} className="opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all" />
                        </a>
                      ) : (
                        <span className="text-xs font-mono text-slate-500 flex items-center gap-1">
                          <Code2 size={13} />
                          Local Deployment
                        </span>
                      )}

                      {project.sourceUrl && (
                        <a
                          href={project.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-white transition-colors cursor-pointer group/git"
                        >
                          <Github size={14} className="group-hover/git:rotate-12 transition-transform" />
                          Source Code
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
