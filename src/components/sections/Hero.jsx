import React from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, staggerItem } from "../../utils/motion.js";
import { useTranslations } from "../../utils/i18n.js";
import Icon from "../ui/Icon.jsx";

export default function Hero({ lang = "en" }) {
  const t = useTranslations(lang);

  return (
    <motion.section
      className="relative min-h-screen flex items-center justify-center px-4 py-16 overflow-hidden"
      initial="initial"
      animate="animate"
      variants={staggerContainer}
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Mesh gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 dark:from-purple-950/30 dark:via-indigo-950/30 dark:to-blue-950/30" />

        {/* Animated blur circles */}
        <motion.div
          className="absolute top-1/4 left-10 w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-purple-400 to-indigo-600 rounded-full blur-3xl opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-10 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-br from-indigo-400 to-blue-600 rounded-full blur-3xl opacity-20"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.25, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="container mx-auto max-w-4xl z-10 text-center">
        {/* Profile Image */}
        <motion.div variants={staggerItem} className="mb-6 inline-block">
          <motion.div
            className="relative w-24 h-24 md:w-28 md:h-28 mx-auto rounded-full overflow-hidden border-4 border-purple-500/20 dark:border-purple-400/20 shadow-2xl shadow-purple-500/20"
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src="/assets/images/profile.webp"
              alt="Gabriel González"
              className="w-full h-full object-cover"
            />
            {/* Glassmorphism overlay on hover */}
            <motion.div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 backdrop-blur-sm opacity-0 hover:opacity-100 transition-opacity" />
          </motion.div>
        </motion.div>

        <motion.div variants={staggerItem} className="mb-4 inline-block">
          <span className="px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-purple-500/20 dark:border-purple-400/20 text-xs md:text-sm font-medium bg-white/50 dark:bg-black/50 backdrop-blur-sm">
            Available for new opportunities
          </span>
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter mb-4 md:mb-6 leading-tight px-4"
          variants={staggerItem}
        >
          FULL STACK
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 dark:from-purple-400 dark:via-indigo-400 dark:to-blue-400">
            DEVELOPER
          </span>
        </motion.h1>

        <motion.p
          className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed px-4"
          variants={staggerItem}
        >
          {t("hero.subtitle")}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4"
          variants={staggerItem}
        >
          <a
            href="#projects"
            className="w-full sm:w-auto group relative px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full font-bold text-sm md:text-base overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
          >
            <span className="relative z-10">{t("hero.cta1")}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto group flex items-center justify-center gap-2 text-sm md:text-base font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            {t("hero.cta2")}
            <Icon
              name="arrow"
              className="transform group-hover:translate-x-1 transition-transform"
            />
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1,
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <Icon
            name="chevronDown"
            className="w-5 h-5 md:w-6 md:h-6 opacity-50 text-purple-600 dark:text-purple-400"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
