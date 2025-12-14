import React, { useState, useRef, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import { fadeUp, staggerContainer } from "../../utils/motion.js";
import { useTranslations } from "../../utils/i18n.js";
import TechGrid from "../ui/TechGrid.jsx";
import StatsCounter from "../ui/StatsCounter.jsx";
import Icon from "../ui/Icon.jsx";

/* --- Sub-Components --- */

const TypingTitle = ({ text }) => {
  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.h2
      style={{ display: "flex", flexWrap: "wrap", overflow: "hidden" }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="text-3xl md:text-5xl font-bold mb-6 text-white font-display"
    >
      {letters.map((letter, index) => (
        <motion.span variants={child} key={index}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.h2>
  );
};

const MagneticButton = ({ children, className, href, download = false }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.1, y: middleY * 0.1 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <motion.a
      ref={ref}
      href={href}
      download={download}
      className={className}
      animate={{ x, y }}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.a>
  );
};

/* --- Main Component --- */

export default function About({ lang = "en" }) {
  const t = useTranslations(lang);
  const ref = useRef(null);

  // Parallax for Profile Image
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  // Mouse follow for glow
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <section
      id="about"
      ref={ref}
      className="min-h-screen py-24 px-4 bg-black relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Dynamic Background Glow following mouse */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(168, 85, 247, 0.03),
              transparent 80%
            )
          `,
        }}
      />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Narrative Content */}
          <div className="order-2 lg:order-1">
            <TypingTitle text={t("about.title")} />

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="prose prose-invert prose-lg text-gray-300 mb-10 space-y-6"
            >
              <motion.p variants={fadeUp} className="leading-relaxed">
                {t("about.p1")}
              </motion.p>
              <motion.p variants={fadeUp} className="leading-relaxed">
                {t("about.p2")}
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="flex flex-col gap-4 py-4"
              >
                <div className="flex items-center gap-3 text-purple-200">
                  <span className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/20">
                    <Icon
                      name="location"
                      size={18}
                      className="text-purple-400"
                    />
                  </span>
                  <span>{t("about.location")}</span>
                </div>
                <div className="flex items-center gap-3 text-blue-200">
                  <span className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20">
                    <Icon
                      name="briefcase"
                      size={18}
                      className="text-blue-400"
                    />
                  </span>
                  <span>{t("about.status")}</span>
                </div>
              </motion.div>

              {/* Stats Integration */}
              <motion.div
                variants={fadeUp}
                className="pt-4 border-t border-white/5"
              >
                <StatsCounter lang={lang} />
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                variants={fadeUp}
                className="flex flex-wrap gap-4 pt-6"
              >
                <MagneticButton
                  href="#contact"
                  className="group relative px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-bold overflow-hidden shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_40px_rgba(168,85,247,0.5)] transition-shadow"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Icon name="mail" size={20} />
                    {lang === "en" ? "Let's Talk" : "Hablemos"}
                  </span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </MagneticButton>

                <MagneticButton
                  href="/cv.pdf"
                  download
                  className="group px-8 py-3 bg-white/5 text-white border border-white/10 rounded-full font-medium hover:bg-white/10 transition-colors flex items-center gap-2"
                >
                  <Icon
                    name="arrow"
                    size={20}
                    className="group-hover:rotate-45 transition-transform"
                  />
                  {lang === "en" ? "Download CV" : "Descargar CV"}
                </MagneticButton>
              </motion.div>
            </motion.div>
          </div>

          {/* Profile Image Section */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <motion.div
              style={{ y, scale }}
              className="relative w-full max-w-sm"
            >
              {/* Breathing Glow Behind */}
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-blue-500 rounded-[2rem] blur-3xl -z-10"
              />

              {/* Main Image Container */}
              <motion.div
                className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src="/assets/images/profile.webp"
                  alt="Gabriel González"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />

                {/* Subtle Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
              </motion.div>

              {/* Floating Magnetic Badge */}
              <motion.div
                className="absolute -bottom-6 -left-6 z-20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="bg-black/80 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-xl flex items-center gap-3"
                >
                  <div className="relative">
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                    <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75" />
                  </div>
                  <div className="text-sm">
                    <p className="text-gray-400 text-xs uppercase tracking-wider">
                      Status
                    </p>
                    <p className="text-white font-bold">Open to Work</p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Decorative Elements */}
              <Icon
                name="code"
                className="absolute -top-8 -right-8 text-white/5 w-24 h-24 rotate-12"
              />
            </motion.div>
          </div>
        </div>

        {/* Tech Grid with Staggered Entrance */}
        <div className="relative z-10">
          <div className="text-center mb-16">
            <span className="text-purple-400 text-sm font-bold tracking-widest uppercase mb-2 block">
              Stack
            </span>
            <h3 className="text-3xl md:text-4xl font-bold text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
                Technologies
              </span>{" "}
              & Tools
            </h3>
          </div>

          <TechGrid />
        </div>
      </div>
    </section>
  );
}
