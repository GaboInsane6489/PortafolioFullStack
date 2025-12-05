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
          ? "Full-stack web application for a professional installation services company. Features include service catalog, interactive contact forms, admin dashboard, and optimized cloud deployment on Vercel. Built with modern technologies focusing on performance and user experience."
          : "Aplicación web full-stack para una empresa de servicios de instalación profesional. Incluye catálogo de servicios, formularios de contacto interactivos, panel de administración y despliegue optimizado en Vercel. Construida con tecnologías modernas enfocándose en rendimiento y experiencia de usuario.",
      tech: ["Astro", "React", "Express", "Supabase", "Vercel", "TailwindCSS"],
      github: "https://github.com/GaboInsame6489/instalaciones-garcias",
      live: "https://instalaciones-garcias.vercel.app",
      featured: true,
    },
    {
      id: 2,
      title: "Harry Potter Head Forum",
      description:
        lang === "en"
          ? "Dynamic modular web forum system with multimedia content, interactive features, and community engagement tools. Built with PHP and JavaScript, featuring custom themes, user profiles, and real-time interactions. Currently serving an active community with continuous improvements and new functionalities."
          : "Sistema de foro web modular dinámico con contenido multimedia, características interactivas y herramientas de participación comunitaria. Construido con PHP y JavaScript, con temas personalizados, perfiles de usuario e interacciones en tiempo real. Actualmente sirviendo a una comunidad activa con mejoras continuas y nuevas funcionalidades.",
      tech: ["PHP", "JavaScript", "HTML/CSS", "Laragon", "Git", "SEO"],
      github: "https://github.com/Harry-Potter-Head/smf-hph",
      live: "https://harrypotterhead.com",
      featured: true,
    },
    {
      id: 3,
      title: lang === "en" ? "Full Stack Portfolio" : "Portafolio Full Stack",
      description:
        lang === "en"
          ? "Professional portfolio website showcasing projects and skills. Built with Astro and React, featuring server-side rendering, internationalization (EN/ES), contact form with Supabase backend, and optimized for perfect Lighthouse scores. Demonstrates modern web development best practices."
          : "Sitio web de portafolio profesional mostrando proyectos y habilidades. Construido con Astro y React, con renderizado del lado del servidor, internacionalización (EN/ES), formulario de contacto con backend Supabase, y optimizado para puntuaciones perfectas de Lighthouse. Demuestra las mejores prácticas de desarrollo web moderno.",
      tech: ["Astro", "React", "Supabase", "Framer Motion", "TailwindCSS"],
      github: "https://github.com/GaboInsame6489/portfolio",
      live: "https://gabriel-g.dev",
      featured: true,
    },
  ];

  return (
    <motion.section
      id="projects"
      className="py-24 px-4 bg-light dark:bg-dark"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeUp}
    >
      <div className="container mx-auto max-w-7xl">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12"
          variants={fadeUp}
        >
          {t("projects.title")}
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
        >
          {projects.map((project) => (
            <motion.article
              key={project.id}
              className="group bg-white dark:bg-black rounded-3xl overflow-hidden border border-black/10 dark:border-white/10 hover:border-black dark:hover:border-white transition-all duration-300 hover:shadow-2xl hover:shadow-black/5"
              variants={staggerItem}
              whileHover={{ y: -8 }}
            >
              {/* Project Image */}
              <div className="aspect-video relative overflow-hidden bg-gray-100 dark:bg-gray-900 border-b border-black/5 dark:border-white/5">
                {project.id === 2 ? (
                  <img
                    src="/assets/images/projects/harrypotter.webp"
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                ) : project.id === 3 ? (
                  /* Portfolio - abstract gradient */
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-neutral-900 to-black text-white p-8">
                    <span className="font-display font-bold text-6xl opacity-20 group-hover:opacity-40 transition-opacity">
                      PF
                    </span>
                  </div>
                ) : (
                  /* Instalaciones Garcias - placeholder gradient */
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white p-8">
                    <span className="font-display font-bold text-6xl opacity-30 group-hover:opacity-50 transition-opacity">
                      IG
                    </span>
                  </div>
                )}

                {/* Overlay actions */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2 bg-white text-black rounded-full font-bold text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                    >
                      Visit Site
                    </a>
                  )}
                </div>
              </div>

              <div className="p-6">
                {/* Project Title */}
                <h3 className="text-xl font-bold mb-2 group-hover:underline">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs bg-black/5 dark:bg-white/5 rounded-full border border-black/10 dark:border-white/10"
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
                      className="flex items-center gap-2 text-sm font-medium hover:underline"
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
                      className="flex items-center gap-2 text-sm font-medium hover:underline"
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
