import React, { useState, useEffect } from "react";
import { Lock, Eye, Users, FileText, Trash2, LogOut, X, Shield, Calendar, Mail, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { ContactMessage, VisitorStats } from "../types";

interface AdminConsoleProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginStateChange: (loggedIn: boolean) => void;
}

export default function AdminConsole({ isOpen, onClose, onLoginStateChange }: AdminConsoleProps) {
  const [passcode, setPasscode] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [loading, setLoading] = useState(false);

  // Dashboard Data
  const [stats, setStats] = useState<VisitorStats | null>(null);
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [dataLoading, setDataLoading] = useState(false);

  // Check auth on open
  useEffect(() => {
    const savedToken = localStorage.getItem("portfolio_admin_token");
    if (savedToken) {
      setIsLoggedIn(true);
      onLoginStateChange(true);
      fetchDashboardData(savedToken);
    }
  }, [isOpen]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!passcode) return;

    setLoading(true);
    setLoginError("");

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ passcode })
      });

      const data = await res.json();
      if (res.ok && data.success) {
        localStorage.setItem("portfolio_admin_token", data.token);
        setIsLoggedIn(true);
        onLoginStateChange(true);
        setPasscode("");
        fetchDashboardData(data.token);
      } else {
        setLoginError(data.error || "Incorrect passcode.");
      }
    } catch (err) {
      console.error("Login failed:", err);
      setLoginError("Could not connect to authentication server.");
    } finally {
      setLoading(false);
    }
  };

  const fetchDashboardData = async (token: string) => {
    setDataLoading(true);
    try {
      // Parallel fetch for stats and messages
      const [statsRes, messagesRes] = await Promise.all([
        fetch("/api/stats", {
          headers: { Authorization: `Bearer ${token}` }
        }),
        fetch("/api/admin/messages", {
          headers: { Authorization: `Bearer ${token}` }
        })
      ]);

      if (statsRes.ok && messagesRes.ok) {
        const statsData = await statsRes.json();
        const messagesData = await messagesRes.json();
        setStats(statsData);
        setMessages(messagesData);
      } else {
        // Token might be stale
        handleLogout();
      }
    } catch (err) {
      console.error("Failed to load dashboard data:", err);
    } finally {
      setDataLoading(false);
    }
  };

  const handleDeleteMessage = async (id: string) => {
    const token = localStorage.getItem("portfolio_admin_token");
    if (!token) return;

    if (!confirm("Are you sure you want to delete this message?")) return;

    try {
      const res = await fetch(`/api/admin/messages/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` }
      });

      if (res.ok) {
        // Remove from list
        setMessages(prev => prev.filter(m => m.id !== id));
        // Update local stats submissions
        if (stats) {
          setStats(prev => prev ? { ...prev, submissions: Math.max(0, prev.submissions - 1) } : null);
        }
      } else {
        alert("Failed to delete message.");
      }
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("portfolio_admin_token");
    setIsLoggedIn(false);
    onLoginStateChange(false);
    setStats(null);
    setMessages([]);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-md" onClick={onClose} />

      {/* Main Panel */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="relative bg-slate-900 border border-white/10 rounded-2xl w-full max-w-5xl h-[85vh] flex flex-col shadow-2xl z-10 overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 p-5 bg-slate-950/40">
          <div className="flex items-center gap-2.5 text-white">
            <Shield className="text-cyan-400" size={18} />
            <h3 className="font-display font-bold text-base sm:text-lg">Administrative Terminal</h3>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-white/5 text-slate-400 hover:text-white transition-colors">
            <X size={18} />
          </button>
        </div>

        {/* Content Box */}
        <div className="flex-1 overflow-y-auto p-6 flex flex-col">
          {!isLoggedIn ? (
            /* LOGIN CONTAINER */
            <div className="flex-1 flex flex-col items-center justify-center max-w-sm mx-auto w-full">
              <div className="p-4 rounded-full bg-cyan-500/10 text-cyan-400 mb-6 border border-cyan-500/10 shadow-sm animate-pulse">
                <Lock size={32} />
              </div>
              <h4 className="text-xl font-display font-bold text-white text-center mb-1">
                Security Access Required
              </h4>
              <p className="text-xs text-slate-400 text-center mb-8 font-sans">
                Enter the portfolio passcode to access visitor stats and messages.
              </p>

              <form onSubmit={handleLogin} className="w-full flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <input
                    type="password"
                    value={passcode}
                    onChange={(e) => setPasscode(e.target.value)}
                    placeholder="Enter passcode (e.g., admin123)"
                    disabled={loading}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/10 text-white placeholder-slate-500 text-sm text-center focus:outline-none focus:border-cyan-400/40 transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 text-white text-xs font-semibold tracking-wide flex items-center justify-center gap-2 hover:from-cyan-400 hover:to-indigo-400 transition-all shadow-md active:scale-95 disabled:opacity-50"
                >
                  {loading ? "Authenticating..." : "Unlock Console"}
                </button>
                {loginError && (
                  <p className="text-xs text-red-400 text-center mt-2 font-medium">{loginError}</p>
                )}
              </form>
            </div>
          ) : (
            /* LOGGED IN DASHBOARD */
            <div className="flex flex-col gap-8 flex-1">
              {/* Top Row: Stats Counters */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-widest font-mono">
                    System Analytics
                  </h4>
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-1.5 text-xs text-red-400 hover:text-red-300 transition-colors font-medium"
                  >
                    <LogOut size={12} />
                    Disconnect Session
                  </button>
                </div>

                {dataLoading ? (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    {[1, 2, 3].map((n) => (
                      <div key={n} className="h-24 bg-white/5 border border-white/5 rounded-xl animate-pulse" />
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    {/* View Stat */}
                    <div className="p-5 rounded-xl bg-slate-950/50 border border-white/5 flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400">
                        <Eye size={20} />
                      </div>
                      <div>
                        <span className="text-xs text-slate-500 uppercase font-bold tracking-wider">Total Views</span>
                        <h5 className="text-xl font-display font-extrabold text-white mt-0.5">
                          {stats?.totalViews?.toLocaleString() || 0}
                        </h5>
                      </div>
                    </div>

                    {/* Visitors Stat */}
                    <div className="p-5 rounded-xl bg-slate-950/50 border border-white/5 flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400">
                        <Users size={20} />
                      </div>
                      <div>
                        <span className="text-xs text-slate-500 uppercase font-bold tracking-wider">Unique Visitors</span>
                        <h5 className="text-xl font-display font-extrabold text-white mt-0.5">
                          {stats?.uniqueVisitors?.toLocaleString() || 0}
                        </h5>
                      </div>
                    </div>

                    {/* Message Submissions Stat */}
                    <div className="p-5 rounded-xl bg-slate-950/50 border border-white/5 flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400">
                        <FileText size={20} />
                      </div>
                      <div>
                        <span className="text-xs text-slate-500 uppercase font-bold tracking-wider">Inquiries</span>
                        <h5 className="text-xl font-display font-extrabold text-white mt-0.5">
                          {stats?.submissions || 0}
                        </h5>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Messages Listing */}
              <div className="flex-1 flex flex-col min-h-0">
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-widest font-mono mb-4">
                  Incoming Message Queue ({messages.length})
                </h4>

                {dataLoading ? (
                  <div className="flex-1 flex items-center justify-center py-12">
                    <svg className="animate-spin h-8 w-8 text-cyan-400" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                  </div>
                ) : messages.length === 0 ? (
                  <div className="flex-1 border border-dashed border-white/5 rounded-xl flex flex-col items-center justify-center p-8 text-slate-500 text-center">
                    <MessageSquare size={24} className="mb-2 text-slate-600" />
                    <p className="text-sm">No contact form inquiries have been received yet.</p>
                  </div>
                ) : (
                  <div className="flex-1 overflow-y-auto pr-2 flex flex-col gap-4">
                    <AnimatePresence initial={false}>
                      {messages.map((msg) => (
                        <motion.div
                          key={msg.id}
                          initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                          animate={{ opacity: 1, height: "auto", marginBottom: 16 }}
                          exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                          transition={{ duration: 0.3 }}
                          className="bg-slate-950/50 border border-white/5 p-5 rounded-xl relative overflow-hidden group flex flex-col gap-3"
                        >
                          {/* Row Header */}
                          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/5 pb-3">
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="text-sm font-bold text-slate-200">{msg.name}</span>
                                <span className="text-xs text-slate-500 font-mono">({msg.email})</span>
                              </div>
                              <span className="text-xs font-semibold text-cyan-400/90 mt-0.5 block">
                                {msg.subject}
                              </span>
                            </div>

                            <div className="flex items-center gap-3">
                              <span className="text-[10px] font-mono text-slate-500 flex items-center gap-1 bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
                                <Calendar size={10} />
                                {new Date(msg.date).toLocaleDateString("en-US", {
                                  month: "short",
                                  day: "numeric",
                                  hour: "2-digit",
                                  minute: "2-digit"
                                })}
                              </span>

                              <button
                                onClick={() => handleDeleteMessage(msg.id)}
                                className="p-1.5 rounded-lg bg-red-500/10 text-red-400 border border-red-500/20 hover:bg-red-500 hover:text-white transition-all shadow-sm"
                                title="Delete inquiry"
                              >
                                <Trash2 size={13} />
                              </button>
                            </div>
                          </div>

                          {/* Message Content */}
                          <div className="text-xs sm:text-sm text-slate-400 whitespace-pre-line leading-relaxed font-sans bg-slate-900/40 p-3.5 rounded-lg border border-white/5">
                            {msg.message}
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
