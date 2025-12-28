# 🚀 Portfolio Full Stack

> Client-side rendered portfolio built with Vite, React, and Tailwind CSS. High-performance, "Brutal" aesthetic.

[![Vite](https://img.shields.io/badge/Vite-6.0.0-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev)
[![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=flat&logo=react&logoColor=black)](https://react.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0.0-38B2AC?style=flat&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)

## 📋 Overview

Professional portfolio showcasing full-stack development expertise. features a "Brutal" design aesthetic with glassmorphism, aggressive typography, and cinematic video backgrounds. Fully optimized for production with Vite.

**Live Demo:** [gabriel-g.dev](https://gabriel-g.dev)

## ✨ Features

- 🎨 **"Brutal" Design System** — Intense Black theme, transparent glass cards, and cinematic layouts.
- 📹 **Cinematic Background** — Optimized video background with smart playback (interaction-based fallback).
- ⚛️ **Pure React + Vite** — Blazing fast HMR and optimized production build.
- 🌐 **Internationalization** — Native i18n support (ES/EN) using `nanostores`.
- ⚡ **Performance Optimized** — 95+ Lighthouse score, lazy loading, and code splitting.
- 🎭 **Motion-Driven UI** — Complex orchestrations with Framer Motion.
- 📱 **Mobile First** — Touch-optimizations and responsive glass UI.
- 🔒 **Secure** — Security headers and sanitized inputs.

## 🛠️ Tech Stack

### Core

- **[Vite](https://vitejs.dev)** — Next Generation Frontend Tooling
- **[React 19](https://react.dev)** — The library for web and native user interfaces
- **[Tailwind CSS 4](https://tailwindcss.com)** — Utility-first CSS framework

### Animation & Interaction

- **[Framer Motion](https://www.framer.com/motion/)** — Production-ready animation library for React
- **[React Icons](https://react-icons.github.io/react-icons/)** — Lucide & Simple Icons

### Backend & Data

- **[Supabase](https://supabase.com)** — Database and Auth (for Contact form)
- **[Nanostores](https://github.com/nanostores/nanostores)** — Lightweight state manager (for i18n)

## 📁 Project Structure

```
PortafolioFullStack/
├── public/                # Static assets (favicons, robots.txt)
│   ├── assets/            # Optimized images & videos
│   └── logo.svg           # Brand Logo
├── src/
│   ├── components/
│   │   ├── sections/      # Hero, About, Projects, Experience, Certificates, Contact
│   │   ├── ui/            # Reusable (Icon, TiltCard, BackgroundVideo)
│   │   ├── Header.jsx
│   │   └── Footer.jsx
│   ├── locales/           # Translation files (en.js, es.js)
│   ├── styles/            # Global CSS & Tailwind config
│   ├── utils/             # Helper functions (i18n.js)
│   ├── App.jsx            # Main Application Component
│   └── main.jsx           # Entry Point
├── index.html             # HTML Entry Point
├── vite.config.js         # Vite Configuration
└── tailwind.config.js     # Tailwind Configuration
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+
- **pnpm** (recommended) or npm

### Installation

```bash
git clone https://github.com/GaboInsane6489/PortafolioFullStack.git
cd PortafolioFullStack
pnpm install
```

### Development

```bash
pnpm dev
# → http://localhost:5173
```

### Build

```bash
pnpm build
pnpm preview
```

## 📊 Performance & SEO

- ✅ **SEO Ready**: `robots.txt`, meta tags, and semantic HTML5.
- ✅ **Zero Blocking Time**: Optimized video loading strategy.
- ✅ **A11y**: Keyboard navigable and screen reader friendly.

## 🎨 Design Philosophy - "Brutal Glass"

- **Transparency**: Footer and Cards allow the background video to bleed through (`backdrop-blur`).
- **Typography**: Giant, aggressive headings (font-display) with gradients.
- **Interactivity**: 3D Tilts, glow effects, and magnetic buttons.

## 📝 Scripts

| Command        | Description          |
| -------------- | -------------------- |
| `pnpm dev`     | Start dev server     |
| `pnpm build`   | Build for production |
| `pnpm preview` | Preview build        |
| `pnpm lint`    | Lint code            |

## 🤝 Contributing

This is a personal portfolio project. However, suggestions and feedback are welcome!

## 📄 License

© 2025 Gabriel González. All rights reserved.

## � Contact

- **Email:** gabrielgg2005ve@gmail.com
- **Portfolio:** [gabriel-g.dev](https://gabriel-g.dev)
- **GitHub:** [@GaboInsane6489](https://github.com/GaboInsane6489)

---

Built with ❤️ using [Astro](https://astro.build), [React](https://react.dev), and [Tailwind CSS](https://tailwindcss.com)

## 🔮 Ideas & Future Improvements

Here are some planned enhancements and ideas for future iterations of the portfolio:

### **General**

- **CMS Integration:** Connect with a Headless CMS (like Contentful or Sanity) to manage project data and blog posts dynamically without code changes.
- **Blog Section:** Add a blog to share technical articles, tutorials, and insights.
- **PWA Support:** Convert the site into a Progressive Web App for offline access and installability.
- **Unit Testing:** Implement Jest or Vitest for critical components (utils, hooks).

### **Hero Section**

- **3D Elements:** Integrate `Spline` or `Three.js` for a 3D interactive background or character.
- **Typed Effect:** Restore/Enhance a typing effect for the subtitle to make it more dynamic.
- **Sound Design:** Add subtle sound effects on hover or interacting with major CTA elements (optional/toggleable).

### **About Section**

- **GitHub Calendar:** Fetch and display real-time GitHub contribution graph.
- **Spotify Integration:** "Now Playing" widget showing current coding music.
- **More Stats:** Add dynamic stats like "Coffee Consumed" or "Bugs Fixed" (mock or real).

### **Projects Section**

- **Filter System:** Add tabs to filter projects by Category (Web, Mobile, UX) or Tech Stack.
- **Video Previews:** Auto-play short video clips of projects on hover instead of static images.
- **Case Studies:** Dedicated pages for selected "Star Projects" with deep-dive case studies, problem/solution analysis, and design process.

### **Experience (Timeline)**

- **Logo Integration:** Add company logos to each timeline item for better recognition.
- **Testimonials:** Add a "Reference/Testimonial" snippet attached to specific job roles.

### **Contact Section**

- **Map Integration:** A stylized, dark-mode map showing general location (city level).
- **Schedule Meeting:** Embed Calendly or similar for direct meeting booking.
- **AI Chatbot:** A simple AI assistant to answer FAQs about my resume and skills.
