import React from "react";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "../../utils/motion.js";
import { useTranslations } from "../../utils/i18n.js";
import Icon from "../ui/Icon.jsx";

export default function Hero({ lang = "en" }) {
  const t = useTranslations(lang);

  return (
    <motion.section
      className="relative min-h-[100dvh] pt-28 pb-4 flex flex-col justify-center items-center px-4 overflow-hidden bg-black"
      initial="initial"
      animate="animate"
      variants={staggerContainer}
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Mesh gradient background - Dark only */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.1),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.1),transparent_40%)]" />

        {/* Animated blur circles */}
        <motion.div
          className="absolute top-1/4 left-10 w-48 h-48 md:w-64 md:h-64 bg-purple-600/20 rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-10 w-64 h-64 md:w-96 md:h-96 bg-blue-600/20 rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="container mx-auto max-w-4xl z-10 text-center relative">
        {/* Profile Image - Compact Size */}
        <motion.div variants={staggerItem} className="mb-5 inline-block">
          <motion.div
            className="relative w-24 h-24 md:w-24 md:h-24 mx-auto rounded-full overflow-hidden border-2 border-purple-500/50 shadow-[0_0_30px_rgba(168,85,247,0.3)]"
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src="/assets/images/profile.webp"
              alt="Gabriel González"
              className="w-full h-full object-cover"
            />
            {/* Glassmorphism overlay on hover */}
            <motion.div className="absolute inset-0 bg-purple-500/10 backdrop-blur-[1px] opacity-0 hover:opacity-100 transition-opacity" />
          </motion.div>
        </motion.div>

        {/* Status Badge - Reduced Gap */}
        <motion.div variants={staggerItem} className="mb-3 block">
          <span className="inline-block px-4 py-1.5 rounded-full border border-purple-500/30 text-xs font-medium bg-purple-500/10 text-purple-200 backdrop-blur-md shadow-[0_0_15px_rgba(168,85,247,0.1)]">
            Available for new opportunities
          </span>
        </motion.div>

        {/* Viewport-First Title: Aggressively Compact */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter mb-2 leading-[1.1] px-4 text-white"
          variants={staggerItem}
        >
          FULL STACK
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 filter drop-shadow-[0_0_20px_rgba(168,85,247,0.3)]">
            DEVELOPER
          </span>
        </motion.h1>

        {/* Subtitle - Reduced Gap */}
        <motion.p
          className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto mb-5 leading-relaxed px-4"
          variants={staggerItem}
        >
          {t("hero.subtitle")}
        </motion.p>

        {/* Slim Buttons: py-2 */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4"
          variants={staggerItem}
        >
          <a
            href="#projects"
            aria-label={t("hero.cta1")}
            className="w-full sm:w-auto group relative px-8 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-bold text-sm md:text-base overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(168,85,247,0.4)]"
          >
            <span className="relative z-10">{t("hero.cta1")}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>

          <a
            href="#contact"
            aria-label={t("hero.cta2")}
            className="w-full sm:w-auto group flex items-center justify-center gap-2 px-8 py-2 text-sm md:text-base font-medium text-gray-400 hover:text-white transition-colors"
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
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 hidden md:block"
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
            className="w-6 h-6 text-purple-500 animate-bounce"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
