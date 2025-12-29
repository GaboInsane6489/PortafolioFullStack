import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, staggerItem } from "../../utils/motion.js";
import { useTranslations, $lang } from "../../utils/i18n.js";
import { useStore } from "@nanostores/react";
import Icon from "../ui/Icon.jsx";
import ProjectModal from "../ui/ProjectModal.jsx";

/**
 * Projects Section Component
 * Showcase of Gabriel's real projects
 */
export default function Projects() {
  const lang = useStore($lang);
  const t = useTranslations(lang);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Instalaciones Garcia's",
      description: t("projects.garcias.description"),
      longDescription: t("projects.garcias.longDescription"),
      tech: ["Astro", "React", "Express", "Supabase", "Vercel"],
      features: [
        t("projects.garcias.feature1"),
        t("projects.garcias.feature2"),
        t("projects.garcias.feature3"),
        t("projects.garcias.feature4"),
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
      description: t("projects.hph.description"),
      longDescription: t("projects.hph.longDescription"),
      tech: ["PHP", "JavaScript", "HTML/CSS", "Laragon", "Git"],
      features: [
        t("projects.hph.feature1"),
        t("projects.hph.feature2"),
        t("projects.hph.feature3"),
        t("projects.hph.feature4"),
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
      title: t("projects.portfolio.title"),
      description: t("projects.portfolio.description"),
      longDescription: t("projects.portfolio.longDescription"),
      tech: ["Astro", "React", "Supabase", "Framer Motion", "Tailwind"],
      features: [
        t("projects.portfolio.feature1"),
        t("projects.portfolio.feature2"),
        t("projects.portfolio.feature3"),
        t("projects.portfolio.feature4"),
      ],
      image: "/assets/images/projects/ColegioJoseMarti1.jpeg",
      gallery: [
        "/assets/images/projects/ColegioJoseMarti1.jpeg",
        "/assets/images/projects/ColegioJoseMarti2.jpeg",
        "/assets/images/projects/ColegioJoseMarti3.jpeg",
        "/assets/images/projects/ColegioJoseMarti4.jpeg",
        "/assets/images/projects/ColegioJoseMarti5.jpeg",
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
        className="min-h-screen flex items-center py-16 md:py-20 px-4 bg-black/20 backdrop-blur-sm"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
      >
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 text-center"
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
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white p-8">
                      <span className="font-display font-bold text-5xl md:text-6xl opacity-20 group-hover:opacity-40 transition-opacity">
                        PF
                      </span>
                    </div>
                  )}

                  {/* Overlay actions */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                    <span className="px-6 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {t("projects.viewDetails")}
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
