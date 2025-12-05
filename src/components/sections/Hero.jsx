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
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-black/5 dark:bg-white/5 rounded-full blur-3xl opacity-50 animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-black/3 dark:bg-white/3 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
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
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-500 to-black dark:from-white dark:via-gray-400 dark:to-white">
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
            className="group relative px-8 py-4 bg-black text-white dark:bg-white dark:text-black rounded-full font-bold text-lg overflow-hidden transition-all hover:scale-105"
          >
            <span className="relative z-10">{t("hero.cta1")}</span>
            <div className="absolute inset-0 bg-gray-800 dark:bg-gray-200 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
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
