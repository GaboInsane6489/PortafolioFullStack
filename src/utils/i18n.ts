import { atom } from "nanostores";
import en from "../locales/en.js";
import es from "../locales/es.js";

const ui = {
  en,
  es,
};

export const defaultLang = "en";
export const $lang = atom<keyof typeof ui>(defaultLang);

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function setLang(lang: keyof typeof ui) {
  $lang.set(lang);
  if (typeof window !== "undefined") {
    localStorage.setItem("lang", lang);
    const newPath = lang === defaultLang ? "/" : `/${lang}`;
    // Optionally redirect for native i18n routing
    // window.location.pathname = newPath;
  }
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: string): string {
    const keys = key.split(".");
    let value: any = ui[lang] || ui[defaultLang];
    for (const k of keys) {
      value = value?.[k];
      if (!value) break;
    }
    return (value as string) || key;
  };
}
