import React from "react";
import LanguageToggle from "./LanguageToggle";
import Icon from "./ui/Icon.jsx";
import { useTranslations } from "../utils/i18n.js";

export default function Header({ lang = "en" }) {
  const t = useTranslations(lang);

  return (
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

          <nav
            className="hidden md:flex space-x-8"
            aria-label="Main navigation"
          >
            <a
              href="#about"
              className="text-sm font-medium hover:opacity-70 transition-opacity"
            >
              {t("nav.about")}
            </a>
            <a
              href="#projects"
              className="text-sm font-medium hover:opacity-70 transition-opacity"
            >
              {t("nav.projects")}
            </a>
            <a
              href="#contact"
              className="text-sm font-medium hover:opacity-70 transition-opacity"
            >
              {t("nav.contact")}
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <LanguageToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
