import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useTranslations, $lang } from "../../utils/i18n.js";
import { useStore } from "@nanostores/react";
import Icon from "../ui/Icon.jsx";

const ExperienceCard = ({ exp, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`relative flex items-center justify-between md:justify-normal w-full mb-16 md:mb-24 ${isEven ? "md:flex-row-reverse" : ""}`}
    >
      {/* Node Connection Point - Z Index 20 to be above line */}
      <div className="absolute left-[20px] md:left-1/2 w-8 h-8 rounded-full bg-black border-4 border-purple-500 transform -translate-x-1/2 z-20 flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.6)] group-hover:scale-125 transition-transform duration-300">
        <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
      </div>

      {/* Spacer */}
      <div className="hidden md:block w-5/12" />

      {/* Card - Z Index 30 to be above everything */}
      <motion.div
        initial={{
          opacity: 0,
          x: isEven ? -50 : 50,
          rotateY: isEven ? -15 : 15,
        }}
        whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 20,
          delay: index * 0.2,
        }}
        className="w-[calc(100%-60px)] md:w-5/12 ml-16 md:ml-0 perspective-1000 relative z-30"
      >
        <div className="group relative bg-[#0a0a0a] rounded-3xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all duration-500 hover:shadow-[0_0_50px_-10px_rgba(168,85,247,0.3)]">
          {/* Cyberpunk Decor */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl -mr-16 -mt-16 transition-all duration-500 group-hover:bg-purple-500/20" />
          <div className="absolute bottom-0 left-0 w-20 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50" />

          <div className="relative p-6 md:p-10 bg-black/50 backdrop-blur-sm">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Icon
                    name="briefcase"
                    className="text-purple-400"
                    size={16}
                  />
                  <span className="text-xs font-mono text-purple-400 uppercase tracking-widest">
                    {exp.company || "Freelance"}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-white leading-tight group-hover:text-purple-200 transition-colors">
                  {exp.role}
                </h3>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/5 backdrop-blur-sm self-start md:self-center shrink-0">
                <Icon name="clock" size={14} className="text-gray-400" />
                <span className="text-xs font-bold text-gray-300 whitespace-nowrap">
                  {exp.date}
                </span>
              </div>
            </div>

            {/* Content */}
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 border-l-2 border-purple-900/50 pl-4">
              {exp.narrative}
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 gap-3 mb-8">
              {exp.highlights.slice(0, 3).map((item, i) => (
                <div key={i} className="flex items-start gap-3 group/item">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500 group-hover/item:shadow-[0_0_8px_rgba(168,85,247,0.8)] transition-all" />
                  <span className="text-sm text-gray-300 group-hover/item:text-white transition-colors">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2">
              {exp.focus.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-xs font-medium text-gray-400 hover:bg-white/10 hover:text-white hover:border-purple-500/30 transition-all cursor-default"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Action Link (if valid) */}
            {exp.link && (
              <a
                href={exp.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${exp.company || "Project"} details`}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-purple-600 hover:scale-110 transition-all duration-300"
              >
                <Icon name="externalLink" size={18} />
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default function Experience() {
  const lang = useStore($lang);
  const t = useTranslations(lang);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scaleY = useSpring(useTransform(scrollYProgress, [0, 0.5], [0, 1]), {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const experiences = [
    {
      role: t("experience.exp1.role"),
      company: "HarryPotterHead",
      link: "https://www.linkedin.com/company/harrypotterhead/",
      date: t("experience.exp1.date"),
      narrative: t("experience.exp1.narrative"),
      highlights: [
        t("experience.exp1.highlight1"),
        t("experience.exp1.highlight2"),
        t("experience.exp1.highlight3"),
      ],
      focus: [
        t("experience.exp1.focus1"),
        t("experience.exp1.focus2"),
        t("experience.exp1.focus3"),
      ],
    },
    {
      role: t("experience.exp2.role"),
      company: t("experience.exp2.company"),
      link: null,
      date: t("experience.exp2.date"),
      narrative: t("experience.exp2.narrative"),
      highlights: [
        t("experience.exp2.highlight1"),
        t("experience.exp2.highlight2"),
      ],
      focus: [t("experience.exp2.focus1"), t("experience.exp2.focus2")],
    },
  ];

  return (
    <section
      id="experience"
      className="relative py-32 md:py-48 overflow-hidden bg-black"
      ref={containerRef}
    >
      {/* Ambient Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px] opacity-20 animate-pulse" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px] opacity-20 animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24 md:mb-32"
        >
          <div className="inline-block relative">
            <span className="absolute -inset-1 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 opacity-20 blur" />
            <span className="relative inline-block py-1 px-3 rounded-lg bg-black border border-white/10 text-xs font-bold uppercase tracking-widest text-purple-400 mb-4">
              {t("experience.meta")}
            </span>
          </div>

          <h2 className="text-5xl md:text-8xl font-display font-bold text-white mb-6 tracking-tight">
            PATH<span className="text-purple-500">_</span>FINDER
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-xl font-light">
            Evolución profesional y hitos clave en el desarrollo de software.
          </p>
        </motion.div>

        <div className="relative">
          {/* Main Timeline Line - Z Index 0 to stay behind */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-1 bg-white/5 transform md:-translate-x-1/2 z-0 rounded-full" />

          {/* Animated Fill Line - Z Index 0 to stay behind but above base line */}
          <motion.div
            style={{ scaleY, transformOrigin: "top" }}
            className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-blue-500 to-purple-500 transform md:-translate-x-1/2 z-0 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.5)]"
          />

          <div className="space-y-4">
            {experiences.map((exp, i) => (
              <ExperienceCard key={i} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
