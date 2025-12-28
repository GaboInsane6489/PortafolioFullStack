import React from "react";
import { motion } from "framer-motion";
import Icon from "./ui/Icon.jsx";
import { useTranslations, $lang } from "../utils/i18n.js";
import { useStore } from "@nanostores/react";

export default function Footer() {
  const lang = useStore($lang);
  const t = useTranslations(lang);
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
              Let's create <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-white to-blue-400 animate-gradient">
                something epic.
              </span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <a
                href="mailto:gabrielgg2005ve@gmail.com"
                className="inline-flex items-center gap-3 text-xl md:text-2xl text-gray-300 hover:text-white transition-colors border-b border-white/20 hover:border-white pb-1"
              >
                gabrielgg2005ve@gmail.com
                <Icon name="arrow" size={24} className="-rotate-45" />
              </a>
            </motion.div>
          </div>

          {/* Social Grid */}
          <div className="flex flex-col md:items-end gap-8">
            <div className="flex gap-4">
              {socialLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 rounded-2xl backdrop-blur-md transition-all duration-300 group"
                >
                  <Icon
                    name={link.icon}
                    size={28}
                    className="text-gray-300 group-hover:text-white"
                  />
                </motion.a>
              ))}
            </div>

            <div className="text-right">
              <p className="text-sm text-gray-400 font-medium uppercase tracking-widest">
                Available for Freelance
              </p>
              <p className="text-xs text-gray-600 mt-1">Caracas, Venezuela</p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm text-gray-500 font-medium tracking-wide">
          <p>&copy; {year} Gabriel González. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms
            </a>
            <a href="#top" className="hover:text-white transition-colors">
              Back to Top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
