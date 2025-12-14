import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import Icon from "./Icon.jsx";

// Data Structure
const techs = [
  // Frontend
  { name: "React", icon: "react", color: "#61DAFB", category: "Frontend" },
  { name: "Astro", icon: "astro", color: "#BC52EE", category: "Frontend" },
  { name: "HTML5", icon: "html", color: "#E34F26", category: "Frontend" },
  { name: "CSS3", icon: "css", color: "#1572B6", category: "Frontend" },
  { name: "JavaScript", icon: "js", color: "#F7DF1E", category: "Frontend" },
  {
    name: "Tailwind",
    icon: "tailwind",
    color: "#38B2AC",
    category: "Frontend",
  },
  // Backend
  { name: "Node.js", icon: "node", color: "#339933", category: "Backend" },
  { name: "Express", icon: "express", color: "#ffffff", category: "Backend" },
  { name: "MongoDB", icon: "mongodb", color: "#47A248", category: "Backend" },
  { name: "PHP", icon: "php", color: "#777BB4", category: "Backend" },
  { name: "Supabase", icon: "supabase", color: "#3ECF8E", category: "Backend" },
  // Tools
  { name: "Git", icon: "git", color: "#F05032", category: "Tools" },
  { name: "GitHub", icon: "github", color: "#FFFFFF", category: "Tools" },
  { name: "Vercel", icon: "vercel", color: "#FFFFFF", category: "Tools" },
  { name: "Vite", icon: "vite", color: "#646CFF", category: "Tools" },
];

const tabs = ["All", "Frontend", "Backend", "Tools"];

export default function TechGrid() {
  const [activeTab, setActiveTab] = useState("All");
  const filteredTechs =
    activeTab === "All" ? techs : techs.filter((t) => t.category === activeTab);

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Control Center Tabs */}
      <div className="flex justify-center mb-12">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-1.5 rounded-full flex gap-1 shadow-2xl shadow-purple-900/20">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                relative px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300
                ${activeTab === tab ? "text-white shadow-lg" : "text-gray-400 hover:text-white hover:bg-white/5"}
              `}
            >
              {activeTab === tab && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{tab}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <LayoutGroup>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredTechs.map((tech) => (
              <HolographicCard key={tech.name} tech={tech} />
            ))}
          </AnimatePresence>
        </motion.div>
      </LayoutGroup>
    </div>
  );
}

function HolographicCard({ tech }) {
  const ref = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Rotation logic
    const rotateXValue = ((y - centerY) / centerY) * -15; // Max 15 deg
    const rotateYValue = ((x - centerX) / centerX) * 15;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setOpacity(0);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      style={{ perspective: 1000 }}
      className="relative z-10"
    >
      <motion.div
        ref={ref}
        className="group relative bg-black/40 border border-white/10 rounded-2xl p-6 h-40 flex flex-col items-center justify-center gap-4 cursor-pointer overflow-hidden backdrop-blur-md"
        style={{
          transformStyle: "preserve-3d",
          rotateX,
          rotateY,
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Holographic Foil Shader Effect */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300"
          style={{
            opacity: opacity * 0.8,
            background: `
              linear-gradient(105deg, transparent 20%, rgba(255, 255, 255, 0.1) 40%, transparent 60%),
              linear-gradient(${rotateX}deg, rgba(255, 255, 255, 0.05), transparent)
            `,
            mixBlendMode: "overlay",
            zIndex: 20,
          }}
        />

        {/* Dynamic Glow Background */}
        <div
          className="absolute inset-0 transition-opacity duration-300"
          style={{
            opacity: opacity * 0.4,
            background: `radial-gradient(circle at center, ${tech.color}, transparent 70%)`,
            zIndex: 0,
          }}
        />

        {/* Icon with significant Parallax */}
        <motion.div
          className="relative z-30 w-14 h-14 flex items-center justify-center text-gray-300 group-hover:text-white transition-colors duration-300"
          style={{
            color: tech.color,
            transform: "translateZ(30px)",
            filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.5))",
          }}
        >
          <Icon name={tech.icon} size={56} />
        </motion.div>

        {/* Name Label */}
        <span
          className="relative z-20 font-bold text-sm md:text-base text-gray-400 group-hover:text-white transition-colors duration-300"
          style={{ transform: "translateZ(15px)" }}
        >
          {tech.name}
        </span>

        {/* Border Glow */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            zIndex: 10,
            boxShadow: `inset 0 0 20px ${tech.color}20, 0 0 20px ${tech.color}40`,
            border: `1px solid ${tech.color}60`,
          }}
        />
      </motion.div>
    </motion.div>
  );
}
