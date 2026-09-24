import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Menu, X, FileText, ArrowUpRight } from "lucide-react";
import { contactInfo } from "../data";

interface Props {
  onResumeClick: () => void;
}

export default function Navbar({ onResumeClick }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        scrolled
          ? "bg-[#100508]/90 backdrop-blur-md border-b border-amber-500/25 shadow-lg shadow-black/40"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand / Logo - Stark Industries Titanium & Gold feel */}
        <a href="#" className="flex items-center gap-3 group shrink-0">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-900/80 via-[#22070c] to-black border border-amber-400/60 flex items-center justify-center font-mono font-bold text-amber-300 group-hover:border-amber-300 group-hover:shadow-[0_0_12px_rgba(245,158,11,0.4)] transition-all shadow-sm text-xs">
            SN
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-stone-100 text-sm tracking-tight group-hover:text-amber-300 transition-colors flex items-center gap-1.5 whitespace-nowrap">
              {contactInfo.name}
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" title="Online" />
            </span>
            <span className="text-[10px] text-amber-400/80 font-mono whitespace-nowrap">
              AI & Full-Stack Engineer
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-stone-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-amber-400 transition-colors py-1 text-xs sm:text-sm whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Action Icons & CTA */}
        <div className="hidden sm:flex items-center gap-2.5 shrink-0">
          <button
            onClick={onResumeClick}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-950/40 hover:bg-red-900/60 text-amber-200 text-xs font-medium border border-amber-500/30 transition-all cursor-pointer whitespace-nowrap"
            title="View Resume / CV"
          >
            <FileText size={13} className="text-amber-400" />
            <span>Resume</span>
          </button>

          <a
            href={contactInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-stone-400 hover:text-amber-400 rounded-lg hover:bg-red-950/50 transition-colors"
            title="GitHub Profile"
            aria-label="GitHub Profile"
          >
            <Github size={17} />
          </a>
          <a
            href={contactInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-stone-400 hover:text-amber-400 rounded-lg hover:bg-red-950/50 transition-colors"
            title="LinkedIn Profile"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={17} />
          </a>

          {/* Hot Rod Crimson & Gold CTA */}
          <a
            href="#contact"
            className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white font-semibold text-xs transition-all shadow-md shadow-red-950/50 hover:shadow-[0_0_15px_rgba(220,38,38,0.4)] ml-1 whitespace-nowrap"
          >
            <span>Contact</span>
            <ArrowUpRight size={13} />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onResumeClick}
            className="px-2.5 py-1 rounded-md bg-red-950/50 text-amber-300 text-xs font-medium border border-amber-500/40 flex items-center gap-1"
          >
            <FileText size={12} className="text-amber-400" />
            <span>CV</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-stone-400 hover:text-amber-400 rounded-lg hover:bg-red-950/60 transition-colors cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-amber-500/20 bg-[#100508]/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md text-sm font-medium text-stone-300 hover:text-amber-300 hover:bg-red-950/50 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-red-950/80 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-stone-400 hover:text-amber-400 rounded-lg bg-red-950/40"
              >
                <Github size={17} />
              </a>
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-stone-400 hover:text-amber-400 rounded-lg bg-red-950/40"
              >
                <Linkedin size={17} />
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="p-2 text-stone-400 hover:text-amber-400 rounded-lg bg-red-950/40"
              >
                <Mail size={17} />
              </a>
            </div>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-red-600 to-amber-600 text-white font-semibold text-xs"
            >
              <span>Contact</span>
              <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
