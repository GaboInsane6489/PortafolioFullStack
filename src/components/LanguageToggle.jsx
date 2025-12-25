import React from "react";
import { useStore } from "@nanostores/react";
import { $lang, setLang } from "../utils/i18n.js";

export default function LanguageToggle() {
  const lang = useStore($lang);

  const toggleLang = () => {
    const newLang = lang === "en" ? "es" : "en";
    setLang(newLang);
  };

  return (
    <button
      onClick={toggleLang}
      className="px-3 py-1 rounded-full border border-current text-sm font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
      aria-label={lang === "en" ? "Switch to Spanish" : "Cambiar a Inglés"}
    >
      {lang === "en" ? "ES" : "EN"}
    </button>
  );
}
