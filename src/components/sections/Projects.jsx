import React, { useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import { fadeUp, staggerContainer, staggerItem } from "../../utils/motion.js";
import { useTranslations, $lang } from "../../utils/i18n.js";
import { useStore } from "@nanostores/react";
import Icon from "../ui/Icon.jsx";
import ProjectModal from "../ui/ProjectModal.jsx";

/**
 * Projects Section Component
 * Showcase of Gabriel's real projects
 */
// --- Tilt Card Component ---
const TiltCard = ({ project, onClick }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [5, -5]);
  const rotateY = useTransform(x, [-100, 100], [-5, 5]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.article
      onClick={onClick}
      initial="initial"
      whileInView="animate"
      whileHover="hover"
      variants={staggerItem}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      className="group relative bg-[#0a0a0f] rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 hover:border-purple-500 transition-colors duration-500 cursor-pointer shadow-lg hover:shadow-purple-500/20"
    >
      {/* Holographic Glare */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-overlay"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              circle at ${Math.abs(x.get() + 200)}px ${Math.abs(y.get() + 200)}px,
              rgba(255, 255, 255, 0.1),
              transparent 80%
            )
          `,
        }}
      />

      {/* Image Container */}
      <div className="aspect-video relative overflow-hidden bg-gray-900 border-b border-white/5">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-700 ease-out"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
            <span className="font-display font-bold text-5xl opacity-30">
              PF
            </span>
          </div>
        )}

        {/* Floating Tag */}
        <div className="absolute top-4 right-4 z-20">
          <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-black bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.4)]">
            {project.featured ? "Featured" : "Project"}
          </span>
        </div>

        {/* View Details Overlay */}
        <div className="absolute inset-0 z-20 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <span className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-bold uppercase tracking-wide text-sm shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105 transition-transform">
              View Project <Icon name="arrowRight" size={16} />
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-8 relative z-0 bg-[#0a0a0f] group-hover:bg-[#0f0f16] transition-colors">
        <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-purple-200 transition-all">
          {project.title}
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 mb-6">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tech.slice(0, 3).map((tech, i) => (
            <motion.span
              key={tech}
              custom={i}
              variants={{
                hover: (i) => ({
                  y: -4,
                  rotate: (i - 1) * 3, // Fan effect: -3deg, 0deg, 3deg
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                }),
              }}
              className="px-3 py-1 text-xs font-medium text-purple-300 bg-purple-500/10 border border-purple-500/20 rounded-lg"
            >
              {tech}
            </motion.span>
          ))}
          {project.tech.length > 3 && (
            <span className="px-3 py-1 text-xs font-medium text-gray-500 border border-white/5 rounded-lg">
              +{project.tech.length - 3}
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
};

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
      github: "https://github.com/GaboInsane6489/instalacionesgarciasfronted",
      live: "https://instalacionesgarciasfronted.vercel.app",
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
      <section
        id="projects"
        className="relative min-h-screen py-24 md:py-32 px-4 bg-black overflow-hidden"
      >
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mb-16 md:mb-24 text-center max-w-3xl mx-auto"
          >
            <motion.span
              variants={fadeUp}
              className="inline-block px-4 py-2 mb-4 rounded-full bg-white/5 border border-white/10 text-sm font-mono text-gray-400"
            >
              SELECTED WORKS 2023-2025
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 tracking-tight"
            >
              {t("projects.title")}
            </motion.h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {projects.map((project) => (
              <TiltCard
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </motion.div>
        </div>
      </section>

      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        lang={lang}
      />
    </>
  );
}
