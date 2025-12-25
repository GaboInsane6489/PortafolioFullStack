import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslations, $lang } from "../../utils/i18n.js";
import { useStore } from "@nanostores/react";

/**
 * Experience / Professional Journey
 * Editorial + cinematic narrative
 * Brand-aligned with global theme
 */

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1], // cinematic easing
    },
  },
};

export default function Experience() {
  const lang = useStore($lang);
  const t = useTranslations(lang);

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
        t("experience.exp1.highlight4"),
      ],
      focus: [
        t("experience.exp1.focus1"),
        t("experience.exp1.focus2"),
        t("experience.exp1.focus3"),
        t("experience.exp1.focus4"),
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
        t("experience.exp2.highlight3"),
      ],
      focus: [
        t("experience.exp2.focus1"),
        t("experience.exp2.focus2"),
        t("experience.exp2.focus3"),
      ],
    },
  ];

  return (
    <section id="experience" className="relative bg-black px-4 py-28">
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-[var(--color-primary)]/10 blur-[160px]" />
      </div>

      <div className="relative mx-auto max-w-5xl">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-20 max-w-2xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            {t("experience.title")}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/60">
            {t("experience.intro")}
          </p>
        </motion.header>

        {/* Experience blocks */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="space-y-24"
        >
          {experiences.map((exp, index) => (
            <motion.article
              key={index}
              variants={item}
              className="group relative grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-8 rounded-2xl border border-[var(--glass-border-dark)] bg-[var(--glass-bg-dark)] backdrop-blur-[var(--glass-blur)] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.6)] transition-all duration-300 hover:border-[var(--color-primary)]/40"
            >
              {/* Meta */}
              <div className="text-xs uppercase tracking-wide text-white/40">
                <p className="mb-2">{exp.date}</p>
                <p>{t("experience.meta")}</p>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl font-semibold text-white">{exp.role}</h3>

                <p className="mt-1 text-sm text-white/50">
                  {exp.link ? (
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 transition-colors hover:text-[var(--color-primary)]"
                    >
                      {exp.company}
                      <span className="opacity-60">↗</span>
                    </a>
                  ) : (
                    exp.company
                  )}
                </p>

                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/70">
                  {exp.narrative}
                </p>

                {/* Highlights */}
                <ul className="mt-6 space-y-2">
                  {exp.highlights.map((item, i) => (
                    <li key={i} className="flex gap-2 text-sm text-white/60">
                      <span className="text-[var(--color-primary)]">—</span>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Focus tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {exp.focus.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/50 backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
