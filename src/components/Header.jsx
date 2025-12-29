import React, { useState } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { useStore } from "@nanostores/react";
import LanguageToggle from "./LanguageToggle";
import Logo from "./ui/Logo.jsx";
import { useTranslations, $lang } from "../utils/i18n.js";

export default function Header() {
  const lang = useStore($lang);
  const t = useTranslations(lang);
  const [isOpen, setIsOpen] = useState(false);

  // Scroll progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const navLinks = [
    { href: "#about", label: t("nav.about") },
    { href: "#projects", label: t("nav.projects") },
    { href: "#contact", label: t("nav.contact") },
  ];

  return (
    <div className="relative">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 origin-left z-50"
        style={{ scaleX }}
      />

      <header className="fixed top-0 w-full z-40 bg-black/90 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo Section */}
            <div className="flex-shrink-0">
              <a
                href="/"
                className="group flex items-center gap-3"
                aria-label="Gabriel González - Home"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-purple-500 blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
                  <Logo className="w-10 h-10 relative z-10 group-hover:scale-110 group-active:scale-95 transition-transform duration-300 cubic-bezier(0.34, 1.56, 0.64, 1)" />
                </div>
                <span className="text-xl font-display font-bold tracking-tight text-white group-hover:text-purple-400 transition-colors duration-300">
                  Gabriel González
                </span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav
              className="hidden md:flex items-center space-x-8"
              aria-label="Main navigation"
            >
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.1 * i,
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                  className="relative group py-2"
                >
                  <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-200">
                    {link.label}
                  </span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out" />
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="pl-4 border-l border-white/10"
              >
                <LanguageToggle />
              </motion.div>
            </nav>

            {/* Mobile Controls */}
            <div className="flex md:hidden items-center space-x-4">
              <LanguageToggle />

              <button
                className="p-2 rounded-lg text-white hover:bg-white/10 transition-colors focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
                aria-expanded={isOpen}
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center gap-1.5">
                  <motion.span
                    animate={
                      isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }
                    }
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="w-full h-0.5 bg-white block origin-center"
                  />
                  <motion.span
                    animate={
                      isOpen ? { opacity: 0, x: 20 } : { opacity: 1, x: 0 }
                    }
                    transition={{ duration: 0.2 }}
                    className="w-full h-0.5 bg-white block"
                  />
                  <motion.span
                    animate={
                      isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }
                    }
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="w-full h-0.5 bg-white block origin-center"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-0 top-20 bg-black/95 backdrop-blur-2xl z-40 md:hidden border-t border-white/10"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "100vh" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <nav className="flex flex-col items-center justify-center p-8 space-y-8 h-full pb-32">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    className="text-4xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400 hover:to-purple-400 transition-all"
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.1 + index * 0.1,
                      type: "spring",
                      stiffness: 100,
                    }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
}
