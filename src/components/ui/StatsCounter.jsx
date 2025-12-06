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
 * Stats Counter Section
 * Displays animated statistics in a responsive grid
 */
export default function StatsCounter({ lang = "en" }) {
  const t = useTranslations(lang);

  const stats = [
    {
      label: lang === "en" ? "Years Experience" : "Año de Experiencia",
      value: 1,
      suffix: "+",
    },
    {
      label: lang === "en" ? "Projects Completed" : "Proyectos Completados",
      value: 10,
      suffix: "+",
    },
    {
      label: lang === "en" ? "Technologies Mastered" : "Tecnologías Dominadas",
      value: 15,
      suffix: "+",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 md:py-12 border-y border-white/5 bg-white/5 rounded-3xl backdrop-blur-sm my-8">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center text-center p-4"
        >
          <Counter value={stat.value} suffix={stat.suffix} />
          <span className="mt-2 text-sm md:text-base text-gray-400 uppercase tracking-wider font-medium">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  );
}
