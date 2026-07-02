import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, Bot, Send, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface Message {
  text: string;
  sender: "user" | "bot";
}

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [unread, setUnread] = useState(true);
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hello! 👋 I'm Swadesh's AI Assistant. Ask me anything about his skills, projects, background, or how to contact him!",
      sender: "bot"
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, loading]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    setUnread(false);
  };

  const handleSendMessage = async (textToSend: string) => {
    const trimmed = textToSend.trim();
    if (!trimmed) return;

    // Append user message
    setMessages(prev => [...prev, { text: trimmed, sender: "user" }]);
    setInputValue("");
    setLoading(true);

    try {
      const res = await fetch("/api/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed })
      });

      if (res.ok) {
        const data = await res.json();
        setMessages(prev => [...prev, { text: data.reply, sender: "bot" }]);
      } else {
        throw new Error("Chatbot failed");
      }
    } catch (err) {
      console.error("Chatbot response error:", err);
      setMessages(prev => [
        ...prev,
        {
          text: "I am having trouble connecting to my core brain right now. Please check back shortly! 🔌",
          sender: "bot"
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage(inputValue);
    }
  };

  const promptChips = [
    { label: "Projects 🚀", prompt: "What projects did you build?" },
    { label: "Skills 🛠️", prompt: "What is your tech stack?" },
    { label: "Wildlife Guardian 🐾", prompt: "Tell me about AI Wildlife Guardian" },
    { label: "Contact 📧", prompt: "How can I contact Swadesh?" }
  ];

  // Helper to format Markdown-like strings into clean React lists/paragraphs
  const formatText = (text: string) => {
    const lines = text.split("\n");
    return lines.map((line, idx) => {
      let formattedLine = line;

      // Unordered lists starting with "- " or "* "
      const isListItem = line.trim().startsWith("- ") || line.trim().startsWith("* ");
      if (isListItem) {
        formattedLine = line.trim().substring(2);
      }

      // Format bold **text**
      const boldRegex = /\*\*(.*?)\*\*/g;
      const parts = [];
      let lastIndex = 0;
      let match;

      while ((match = boldRegex.exec(formattedLine)) !== null) {
        if (match.index > lastIndex) {
          parts.push(formattedLine.substring(lastIndex, match.index));
        }
        parts.push(<strong key={match.index} className="text-cyan-300 font-bold">{match[1]}</strong>);
        lastIndex = boldRegex.lastIndex;
      }
      if (lastIndex < formattedLine.length) {
        parts.push(formattedLine.substring(lastIndex));
      }

      const finalLine = parts.length > 0 ? parts : formattedLine;

      if (isListItem) {
        return (
          <li key={idx} className="ml-4 list-disc pl-1 mb-1 text-slate-300">
            {finalLine}
          </li>
        );
      } else if (line.trim() === "") {
        return <div key={idx} className="h-2" />;
      } else {
        return <p key={idx} className="mb-1">{finalLine}</p>;
      }
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      {/* Expanded Chatbox Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            className="w-[90vw] sm:w-[380px] h-[500px] bg-slate-900 border border-white/10 rounded-2xl flex flex-col shadow-2xl mb-4 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-slate-950 border-b border-white/10 p-4 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="relative">
                  <div className="w-9 h-9 rounded-full bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400">
                    <Bot size={18} />
                  </div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-slate-900" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5">
                    Swadesh's Assistant
                    <Sparkles size={11} className="text-cyan-400 animate-pulse" />
                  </h4>
                  <span className="text-[10px] text-slate-400 font-medium">Online | Powered by Gemini AI</span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-lg hover:bg-white/5 text-slate-400 hover:text-white transition-colors"
              >
                <X size={16} />
              </button>
            </div>

            {/* Messages body */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3.5 scrollbar-thin scrollbar-thumb-white/5 scrollbar-track-transparent">
              {messages.map((msg, index) => {
                const isBot = msg.sender === "bot";
                return (
                  <div key={index} className={`flex ${isBot ? "justify-start" : "justify-end"}`}>
                    <div
                      className={`max-w-[85%] rounded-2xl p-3.5 text-xs leading-relaxed ${
                        isBot
                          ? "bg-slate-950 text-slate-300 rounded-tl-none border border-white/5"
                          : "bg-gradient-to-br from-cyan-500 to-indigo-500 text-white rounded-tr-none shadow-md shadow-cyan-500/5"
                      }`}
                    >
                      {isBot ? formatText(msg.text) : <p>{msg.text}</p>}
                    </div>
                  </div>
                );
              })}

              {/* Typing Indicator */}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-slate-950 text-slate-300 border border-white/5 rounded-2xl rounded-tl-none p-3.5 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Prompt Chips */}
            <div className="px-4 pb-2 pt-1 flex gap-2 overflow-x-auto select-none no-scrollbar flex-shrink-0">
              {promptChips.map((chip, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(chip.prompt)}
                  className="whitespace-nowrap px-3 py-1 bg-white/5 border border-white/5 rounded-full text-[10px] font-semibold text-slate-300 hover:border-cyan-400/30 hover:bg-white/10 hover:text-white transition-all flex-shrink-0 cursor-pointer"
                >
                  {chip.label}
                </button>
              ))}
            </div>

            {/* Input fields row */}
            <div className="p-3 border-t border-white/10 bg-slate-950/40 flex items-center gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask about Swadesh's projects..."
                disabled={loading}
                className="flex-1 px-4 py-2 rounded-xl bg-slate-900 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/40 transition-colors disabled:opacity-50"
              />
              <button
                onClick={() => handleSendMessage(inputValue)}
                disabled={loading || !inputValue.trim()}
                className="p-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 hover:from-cyan-400 hover:to-indigo-400 text-white transition-all flex-shrink-0 hover:scale-105 active:scale-95 disabled:opacity-40 disabled:hover:scale-100 disabled:active:scale-100 cursor-pointer"
              >
                <Send size={14} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Trigger Button */}
      <button
        onClick={handleToggle}
        className="relative p-4 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 text-slate-950 hover:from-cyan-400 hover:to-indigo-400 hover:scale-110 active:scale-95 transition-all duration-300 shadow-lg shadow-cyan-500/25 group cursor-pointer"
        aria-label="Ask Swadesh's AI assistant"
      >
        {isOpen ? (
          <X size={20} className="text-white" />
        ) : (
          <MessageSquare size={20} className="text-white group-hover:rotate-6 transition-transform" />
        )}

        {/* Unread dot indicator */}
        {unread && !isOpen && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-4 w-4 bg-cyan-500 text-[9px] font-extrabold text-slate-950 flex items-center justify-center">
              1
            </span>
          </span>
        )}
      </button>
    </div>
  );
}
