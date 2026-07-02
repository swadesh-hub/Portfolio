import { timelineData } from "../data";
import { Route, Calendar } from "lucide-react";
import { motion } from "motion/react";

export default function Journey() {
  return (
    <section id="journey" className="py-24 relative z-10 px-6 border-t border-white/5 bg-slate-900/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-slate-400 mb-3 uppercase tracking-wider">
            <Route size={12} className="text-cyan-400" />
            My Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Developer <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Timeline</span>
          </h2>
          <p className="max-w-md text-sm text-slate-400 mt-2">
            A chronological roadmap of my academic pursuits, machine learning research, and full-stack software launches.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto mt-12">
          {/* Vertical center line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-indigo-500 to-transparent transform -translate-x-1/2 opacity-30 pointer-events-none" />

          <div className="flex flex-col gap-12">
            {timelineData.map((item, idx) => {
              const isLeft = item.side === "left";

              return (
                <div
                  key={idx}
                  className={`flex flex-col md:flex-row relative items-start md:items-center ${
                    isLeft ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {/* Glowing center indicator dot */}
                  <div className="absolute left-4 md:left-1/2 top-1.5 md:top-auto w-4.5 h-4.5 rounded-full border-2 border-slate-900 bg-gradient-to-r from-cyan-400 to-indigo-500 transform -translate-x-1/2 z-20 shadow-md shadow-cyan-500/35 animate-pulse" />

                  {/* Card wrapper */}
                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: idx * 0.05 }}
                    className={`w-full md:w-[45%] pl-10 md:pl-0 ${
                      isLeft ? "md:text-right md:pr-8" : "md:text-left md:pl-8"
                    }`}
                  >
                    <div className="bg-slate-950/40 border border-white/5 rounded-2xl p-6 backdrop-blur-md hover:border-white/10 transition-all duration-300 relative group shadow-sm hover:shadow-cyan-500/5">
                      {/* Year badge */}
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-400 text-[10px] font-bold tracking-wider font-mono mb-3">
                        <Calendar size={10} />
                        {item.year}
                      </span>

                      {/* Title */}
                      <h3 className="text-base sm:text-lg font-display font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
                        {item.description}
                      </p>

                      {/* Small subtle hover line */}
                      <div
                        className={`absolute bottom-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-indigo-500 group-hover:w-1/2 transition-all duration-500 ${
                          isLeft ? "right-0" : "left-0"
                        }`}
                      />
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
