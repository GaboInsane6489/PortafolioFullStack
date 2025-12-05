import React from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, staggerItem } from "../../utils/motion.js";

/**
 * Experience Section Component
 * Gabriel's professional work history
 */
export default function Experience({ lang = "en" }) {
  const experiences = [
    {
      id: 1,
      role: lang === "en" ? "Full Stack Developer" : "Desarrollador Full Stack",
      company: "HarryPotterHead",
      companyUrl: "https://www.linkedin.com/company/harrypotterhead/",
      period:
        lang === "en"
          ? "Nov 2024 - Present · 2 months"
          : "Nov 2024 - Presente · 2 meses",
      location: lang === "en" ? "Switzerland · Remote" : "Suiza · Remoto",
      type: lang === "en" ? "Part-time" : "Jornada parcial",
      responsibilities:
        lang === "en"
          ? [
              "Full stack development using PHP, JavaScript, HTML/CSS, and Laragon as the local environment",
              "Implementing new features, improving performance, and resolving bugs across the platform",
              "Refactoring and optimizing the codebase to ensure scalability and maintainability",
              "Technical SEO optimization, accessibility improvements, and faster load times",
              "Direct collaboration with the project owner to define the roadmap, architecture decisions, and deployments",
            ]
          : [
              "Desarrollo full stack usando PHP, JavaScript, HTML/CSS y Laragon como entorno local",
              "Implementación de nuevas características, mejora del rendimiento y resolución de bugs en toda la plataforma",
              "Refactorización y optimización del código para asegurar escalabilidad y mantenibilidad",
              "Optimización técnica de SEO, mejoras de accesibilidad y tiempos de carga más rápidos",
              "Colaboración directa con el propietario del proyecto para definir la hoja de ruta, decisiones de arquitectura y despliegues",
            ],
      tech: ["PHP", "JavaScript", "HTML/CSS", "Laragon", "Git", "SEO"],
    },
    {
      id: 2,
      role:
        lang === "en"
          ? "Full Stack Programming Student"
          : "Estudiante de Programación Full Stack",
      company:
        lang === "en"
          ? "University Full Stack Course"
          : "Curso Universitario Full Stack",
      companyUrl: null,
      period: "2023 - 2024",
      location: lang === "en" ? "Venezuela" : "Venezuela",
      type: lang === "en" ? "Full-time" : "Tiempo completo",
      responsibilities:
        lang === "en"
          ? [
              "Completed comprehensive full-stack development curriculum with university-backed certification",
              "Built multiple projects demonstrating proficiency in frontend and backend technologies",
              "Learned industry best practices for code quality, testing, and deployment",
              "Gained hands-on experience with modern development tools and workflows",
              "Developed strong foundation in React, Node.js, Express, MongoDB, and cloud deployment",
            ]
          : [
              "Completé un currículum integral de desarrollo full-stack con certificación universitaria",
              "Construí múltiples proyectos demostrando competencia en tecnologías frontend y backend",
              "Aprendí las mejores prácticas de la industria para calidad de código, testing y despliegue",
              "Obtuve experiencia práctica con herramientas y flujos de trabajo de desarrollo modernos",
              "Desarrollé una base sólida en React, Node.js, Express, MongoDB y despliegue en la nube",
            ],
      tech: ["React", "Node.js", "Express", "MongoDB", "Git", "Vercel"],
    },
  ];

  return (
    <motion.section
      id="experience"
      className="py-24 px-4 bg-light dark:bg-dark"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeUp}
    >
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12"
          variants={fadeUp}
        >
          {lang === "en" ? "Work Experience" : "Experiencia Laboral"}
        </motion.h2>

        <motion.div className="space-y-12 relative" variants={staggerContainer}>
          {/* Vertical timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-black/10 dark:bg-white/10 hidden md:block" />

          {experiences.map((exp) => (
            <motion.article
              key={exp.id}
              className="relative pl-0 md:pl-12"
              variants={staggerItem}
            >
              {/* Timeline dot */}
              <div
                className="absolute left-0 top-2 w-3 h-3 bg-black dark:bg-white rounded-full hidden md:block"
                style={{ transform: "translateX(-6px)" }}
              />

              <div className="bg-white dark:bg-black p-6 rounded-2xl border border-black/10 dark:border-white/10 hover:border-black dark:hover:border-white transition-colors">
                {/* Header */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold">{exp.role}</h3>
                  {exp.companyUrl ? (
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:underline"
                    >
                      {exp.company}
                    </a>
                  ) : (
                    <p className="text-gray-600 dark:text-gray-400">
                      {exp.company}
                    </p>
                  )}
                  <div className="flex flex-wrap gap-2 mt-1 text-sm text-gray-500">
                    <span>{exp.type}</span>
                    <span>•</span>
                    <span>{exp.period}</span>
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    {exp.location}
                  </div>
                </div>

                {/* Responsibilities */}
                <ul className="space-y-2 text-gray-600 dark:text-gray-400 mb-4">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="text-sm leading-relaxed">
                      • {resp}
                    </li>
                  ))}
                </ul>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs bg-black/5 dark:bg-white/5 rounded-full border border-black/10 dark:border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
