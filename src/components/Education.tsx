import { educationData } from "../data";
import { GraduationCap, Award, BookOpen, Calendar, MapPin } from "lucide-react";
import { motion } from "motion/react";

const iconMap: { [key: string]: any } = {
  Award,
  BookOpen
};

export default function Education() {
  return (
    <section id="education" className="py-24 relative z-10 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-slate-400 mb-3 uppercase tracking-wider">
            <GraduationCap size={12} className="text-cyan-400" />
            Academia
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Academic <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Credentials</span>
          </h2>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {educationData.map((edu, idx) => {
            const Icon = iconMap[edu.icon] || GraduationCap;

            return (
              <motion.div
                key={idx}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-slate-950/40 border border-white/5 rounded-2xl p-8 backdrop-blur-md relative overflow-hidden group hover:border-cyan-400/30 hover:bg-slate-950/60 transition-all duration-500"
              >
                {/* Icon indicator top left */}
                <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-400 w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={24} />
                </div>

                {/* Degree Title */}
                <h3 className="text-xl font-display font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                  {edu.degree}
                </h3>

                {/* Field of study */}
                <h4 className="text-sm font-medium text-slate-300 mb-4">{edu.field}</h4>

                {/* Details layout items */}
                <div className="flex flex-col gap-2 mb-6 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <MapPin size={12} className="text-indigo-400" />
                    <span>{edu.institution} — {edu.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={12} className="text-indigo-400" />
                    <span>{edu.year}</span>
                  </div>
                </div>

                {/* Paragraph details */}
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans mb-4">
                  {edu.details}
                </p>

                {/* Grade score display if present */}
                {edu.grade && (
                  <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-400">Academic Score:</span>
                    <span className="px-3 py-1 rounded-md bg-emerald-500/15 text-emerald-400 text-xs font-mono font-bold border border-emerald-500/20 shadow-sm shadow-emerald-500/5">
                      {edu.grade}
                    </span>
                  </div>
                )}

                {/* Visual back glow */}
                <div className="absolute right-0 bottom-0 w-32 h-32 rounded-full bg-indigo-500/5 blur-3xl pointer-events-none group-hover:bg-indigo-500/10 transition-colors" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
