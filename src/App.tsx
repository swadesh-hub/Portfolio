import React, { useState } from "react";
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Journey from "./components/Journey";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ResumeModal from "./components/ResumeModal";

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0c0406] text-stone-100 relative selection:bg-amber-400 selection:text-red-950 font-sans">
      {/* Iron Man Ambient Glow & Subtle Tech Grid */}
      <Background />

      {/* Fixed Sticky Header Navigation */}
      <Navbar onResumeClick={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main className="relative z-10 flex flex-col">
        <Hero onResumeClick={() => setIsResumeOpen(true)} />
        <About />
        <Projects />
        <Skills />
        <Journey />
        <Education />
        <Contact />
      </main>

      {/* Professional Footer */}
      <Footer />

      {/* Interactive Resume Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </div>
  );
}
