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
      color: "#8b5cf6",
    },
    {
      name: "LinkedIn",
      icon: "linkedin",
      url: "https://www.linkedin.com/in/gabriel-alexander-gonzález-garcía-31476636a/",
      label: "LinkedIn Profile",
      color: "#6366f1",
    },
    {
      name: "Email",
      icon: "mail",
      url: "mailto:gabrielgg2005ve@gmail.com",
      label: "Send Email",
      color: "#3b82f6",
    },
  ];

  return (
    <footer className="bg-black text-white pt-20 pb-10 border-t border-white/10 overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* CTA Section */}
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 tracking-tight">
              {/* Podrías también internacionalizar este texto si lo agregas a en.json/es.json */}
              Let's build something <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                amazing together.
              </span>
            </h2>
            <p className="text-gray-300 max-w-md text-lg">
              Open for freelance opportunities and full-time roles. Let's create
              digital experiences that matter.
            </p>
          </div>

          {/* Social Links & Info */}
          <div className="flex flex-col justify-end items-start md:items-end space-y-8">
            <div className="flex gap-6">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="group relative p-4 bg-white/5 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-300"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />
                  <Icon
                    name={link.icon}
                    size={24}
                    className="relative z-10 group-hover:text-white transition-colors"
                  />
                </motion.a>
              ))}
            </div>

            <div className="text-right">
              <a
                href="mailto:gabrielgg2005ve@gmail.com"
                className="text-xl font-medium hover:text-purple-400 transition-colors"
              >
                gabrielgg2005ve@gmail.com
              </a>
              <p className="text-sm text-gray-400 mt-2">
                Distrito Federal, Venezuela
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <div>
            &copy; {year} Gabriel González. {t("footer.rights")}
          </div>
          <div className="flex gap-6">
            <a
              href="#"
              className="hover:text-white cursor-pointer transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-white cursor-pointer transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
