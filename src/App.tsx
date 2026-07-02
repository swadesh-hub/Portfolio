import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import BackgroundParticles from "./components/BackgroundParticles";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Journey from "./components/Journey";
import Education from "./components/Education";
import Contact from "./components/Contact";
import AdminConsole from "./components/AdminConsole";
import AIChatbot from "./components/AIChatbot";

export default function App() {
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  // Track page views and unique visitor session
  useEffect(() => {
    const trackVisitor = async () => {
      try {
        const hasSession = sessionStorage.getItem("portfolio_visitor_session");
        let isNewSession = false;

        if (!hasSession) {
          sessionStorage.setItem("portfolio_visitor_session", "active");
          isNewSession = true;
        }

        // Generate or retrieve a persistent client visitor ID
        let visitorId = localStorage.getItem("portfolio_visitor_id");
        if (!visitorId) {
          visitorId = Math.random().toString(36).substring(2, 11);
          localStorage.setItem("portfolio_visitor_id", visitorId);
        }

        await fetch("/api/stats", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ visitorId, isNewSession })
        });
      } catch (err) {
        console.error("Failed to post visitor metrics:", err);
      }
    };

    trackVisitor();

    // Check if admin token is present on initial load
    const savedToken = localStorage.getItem("portfolio_admin_token");
    if (savedToken) {
      setIsAdminLoggedIn(true);
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-[#090f1f] text-slate-100 overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Interactive Network Particles Backdrop */}
      <BackgroundParticles />

      {/* Navigation Header */}
      <Navbar
        onOpenAdmin={() => setIsAdminOpen(true)}
        isAdminLoggedIn={isAdminLoggedIn}
      />

      {/* Main Single-Screen Scroll Flow */}
      <main className="relative">
        {/* Home Banner Hero with custom typing effects */}
        <Hero />

        {/* Profile Biography and Custom IDE Code Mockup */}
        <About />

        {/* Technical Capabilities Matrix (Bento style grids) */}
        <Skills />

        {/* Curated Projects Gallery (Filterable portfolio cards) */}
        <Projects />

        {/* Vertical Milestones Journey */}
        <Journey />

        {/* Academic Credentials Layout */}
        <Education />

        {/* Dynamic validation contact gateway form */}
        <Contact />
      </main>

      {/* Premium Footer */}
      <footer className="relative z-10 py-12 px-6 border-t border-white/5 bg-slate-950/60 backdrop-blur-md text-center">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-slate-500 font-medium">
            &copy; {new Date().getFullYear()} Swadesh Narwariya. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-xs text-slate-500">
            <span>Crafted with</span>
            <span className="text-red-500 animate-[pulse_1s_infinite]">&hearts;</span>
            <span>in React & Express using Gemini 3.5</span>
          </div>
        </div>
      </footer>

      {/* Hover AI Resume Assistant Assistant Widget */}
      <AIChatbot />

      {/* Administrative Dialog Terminal Overlay */}
      <AdminConsole
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        onLoginStateChange={(loggedIn) => setIsAdminLoggedIn(loggedIn)}
      />
    </div>
  );
}
