import React from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../../utils/motion.js";
import { useTranslations } from "../../utils/i18n.js";
import TechStack from "../ui/TechStack.jsx";
import StatsCounter from "../ui/StatsCounter.jsx";

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
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
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
            <div className="prose prose-invert prose-lg text-gray-400 mb-8">
              <p className="mb-4">{t("about.p1")}</p>
              <p className="mb-6">{t("about.p2")}</p>

              <div className="flex flex-col gap-2 mb-8">
                <span className="flex items-center gap-2 text-purple-400">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  {t("about.location")}
                </span>
                <span className="flex items-center gap-2 text-blue-400">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  {t("about.status")}
                </span>
              </div>
            </div>

            {/* Stats Counter */}
            <StatsCounter lang={lang} />

            <h3 className="text-2xl font-bold mb-6 text-white mt-12">
              {t("about.skills")}
            </h3>
            <TechStack />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
