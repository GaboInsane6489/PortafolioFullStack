import { atom } from "nanostores";
import en from "../locales/en.js";
import es from "../locales/es.js";

const LANGUAGES = {
  en,
  es,
};

const DEFAULT_LANG = "en";

// Detectar idioma desde la URL (opcional)
export function getLangFromUrl(url) {
  // Check query params first (?lang=es)
  const langParam = url.searchParams.get("lang");
  if (langParam in LANGUAGES) return langParam;

  // Check path second (/es/...)
  const [, langPath] = url.pathname.split("/");
  if (langPath in LANGUAGES) return langPath;

  return DEFAULT_LANG;
}

// Hook para traducciones
export function useTranslations(lang) {
  return function t(key) {
    const keys = key.split(".");
    let value = LANGUAGES[lang] || LANGUAGES[DEFAULT_LANG];
    for (const k of keys) {
      value = value?.[k];
      if (!value) break;
    }
    return value || key;
  };
}

// Detectar idioma en cliente
export function getLang() {
  if (typeof localStorage !== "undefined" && localStorage.getItem("locale")) {
    return localStorage.getItem("locale");
  }
  if (typeof navigator !== "undefined") {
    return navigator.language.startsWith("es") ? "es" : "en";
  }
  return DEFAULT_LANG;
}

// 👇 Inicialización fija en SSR (siempre "en")
export const $lang = atom(DEFAULT_LANG);

// Cambiar idioma y persistir en localStorage
export function setLang(lang) {
  if (typeof localStorage !== "undefined") {
    localStorage.setItem("locale", lang);
  }
  $lang.set(lang);
}
