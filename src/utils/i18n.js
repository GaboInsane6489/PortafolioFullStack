import en from "../locales/en.js";
import es from "../locales/es.js";

const LANGUAGES = {
  en,
  es,
};

const DEFAULT_LANG = "en";

export function getLangFromUrl(url) {
  const [, lang] = url.pathname.split("/");
  if (lang in LANGUAGES) return lang;
  return DEFAULT_LANG;
}

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

export function getLang() {
  if (typeof localStorage !== "undefined" && localStorage.getItem("locale")) {
    return localStorage.getItem("locale");
  }
  if (typeof navigator !== "undefined") {
    return navigator.language.startsWith("es") ? "es" : "en";
  }
  return DEFAULT_LANG;
}

export function setLang(lang) {
  if (typeof localStorage !== "undefined") {
    localStorage.setItem("locale", lang);
  }
  // Reload or redirect logic can be handled by the component
}
