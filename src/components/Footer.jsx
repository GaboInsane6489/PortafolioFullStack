import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "./ui/Icon.jsx";
import { useTranslations, $lang } from "../utils/i18n.js";
import { useStore } from "@nanostores/react";

export default function Footer() {
  const lang = useStore($lang);
  const t = useTranslations(lang);
  const [isWsOpen, setIsWsOpen] = useState(false);
  const year = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      icon: "github",
      url: "https://github.com/GaboInsame6489",
      label: "GitHub Profile",
    },
    {
      name: "LinkedIn",
      icon: "linkedin",
      url: "https://www.linkedin.com/in/gabriel-alexander-gonz%C3%A1lez-garc%C3%ADa-31476636a/",
      label: "LinkedIn Profile",
    },
    {
      name: "WhatsApp",
      icon: "whatsapp",
      url: "https://wa.me/584120197779", // Replace with actual number if needed
      label: "WhatsApp",
    },
  ];

  return (
    <footer className="relative pt-32 pb-10 overflow-hidden">
      {/* 
         Transparent background to show video.
         We add a gradient from black to transparent to black to ensure readability 
      */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none" />

      {/* Glass overlay for content area */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-end mb-20">
          {/* Main CTA */}
          <div className="space-y-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-display font-bold tracking-tighter text-white leading-[1.1]"
            >
              {t("footer.titleLine1")} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-white to-blue-400 animate-gradient">
                {t("footer.titleLine2")}
              </span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <a
                href="mailto:gabrielgg2005ve@gmail.com"
                className="inline-flex items-center gap-3 text-xl md:text-2xl text-gray-300 hover:text-white transition-colors border-b border-white/20 hover:border-white pb-1 group"
              >
                gabrielgg2005ve@gmail.com
                <Icon
                  name="arrow"
                  size={24}
                  className="-rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </a>
            </motion.div>
          </div>

          {/* Social Grid */}
          <div className="flex flex-col md:items-end gap-8">
            <div className="flex gap-4 relative">
              {/* GitHub */}
              <motion.a
                href="https://github.com/GaboInsane6489"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Github Profile"
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                  backgroundColor: "rgba(128, 90, 213, 0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                className="p-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md transition-all duration-300 group hover:border-purple-500/50 hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.4)]"
              >
                <Icon
                  name="github"
                  size={28}
                  className="text-gray-300 group-hover:text-purple-400 transition-colors"
                />
              </motion.a>

              {/* LinkedIn */}
              <motion.a
                href="https://www.linkedin.com/in/gabriel-alexander-gonzález-garcía-31476636a/?locale=es_ES"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                whileHover={{
                  scale: 1.1,
                  rotate: -5,
                  backgroundColor: "rgba(59, 130, 246, 0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                className="p-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md transition-all duration-300 group hover:border-blue-500/50 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.4)]"
              >
                <Icon
                  name="linkedin"
                  size={28}
                  className="text-gray-300 group-hover:text-blue-400 transition-colors"
                />
              </motion.a>

              {/* WhatsApp - Interactive Popup */}
              <div className="relative">
                <motion.button
                  onClick={() => setIsWsOpen(!isWsOpen)}
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    backgroundColor: "rgba(34, 197, 94, 0.2)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Toggle WhatsApp Menu"
                  aria-expanded={isWsOpen}
                  className={`p-4 border rounded-2xl backdrop-blur-md transition-all duration-300 group hover:shadow-[0_0_30px_-5px_rgba(34,197,94,0.4)] ${isWsOpen ? "bg-green-500/20 border-green-500 ring-2 ring-green-500/50" : "bg-white/5 border-white/10 hover:border-green-500/50"}`}
                >
                  <Icon
                    name="whatsapp"
                    size={28}
                    className={`transition-colors ${isWsOpen ? "text-green-400" : "text-gray-300 group-hover:text-green-400"}`}
                  />
                </motion.button>

                {/* Dropdown */}
                <AnimatePresence>
                  {isWsOpen && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.8, y: 10 }}
                      className="absolute bottom-full right-0 mb-4 w-72 bg-[#1c1c1c] border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-50 p-4"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                          <Icon name="whatsapp" size={20} />
                        </div>
                        <div>
                          <div className="text-white font-bold text-sm">
                            {t("footer.whatsapp.title")}
                          </div>
                          <div className="text-green-400 text-xs flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                            Online
                          </div>
                        </div>
                      </div>

                      <div className="bg-white/5 rounded-lg p-3 text-center mb-3">
                        <div className="text-xs text-gray-400 mb-1">Number</div>
                        <div className="text-white font-mono text-lg tracking-wider">
                          {t("footer.whatsapp.number")}
                        </div>
                      </div>

                      <a
                        href={`https://wa.me/584127893937`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full py-2 bg-green-600 hover:bg-green-500 text-white rounded-lg font-bold text-sm transition-colors"
                      >
                        {t("footer.whatsapp.action")}
                        <Icon name="externalLink" size={14} />
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            <div className="text-right">
              <p className="text-sm text-gray-400 font-medium uppercase tracking-widest flex items-center justify-end gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                {t("footer.available")}
              </p>
              <p className="text-xs text-gray-600 mt-2">
                {t("footer.location")}
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm text-gray-500 font-medium tracking-wide">
          <p>
            &copy; {year} Gabriel González. {t("footer.rights")}
          </p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">
              {t("footer.privacy")}
            </a>
            <a href="#" className="hover:text-white transition-colors">
              {t("footer.terms")}
            </a>
            <a href="#top" className="hover:text-white transition-colors">
              {t("footer.backToTop")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
