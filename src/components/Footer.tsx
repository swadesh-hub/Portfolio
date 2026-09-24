import React from "react";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { contactInfo } from "../data";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="border-t border-amber-950/60 bg-[#0a0305] py-12 px-4 sm:px-6 lg:px-8 relative z-10 text-xs text-stone-400">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand & Title */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white text-sm">
              {contactInfo.name}
            </span>
            <span className="text-[11px] font-mono text-amber-300 px-2 py-0.5 rounded bg-red-950/80 border border-amber-500/35">
              Portfolio
            </span>
          </div>
          <p className="text-stone-400 text-xs">
            AI & Computer Vision Engineer | Full-Stack Software Developer
          </p>
        </div>

        {/* Navigation / Social Links */}
        <div className="flex items-center gap-4">
          <a
            href={contactInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-stone-400 hover:text-amber-400 hover:bg-red-950/50 transition-colors"
            title="GitHub"
            aria-label="GitHub"
          >
            <Github size={17} />
          </a>

          <a
            href={contactInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-stone-400 hover:text-amber-400 hover:bg-red-950/50 transition-colors"
            title="LinkedIn"
            aria-label="LinkedIn"
          >
            <Linkedin size={17} />
          </a>

          <a
            href={`mailto:${contactInfo.email}`}
            className="p-2 rounded-lg text-stone-400 hover:text-amber-400 hover:bg-red-950/50 transition-colors"
            title="Email"
            aria-label="Email"
          >
            <Mail size={17} />
          </a>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-950/50 hover:bg-red-900/60 text-amber-300 hover:text-amber-200 border border-amber-500/30 transition-colors cursor-pointer text-xs"
            title="Back to Top"
          >
            <ArrowUp size={13} />
            <span>Top</span>
          </button>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-amber-950/40 flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-400 text-center gap-2">
        <span>© {new Date().getFullYear()} Swadesh Narwariya. All Rights Reserved.</span>
        <span className="text-amber-400/80">Acropolis Institute of Technology & Research (2023–2027)</span>
      </div>
    </footer>
  );
}
