import React from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../../utils/motion.js";
import { useTranslations } from "../../utils/i18n.js";
import TechGrid from "../ui/TechGrid.jsx";
import StatsCounter from "../ui/StatsCounter.jsx";
import Icon from "../ui/Icon.jsx";

/**
 * About Section Component
 * Professional bio, skills, and profile - Gabriel González
 */
export default function About({ lang = "en" }) {
  const t = useTranslations(lang);

  return (
    <section
      id="about"
      className="min-h-screen mb-20 flex items-center justify-center py-20 px-4 bg-black"
    >
      <div className="container mx-auto max-w-7xl">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center mb-24"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {/* Text Content */}
          <motion.div variants={fadeUp}>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              {t("about.title")}
            </h2>
            <div className="prose prose-invert prose-lg text-gray-300 mb-8">
              <p className="mb-4 leading-relaxed">{t("about.p1")}</p>
              <p className="mb-6 leading-relaxed">{t("about.p2")}</p>

              <div className="flex flex-col gap-3 mb-8">
                <span className="flex items-center gap-2 text-purple-400">
                  <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
                  {t("about.location")}
                </span>
                <span className="flex items-center gap-2 text-blue-400">
                  <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                  {t("about.status")}
                </span>
              </div>
            </div>

            {/* Stats Counter */}
            <StatsCounter lang={lang} />

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">
              <motion.a
                href="#contact"
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white rounded-xl font-medium transition-all shadow-lg shadow-purple-900/20 hover:shadow-purple-900/40 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon name="mail" size={20} />
                {lang === "en" ? "Let's Talk" : "Hablemos"}
              </motion.a>
              <motion.a
                href="/cv.pdf"
                download
                className="px-6 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-purple-500/50 rounded-xl font-medium transition-all flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon name="arrow" size={20} />
                {lang === "en" ? "Download CV" : "Descargar CV"}
              </motion.a>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            variants={fadeUp}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-md aspect-square">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-3xl blur-3xl"></div>

              {/* Image container */}
              <motion.div
                className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src="/assets/images/projects/garcias.webp"
                  alt="Gabriel González"
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </motion.div>

              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-4 -right-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-2xl shadow-lg shadow-purple-900/40 border border-white/10"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <p className="font-bold text-sm">
                  {lang === "en" ? "Available for work" : "Disponible"}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Tech Grid Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold mb-12 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
              {t("about.skills")}
            </span>
          </h3>
          <TechGrid />
        </motion.div>
      </div>
    </section>
  );
}
