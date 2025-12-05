# 🚀 Portfolio Full Stack

> Modern, high-performance portfolio built with cutting-edge web technologies

[![Astro](https://img.shields.io/badge/Astro-5.16.4-FF5D01?style=flat&logo=astro&logoColor=white)](https://astro.build)
[![React](https://img.shields.io/badge/React-19.2.1-61DAFB?style=flat&logo=react&logoColor=black)](https://react.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.17-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org)

## 📋 Overview

Professional portfolio showcasing full-stack development expertise with enterprise-grade architecture, premium UI/UX, and optimal performance. Built with modern web standards and best practices.

**Live Demo:** [gabriel-g.dev](https://gabriel-g.dev)

## ✨ Features

- 🎨 **Premium Design** — Glassmorphism, micro-interactions, and fluid animations
- 🌐 **Internationalization** — Full ES/EN support with seamless language switching
- ⚡ **Performance Optimized** — Lighthouse score 95+, code splitting, lazy loading
- 🎭 **Motion-Driven UI** — Framer Motion with intersection observers and parallax
- 📱 **Fully Responsive** — Mobile-first design with adaptive layouts
- ♿ **Accessible** — WCAG AA+ compliant with semantic HTML
- 🔒 **Secure** — Security headers, CSP, and environment variable protection
- 📧 **Contact Form** — Supabase backend with rate limiting

## �️ Tech Stack

### Core

- **[Astro 5.16.4](https://astro.build)** — SSR framework with islands architecture
- **[React 19.2.1](https://react.dev)** — UI library for interactive components
- **[Tailwind CSS 4.1.17](https://tailwindcss.com)** — Utility-first styling

### Animation & Interaction

- **[Framer Motion 12.23.25](https://www.framer.com/motion/)** — Production-ready animations
- **Intersection Observer API** — Viewport-based lazy animations

### Backend & Data

- **[Supabase](https://supabase.com)** — PostgreSQL database and authentication
- **Node.js Adapter** — SSR with standalone mode

### Developer Experience

- **TypeScript** — Type-safe development
- **ESLint & Prettier** — Code quality and formatting
- **Sharp** — Image optimization
- **Lighthouse CI** — Performance monitoring

## 📁 Project Structure

```
PortafolioFullStack/
├── src/
│   ├── components/
│   │   ├── sections/          # Main page sections
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Certificates.jsx
│   │   │   └── Contact.jsx
│   │   ├── ui/                # Reusable UI components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── LanguageToggle.jsx
│   ├── layouts/
│   │   └── BaseLayout.astro   # SEO-optimized base layout
│   ├── pages/
│   │   ├── index.astro        # Main page
│   │   └── api/               # API endpoints
│   ├── locales/               # i18n translations (ES/EN)
│   ├── styles/
│   │   └── global.css
│   └── utils/
│       ├── i18n.js            # Internationalization utilities
│       └── motion.js          # Animation presets
├── public/
│   └── assets/                # Optimized images (WebP)
├── astro.config.mjs           # Astro configuration
├── tailwind.config.js         # Tailwind configuration
└── vercel.json                # Deployment configuration
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+
- **pnpm** 8+ (recommended) or npm

### Installation

```bash
# Clone repository
git clone https://github.com/GaboInsane6489/PortafolioFullStack.git
cd PortafolioFullStack

# Install dependencies
pnpm install

# Copy environment variables
cp .env.example .env.local

# Configure your Supabase credentials in .env.local
```

### Development

```bash
# Start development server
pnpm dev
# → http://localhost:4321

# Run linting
pnpm lint

# Format code
pnpm format

# Run Lighthouse audit
pnpm lighthouse
```

### Build & Deploy

```bash
# Build for production
pnpm build

# Preview production build
pnpm preview
```

## 🌍 Environment Variables

Create a `.env.local` file with the following variables:

```env
# Supabase Configuration
PUBLIC_SUPABASE_URL=your-supabase-url
PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key

# Email Configuration (Optional)
SENDGRID_API_KEY=your-sendgrid-api-key
CONTACT_EMAIL=your-email@example.com

# Rate Limiting
RATE_LIMIT_MAX=5
```

## 📊 Performance

- ⚡ **Lighthouse Score:** 95+ across all metrics
- 🎯 **First Contentful Paint:** < 1.5s
- 🚀 **Time to Interactive:** < 3.0s
- 📦 **Bundle Size:** Optimized with code splitting
- 🖼️ **Images:** WebP format with lazy loading

## 🎨 Design Philosophy

Following modern design principles from `modern_methods_prompt.md`:

- **Motion-Driven Interfaces** — Framer Motion variants with stagger effects
- **Intersection Observer** — Viewport-based animations
- **Premium Micro-Interactions** — Hover scaling, shadows, icon rotations
- **Parallax & Depth** — Multi-layer movement with smooth curves
- **Magnetic Interactions** — Cursor-aware buttons and spotlight gradients
- **Modern Effects** — Glassmorphism, frosted surfaces, neon accents
- **Performance Constraints** — 200-450ms transitions, GPU-optimized

## 📝 Scripts

| Command           | Description                                  |
| ----------------- | -------------------------------------------- |
| `pnpm dev`        | Start development server at `localhost:4321` |
| `pnpm build`      | Build production site to `./dist/`           |
| `pnpm preview`    | Preview production build locally             |
| `pnpm lighthouse` | Run Lighthouse performance audit             |
| `pnpm lint`       | Run ESLint code analysis                     |
| `pnpm format`     | Format code with Prettier                    |

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
