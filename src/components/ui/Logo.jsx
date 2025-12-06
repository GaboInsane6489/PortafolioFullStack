import React from "react";
import { motion } from "framer-motion";

export default function Logo({ className = "w-10 h-10" }) {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className={className}
      initial={{ opacity: 0, rotate: -90 }}
      animate={{ opacity: 1, rotate: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <defs>
        <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
      </defs>

      {/* Outer Hexagon/Shape */}
      <motion.path
        d="M50 5 L95 25 L95 75 L50 95 L5 75 L5 25 Z"
        fill="none"
        stroke="url(#logo-gradient)"
        strokeWidth="4"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />

      {/* Stylized G #1 */}
      <motion.path
        d="M60 35 L40 35 L30 50 L40 65 L60 65"
        fill="none"
        stroke="#ffffff"
        strokeWidth="5"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      />

      {/* Stylized G #2 (Inverted/Interlocked suggestion) - Simplified to just initials for clarity */}
      <motion.path
        d="M70 50 L70 65 L50 65"
        fill="none"
        stroke="#ffffff"
        strokeWidth="5"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
      />
    </motion.svg>
  );
}
