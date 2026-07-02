import React, { useEffect, useState } from "react";
import { ArrowRight, Mail, Code, Star, Cpu } from "lucide-react";
import { motion } from "motion/react";

export default function Hero() {
  // Typing animation state
  const roles = ["Data Scientist", "Full-Stack Developer", "AI Enthusiast", "Machine Learning Engineer"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const [speed, setSpeed] = useState(100);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timer: NodeJS.Timeout;

    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayedText(currentRole.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
        setSpeed(50);
      }, speed);
    } else {
      timer = setTimeout(() => {
        setDisplayedText(currentRole.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
        setSpeed(150);
      }, speed);
    }

    if (!isDeleting && charIndex === currentRole.length) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 2000); // Wait at the end
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex(prev => (prev + 1) % roles.length);
      setSpeed(500); // Wait before typing next
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  // Statistics state
  const statsList = [
    { target: 10, label: "Projects Completed", icon: Code },
    { target: 8, label: "Tech Stacks Mastered", icon: Cpu },
    { target: 3, label: "Years of Coding", icon: Star }
  ];

  const [counts, setCounts] = useState(statsList.map(() => 0));

  useEffect(() => {
    const intervals = statsList.map((stat, idx) => {
      let current = 0;
      const step = stat.target / 100;
      const timer = setInterval(() => {
        current += step;
        if (current >= stat.target) {
          current = stat.target;
          clearInterval(timer);
        }
        setCounts(prev => {
          const next = [...prev];
          next[idx] = Math.ceil(current);
          return next;
        });
      }, 20);
      return timer;
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offset = 80;
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-16 relative z-10 px-6">
      <div className="max-w-4xl w-full text-center flex flex-col items-center">
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-400 text-xs font-semibold tracking-wide mb-8 shadow-sm backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          Welcome to my digital space
        </motion.div>

        {/* Profile Image with Pulsing Ring Glow */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="relative w-36 h-36 mb-8 group"
        >
          <div className="absolute inset-0 rounded-full bg-radial-[circle_at_center,rgba(0,242,254,0.3)_0%,rgba(79,70,229,0)_70%] blur-md group-hover:scale-110 transition-transform duration-500" />
          <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 animate-[spin_8s_linear_infinite] opacity-75 blur-[2px] group-hover:opacity-100 transition-opacity" />
          <div className="relative w-full h-full rounded-full border-2 border-slate-900 bg-slate-950 p-1 overflow-hidden">
            <img
              src="/my_photo.png"
              alt="Swadesh Narwariya"
              className="w-full h-full rounded-full object-cover transition-transform duration-500 group-hover:scale-105"
              onError={(e) => {
                // Fail-safe placeholder if custom photo doesn't load
                e.currentTarget.src = "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&auto=format&fit=crop&q=80";
              }}
            />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl font-display font-extrabold text-white tracking-tight mb-4"
        >
          Swadesh <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Narwariya</span>
        </motion.h1>

        {/* Typing Roles */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="h-8 mb-6 font-mono text-lg sm:text-2xl text-slate-300"
        >
          <span>I'm a </span>
          <span className="text-cyan-400 font-semibold">{displayedText}</span>
          <span className="text-cyan-400 animate-[pulse_1s_infinite]">|</span>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-xl text-base sm:text-lg text-slate-400 mb-10 leading-relaxed font-sans"
        >
          Building impactful digital solutions with AI, Data Science & Modern Web Technologies
        </motion.p>

        {/* CTA Actions */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-16"
        >
          <a
            href="#projects"
            onClick={(e) => handleCtaClick(e, "#projects")}
            className="group relative flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 hover:from-cyan-400 hover:to-indigo-400 text-white font-medium text-sm transition-all shadow-md shadow-cyan-500/15"
          >
            Explore My Work
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            onClick={(e) => handleCtaClick(e, "#contact")}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white font-medium text-sm transition-all backdrop-blur-sm"
          >
            <Mail size={16} />
            Get In Touch
          </a>
        </motion.div>

        {/* Animated Counter Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full grid grid-cols-3 max-w-2xl bg-white/5 border border-white/5 rounded-2xl py-6 px-4 backdrop-blur-md"
        >
          {statsList.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <div key={idx} className="flex flex-col items-center border-r last:border-r-0 border-white/10 px-2">
                <div className="flex items-center gap-1.5 text-cyan-400 mb-1">
                  <IconComponent size={16} className="text-indigo-400" />
                  <span className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                    {counts[idx]}+
                  </span>
                </div>
                <span className="text-[10px] sm:text-xs text-slate-400 text-center font-medium leading-tight">
                  {stat.label}
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
