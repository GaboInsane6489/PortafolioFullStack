import React from "react";
import Icon from "./ui/Icon.jsx";
import { useTranslations } from "../utils/i18n.js";

export default function Footer({ lang = "en" }) {
  const t = useTranslations(lang);
  const year = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      icon: "github",
      url: "https://github.com/GaboInsame6489",
      label: "Visit Gabriel González on GitHub",
    },
    {
      name: "LinkedIn",
      icon: "linkedin",
      url: "https://www.linkedin.com/in/gabriel-alexander-gonzález-garcía-31476636a/",
      label: "Connect with Gabriel González on LinkedIn",
    },
    {
      name: "Email",
      icon: "mail",
      url: "mailto:gabrielgg2005ve@gmail.com",
      label: "Send an email to Gabriel González",
    },
  ];

  return (
    <footer className="bg-black text-white dark:bg-white dark:text-black py-12 border-t border-white/10 dark:border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <span className="text-lg font-bold tracking-tighter">
              Gabriel González
            </span>
            <p className="text-sm opacity-60 mt-1">Full Stack Developer</p>
            <p className="text-xs opacity-40 mt-1">
              Distrito Federal, Venezuela
            </p>
          </div>

          <div
            className="flex gap-6"
            role="list"
            aria-label="Social media links"
          >
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
                aria-label={link.label}
                role="listitem"
              >
                <Icon name={link.icon} size={20} />
              </a>
            ))}
          </div>

          <div className="text-sm opacity-60 text-center md:text-right">
            &copy; {year} Gabriel González.
            <br className="md:hidden" />
            <span className="hidden md:inline"> </span>
            {t("footer.rights")}
          </div>
        </div>
      </div>
    </footer>
  );
}
