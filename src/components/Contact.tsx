import React, { useState } from "react";
import { Mail, MapPin, Clock, Send, Github, Linkedin, Twitter, Check, AlertTriangle } from "lucide-react";
import { motion } from "motion/react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setErrorMessage("Please fill out all fields.");
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setErrorMessage(data.error || "Something went wrong.");
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch (err) {
      console.error("Error sending contact message:", err);
      setErrorMessage("Could not connect to the server. Please try again.");
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const contactCards = [
    { icon: Mail, title: "Email Address", detail: "swadeshnarwariya66@gmail.com", actionUrl: "mailto:swadeshnarwariya66@gmail.com" },
    { icon: MapPin, title: "Based In", detail: "Indore, Madhya Pradesh, India", actionUrl: "https://maps.google.com/?q=Indore" },
    { icon: Clock, title: "Current Status", detail: "Open for Internships & Freelance", actionUrl: "#" }
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", url: "https://github.com/swadeshnarwariya" },
    { icon: Linkedin, label: "LinkedIn", url: "https://www.linkedin.com/in/swadesh-narwariya" },
    { icon: Twitter, label: "Twitter", url: "https://twitter.com/swadesh" }
  ];

  return (
    <section id="contact" className="py-24 relative z-10 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-slate-400 mb-3 uppercase tracking-wider">
            <Mail size={12} className="text-cyan-400" />
            Connect
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Connect</span>
          </h2>
          <p className="max-w-md text-sm text-slate-400 mt-2">
            Have an interesting project in mind or an internship opportunity? Reach out!
          </p>
        </div>

        {/* Outer wrapper */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          {/* Info cards left side */}
          <div className="lg:col-span-5 flex flex-col gap-6 w-full">
            {contactCards.map((card, idx) => {
              const CardIcon = card.icon;
              return (
                <a
                  key={idx}
                  href={card.actionUrl}
                  target={card.actionUrl !== "#" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 p-5 rounded-2xl bg-slate-950/40 border border-white/5 backdrop-blur-md hover:border-cyan-400/30 hover:bg-slate-950/60 transition-all duration-300 group"
                >
                  <div className="p-3.5 rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                    <CardIcon size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-1">
                      {card.title}
                    </h4>
                    <p className="text-sm font-medium text-slate-200 group-hover:text-cyan-400 transition-colors">
                      {card.detail}
                    </p>
                  </div>
                </a>
              );
            })}

            {/* Social Channels Row */}
            <div className="flex items-center gap-4 mt-4 justify-center lg:justify-start">
              {socialLinks.map((social, idx) => {
                const SocialIcon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-cyan-400/30 hover:bg-white/10 transition-all duration-300"
                    title={social.label}
                  >
                    <SocialIcon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Contact form right side */}
          <div className="lg:col-span-7 w-full bg-slate-950/40 border border-white/5 rounded-2xl p-8 backdrop-blur-md relative overflow-hidden">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 relative z-10">
              {/* Form group row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    disabled={status === "sending"}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400/40 transition-colors disabled:opacity-50"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    disabled={status === "sending"}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400/40 transition-colors disabled:opacity-50"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Collaboration"
                  disabled={status === "sending"}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400/40 transition-colors disabled:opacity-50"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell me about your vision..."
                  disabled={status === "sending"}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400/40 transition-colors disabled:opacity-50 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "sending" || status === "success"}
                className={`w-full py-3.5 rounded-xl text-sm font-semibold tracking-wide flex items-center justify-center gap-2 transition-all duration-300 relative overflow-hidden ${
                  status === "success"
                    ? "bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/10"
                    : "bg-gradient-to-r from-cyan-500 to-indigo-500 hover:from-cyan-400 hover:to-indigo-400 text-white shadow-md shadow-cyan-500/10 active:scale-95"
                }`}
              >
                {status === "sending" ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Recording details...
                  </>
                ) : status === "success" ? (
                  <>
                    <Check size={18} />
                    Message Sent Successfully!
                  </>
                ) : (
                  <>
                    <Send size={15} />
                    Send Message
                  </>
                )}
              </button>

              {/* Status messages banner */}
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-3 rounded-xl bg-red-500/15 border border-red-500/30 text-xs text-red-400 mt-2"
                >
                  <AlertTriangle size={14} className="flex-shrink-0" />
                  <span>{errorMessage}</span>
                </motion.div>
              )}
            </form>

            {/* Visual back glow */}
            <div className="absolute left-1/2 bottom-0 w-32 h-32 rounded-full bg-cyan-400/5 blur-3xl pointer-events-none transform -translate-x-1/2" />
          </div>
        </div>
      </div>
    </section>
  );
}
