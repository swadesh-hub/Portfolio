import React from "react";
import { Briefcase, Calendar, MapPin, CheckCircle2, Zap } from "lucide-react";
import { timelineData } from "../data";

export default function Journey() {
  return (
    <section id="experience" className="py-20 border-t border-amber-950/60 relative scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-mono font-semibold text-amber-400 tracking-wider uppercase mb-2 flex items-center gap-1.5">
            <Zap size={14} className="text-cyan-400" />
            <span>EXPERIENCE • WORK & MILESTONES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Experience & Engineering Milestones
          </h2>
          <p className="text-stone-300 text-sm sm:text-base mt-2">
            Professional trajectory in computer vision development, full-stack implementations, and software engineering.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l border-amber-900/40 ml-4 sm:ml-8 space-y-12">
          {timelineData.map((item, idx) => (
            <div key={idx} className="relative pl-6 sm:pl-8 group">
              
              {/* Arc Reactor Glowing Bullet Node */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-red-950 border-2 border-amber-400 flex items-center justify-center group-hover:scale-125 transition-transform shadow-[0_0_8px_rgba(245,158,11,0.5)]">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#38bdf8]" />
              </div>

              {/* Card Container */}
              <div className="rounded-xl bg-gradient-to-br from-[#18060a]/90 via-[#130508]/85 to-[#0e0406]/95 border border-amber-500/25 p-6 hover:border-amber-400/50 hover:shadow-xl hover:shadow-red-950/40 transition-all">
                
                {/* Header Meta */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-semibold">
                    <Calendar size={13} />
                    <span>{item.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-stone-400 font-mono">
                    <MapPin size={12} className="text-amber-500/80" />
                    <span>{item.location}</span>
                  </div>
                </div>

                {/* Role and Organization */}
                <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-amber-200 transition-colors">
                  {item.role}
                </h3>
                <div className="text-xs font-medium text-amber-300/80 mb-3">
                  {item.organization}
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Key Bullet Highlights */}
                <div className="space-y-2 mb-4">
                  {item.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-stone-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_5px_#38bdf8] shrink-0 mt-1.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Badges */}
                <div className="pt-3 border-t border-amber-950/60 flex flex-wrap gap-1.5">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-red-950/50 text-amber-200 border border-amber-500/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
