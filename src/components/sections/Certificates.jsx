import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, staggerItem } from "../../utils/motion.js";

/**
 * Certificates Section Component
 * Interactive gallery of professional certifications
 */
export default function Certificates({ lang = "en" }) {
  const [selectedCert, setSelectedCert] = useState(null);

  const certificates = [
    {
      id: 1,
      title: lang === "en" ? "Full Stack Development" : "Desarrollo Full Stack",
      issuer: "University Full Stack Course",
      date: "2024",
      skills: ["React", "Node.js", "MongoDB", "Express"],
      image: "/assets/images/certificates/fullstack-cert.webp",
      verifyUrl: "#",
    },
    {
      id: 2,
      title: lang === "en" ? "Modern JavaScript" : "JavaScript Moderno",
      issuer: "Tech Academy",
      date: "2024",
      skills: ["ES6+", "Async/Await", "Modules"],
      verifyUrl: "#",
    },
    {
      id: 3,
      title: lang === "en" ? "Web Performance" : "Rendimiento Web",
      issuer: "Performance Institute",
      date: "2024",
      skills: ["Lighthouse", "Core Web Vitals", "Optimization"],
      verifyUrl: "#",
    },
    {
      id: 4,
      title: lang === "en" ? "Accessibility (A11y)" : "Accesibilidad (A11y)",
      issuer: "W3C",
      date: "2024",
      skills: ["WCAG", "ARIA", "Screen Readers"],
      verifyUrl: "#",
    },
  ];

  return (
    <motion.section
      id="certificates"
      className="py-24 px-4 bg-white dark:bg-black"
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
          {lang === "en" ? "Certifications" : "Certificaciones"}
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
        >
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              className="group cursor-pointer"
              variants={staggerItem}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedCert(cert)}
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-xl overflow-hidden border border-black/10 dark:border-white/10 hover:border-black dark:hover:border-white transition-colors flex items-center justify-center relative">
                {cert.image ? (
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-center p-6">
                    <div className="text-4xl font-bold text-black/20 dark:text-white/20 mb-2">
                      {cert.id}
                    </div>
                    <div className="text-xs font-medium opacity-60">
                      {lang === "en" ? "Certificate" : "Certificado"}
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-3">
                <h3 className="font-semibold text-sm line-clamp-2 group-hover:underline">
                  {cert.title}
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                  {cert.issuer} • {cert.date}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          className="text-center text-sm text-gray-500 mt-12"
          variants={fadeUp}
        >
          {lang === "en"
            ? "Click on any certificate to view details"
            : "Haz clic en cualquier certificado para ver detalles"}
        </motion.p>
      </div>
    </motion.section>
  );
}
