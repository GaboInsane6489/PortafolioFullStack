import React from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, staggerItem } from "../../utils/motion.js";
import Icon from "../ui/Icon.jsx";
import TechStack from "../ui/TechStack.jsx";
import { useTranslations } from "../../utils/i18n.js";

/**
 * About Section Component
 * Professional bio, skills, and profile - Gabriel González
 */
export default function About({ lang = "en" }) {
  const t = useTranslations(lang);

  const skills = [
    // Frontend
    "React",
    "Astro",
    "HTML5",
    "CSS3",
    "JavaScript",
    "Tailwind CSS",
    "Framer Motion",
    // Backend
    "Node.js",
    "Express",
    "Supabase",
    "MongoDB",
    "PHP",
    // Tools & DevOps
    "Git",
    "GitHub",
    "Vercel",
    "Postman",
  ];

  return (
    <motion.section
      id="about"
      className="min-h-screen flex items-center py-16 md:py-20 px-4 bg-black"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeUp}
    >
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 text-center"
          variants={fadeUp}
        >
          {t("about.title")}
        </motion.h2>

        <motion.div
          className="space-y-8 md:space-y-10"
          variants={staggerContainer}
        >
          {/* Bio Content */}
          <motion.div
            variants={staggerItem}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="space-y-3 md:space-y-4 text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-light">
              <p>{t("about.bio1")}</p>
              <p>{t("about.bio2")}</p>
            </div>

            {/* Location */}
            <div className="pt-4 md:pt-6 text-xs md:text-sm text-gray-500 flex items-center justify-center gap-2">
              <Icon name="location" size={16} />
              Distrito Federal, Venezuela
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div variants={staggerItem} className="pt-4 md:pt-6">
            <h3 className="text-xl md:text-2xl font-display font-bold mb-6 md:mb-8 text-center">
              {t("about.skills")}
            </h3>
            <TechStack skills={skills} />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
