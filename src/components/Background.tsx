import React from "react";

export default function Background() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Iron Man Deep Titanium Crimson Canvas */}
      <div className="absolute inset-0 bg-[#0c0406]" />

      {/* Arc Reactor Core Cyan & Titanium Gold Corona Glow */}
      <div 
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[850px] h-[550px] rounded-full blur-3xl opacity-30"
        style={{
          background: "radial-gradient(circle, rgba(56, 189, 248, 0.25) 0%, rgba(245, 158, 11, 0.2) 40%, rgba(185, 28, 28, 0.18) 75%, transparent 90%)"
        }}
      />

      {/* Hot Rod Red Titanium Glow (Right Side) */}
      <div 
        className="absolute top-1/4 -right-32 w-[650px] h-[650px] rounded-full blur-3xl opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(220, 38, 38, 0.25) 0%, rgba(153, 27, 27, 0.15) 50%, transparent 70%)"
        }}
      />

      {/* Polished Gold Ambient Glow (Left Side) */}
      <div 
        className="absolute bottom-20 -left-32 w-[650px] h-[650px] rounded-full blur-3xl opacity-15"
        style={{
          background: "radial-gradient(circle, rgba(245, 158, 11, 0.22) 0%, rgba(217, 119, 6, 0.12) 50%, transparent 70%)"
        }}
      />

      {/* Subtle Arc Reactor pulse in bottom right */}
      <div 
        className="absolute -bottom-20 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl opacity-10"
        style={{
          background: "radial-gradient(circle, rgba(56, 189, 248, 0.2) 0%, transparent 70%)"
        }}
      />

      {/* Subtle Tech Hexagonal/Grid Dot Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: "radial-gradient(#f59e0b 1px, transparent 1px)",
          backgroundSize: "32px 32px"
        }}
      />
    </div>
  );
}

