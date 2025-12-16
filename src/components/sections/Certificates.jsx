import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06 },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

export default function Certificates({ lang = "en" }) {
  const [active, setActive] = useState(null);

  const t = {
    title: lang === "en" ? "Certifications" : "Certificaciones",
    hint:
      lang === "en"
        ? "Select a certification to view details"
        : "Selecciona una certificación para ver detalles",
    verify: lang === "en" ? "Verify" : "Verificar",
    close: lang === "en" ? "Close" : "Cerrar",
    view: lang === "en" ? "View certificate" : "Ver certificado",
    preview:
      lang === "en"
        ? "Preview — open verification for full document"
        : "Vista previa — abre la verificación para ver el documento completo",
  };

  const certificates = [
    {
      id: 1,
      title: lang === "en" ? "Full Stack Development" : "Desarrollo Full Stack",
      issuer: "University Full Stack Program",
      date: "2024",
      skills: ["React", "Node.js", "MongoDB", "Express"],
      image: "/assets/images/certificates/FullStackCertificate.jpeg",
      verifyUrl: "#",
    },
    {
      id: 2,
      title: "Modern JavaScript",
      issuer: "Tech Academy",
      date: "2024",
      skills: ["ES2023", "Async/Await", "Modules"],
      verifyUrl: "#",
    },
    {
      id: 3,
      title: lang === "en" ? "Web Performance" : "Rendimiento Web",
      issuer: "Performance Institute",
      date: "2024",
      skills: ["Lighthouse", "CWV", "Optimization"],
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
    <section id="certificates" className="relative py-24 px-6 bg-black">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            {t.title}
          </h2>
          <p className="mt-2 text-sm text-gray-400 max-w-md">{t.hint}</p>
        </motion.header>

        {/* Grid */}
        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {certificates.map((cert) => (
            <motion.li
              key={cert.id}
              variants={item}
              onClick={() => setActive(cert)}
              className="group relative cursor-pointer rounded-xl border border-white/10 bg-[var(--glass-bg-dark)] backdrop-blur-md px-5 py-4 transition-all duration-200 hover:border-[var(--color-primary)] hover:shadow-[0_0_0_1px_var(--color-primary-dark)]"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-sm font-semibold text-white group-hover:text-[var(--color-primary-light)] transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-gray-400 mt-0.5">
                    {cert.issuer} · {cert.date}
                  </p>
                </div>

                <span className="text-xs text-gray-500 group-hover:text-[var(--color-primary-light)] transition-colors">
                  →
                </span>
              </div>

              <div className="mt-3 flex flex-wrap gap-1.5">
                {cert.skills.slice(0, 3).map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 px-2 py-0.5 text-[10px] text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <span className="mt-3 block text-[10px] text-gray-500 group-hover:text-gray-400 transition-colors">
                {t.view}
              </span>
            </motion.li>
          ))}
        </motion.ul>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-full max-w-md max-h-[90vh] overflow-hidden rounded-2xl border border-white/10 bg-[var(--glass-bg-dark)] backdrop-blur-xl shadow-2xl"
            >
              {/* Scrollable content */}
              <div className="overflow-y-auto px-6 pt-6 pb-4">
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-white">
                    {active.title}
                  </h3>
                  <p className="text-xs text-gray-400">
                    {active.issuer} · {active.date}
                  </p>
                </div>

                {active.image && (
                  <>
                    <div className="mt-4 flex justify-center">
                      <img
                        src={active.image}
                        alt={`${active.title} certificate`}
                        loading="lazy"
                        decoding="async"
                        className="max-h-[42vh] w-auto rounded-lg border border-white/10 object-contain bg-black"
                      />
                    </div>

                    <p className="mt-2 text-center text-[10px] text-gray-500">
                      {t.preview}
                    </p>
                  </>
                )}

                <ul className="mt-4 flex flex-wrap gap-2">
                  {active.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full bg-[var(--color-primary)/20] px-3 py-1 text-xs text-[var(--color-primary-light)]"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer */}
              <div className="flex justify-end gap-3 border-t border-white/10 px-6 py-4">
                <a
                  href={active.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-[var(--color-primary)] px-4 py-2 text-xs font-medium text-white hover:bg-[var(--color-primary-dark)] transition-colors"
                >
                  {t.verify}
                </a>

                <button
                  onClick={() => setActive(null)}
                  className="text-xs text-gray-400 hover:text-white transition-colors"
                >
                  {t.close}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
