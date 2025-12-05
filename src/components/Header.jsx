import React, { useState } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import LanguageToggle from "./LanguageToggle";
import Icon from "./ui/Icon.jsx";
import { useTranslations } from "../utils/i18n.js";

export default function Header({ lang = "en" }) {
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
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 origin-left z-50"
        style={{ scaleX }}
      />

      <header className="fixed top-0 w-full z-40 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-black/5 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <a
                href="/"
                className="text-xl font-bold tracking-tighter hover:opacity-70 transition-opacity"
                aria-label="Gabriel González - Home"
              >
                gabriel-g
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav
              className="hidden md:flex space-x-8"
              aria-label="Main navigation"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium hover:opacity-70 transition-opacity"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <LanguageToggle />

              {/* Mobile menu button */}
              <button
                className="md:hidden p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
                aria-expanded={isOpen}
              >
                <motion.div
                  animate={isOpen ? "open" : "closed"}
                  className="w-6 h-5 flex flex-col justify-between"
                >
                  <motion.span
                    className="w-full h-0.5 bg-black dark:bg-white block"
                    variants={{
                      closed: { rotate: 0, y: 0 },
                      open: { rotate: 45, y: 9 },
                    }}
                  />
                  <motion.span
                    className="w-full h-0.5 bg-black dark:bg-white block"
                    variants={{
                      closed: { opacity: 1 },
                      open: { opacity: 0 },
                    }}
                  />
                  <motion.span
                    className="w-full h-0.5 bg-black dark:bg-white block"
                    variants={{
                      closed: { rotate: 0, y: 0 },
                      open: { rotate: -45, y: -9 },
                    }}
                  />
                </motion.div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-0 top-16 bg-white dark:bg-black z-40 md:hidden"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              <nav className="flex flex-col items-center gap-8 pt-12 px-4">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    className="text-2xl font-bold hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
