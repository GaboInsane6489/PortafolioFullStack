import React from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, staggerItem } from "../../utils/motion.js";
import { useTranslations } from "../../utils/i18n.js";
import Icon from "../ui/Icon.jsx";

/**
 * Projects Section Component
 * Showcase of Gabriel's real projects
 */
export default function Projects({ lang = "en" }) {
  const t = useTranslations(lang);

  const projects = [
    {
      id: 1,
      title: "Instalaciones Garcia's",
      description:
        lang === "en"
          ? "Full-stack web application for a professional installation services company. Features service catalog, interactive contact forms, admin dashboard, and cloud deployment."
          : "Aplicación web full-stack para empresa de servicios de instalación. Incluye catálogo de servicios, formularios interactivos, panel de administración y despliegue en la nube.",
      tech: ["Astro", "React", "Express", "Supabase", "Vercel"],
      github: "https://github.com/GaboInsame6489/instalaciones-garcias",
      live: "https://instalaciones-garcias.vercel.app",
      featured: true,
    },
    {
      id: 2,
      title: "Harry Potter Head Forum",
      description:
        lang === "en"
          ? "Dynamic modular web forum system with multimedia content, interactive features, and community engagement tools. Serving an active community with continuous improvements."
          : "Sistema de foro web modular dinámico con contenido multimedia y herramientas de participación comunitaria. Sirviendo a una comunidad activa con mejoras continuas.",
      tech: ["PHP", "JavaScript", "HTML/CSS", "Laragon", "Git"],
      github: "https://github.com/Harry-Potter-Head/smf-hph",
      live: "https://harrypotterhead.com",
      featured: true,
    },
    {
      id: 3,
      title: lang === "en" ? "Full Stack Portfolio" : "Portafolio Full Stack",
      description:
        lang === "en"
          ? "Professional portfolio website showcasing projects and skills. Built with Astro and React, featuring SSR, i18n (EN/ES), and optimized for perfect Lighthouse scores."
          : "Sitio web de portafolio profesional mostrando proyectos y habilidades. Construido con Astro y React, con SSR, i18n (EN/ES), y optimizado para Lighthouse.",
      tech: ["Astro", "React", "Supabase", "Framer Motion", "Tailwind"],
      github: "https://github.com/GaboInsame6489/portfolio",
      live: "https://gabriel-g.dev",
      featured: true,
    },
  ];

  return (
    <motion.section
      id="projects"
      className="min-h-screen flex items-center py-16 md:py-20 px-4 bg-light dark:bg-dark"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeUp}
    >
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12"
          variants={fadeUp}
        >
          {t("projects.title")}
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={staggerContainer}
        >
          {projects.map((project) => (
            <motion.article
              key={project.id}
              className="group bg-white dark:bg-black rounded-2xl md:rounded-3xl overflow-hidden border border-purple-500/10 dark:border-purple-400/10 hover:border-purple-500 dark:hover:border-purple-400 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20"
              variants={staggerItem}
              whileHover={{ y: -8 }}
            >
              {/* Project Image */}
              <div className="aspect-video relative overflow-hidden bg-gray-100 dark:bg-gray-900 border-b border-purple-500/10 dark:border-purple-400/10">
                {project.id === 1 ? (
                  <img
                    src="/assets/images/projects/garcias.webp"
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                ) : project.id === 2 ? (
                  <img
                    src="/assets/images/projects/harrypotter.webp"
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                ) : (
                  /* Portfolio - abstract gradient */
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white p-8">
                    <span className="font-display font-bold text-5xl md:text-6xl opacity-20 group-hover:opacity-40 transition-opacity">
                      PF
                    </span>
                  </div>
                )}

                {/* Overlay actions */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 backdrop-blur-sm">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 md:px-6 py-2 bg-white text-purple-900 rounded-full font-bold text-xs md:text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                    >
                      Visit Site
                    </a>
                  )}
                </div>
              </div>

              <div className="p-5 md:p-6">
                {/* Project Title */}
                <h3 className="text-lg md:text-xl font-bold mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-xs md:text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 md:px-3 py-1 text-xs bg-purple-500/5 dark:bg-purple-400/5 text-purple-700 dark:text-purple-300 rounded-full border border-purple-500/10 dark:border-purple-400/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs md:text-sm font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Icon name="github" size={16} />
                      {lang === "en" ? "Code" : "Código"}
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs md:text-sm font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                      aria-label={`View ${project.title} live demo`}
                    >
                      <Icon name="externalLink" size={16} />
                      {lang === "en" ? "Live" : "Demo"}
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
