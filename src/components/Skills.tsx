import React, { useState } from "react";
import { skillsData } from "../data";
import {
  Terminal,
  Globe,
  Cpu,
  Database,
  Server,
  Zap,
  Flame,
  Palette,
  Activity,
  GitCommit,
  Eye,
  MessageSquare,
  GitBranch,
  Cloud,
  Box,
  Briefcase,
  Layers,
  Brain,
  Wrench,
  Code,
  Sparkles,
  Award,
  BookOpen,
  FolderSync
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// Map string icon names from data to actual Lucide Icon components
const iconMap: { [key: string]: any } = {
  Terminal,
  Globe,
  Cpu,
  Database,
  Server,
  Zap,
  Flame,
  Palette,
  Activity,
  GitCommit,
  Eye,
  MessageSquare,
  GitBranch,
  Cloud,
  Container: Box,
  Briefcase,
  Layers,
  Brain,
  Wrench,
  Code
};

// Rich mapping for skill accents, taglines, and project highlights
const skillMetadata: { [key: string]: { tagline: string; highlight: string; colorClass: string; shadowClass: string } } = {
  "Python": {
    tagline: "Core ML pipelines, computer vision, data scripts",
    highlight: "Smart-Traffic & VanMitra",
    colorClass: "from-cyan-500/20 to-blue-500/5 text-cyan-400 border-cyan-500/20",
    shadowClass: "shadow-cyan-500/5"
  },
  "JavaScript": {
    tagline: "Type-safe frontends & fast server runtimes",
    highlight: "Clarity & ApnaCircle",
    colorClass: "from-amber-500/20 to-yellow-500/5 text-amber-400 border-amber-500/20",
    shadowClass: "shadow-amber-500/5"
  },
  "C / C++": {
    tagline: "Low-level structures & computer system simulations",
    highlight: "Core DSA & Algorithms",
    colorClass: "from-rose-500/20 to-red-500/5 text-rose-400 border-rose-500/20",
    shadowClass: "shadow-rose-500/5"
  },
  "SQL": {
    tagline: "Relational structures & active telemetry indexing",
    highlight: "Disaster_Sense & DBs",
    colorClass: "from-emerald-500/20 to-teal-500/5 text-emerald-400 border-emerald-500/20",
    shadowClass: "shadow-emerald-500/5"
  },
  "React.js / Next.js": {
    tagline: "High-performance modular web app rendering",
    highlight: "ApnaCircle & supercar_seller",
    colorClass: "from-cyan-500/20 to-indigo-500/5 text-cyan-400 border-cyan-500/20",
    shadowClass: "shadow-cyan-500/5"
  },
  "Django": {
    tagline: "Secure admin backends & custom database layers",
    highlight: "Disaster_Sense Engine",
    colorClass: "from-emerald-600/20 to-green-500/5 text-emerald-400 border-emerald-600/20",
    shadowClass: "shadow-emerald-500/5"
  },
  "Node.js / Express": {
    tagline: "Event-driven asynchronous backend routing",
    highlight: "Sports-Management- API",
    colorClass: "from-indigo-500/20 to-purple-500/5 text-indigo-400 border-indigo-500/20",
    shadowClass: "shadow-indigo-500/5"
  },
  "FastAPI": {
    tagline: "High-speed Python APIs & routing microservices",
    highlight: "VanMitra & Traffic System",
    colorClass: "from-teal-500/20 to-emerald-500/5 text-teal-400 border-teal-500/20",
    shadowClass: "shadow-teal-500/5"
  },
  "Tailwind CSS": {
    tagline: "Utility-first fluid layouts & custom graphics",
    highlight: "Clarity & Portfolio UI",
    colorClass: "from-sky-500/20 to-cyan-500/5 text-sky-400 border-sky-500/20",
    shadowClass: "shadow-sky-500/5"
  },
  "Machine Learning": {
    tagline: "Regression estimators & predictive valuation charts",
    highlight: "supercar_seller price model",
    colorClass: "from-purple-500/20 to-pink-500/5 text-purple-400 border-purple-500/20",
    shadowClass: "shadow-purple-500/5"
  },
  "Deep Learning / PyTorch": {
    tagline: "Neural network layers & custom backpropagation",
    highlight: "Endangered species classifiers",
    colorClass: "from-pink-500/20 to-rose-500/5 text-pink-400 border-pink-500/20",
    shadowClass: "shadow-pink-500/5"
  },
  "Computer Vision / OpenCV": {
    tagline: "Real-time object mapping & camera density feeds",
    highlight: "Smart-Traffic congestion analyzer",
    colorClass: "from-cyan-400/20 to-indigo-500/5 text-cyan-300 border-cyan-400/20",
    shadowClass: "shadow-cyan-500/5"
  },
  "NLP / Hugging Face": {
    tagline: "Cognitive text summarization & sentiment logic",
    highlight: "ApnaCircle local forum highlights",
    colorClass: "from-violet-500/20 to-indigo-500/5 text-violet-400 border-violet-500/20",
    shadowClass: "shadow-violet-500/5"
  },
  "Git & GitHub": {
    tagline: "Version coordination, team branch staging & forks",
    highlight: "GitHub repository grids",
    colorClass: "from-slate-500/20 to-zinc-500/5 text-slate-300 border-slate-500/20",
    shadowClass: "shadow-slate-500/5"
  },
  "AWS & Supabase": {
    tagline: "S3 database storage, serverless tables & triggers",
    highlight: "Production hosting setups",
    colorClass: "from-amber-500/20 to-orange-500/5 text-amber-400 border-amber-500/20",
    shadowClass: "shadow-amber-500/5"
  },
  "Docker": {
    tagline: "Containerized environments & automated runtime scaling",
    highlight: "Isolated microservice blocks",
    colorClass: "from-blue-500/20 to-sky-500/5 text-blue-400 border-blue-500/20",
    shadowClass: "shadow-blue-500/5"
  },
  "Postman / VS Code": {
    tagline: "API end-to-end telemetry testing & hot module debugs",
    highlight: "System lifecycle checks",
    colorClass: "from-indigo-500/20 to-cyan-500/5 text-indigo-400 border-indigo-500/20",
    shadowClass: "shadow-indigo-500/5"
  }
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", ...skillsData.map(c => c.title)];

  const getFilteredSkills = () => {
    if (activeCategory === "All") {
      return skillsData;
    }
    return skillsData.filter(c => c.title === activeCategory);
  };

  return (
    <section id="skills" className="py-24 relative z-10 px-6 border-t border-white/5 bg-slate-950/40">
      {/* Background radial effects */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-indigo-500/5 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-slate-400 mb-3 uppercase tracking-wider select-none">
            <Cpu size={12} className="text-cyan-400 animate-pulse" />
            Core Stack
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-400 to-indigo-400">Capabilities & Arsenal</span>
          </h2>
          <p className="max-w-xl text-sm text-slate-400 mt-2.5 leading-relaxed font-sans">
            A comprehensive matrix of languages, machine learning architectures, and modern web frameworks used to design production-ready, highly scaling applications.
          </p>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-16 bg-slate-900/40 p-1.5 rounded-2xl border border-white/5 max-w-fit mx-auto backdrop-blur-md">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all duration-300 relative cursor-pointer select-none ${
                activeCategory === cat
                  ? "text-slate-950 font-bold"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {activeCategory === cat && (
                <motion.div
                  layoutId="activeSkillTab"
                  className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-teal-400 to-indigo-400 rounded-lg shadow-md shadow-cyan-500/10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </div>

        {/* Display Stack */}
        <div className="space-y-12">
          <AnimatePresence mode="wait">
            {getFilteredSkills().map((category, catIdx) => {
              const CatIcon = iconMap[category.icon] || Wrench;

              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  {/* Category Title Header */}
                  <div className="flex items-center gap-3 border-b border-white/5 pb-4">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center border border-cyan-500/20">
                      <CatIcon size={16} />
                    </div>
                    <div>
                      <h3 className="text-lg font-display font-bold text-white tracking-wide">
                        {category.title}
                      </h3>
                    </div>
                    <span className="text-xs font-mono text-slate-500 ml-auto select-none">
                      {category.skills.length} Items
                    </span>
                  </div>

                  {/* Skills Grid for this Category */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.skills.map((skill, skillIdx) => {
                      const SkillIcon = iconMap[skill.icon] || Wrench;
                      const metadata = skillMetadata[skill.name] || {
                        tagline: "Component diagnostics, integration blocks, modular code",
                        highlight: "Various repositories",
                        colorClass: "from-slate-500/20 to-zinc-500/5 text-slate-300 border-slate-500/20",
                        shadowClass: "shadow-slate-500/5"
                      };

                      return (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: skillIdx * 0.04 }}
                          className={`p-5 rounded-2xl border bg-slate-950/60 backdrop-blur-md bg-gradient-to-br ${metadata.colorClass} ${metadata.shadowClass} flex flex-col justify-between hover:border-white/20 hover:scale-[1.01] transition-all duration-300 group`}
                        >
                          <div>
                            {/* Skill Header */}
                            <div className="flex items-center justify-between mb-3.5">
                              <div className="flex items-center gap-2.5">
                                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 text-slate-300 flex items-center justify-center group-hover:bg-white/10 group-hover:text-white transition-all duration-300">
                                  <SkillIcon size={14} className="group-hover:scale-110 transition-transform" />
                                </div>
                                <h4 className="text-sm font-semibold text-white tracking-wide">
                                  {skill.name}
                                </h4>
                              </div>
                              <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-2 py-0.5 rounded-md select-none">
                                {skill.level}%
                              </span>
                            </div>

                            {/* Tagline / Explainer */}
                            <p className="text-xs text-slate-400 font-sans leading-relaxed mb-4 min-h-[32px]">
                              {metadata.tagline}
                            </p>
                          </div>

                          {/* Used In Section & Mini Bar */}
                          <div className="space-y-3.5 border-t border-white/5 pt-3.5">
                            {/* Dynamic Micro Progress Bar */}
                            <div className="space-y-1">
                              <div className="flex justify-between text-[10px] font-mono text-slate-500 select-none">
                                <span>Proficiency Grid</span>
                                <span>Level</span>
                              </div>
                              <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                                <motion.div
                                  initial={{ width: 0 }}
                                  whileInView={{ width: `${skill.level}%` }}
                                  viewport={{ once: true }}
                                  transition={{ duration: 1 }}
                                  className="h-full bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full"
                                />
                              </div>
                            </div>

                            {/* Where it was applied link */}
                            <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-500 group-hover:text-slate-300 transition-colors">
                              <FolderSync size={11} className="text-cyan-400" />
                              <span className="font-semibold text-slate-400">Used in:</span>
                              <span className="text-slate-400 truncate">{metadata.highlight}</span>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
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
