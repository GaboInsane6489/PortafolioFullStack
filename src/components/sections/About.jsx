import React, { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import { fadeUp, staggerContainer } from "../../utils/motion.js";
import { useTranslations, $lang } from "../../utils/i18n.js";
import { useStore } from "@nanostores/react";
import TechGrid from "../ui/TechGrid.jsx";
import StatsCounter from "../ui/StatsCounter.jsx";
import Icon from "../ui/Icon.jsx";

/* --- Sub-Components --- */

const TypingTitle = ({ text }) => {
  const letters = Array.from(text);

  return (
    <motion.h2
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
      variants={{
        visible: {
          transition: { staggerChildren: 0.035 },
        },
      }}
      className="text-4xl md:text-6xl font-display font-bold leading-tight mb-8 text-white flex flex-wrap justify-center lg:justify-start"
    >
      {letters.map((char, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { y: 24, opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
              transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
            },
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.h2>
  );
};

const MagneticButton = ({ children, className, href, download }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 120, damping: 15 });
  const springY = useSpring(y, { stiffness: 120, damping: 15 });

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.15);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.15);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      download={download}
      onMouseMove={handleMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ x: springX, y: springY }}
      className={className}
    >
      {children}
    </motion.a>
  );
};

/* --- Main Component --- */

export default function About() {
  const lang = useStore($lang);
  const t = useTranslations(lang);
  const ref = useRef(null);

  /* Scroll motion */
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [60, -40]);
  const imageScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.96, 1, 0.96]
  );

  /* Mouse light */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  return (
    <section
      id="about"
      ref={ref}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - r.left);
        mouseY.set(e.clientY - r.top);
      }}
      className="relative min-h-screen bg-black px-6 py-32 overflow-hidden"
    >
      {/* Ambient glow */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              800px circle at ${mouseX}px ${mouseY}px,
              rgba(139,92,246,0.06),
              transparent 70%
            )
          `,
        }}
      />

      <div className="relative mx-auto max-w-7xl grid lg:grid-cols-2 gap-24 items-center">
        {/* Text */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="space-y-10 text-center lg:text-left"
        >
          <TypingTitle text={t("about.title")} />

          <div className="max-w-xl mx-auto lg:mx-0 space-y-6 text-gray-300 text-lg leading-relaxed">
            <motion.p variants={fadeUp}>{t("about.p1")}</motion.p>
            <motion.p variants={fadeUp}>{t("about.p2")}</motion.p>
          </div>

          <motion.div variants={fadeUp} className="space-y-3 text-sm">
            <div className="flex items-center justify-center lg:justify-start gap-3 text-purple-300">
              <Icon name="location" size={16} />
              {t("about.location")}
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-3 text-blue-300">
              <Icon name="briefcase" size={16} />
              {t("about.status")}
            </div>
          </motion.div>

          <motion.div variants={fadeUp}>
            <StatsCounter />
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4"
          >
            <MagneticButton
              href="#contact"
              className="px-8 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg text-center"
            >
              {t("about.ctaTalk")}
            </MagneticButton>

            <MagneticButton
              href="/cv.pdf"
              download
              className="px-8 py-3 rounded-full border border-white/15 text-white/80 hover:text-white transition text-center"
            >
              {t("about.ctaDownload")}
            </MagneticButton>
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div
          style={{ y: imageY, scale: imageScale }}
          className="relative flex justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.015 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative w-[340px] aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_40px_120px_rgba(0,0,0,0.6)]"
          >
            <img
              src="/assets/images/profile.webp"
              alt="Gabriel González"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </motion.div>

          {/* Status */}
          <div className="absolute -bottom-6 bg-black/80 backdrop-blur-xl border border-white/10 px-5 py-3 rounded-2xl flex items-center gap-3 text-sm shadow-xl">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            {t("about.openToWork")}
          </div>
        </motion.div>
      </div>

      {/* Tech */}
      <div className="mt-40">
        <div className="text-center mb-16">
          <span className="text-purple-400 uppercase tracking-widest text-xs">
            {t("about.stackLabel")}
          </span>
          <h3 className="text-4xl font-display font-bold mt-4">
            {t("about.stackTitle")}
          </h3>
        </div>
        <TechGrid />
      </div>
    </section>
  );
}
