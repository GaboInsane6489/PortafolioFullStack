import React from "react";
import { motion } from "framer-motion";
import { fadeUp } from "../../utils/motion.js";
import Timeline from "../ui/Timeline.jsx";

/**
 * Experience Section Component
 * Gabriel's professional work history
 */
export default function Experience({ lang = "en" }) {
  const experiences = [
    {
      title:
        lang === "en" ? "Full Stack Developer" : "Desarrollador Full Stack",
      subtitle: "HarryPotterHead",
      link: "https://www.linkedin.com/company/harrypotterhead/",
      date: lang === "en" ? "Nov 2024 - Present" : "Nov 2024 - Presente",
      description:
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
      tags: ["PHP", "JavaScript", "HTML/CSS", "Laragon", "Git", "SEO"],
    },
    {
      title:
        lang === "en"
          ? "Full Stack Programming Student"
          : "Estudiante de Programación Full Stack",
      subtitle:
        lang === "en"
          ? "University Full Stack Course"
          : "Curso Universitario Full Stack",
      link: null,
      date: "2023 - 2024",
      description:
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
      tags: ["React", "Node.js", "Express", "MongoDB", "Git", "Vercel"],
    },
  ];

  return (
    <section id="experience" className="py-24 px-4 bg-black">
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-16 text-center text-white"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          {lang === "en" ? "Work Experience" : "Experiencia Laboral"}
        </motion.h2>

        <Timeline items={experiences} />
      </div>
    </section>
  );
}
