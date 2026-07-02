import React from "react";
import { MapPin, GraduationCap, Briefcase, Terminal, Cpu, Braces, Eye, Server, Wrench } from "lucide-react";
import { motion } from "motion/react";

export default function About() {
  const highlights = [
    { icon: MapPin, text: "Indore, India", color: "text-rose-400 bg-rose-500/5 border-rose-500/10 hover:border-rose-400/30" },
    { icon: GraduationCap, text: "B.Tech CSE (2023-2027)", color: "text-cyan-400 bg-cyan-500/5 border-cyan-400/10 hover:border-cyan-400/30" },
    { icon: Briefcase, text: "Open to opportunities", color: "text-emerald-400 bg-emerald-500/5 border-emerald-500/10 hover:border-emerald-400/30" }
  ];

  const coreFocus = [
    {
      icon: Eye,
      title: "Machine Learning & CV",
      description: "Implementing real-time computer vision models (YOLOv8, PyTorch, OpenCV) to analyze high-speed video telemetry and natural habitat intrusions.",
      color: "from-cyan-500/20 to-indigo-500/5 border-cyan-500/20 text-cyan-400"
    },
    {
      icon: Server,
      title: "Full-Stack Architecture",
      description: "Developing highly responsive client dashboards (React, Next.js, Tailwind CSS) coupled with resilient API servers (FastAPI, Django, Node.js).",
      color: "from-purple-500/20 to-pink-500/5 border-purple-500/20 text-purple-400"
    },
    {
      icon: Wrench,
      title: "Developer Tools & IoT",
      description: "Building custom Chrome layout auditing utilities, performance profilers, and hardware sensor telemetry aggregations for real-world impact.",
      color: "from-emerald-500/20 to-teal-500/5 border-emerald-500/20 text-emerald-400"
    }
  ];

  return (
    <section id="about" className="py-24 relative z-10 px-6 border-t border-white/5 bg-slate-950/40">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-slate-400 mb-3 uppercase tracking-wider">
            <Terminal size={12} className="text-cyan-400" />
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Crafting Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-400 to-indigo-400">Experiences & Intelligence</span>
          </h2>
          <p className="max-w-md text-sm text-slate-400 mt-2">
            Synthesizing creative user interfaces with high-performance algorithmic engineering.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Bio Column */}
          <div className="lg:col-span-6 flex flex-col gap-6 text-slate-300">
            <h3 className="text-xl sm:text-2xl font-display font-bold text-white flex items-center gap-2">
              <Braces className="text-cyan-400" size={20} />
              Swadesh Narwariya
            </h3>
            <p className="text-lg leading-relaxed font-sans text-slate-200">
              I am a forward-looking <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 font-bold">Software Engineer and Machine Learning builder</span> focused on engineering complex full-stack architectures and high-precision computer vision tools.
            </p>
            <p className="text-base leading-relaxed text-slate-400">
              My engineering philosophy revolves around <strong>pragmatic problem solving</strong> and <strong>high-fidelity execution</strong>. I combine deep analytical skills (using Python, PyTorch, and NumPy) with contemporary front-end paradigms (React, Next.js, and Framer Motion) to deliver robust, cloud-scalable systems.
            </p>
            <p className="text-base leading-relaxed text-slate-400">
              By working consistently on challenging initiatives like intelligent traffic monitors, spatial wilderness protection platforms, and developer utility toolkits, I strive to write highly structured, clean, and secure codebases that make an impact.
            </p>

            {/* Highlights Chips */}
            <div className="flex flex-wrap gap-3.5 mt-4">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-xs hover:scale-105 transition-all duration-300 ${item.color}`}
                  >
                    <Icon size={14} />
                    <span className="font-semibold tracking-wide">{item.text}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Core Focus Area Cards Column (Replacing IDE Block) */}
          <div className="lg:col-span-6 flex flex-col gap-5">
            <h4 className="text-xs font-mono font-bold tracking-widest text-slate-500 uppercase px-1">
              Primary Domains
            </h4>
            
            <div className="grid grid-cols-1 gap-4">
              {coreFocus.map((focus, idx) => {
                const Icon = focus.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className={`p-5 rounded-2xl border bg-slate-950/60 backdrop-blur-md bg-gradient-to-br ${focus.color} flex gap-4 hover:border-white/20 transition-all duration-300 group`}
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300">
                      <Icon size={18} className="transition-transform group-hover:scale-110" />
                    </div>
                    <div>
                      <h5 className="text-sm font-semibold text-white mb-1 tracking-wide">
                        {focus.title}
                      </h5>
                      <p className="text-xs text-slate-400 leading-relaxed font-sans">
                        {focus.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
