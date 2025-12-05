import React from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiAstro,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiSupabase,
  SiMongodb,
  SiPhp,
  SiGit,
  SiGithub,
  SiVercel,
  SiPostman,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

/**
 * TechStack Component
 * Interactive technology icons with hover effects
 */

const techIcons = {
  // Frontend
  React: { icon: SiReact, color: "#61DAFB" },
  Astro: { icon: SiAstro, color: "#FF5D01" },
  HTML5: { icon: SiHtml5, color: "#E34F26" },
  CSS3: { icon: SiCss3, color: "#1572B6" },
  JavaScript: { icon: SiJavascript, color: "#F7DF1E" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#06B6D4" },
  "Framer Motion": { icon: TbBrandFramerMotion, color: "#0055FF" },

  // Backend
  "Node.js": { icon: SiNodedotjs, color: "#339933" },
  Express: { icon: SiExpress, color: "#000000" },
  Supabase: { icon: SiSupabase, color: "#3ECF8E" },
  MongoDB: { icon: SiMongodb, color: "#47A248" },
  PHP: { icon: SiPhp, color: "#777BB4" },

  // Tools & DevOps
  Git: { icon: SiGit, color: "#F05032" },
  GitHub: { icon: SiGithub, color: "#181717" },
  Vercel: { icon: SiVercel, color: "#000000" },
  Postman: { icon: SiPostman, color: "#FF6C37" },
};

export default function TechStack({ skills = [], className = "" }) {
  return (
    <div
      className={`grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 ${className}`}
    >
      {skills.map((skill, index) => {
        const tech = techIcons[skill];
        if (!tech) return null;

        const IconComponent = tech.icon;

        return (
          <motion.div
            key={skill}
            className="group flex flex-col items-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.3 }}
            whileHover={{ y: -8, scale: 1.1 }}
          >
            <div
              className="relative p-4 rounded-xl bg-white dark:bg-black border border-black/10 dark:border-white/10 transition-all duration-300 group-hover:border-black dark:group-hover:border-white group-hover:shadow-lg"
              style={{
                "--tech-color": tech.color,
              }}
            >
              <IconComponent
                className="w-8 h-8 transition-all duration-300 text-black/70 dark:text-white/70 group-hover:scale-110"
                style={{
                  color: "var(--tech-color)",
                  filter: "grayscale(0.3)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.filter = "grayscale(0)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.filter = "grayscale(0.3)";
                }}
              />
            </div>
            <span className="text-xs font-medium text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {skill}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
}
