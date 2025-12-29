import React from "react";
// Lucide Icons (UI)
import {
  LuGithub,
  LuLinkedin,
  LuMail,
  LuArrowRight,
  LuMoveRight,
  LuMenu,
  LuX,
  LuGlobe,
  LuMapPin,
  LuBriefcase,
  LuCode,
  LuChevronDown,
  LuExternalLink,
  LuCheck,
  LuSparkles,
  LuDownload,
  LuSend,
  LuTerminal,
  LuClock,
  LuActivity,
} from "react-icons/lu";

// Simple Icons (Tech Brands)
import {
  SiReact,
  SiAstro,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPhp,
  SiSupabase,
  SiGit,
  SiVercel,
  SiVite,
  SiWhatsapp,
  SiInstagram,
  SiFramer,
  SiNextdotjs,
  SiTypescript,
  SiPostgresql,
  SiMysql,
  SiDocker,
  SiLinux,
  SiFigma,
} from "react-icons/si";

/**
 * Centralized Icon Registry
 * Maps string identifiers to React Icon components
 */
const iconMap = {
  // --- UI Icons (Lucide) ---
  github: LuGithub,
  linkedin: LuLinkedin,
  mail: LuMail,
  arrow: LuArrowRight,
  arrowRight: LuMoveRight,
  menu: LuMenu,
  close: LuX,
  x: LuX,
  globe: LuGlobe,
  location: LuMapPin,
  briefcase: LuBriefcase,
  code: LuCode,
  chevronDown: LuChevronDown,
  externalLink: LuExternalLink,
  check: LuCheck,
  sparkles: LuSparkles,
  download: LuDownload,
  send: LuSend,

  terminal: LuTerminal,
  "git-commit": SiGit,
  clock: LuClock,
  activity: LuActivity,

  // --- Tech / Brands (Simple Icons) ---
  react: SiReact,
  astro: SiAstro,
  html: SiHtml5,
  css: SiCss3,
  js: SiJavascript,
  javascript: SiJavascript,
  tailwind: SiTailwindcss,
  node: SiNodedotjs, // Note: SiNodejs might be deprecated/renamed in some versions
  express: SiExpress,
  mongodb: SiMongodb,
  php: SiPhp,
  supabase: SiSupabase,
  git: SiGit,
  vercel: SiVercel,
  vite: SiVite,
  whatsapp: SiWhatsapp,
  instagram: SiInstagram,
  framer: SiFramer,
  next: SiNextdotjs,
  typescript: SiTypescript,
  postgres: SiPostgresql,
  mysql: SiMysql,
  docker: SiDocker,
  linux: SiLinux,
  figma: SiFigma,
};

/**
 * Icon Component - Renders icons from react-icons
 * @param {string} name - Icon name from registry
 * @param {number} size - Icon size in pixels (default: 24)
 * @param {string} className - Additional CSS classes
 */
export default function Icon({ name, size = 24, className = "", ...props }) {
  const IconComponent = iconMap[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in registry`);
    return null;
  }

  return <IconComponent size={size} className={className} {...props} />;
}
