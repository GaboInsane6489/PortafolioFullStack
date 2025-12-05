import React, { useEffect, useState } from "react";
import { getLang, setLang } from "../utils/i18n.js";

export default function LanguageToggle() {
  const [currentLang, setCurrentLang] = useState("en");

  useEffect(() => {
    setCurrentLang(getLang());
  }, []);

  const toggleLang = () => {
    const newLang = currentLang === "en" ? "es" : "en";
    setLang(newLang);
    setCurrentLang(newLang);
    window.location.reload(); // Simple reload to apply changes for now
  };

  return (
    <button
      onClick={toggleLang}
      className="px-3 py-1 rounded-full border border-current text-sm font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
      aria-label={
        currentLang === "en" ? "Switch to Spanish" : "Cambiar a Inglés"
      }
    >
      {currentLang === "en" ? "ES" : "EN"}
    </button>
  );
}
