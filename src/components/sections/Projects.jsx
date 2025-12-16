import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, staggerContainer, staggerItem } from "../../utils/motion.js";
import { useTranslations } from "../../utils/i18n.js";
import Icon from "../ui/Icon.jsx";
import ProjectModal from "../ui/ProjectModal.jsx";

/**
 * Projects Section Component
 * Showcase of Gabriel's real projects
 */
export default function Projects({ lang = "en" }) {
  const t = useTranslations(lang);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Instalaciones Garcia's",
      description:
        lang === "en"
          ? "Full-stack web application for a professional installation services company. Features service catalog, interactive contact forms, admin dashboard, and cloud deployment."
          : "Aplicación web full-stack para empresa de servicios de instalación. Incluye catálogo de servicios, formularios interactivos, panel de administración y despliegue en la nube.",
      longDescription:
        lang === "en"
          ? "A comprehensive digital solution for a local installation business. The platform streamlines client acquisition through an intuitive service catalog and quote request system. It features a custom admin dashboard for managing inquiries and services, built with React and Supabase for real-time data handling. The UI is designed with a mobile-first approach, ensuring accessibility for all customers."
          : "Una solución digital integral para un negocio local de instalaciones. La plataforma agiliza la captación de clientes a través de un catálogo de servicios intuitivo y un sistema de solicitud de presupuestos. Cuenta con un panel de administración personalizado para gestionar consultas y servicios, construido con React y Supabase para el manejo de datos en tiempo real. La interfaz está diseñada con un enfoque mobile-first.",
      tech: ["Astro", "React", "Express", "Supabase", "Vercel"],
      features: [
        lang === "en"
          ? "Real-time Quote System"
          : "Sistema de Presupuestos en Tiempo Real",
        lang === "en" ? "Admin Dashboard" : "Panel de Administración",
        lang === "en" ? "Image Optimization" : "Optimización de Imágenes",
        lang === "en" ? "Responsive Design" : "Diseño Responsivo",
      ],
      image: "/assets/images/projects/garcias1.webp",
      gallery: [
        "/assets/images/projects/garcias1.webp",
        "/assets/images/projects/garcias2.webp",
        "/assets/images/projects/garcias3.webp",
        "/assets/images/projects/garcias4.webp",
        "/assets/images/projects/garcias5.webp",
        "/assets/images/projects/garcias6.webp",
      ],
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
      longDescription:
        lang === "en"
          ? "A customized Simple Machines Forum (SMF) implementation for a large Harry Potter fan community. This project involved extensive PHP modification to create custom themes, interactive modules, and gamification features. It supports a high volume of concurrent users and features a custom-built spell casting system and house points tracker."
          : "Una implementación personalizada de Simple Machines Forum (SMF) para una gran comunidad de fans de Harry Potter. Este proyecto implicó una extensa modificación de PHP para crear temas personalizados, módulos interactivos y características de gamificación. Soporta un alto volumen de usuarios concurrentes y cuenta con un sistema de lanzamiento de hechizos y puntos de casa personalizado.",
      tech: ["PHP", "JavaScript", "HTML/CSS", "Laragon", "Git"],
      features: [
        lang === "en" ? "Custom SMF Themes" : "Temas SMF Personalizados",
        lang === "en" ? "Gamification System" : "Sistema de Gamificación",
        lang === "en" ? "High Performance" : "Alto Rendimiento",
        lang === "en" ? "Community Modules" : "Módulos Comunitarios",
      ],
      image: "/assets/images/projects/harrypotter.webp",
      gallery: [
        "/assets/images/projects/harry-potter-foro.webp",
        "/assets/images/projects/harry-potterforo2.webp",
        "/assets/images/projects/harry-potterforo4.webp",
        "/assets/images/projects/harry-potterforo5.webp",
        "/assets/images/projects/harry-potterforo6.webp",
        "/assets/images/projects/harry-potterforo7.webp",
      ],
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
      longDescription:
        lang === "en"
          ? "My personal showcase designed to demonstrate modern web development capabilities. Built with performance and aesthetics in mind, utilizing Astro for fast static generation and React for dynamic interactive islands. It features a custom internationalization system, comprehensive accessibility compliance, and a 'Intense Black' premium design theme."
          : "Mi escaparate personal diseñado para demostrar capacidades de desarrollo web moderno. Construido teniendo en cuenta el rendimiento y la estética, utilizando Astro para la generación estática rápida y React para islas interactivas dinámicas. Cuenta con un sistema de internacionalización personalizado, cumplimiento integral de accesibilidad y un tema de diseño premium 'Black Intense'.",
      tech: ["Astro", "React", "Supabase", "Framer Motion", "Tailwind"],
      features: [
        lang === "en"
          ? "Server-Side Rendering"
          : "Renderizado del Lado del Servidor",
        lang === "en" ? "Internationalization" : "Internacionalización",
        lang === "en"
          ? "Perfect Lighthouse Score"
          : "Puntuación Perfecta en Lighthouse",
        lang === "en" ? "Glassmorphism UI" : "Interfaz Glassmorphism",
      ],
      image: "", // CSS gradient fallback
      gallery: [
        "/assets/images/projects/certificate-fullstack.webp",
        "/assets/images/projects/github-contributions.webp",
        // Add more if available or reuse profile pic as placeholder if needed
      ],
      github: "https://github.com/GaboInsame6489/portfolio",
      live: "https://gabriel-g.dev",
      featured: true,
    },
  ];

  return (
    <>
      <motion.section
        id="projects"
        className="min-h-screen flex items-center py-16 md:py-20 px-4 bg-black"
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
                className="group bg-black rounded-2xl md:rounded-3xl overflow-hidden border border-purple-500/10 hover:border-purple-500 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer"
                variants={staggerItem}
                whileHover={{ y: -8 }}
                onClick={() => setSelectedProject(project)}
                layoutId={`project-card-${project.id}`}
              >
                {/* Project Image */}
                <div className="aspect-video relative overflow-hidden bg-gray-900 border-b border-purple-500/10 dark:border-purple-400/10">
                  {project.image ? (
                    <img
                      src={project.image}
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
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                    <span className="px-6 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {lang === "en" ? "View Details" : "Ver Detalles"}
                    </span>
                  </div>
                </div>

                <div className="p-5 md:p-6">
                  {/* Project Title */}
                  <h3 className="text-lg md:text-xl font-bold mb-2 text-white group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>

                  {/* Project Description */}
                  <p className="text-gray-400 mb-4 text-xs md:text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 md:px-3 py-1 text-xs bg-purple-500/5 dark:bg-purple-400/5 text-purple-700 dark:text-purple-300 rounded-full border border-purple-500/10 dark:border-purple-400/10"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 md:px-3 py-1 text-xs text-gray-500">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        lang={lang}
      />
    </>
  );
}
