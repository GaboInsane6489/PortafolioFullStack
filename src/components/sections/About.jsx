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
  const [videoError, setVideoError] = useState(false);

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
      className="relative min-h-screen px-6 py-32 overflow-hidden"
    >
      {/* Background showing video */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px] pointer-events-none" />
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

      <div className="relative z-10 mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        {/* Text */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="space-y-8 text-center lg:text-left order-2 lg:order-1"
        >
          <TypingTitle text={t("about.title")} />

          <div className="space-y-6 text-gray-300 text-lg leading-relaxed font-light">
            <motion.p
              variants={fadeUp}
              className="text-xl text-white font-medium"
            >
              {t("about.p1")}
            </motion.p>
            <motion.p variants={fadeUp}>{t("about.p2")}</motion.p>
            <motion.p variants={fadeUp}>{t("about.p3")}</motion.p>
          </div>

          <motion.div variants={fadeUp} className="space-y-4 text-sm pt-4">
            <div className="flex items-center justify-center lg:justify-start gap-3 text-purple-300">
              <Icon name="location" size={18} />
              <span className="tracking-wide">{t("about.location")}</span>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-3 text-blue-300">
              <Icon name="briefcase" size={18} />
              <span className="tracking-wide">{t("about.status")}</span>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-3 text-green-300">
              <Icon name="globe" size={18} />
              <span className="tracking-wide">
                English Level: B2 (Professional Working Proficiency)
              </span>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="pt-2">
            <StatsCounter />
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-6"
          >
            <MagneticButton
              href="#contact"
              className="px-8 py-4 rounded-full font-bold text-white bg-white/5 hover:bg-white hover:text-black border border-white/10 transition-all duration-300 shadow-xl text-center"
            >
              {t("about.ctaTalk")}
            </MagneticButton>

            <MagneticButton
              href={lang === "es" ? "/CVspanish.pdf" : "/CVenglish.pdf"}
              download
              className="px-8 py-4 rounded-full border border-white/10 text-gray-300 hover:text-white hover:border-white/30 transition-all text-center"
            >
              {t("about.ctaDownload")}
            </MagneticButton>
          </motion.div>
        </motion.div>

        {/* Video / Interactive Element */}
        <motion.div
          style={{ y: imageY, scale: imageScale }}
          className="relative flex justify-center order-1 lg:order-2"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative w-full max-w-[500px] aspect-[4/3] rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_20px_60px_rgba(120,50,255,0.15)] group bg-gray-900"
          >
            <div className="absolute inset-0 z-0">
              <img
                src="https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg"
                alt="Programming Language Code"
                loading="lazy"
                decoding="async"
                width="800"
                height="600"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
              />

              {/* Overlay Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                  <span className="text-xs font-mono text-white/80 uppercase tracking-widest">
                    Standardized Assets
                  </span>
                </div>
                <h3 className="text-white font-bold text-lg leading-tight">
                  Building the Future
                </h3>
              </div>
            </div>

            {/* Play Button Overlay (Interactive) */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                <Icon name="arrowRight" size={24} className="text-white" />
              </div>
            </div>
          </motion.div>

          {/* Status Badge */}
          <div className="absolute -bottom-6 -right-6 lg:-right-12 bg-[#0a0a0f] border border-white/10 px-6 py-4 rounded-2xl flex items-center gap-4 shadow-xl z-20">
            <div className="relative">
              <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-ping mx-auto" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider font-bold">
                Current Status
              </p>
              <p className="text-white font-bold">{t("about.openToWork")}</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Tech */}
      <div className="relative z-10 mt-40">
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
