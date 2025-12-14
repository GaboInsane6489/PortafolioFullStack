import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import { useTranslations } from "../../utils/i18n.js";

/**
 * Animated Counter Component
 */
const Counter = ({ value, suffix = "" }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
    duration: 2,
  });
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest) + suffix;
      }
    });
  }, [springValue, suffix]);

  return (
    <span
      ref={ref}
      className="font-display font-bold text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500"
    >
      0{suffix}
    </span>
  );
};

/**
 * Stats Counter Section with Tooltips
 */
export default function StatsCounter({ lang = "en" }) {
  const t = useTranslations(lang);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const stats = [
    {
      label: lang === "en" ? "Years Experience" : "Año de Experiencia",
      value: 1,
      suffix: "+",
      description:
        lang === "en"
          ? "Building scalable web applications and solutions."
          : "Construyendo aplicaciones y soluciones web escalables.",
    },
    {
      label: lang === "en" ? "Projects Completed" : "Proyectos Completados",
      value: 10,
      suffix: "+",
      description:
        lang === "en"
          ? "Delivered high-quality projects for various clients."
          : "Proyectos de alta calidad entregados a diversos clientes.",
    },
    {
      label: lang === "en" ? "Technologies Mastered" : "Tecnologías Dominadas",
      value: 15,
      suffix: "+",
      description:
        lang === "en"
          ? "Proficiency in modern stack and tools."
          : "Dominio de stacks modernos y herramientas.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 md:py-12 relative z-20">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          className="group relative bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm p-6 flex flex-col items-center justify-center text-center hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300 cursor-help"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          whileHover={{
            y: -5,
            boxShadow: "0 0 30px -10px rgba(168, 85, 247, 0.3)",
          }}
        >
          {/* Tooltip */}
          <AnimatePresence>
            {hoveredIndex === index && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.9 }}
                className="absolute -top-16 left-1/2 -translate-x-1/2 w-48 bg-black/90 border border-white/10 rounded-lg p-3 text-xs text-gray-300 shadow-xl z-50 pointer-events-none"
              >
                {stat.description}
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black/90 border-r border-b border-white/10 transform rotate-45" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Glow effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <Counter value={stat.value} suffix={stat.suffix} />
          <span className="relative z-10 mt-2 text-sm md:text-base text-gray-400 group-hover:text-gray-300 uppercase tracking-wider font-medium transition-colors">
            {stat.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
