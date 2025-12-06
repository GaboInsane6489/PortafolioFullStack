import React, { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useTranslations } from "../../utils/i18n.js";

/**
 * Animated Counter Component
 * Counts up from 0 to a target value
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
import React, { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useTranslations } from "../../utils/i18n.js";

/**
 * Animated Counter Component
 * Counts up from 0 to a target value
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

  return <span ref={ref} className="font-display font-bold text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">0{suffix}</span>;
};

/**
 * Stats Counter Section
 * Displays animated statistics in a responsive grid
 */
export default function StatsCounter({ lang = "en" }) {
  const t = useTranslations(lang);
  
  const stats = [
    {
      label: lang === "en" ? "Years Experience" : "Año de Experiencia",
      value: 1,
      suffix: "+"
    },
    {
      label: lang === "en" ? "Projects Completed" : "Proyectos Completados",
      value: 10,
      suffix: "+"
    },
    {
      label: lang === "en" ? "Technologies Mastered" : "Tecnologías Dominadas",
      value: 15,
      suffix: "+"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 md:py-12">
      {stats.map((stat, index) => (
        <motion.div 
          key={index} 
          className="group relative bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm p-6 flex flex-col items-center justify-center text-center hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300"
          whileHover={{ y: -5, boxShadow: "0 0 30px -10px rgba(168, 85, 247, 0.3)" }}
        >
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
