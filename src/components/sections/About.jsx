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
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.15);
    y.set((e.clientY - centerY) * 0.15);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      download={download}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
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
      ref={ref}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - r.left);
        mouseY.set(e.clientY - r.top);
      }}
      className="relative min-h-screen px-6 py-24 md:py-40 overflow-hidden bg-[#050505]"
    >
      {/* Background showing video */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] pointer-events-none" />

      {/* Ambient glow */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              1000px circle at ${mouseX}px ${mouseY}px,
              rgba(139,92,246,0.12),
              transparent 70%
            )
          `,
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center mb-40">
          {/* Content Left */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-10 text-center lg:text-left"
          >
            <div>
              <motion.span
                variants={fadeUp}
                className="inline-block text-purple-400 font-mono text-sm tracking-[0.3em] uppercase mb-4"
              >
                {t("about.title")}
              </motion.span>
              <TypingTitle text="Gabriel González" />
            </div>

            <div className="space-y-8 text-gray-300 text-lg leading-relaxed font-light">
              <motion.p
                variants={fadeUp}
                className="text-2xl md:text-3xl text-white font-display font-medium leading-tight"
              >
                {t("about.p1")}
              </motion.p>
              <motion.p variants={fadeUp} className="text-gray-400 max-w-xl">
                {t("about.p2")}
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4"
              >
                {[
                  {
                    icon: "location",
                    text: t("about.location"),
                    color: "purple",
                  },
                  { icon: "briefcase", text: t("about.status"), color: "blue" },
                  { icon: "globe", text: "English B2", color: "green" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/10 flex items-center gap-3 text-sm"
                  >
                    <Icon
                      name={item.icon}
                      size={14}
                      className={`text-${item.color}-400`}
                    />
                    <span className="text-gray-300">{item.text}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-6 pt-10"
            >
              <MagneticButton
                href="#contact"
                className="group relative px-12 py-5 rounded-full font-bold text-white bg-purple-600 transition-all duration-500 shadow-[0_0_40px_rgba(147,51,234,0.2)] text-center overflow-hidden border border-purple-500/50"
              >
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                  {t("about.ctaTalk")}
                </span>
                <motion.div
                  className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.76, 0, 0.24, 1]"
                  aria-hidden="true"
                />
              </MagneticButton>

              <MagneticButton
                href={lang === "es" ? "/CVspanish.pdf" : "/CVenglish.pdf"}
                download
                className="px-12 py-5 rounded-full border border-white/10 text-gray-400 bg-white/[0.02] hover:bg-white/10 hover:text-white hover:border-white/30 transition-all duration-300 text-center backdrop-blur-sm"
              >
                {t("about.ctaDownload")}
              </MagneticButton>
            </motion.div>
          </motion.div>

          {/* Visual Right / Statistics & Original Image Combined */}
          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="relative lg:mt-0 space-y-8"
          >
            {/* Original Image Restored */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative w-full aspect-[16/10] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl group bg-gray-900"
            >
              <img
                src="https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg"
                alt="Programming Language Code"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
                  <span className="text-[10px] font-mono text-white/80 uppercase tracking-[0.3em]">
                    {t("about.systemArchitecture")}
                  </span>
                </div>
                <h3 className="text-white font-display font-bold text-xl md:text-2xl tracking-tight">
                  {t("about.futureTitle")}
                </h3>
              </div>
            </motion.div>

            {/* Stats Card Overlay/Below */}
            <div className="relative bg-[#0a0a0f]/80 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 md:p-10 shadow-2xl overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-3xl -mr-16 -mt-16 group-hover:bg-purple-500/20 transition-colors duration-700" />

              <StatsCounter />

              <div className="mt-10 pt-8 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-5">
                  <div className="relative w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center border border-green-500/20">
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.6)]" />
                  </div>
                  <div>
                    <p className="text-[9px] text-gray-500 uppercase tracking-[0.2em] font-black mb-0.5">
                      Availability
                    </p>
                    <p className="text-white font-bold text-xs tracking-wide">
                      {t("about.openToWork")}
                    </p>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-all cursor-pointer group/icon">
                  <Icon
                    name="externalLink"
                    size={18}
                    className="text-gray-500 group-hover/icon:text-white transition-colors"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Origins Narrative Section */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-center py-20 md:py-32 mb-32 border-y border-white/5 relative">
          <motion.div
            style={{ y: imageY, scale: imageScale }}
            className="lg:col-span-5 relative group order-2 lg:order-1"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl blur-2xl opacity-10 group-hover:opacity-20 transition duration-700" />
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="https://www.enter.co/wp-content/uploads/2022/05/1_1X0-98EiQNkwBJj2vnTTqQ-1104x621.jpeg"
                alt="Origins as a developer"
                className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute bottom-8 left-8">
                <p className="text-xs font-mono text-purple-400 uppercase tracking-widest mb-2">
                  {t("about.spark")}
                </p>
                <p className="text-white font-bold text-xl tracking-tight">
                  {t("about.creator")}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-10 md:space-y-12 order-1 lg:order-2"
          >
            <div className="space-y-6">
              <motion.h3
                variants={fadeUp}
                className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight leading-tight"
              >
                {t("about.originsTitle")} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400">
                  {t("about.originsTitleHighlight")}
                </span>
              </motion.h3>
              <motion.div
                variants={fadeUp}
                className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"
              />
            </div>

            <div className="space-y-8">
              <motion.p
                variants={fadeUp}
                className="text-xl md:text-2xl text-gray-400 leading-relaxed italic border-l-2 border-purple-500/30 pl-6 md:pl-8"
              >
                {t("about.originsSubtitle")}
              </motion.p>
              <motion.p
                variants={fadeUp}
                className="text-lg text-gray-300 leading-relaxed font-light"
              >
                {t("about.p3")}
              </motion.p>
            </div>

            <motion.div variants={fadeUp} className="flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className={`w-10 h-10 rounded-full border-2 border-[#050505] bg-gray-800 flex items-center justify-center text-[10px] font-bold text-white shadow-xl`}
                  >
                    {i === 1 ? "MC" : i === 2 ? "JS" : "++"}
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500 font-mono tracking-wider italic">
                {t("about.logicComment")}
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Tech Footer Section */}
        <div className="relative z-10 pt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20 md:mb-24 px-4"
          >
            <span className="text-purple-400 uppercase tracking-[0.4em] text-[10px] font-black">
              {t("about.toolkitLabel")}
            </span>
            <h3 className="text-4xl md:text-6xl font-display font-bold mt-6 text-white tracking-tight">
              {t("about.stackTitle")}
            </h3>
            <p className="text-gray-500 mt-6 max-w-2xl mx-auto text-base md:text-lg font-light">
              {t("about.toolkitDesc")}
            </p>
          </motion.div>
          <TechGrid />
        </div>
      </div>
    </section>
  );
}
