import React, { useState } from "react";
import { Mail, MapPin, Github, Linkedin, Copy, Check, Send, ArrowUpRight, MessageSquare, Zap } from "lucide-react";
import { contactInfo } from "../data";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    // Open user's default email client with prefilled values
    const mailtoUrl = `mailto:${contactInfo.email}?subject=${encodeURIComponent(
      formState.subject || `Inquiry from ${formState.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    )}`;

    window.location.href = mailtoUrl;
    setSentSuccess(true);
    setTimeout(() => setSentSuccess(false), 5000);
  };

  return (
    <section id="contact" className="py-20 border-t border-amber-950/60 relative scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-mono font-semibold text-amber-400 tracking-wider uppercase mb-2 flex items-center gap-1.5">
            <Zap size={14} className="text-cyan-400" />
            <span>CONTACT • GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Let's Discuss Opportunities & Engineering
          </h2>
          <p className="text-stone-300 text-sm sm:text-base mt-2">
            I'm currently seeking Software Engineering and AI/Vision internships. Feel free to reach out via email, LinkedIn, or the message form below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Info & Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Email Card */}
            <div className="rounded-2xl bg-gradient-to-br from-[#18060a]/90 via-[#130508]/85 to-[#0e0406]/95 border border-amber-500/25 p-6 shadow-xl shadow-red-950/30">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-red-950/70 border border-amber-500/35 text-amber-400 flex items-center justify-center">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-xs text-amber-400/80 font-mono">Direct Email</div>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-sm sm:text-base font-semibold text-white hover:text-amber-300 transition-colors"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-3 border-t border-amber-950/60">
                <button
                  onClick={handleCopyEmail}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-red-950/40 hover:bg-red-900/60 text-stone-200 text-xs font-medium border border-amber-500/30 transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check size={14} className="text-cyan-400" />
                      <span className="text-cyan-300">Email Copied to Clipboard</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} className="text-amber-400" />
                      <span>Copy Email Address</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${contactInfo.email}`}
                  className="py-2 px-3 rounded-lg bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white text-xs font-semibold transition-all shadow-sm"
                >
                  Send Email
                </a>
              </div>
            </div>

            {/* Location & Relocation */}
            <div className="rounded-2xl bg-gradient-to-br from-[#18060a]/90 via-[#130508]/85 to-[#0e0406]/95 border border-amber-500/25 p-6 shadow-lg shadow-red-950/20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-red-950/70 border border-amber-500/35 text-amber-400 flex items-center justify-center">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-xs text-amber-400/80 font-mono">Location</div>
                  <div className="text-sm font-semibold text-white">
                    {contactInfo.location}
                  </div>
                  <div className="text-xs text-stone-400 mt-0.5">
                    Open to Remote, Hybrid, & Relocation Opportunities
                  </div>
                </div>
              </div>
            </div>

            {/* Professional Profiles */}
            <div className="rounded-2xl bg-gradient-to-br from-[#18060a]/90 via-[#130508]/85 to-[#0e0406]/95 border border-amber-500/25 p-6 space-y-3">
              <div className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-400">
                Network & Repositories
              </div>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-red-950/40 hover:bg-red-900/60 text-stone-200 hover:text-white border border-amber-500/25 transition-all flex items-center justify-between text-xs font-medium group"
                >
                  <div className="flex items-center gap-2">
                    <Github size={16} className="text-amber-400" />
                    <span>GitHub</span>
                  </div>
                  <ArrowUpRight size={13} className="text-stone-400 group-hover:text-amber-300 transition-colors" />
                </a>

                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-red-950/40 hover:bg-red-900/60 text-stone-200 hover:text-white border border-amber-500/25 transition-all flex items-center justify-between text-xs font-medium group"
                >
                  <div className="flex items-center gap-2">
                    <Linkedin size={16} className="text-amber-400" />
                    <span>LinkedIn</span>
                  </div>
                  <ArrowUpRight size={13} className="text-stone-400 group-hover:text-amber-300 transition-colors" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-gradient-to-br from-[#18060a]/90 via-[#130508]/85 to-[#0e0406]/95 border border-amber-500/25 p-6 sm:p-8 shadow-xl shadow-red-950/30">
              <div className="flex items-center gap-2 text-white font-semibold text-base mb-6">
                <MessageSquare size={18} className="text-amber-400" />
                <span>Send a Direct Inquiry</span>
              </div>

              {sentSuccess && (
                <div className="mb-6 p-4 rounded-xl bg-red-950/90 border border-amber-500/50 text-amber-200 text-xs flex items-center gap-2.5">
                  <Check size={16} className="text-cyan-400 shrink-0" />
                  <span>Email client opened with your message. Thank you for connecting!</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-amber-300/80 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0e0306] border border-amber-950 text-sm text-white placeholder:text-stone-600 focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-amber-300/80 mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0e0306] border border-amber-950 text-sm text-white placeholder:text-stone-600 focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-amber-300/80 mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Software Engineering Opportunity / Collaboration"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0e0306] border border-amber-950 text-sm text-white placeholder:text-stone-600 focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-amber-300/80 mb-1.5">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe the opportunity, technical challenge, or project details..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0e0306] border border-amber-950 text-sm text-white placeholder:text-stone-600 focus:outline-none focus:border-amber-400 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white font-bold text-sm transition-all cursor-pointer shadow-lg shadow-red-950/60 border border-amber-400/40"
                >
                  <Send size={15} />
                  <span>Send Message</span>
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
