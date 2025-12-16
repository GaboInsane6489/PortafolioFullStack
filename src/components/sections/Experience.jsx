import React from "react";
import { motion } from "framer-motion";

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

export default function Experience({ lang = "en" }) {
  const t = {
    title: lang === "en" ? "Professional Journey" : "Trayectoria Profesional",
    intro:
      lang === "en"
        ? "I design and build real-world products with a strong focus on performance, clarity, and long-term maintainability."
        : "Diseño y construyo productos reales con un fuerte enfoque en rendimiento, claridad y mantenibilidad a largo plazo.",
    meta: lang === "en" ? "Selected experience" : "Experiencia seleccionada",
  };

  const experiences = [
    {
      role: lang === "en" ? "Full Stack Developer" : "Desarrollador Full Stack",
      company: "HarryPotterHead",
      link: "https://www.linkedin.com/company/harrypotterhead/",
      date: lang === "en" ? "Nov 2024 — Present" : "Nov 2024 — Presente",
      narrative:
        lang === "en"
          ? "Working on a live production platform with thousands of users, collaborating directly with the product owner to ship features, improve performance, and evolve the architecture."
          : "Trabajo en una plataforma en producción con miles de usuarios, colaborando directamente con el propietario del producto para lanzar funcionalidades, mejorar rendimiento y evolucionar la arquitectura.",
      highlights:
        lang === "en"
          ? [
              "End-to-end feature development across frontend and backend",
              "Refactoring legacy codebases to improve scalability",
              "Performance, accessibility, and technical SEO optimization",
              "Architecture decisions and production deployments",
            ]
          : [
              "Desarrollo de funcionalidades end-to-end en frontend y backend",
              "Refactorización de código legado para mejorar escalabilidad",
              "Optimización de rendimiento, accesibilidad y SEO técnico",
              "Decisiones de arquitectura y despliegues en producción",
            ],
      focus:
        lang === "en"
          ? ["Production systems", "Performance", "SEO", "Code quality"]
          : ["Producción", "Rendimiento", "SEO", "Calidad de código"],
    },
    {
      role:
        lang === "en"
          ? "Full Stack Programming Student"
          : "Estudiante de Programación Full Stack",
      company:
        lang === "en"
          ? "University Full Stack Program"
          : "Programa Universitario Full Stack",
      link: null,
      date: "2023 — 2024",
      narrative:
        lang === "en"
          ? "Completed a university-backed full stack program, building complete applications and establishing a solid foundation in modern web development."
          : "Completé un programa full stack con respaldo universitario, construyendo aplicaciones completas y estableciendo una base sólida en desarrollo web moderno.",
      highlights:
        lang === "en"
          ? [
              "Built full-stack applications from scratch",
              "Learned clean code and deployment best practices",
              "Worked with modern frameworks and tooling",
            ]
          : [
              "Construcción de aplicaciones full stack desde cero",
              "Aprendizaje de buenas prácticas de código y despliegue",
              "Trabajo con frameworks y herramientas modernas",
            ],
      focus:
        lang === "en"
          ? ["Foundations", "Modern stack", "Best practices"]
          : ["Fundamentos", "Stack moderno", "Buenas prácticas"],
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
            {t.title}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/60">
            {t.intro}
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
                <p>{t.meta}</p>
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
