import React from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, staggerItem } from "../../utils/motion.js";
import { useTranslations } from "../../utils/i18n.js";
import Icon from "../ui/Icon.jsx";

export default function Hero({ lang = "en" }) {
  const t = useTranslations(lang);

  return (
    <motion.section
      className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden"
      initial="initial"
      animate="animate"
      variants={staggerContainer}
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Mesh gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950 dark:via-purple-950 dark:to-pink-950 opacity-30" />

        {/* Animated blur circles */}
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full blur-3xl opacity-20"
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
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-pink-400 to-orange-600 rounded-full blur-3xl opacity-20"
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

      <div className="container mx-auto px-4 z-10 text-center">
        {/* Profile Image */}
        <motion.div variants={staggerItem} className="mb-8 inline-block">
          <motion.div
            className="relative w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white/20 dark:border-black/20 shadow-2xl"
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src="/assets/images/profile.webp"
              alt="Gabriel González"
              className="w-full h-full object-cover"
            />
            {/* Glassmorphism overlay on hover */}
            <motion.div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm opacity-0 hover:opacity-100 transition-opacity" />
          </motion.div>
        </motion.div>

        <motion.div variants={staggerItem} className="mb-6 inline-block">
          <span className="px-4 py-2 rounded-full border border-black/10 dark:border-white/10 text-sm font-medium bg-white/50 dark:bg-black/50 backdrop-blur-sm">
            Available for new opportunities
          </span>
        </motion.div>

        <motion.h1
          className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter mb-8 leading-tight"
          variants={staggerItem}
        >
          FULL STACK
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
            DEVELOPER
          </span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
          variants={staggerItem}
        >
          {t("hero.subtitle")}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
          variants={staggerItem}
        >
          <a
            href="#projects"
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
          >
            <span className="relative z-10">{t("hero.cta1")}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
          </a>

          <a
            href="#contact"
            className="group flex items-center gap-2 text-lg font-medium hover:opacity-70 transition-opacity"
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
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1,
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <Icon name="chevronDown" className="w-6 h-6 opacity-50" />
        </motion.div>
      </div>
    </motion.section>
  );
}
