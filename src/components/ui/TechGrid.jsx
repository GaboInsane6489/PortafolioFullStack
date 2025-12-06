import React from "react";
import { motion } from "framer-motion";
import Icon from "./Icon.jsx";

const categories = {
  Frontend: [
    { name: "React", icon: "react", color: "#61DAFB" },
    { name: "Astro", icon: "astro", color: "#BC52EE" },
    { name: "HTML5", icon: "html", color: "#E34F26" },
    { name: "CSS3", icon: "css", color: "#1572B6" },
    { name: "JavaScript", icon: "js", color: "#F7DF1E" },
    { name: "Tailwind", icon: "tailwind", color: "#38B2AC" },
  ],
  Backend: [
    { name: "Node.js", icon: "node", color: "#339933" },
    { name: "Express", icon: "express", color: "#000000" },
    { name: "MongoDB", icon: "mongodb", color: "#47A248" },
    { name: "PHP", icon: "php", color: "#777BB4" },
    { name: "Supabase", icon: "supabase", color: "#3ECF8E" },
  ],
  Tools: [
    { name: "Git", icon: "git", color: "#F05032" },
    { name: "GitHub", icon: "github", color: "#FFFFFF" },
    { name: "Vercel", icon: "vercel", color: "#FFFFFF" },
    { name: "Vite", icon: "vite", color: "#646CFF" },
  ],
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
};

export default function TechGrid() {
  return (
    <div className="w-full space-y-12">
      {Object.entries(categories).map(([category, techs], catIndex) => (
        <div key={category} className="space-y-6">
          <motion.h3
            className="text-2xl font-display font-bold text-gray-400 border-b border-gray-800 pb-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: catIndex * 0.1 }}
          >
            {category}
          </motion.h3>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {techs.map((tech, index) => (
              <motion.div
                key={tech.name}
                className="group relative bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col items-center justify-center gap-4 cursor-default overflow-hidden"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{
                  y: -5,
                  borderColor: tech.color,
                  boxShadow: `0 0 30px -10px ${tech.color}40`,
                }}
              >
                {/* Glow effect background */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
                  style={{ backgroundColor: tech.color }}
                />

                <motion.div
                  className="relative z-10 w-12 h-12 flex items-center justify-center text-white/50 group-hover:text-white transition-colors duration-300"
                  style={{ color: "inherit" }} // Allow icon to inherit color if needed
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Icon name={tech.icon} size={48} />
                </motion.div>

                <span className="relative z-10 font-bold text-lg text-white/50 group-hover:text-white transition-colors duration-300">
                  {tech.name}
                </span>

                {/* Neon bottom line */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"
                  style={{ backgroundColor: tech.color }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
