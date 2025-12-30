import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useTranslations, $lang } from "../../utils/i18n.js";
import { useStore } from "@nanostores/react";
import Icon from "../ui/Icon.jsx";

const ExperienceCard = ({ exp, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`relative flex items-center justify-between md:justify-normal w-full mb-16 md:mb-32 ${isEven ? "md:flex-row-reverse" : ""}`}
    >
      {/* Node Connection Point */}
      <div className="absolute left-[20px] md:left-1/2 w-8 h-8 rounded-full bg-black border-4 border-purple-500 transform -translate-x-1/2 z-20 flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.6)]">
        <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
      </div>

      {/* Spacer */}
      <div className="hidden md:block w-5/12" />

      {/* Card */}
      <motion.div
        initial={{
          opacity: 0,
          x: isEven ? -50 : 50,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 20,
          delay: index * 0.1,
        }}
        className="w-[calc(100%-60px)] md:w-5/12 ml-16 md:ml-0 relative z-30"
      >
        <div className="group relative bg-[#0a0a0a]/90 rounded-3xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all duration-500 hover:shadow-[0_0_50px_-10px_rgba(168,85,247,0.3)] backdrop-blur-xl">
          {/* Card Image */}
          <div className="relative h-48 md:h-56 overflow-hidden">
            <img
              src={exp.image}
              alt={exp.company}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />

            {/* Badge for Organization */}
            {exp.isOrg && (
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-purple-600/90 text-[10px] font-black uppercase tracking-widest text-white backdrop-blur-md border border-white/20">
                Organization Project
              </div>
            )}
          </div>

          <div className="relative p-6 md:p-8">
            {/* Header */}
            <div className="flex flex-col mb-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Icon
                    name={exp.icon || "briefcase"}
                    className="text-purple-400"
                    size={14}
                  />
                  <span className="text-[10px] font-mono text-purple-400 uppercase tracking-[0.2em]">
                    {exp.company}
                  </span>
                </div>
                <div className="text-[10px] font-bold text-gray-500 font-mono">
                  {exp.date}
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-display font-bold text-white tracking-tight group-hover:text-purple-300 transition-colors">
                {exp.role}
              </h3>
            </div>

            {/* Content */}
            <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">
              {exp.narrative}
            </p>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2">
              {exp.focus.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[10px] font-medium text-gray-400 group-hover:text-white group-hover:border-purple-500/30 transition-all"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Action Link */}
            {exp.link && (
              <a
                href={exp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-purple-400 hover:text-white transition-colors group/link"
              >
                View Details
                <Icon
                  name="externalLink"
                  size={12}
                  className="group-hover/link:translate-x-1 transition-transform"
                />
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
      ...t("experience.item1"),
      icon: "graduationCap",
    },
    {
      ...t("experience.item2"),
      icon: "award",
    },
    {
      ...t("experience.item3"),
      icon: "shoppingCart",
    },
    {
      ...t("experience.item4"),
      icon: "school",
    },
    {
      ...t("experience.item5"),
      isOrg: true,
      icon: "globe",
      link: "https://www.linkedin.com/company/harrypotterhead/",
    },
  ];

  return (
    <section
      className="relative py-32 md:py-48 overflow-hidden"
      ref={containerRef}
    >
      {/* Background showing video */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px] pointer-events-none" />
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
          <div
            className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-1 bg-white/5 transform md:-translate-x-1/2 z-0 rounded-full"
            aria-hidden="true"
          />
          <motion.div
            style={{ scaleY, transformOrigin: "top" }}
            className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-blue-500 to-purple-500 transform md:-translate-x-1/2 z-0 rounded-full shadow-[0_0_8px_rgba(168,85,247,0.4)] will-change-transform"
            aria-hidden="true"
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
