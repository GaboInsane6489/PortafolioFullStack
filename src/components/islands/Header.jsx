import React, { useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useSpring,
  AnimatePresence,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import { useStore } from "@nanostores/react";
import LanguageToggle from "../LanguageToggle";
import Logo from "../ui/Logo.jsx";
import Icon from "../ui/Icon.jsx";
import { $lang, useTranslations, getLang, setLang } from "../../utils/i18n.js";

export default function Header({ initialLang = "en", animate = true }) {
  const storeLang = useStore($lang);
  const [lang, setLocalLang] = useState(initialLang);

  const t = useTranslations(lang);
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  // Sync with store after mount to avoid hydration mismatch
  useEffect(() => {
    setLocalLang(storeLang);
  }, [storeLang]);

  // Logo text for staggered animation
  const logoText = "Gabriel González";

  // Actualiza idioma en cliente después de montar
  useEffect(() => {
    setLang(getLang());
  }, []);

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
    { href: "#experience", label: t("nav.experience") },
    { href: "#certificates", label: t("nav.certificates") },
    { href: "#contact", label: t("nav.contact") },
  ];

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Removed expensive motion transforms for header bg/blur
  // and scaleX for progress bar can stay if desired, but we'll optimize the header itself.

  return (
    <div className="relative">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 origin-left z-50"
        style={{ scaleX }}
      />

      <header
        className={`fixed top-0 w-full z-40 border-b transition-all duration-300 ${
          isScrolled
            ? "border-white/10 bg-black/80 backdrop-blur-md py-4"
            : "border-transparent bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-full">
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
                <div className="flex overflow-hidden">
                  {logoText.split("").map((char, i) => (
                    <motion.span
                      key={i}
                      initial={{ y: 0 }}
                      whileHover={{ y: -5, color: "#a855f7" }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                        delay: i * 0.02,
                      }}
                      className="text-xl font-display font-bold tracking-tight text-white inline-block"
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </div>
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
                  whileHover={{ y: -2 }}
                  onMouseEnter={() => setHoveredLink(link.href)}
                  onMouseLeave={() => setHoveredLink(null)}
                  className="relative group px-4 py-2"
                >
                  <span className="relative z-10 text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-200">
                    {link.label}
                  </span>

                  {hoveredLink === link.href && (
                    <motion.div
                      layoutId="navPill"
                      className="absolute inset-0 bg-white/5 border border-white/10 rounded-full z-0 shadow-[0_0_20px_rgba(255,255,255,0.05)]"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
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
                className="relative group p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-white/20 focus:outline-none overflow-hidden"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
                aria-expanded={isOpen}
              >
                {/* Animated Background Glow */}
                <div
                  className={`absolute inset-0 bg-purple-500/20 blur-xl transition-opacity duration-500 ${isOpen ? "opacity-100" : "opacity-0 group-hover:opacity-60"}`}
                />

                <div className="relative w-6 h-5 flex flex-col justify-between items-end">
                  <motion.span
                    animate={
                      isOpen
                        ? {
                            rotate: 45,
                            y: 9,
                            width: "100%",
                            backgroundColor: "#a855f7",
                          }
                        : {
                            rotate: 0,
                            y: 0,
                            width: "100%",
                            backgroundColor: "#ffffff",
                          }
                    }
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="h-0.5 block origin-center rounded-full"
                  />
                  <motion.span
                    animate={
                      isOpen
                        ? { opacity: 0, x: 20 }
                        : {
                            opacity: 1,
                            x: 0,
                            width: "70%",
                            backgroundColor: "#ffffff",
                          }
                    }
                    transition={{ duration: 0.2 }}
                    className="h-0.5 block rounded-full"
                  />
                  <motion.span
                    animate={
                      isOpen
                        ? {
                            rotate: -45,
                            y: -9,
                            width: "100%",
                            backgroundColor: "#a855f7",
                          }
                        : {
                            rotate: 0,
                            y: 0,
                            width: "100%",
                            backgroundColor: "#ffffff",
                          }
                    }
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="h-0.5 block origin-center rounded-full"
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
              className="fixed inset-0 top-0 bg-black/98 backdrop-blur-3xl z-[100] md:hidden"
              initial={{ clipPath: "circle(0% at 90% 5%)" }}
              animate={{ clipPath: "circle(150% at 90% 5%)" }}
              exit={{ clipPath: "circle(0% at 90% 5%)" }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            >
              <div className="absolute top-8 right-8">
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-4 text-white hover:text-purple-400 transition-colors hover:scale-110 active:scale-90"
                >
                  <Icon name="x" size={32} />
                </button>
              </div>

              <nav className="flex flex-col items-center justify-center p-8 space-y-8 h-full">
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
