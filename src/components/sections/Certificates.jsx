import React, { useRef, useState } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useTranslations, $lang } from "../../utils/i18n.js";
import { useStore } from "@nanostores/react";
import Icon from "../ui/Icon.jsx";

/* --- 3D Tilt Card Component --- */
const TiltCard = ({ children, className }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 500, damping: 50 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 50 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXPct = (e.clientX - rect.left) / width - 0.5;
    const mouseYPct = (e.clientY - rect.top) / height - 0.5;
    x.set(mouseXPct);
    y.set(mouseYPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className={`relative w-full aspect-[4/3] max-w-lg mx-auto ${className}`}
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-0 bg-white/5 rounded-3xl backdrop-blur-xl border border-white/10 shadow-2xl shadow-purple-900/40 overflow-hidden"
      >
        {/* Shine Effect */}
        <motion.div
          style={{
            background: useMotionTemplate`
              radial-gradient(
                650px circle at ${mouseX}px ${mouseY}px,
                rgba(255,255,255,0.1),
                transparent 80%
              )
            `,
          }}
          className="absolute inset-0 z-20 pointer-events-none"
        />
        {children}
      </div>
    </motion.div>
  );
};

const Stat = ({ number, label, icon }) => (
  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-purple-400 border border-white/10 shrink-0">
      <Icon name={icon} size={24} />
    </div>
    <div className="space-y-1">
      <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
        {number}
      </div>
      <div className="text-[11px] text-gray-500 uppercase tracking-[0.2em] font-black">
        {label}
      </div>
    </div>
  </div>
);

/* --- Main Component --- */
export default function Certificates() {
  const lang = useStore($lang);
  const t = useTranslations(lang);

  const skills = [
    { name: "HTML5", icon: "html", color: "#E34F26" },
    { name: "CSS3", icon: "css", color: "#1572B6" },
    { name: "JavaScript", icon: "javascript", color: "#F7DF1E" },
    { name: "React", icon: "react", color: "#61DAFB" },
    { name: "Next.js", icon: "next", color: "#FFFFFF" },
    { name: "Node.js", icon: "node", color: "#339933" },
    { name: "Express", icon: "express", color: "#ffffff" },
    { name: "MongoDB", icon: "mongodb", color: "#47A248" },
    { name: "PostgreSQL", icon: "postgres", color: "#4169E1" },
    { name: "Supabase", icon: "supabase", color: "#3ECF8E" },
    { name: "Tailwind", icon: "tailwind", color: "#38B2AC" },
    { name: "Git", icon: "git", color: "#F05032" },
    { name: "GitHub", icon: "github", color: "#FFFFFF" },
    { name: "Vercel", icon: "vercel", color: "#FFFFFF" },
    { name: "Docker", icon: "docker", color: "#2496ED" },
  ];

  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center py-12 md:py-0 overflow-hidden">
      {/* Background showing video */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px] pointer-events-none" />
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/05 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center"
        >
          {/* LEFT: The "Hero" Certificate */}
          <div className="order-2 lg:order-1 perspective-1000 flex justify-center">
            <TiltCard className="max-w-md w-full shadow-2xl origin-center bg-black/60">
              <img
                src="/assets/images/certificates/fullStack-cert.jpeg"
                alt="Full Stack Developer Certificate"
                loading="lazy"
                decoding="async"
                width="600"
                height="450"
                className="w-full h-full object-contain p-2"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

              {/* Floating Badge */}
              <div className="absolute bottom-4 right-4 bg-black/40 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-lg flex items-center gap-2 transform translate-z-10 shadow-lg">
                <Icon name="check" className="text-green-400" size={14} />
                <span className="text-[10px] font-bold text-white uppercase tracking-wider">
                  {t("certificates.verified")}
                </span>
              </div>
            </TiltCard>
          </div>

          {/* RIGHT: The Narrative */}
          <div className="order-1 lg:order-2 space-y-6 text-center lg:text-left">
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-widest mb-4"
              >
                <Icon name="sparkles" size={14} />
                {t("certificates.certified")}
              </motion.div>

              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4 leading-white">
                {t("certificates.title")}
              </h2>

              <p className="text-base text-gray-400 leading-relaxed max-w-lg mx-auto lg:mx-0">
                {t("certificates.description")}
              </p>
            </div>

            {/* Stats Grid - Compact */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 p-6 md:p-8 bg-white/5 rounded-3xl border border-white/10 max-w-lg mx-auto lg:mx-0">
              <Stat
                number="8"
                label={t("certificates.months")}
                icon="terminal"
              />
              <Stat number="+800" label={t("certificates.hours")} icon="code" />
            </div>

            {/* Stack Acquired */}
            <div className="max-w-lg mx-auto lg:mx-0 pt-2">
              <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-3">
                {t("certificates.stack")}
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-black/40 border border-white/10 rounded-md hover:border-purple-500/40 transition-colors cursor-default"
                  >
                    <Icon
                      name={skill.icon}
                      size={14}
                      style={{ color: skill.color }}
                    />
                    <span className="text-xs font-medium text-gray-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
