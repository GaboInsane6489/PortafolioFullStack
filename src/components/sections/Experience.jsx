import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslations, $lang } from "../../utils/i18n.js";
import { useStore } from "@nanostores/react";
import Icon from "../ui/Icon.jsx";

const ExperienceCard = ({ exp, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`relative flex items-center justify-between md:justify-normal w-full mb-8 ${isEven ? "md:flex-row-reverse" : ""}`}
    >
      {/* Timeline Node */}
      <div className="absolute left-[18px] md:left-1/2 w-4 h-4 bg-black border-2 border-purple-500 rounded-full transform -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(168,85,247,0.5)]">
        <div className="absolute inset-0 rounded-full bg-purple-400 animate-ping opacity-20"></div>
      </div>

      {/* Spacer for desktop centering */}
      <div className="hidden md:block w-5/12" />

      {/* Content Card */}
      <motion.div
        initial={{ opacity: 0, y: 20, x: isEven ? -20 : 20 }}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="w-[calc(100%-48px)] md:w-5/12 ml-12 md:ml-0 group"
      >
        <div className="relative p-6 md:p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:shadow-[0_10px_40px_-10px_rgba(168,85,247,0.15)] overflow-hidden">
          {/* Hover Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative z-10">
            <div className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-wider text-purple-400 mb-2">
              <span>{exp.date}</span>
              <span className="w-1 h-1 bg-white/20 rounded-full" />
              <span>{exp.company}</span>
            </div>

            <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-4 group-hover:text-purple-200 transition-colors">
              {exp.role}
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {exp.narrative}
            </p>

            <div className="space-y-3">
              {exp.highlights.slice(0, 3).map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 text-sm text-gray-300"
                >
                  <Icon
                    name="check"
                    className="text-purple-500 mt-0.5 shrink-0"
                    size={14}
                  />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {exp.focus.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-[10px] uppercase tracking-wide text-gray-400 group-hover:border-white/10 group-hover:text-gray-200 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
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
      className="relative py-32 overflow-hidden bg-black"
      ref={containerRef}
    >
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 md:mb-32"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-purple-400 mb-4">
            {t("experience.meta")}
          </span>
          <h2 className="text-4xl md:text-7xl font-display font-bold text-white mb-6">
            {t("experience.title")}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            {t("experience.intro")}
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[18px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-white/20 to-transparent transform md:-translate-x-1/2"></div>

          <div className="space-y-12 md:space-y-24">
            {experiences.map((exp, i) => (
              <ExperienceCard key={i} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
