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
  LuGraduationCap,
  LuAward,
  LuShoppingCart,
  LuSchool,
  LuArrowLeft,
  LuChevronLeft,
  LuChevronRight,
  LuServer,
  LuDatabase,
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
  SiPython,
  SiCplusplus,
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
  arrowRight: LuArrowRight,
  arrowLeft: LuArrowLeft,
  chevronRight: LuChevronRight,
  chevronLeft: LuChevronLeft,
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
  server: LuServer,
  database: LuDatabase,

  terminal: LuTerminal,
  "git-commit": SiGit,
  clock: LuClock,
  activity: LuActivity,
  graduationCap: LuGraduationCap,
  award: LuAward,
  shoppingCart: LuShoppingCart,
  school: LuSchool,

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
  python: SiPython,
  cpp: SiCplusplus,
};

/**
 * Icon Component - Renders icons from react-icons
 * @param {Object} props
 * @param {string} props.name - Icon name from registry
 * @param {number} [props.size] - Icon size in pixels (default: 24)
 * @param {string} [props.className] - Additional CSS classes
 */
export default function Icon({ name, size = 24, className = "", ...props }) {
  const IconComponent = iconMap[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in registry`);
    return null;
  }

  return <IconComponent size={size} className={className} {...props} />;
}
