<div align="center">
  <img src="/public/logo.svg" width="120" height="120" alt="Gabriel González Logo" />
  
  # 🌌 Gabriel González • Full Stack Engineering Portfolio
  
  **The Intersection of High-Performance Engineering & Cinematic Design**
  
  [![Astro](https://img.shields.io/badge/Astro-5.0-FF5D01?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build)
  [![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_4.0-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
  [![Vercel](https://img.shields.io/badge/Vercel-Hosted-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com)
  [![Status](https://img.shields.io/badge/Status-Active-success?style=for-the-badge)]()
  [![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

[**Explore Live Demo**](https://portafolio-full-stack-red.vercel.app) • [**View Documentation**](#-documentation) • [**Report Bug**](https://github.com/GaboInsane6489/PortafolioFullStack/issues)

</div>

---

## 📑 Table of Contents

- [📍 Overview](#-overview)
- [✨ Key Features](#-key-features)
- [🛠️ Tech Stack & Architecture](#️-tech-stack--architecture)
- [📂 Project Structure](#-project-structure)
- [🚀 Getting Started](#-getting-started)
- [📜 Available Scripts](#-available-scripts)
- [📘 Developer Guide](#-developer-guide)
- [⚙️ Advanced Configuration](#️-advanced-configuration)
- [☁️ Deployment](#️-deployment)
- [⚡ Performance Strategy](#-performance-strategy)
- [🎨 Design System](#-design-system)
- [❓ Troubleshooting](#-troubleshooting)
- [🤝 Contributing](#-contributing)
- [📬 Contact](#-contact)

---

## 📍 Overview

**Gabriel-Portafolio** represents the pinnacle of modern web development practices, fusing the **Astro Island Architecture** with the interactivity of **React**. This project is not merely a showcase of work; it is a demonstration of technical mastery, encompassing advanced performance optimization, rigorous type safety, and a sophisticated, motion-driven user experience.

Designed with an **"Intense Black"** aesthetic, the portfolio delivers a premium, app-like feel while maintaining the SEO benefits and initial load performance of a static site. It serves as a comprehensive template for developers looking to bridge the gap between artistic web design and solid software engineering.

---

## ✨ Key Features

### 🏗️ Core Engineering

- **Island Architecture**: Zero client-side JavaScript by default. Interactive components (React) are hydrated only when visible (`client:visible`) or needed (`client:load`), resulting in TTI (Time to Interactive) scores near 0ms.
- **Type-Safe Ecosystem**: Fully strict TypeScript implementation across both Astro and React components, ensuring robustness and maintainability.
- **Hybrid Rendering**: Strategic mix of Server-Side Rendering (SSR) for dynamic content and Static Site Generation (SSG) for high-performance pages.

### 🎨 UI/UX Mastery

- **Cinematic Motion**: Hardware-accelerated animations using native CSS and lightweight JavaScript, avoiding main-thread blocking.
- **"Brutal Glass" Aesthetics**: Multi-layered backdrop blurs, noise textures, and deep z-indexing create a tangible 3D depth.
- **Magnetic Interactivity**: Custom physics-based cursor interactions and magnetic buttons that respond to user presence.
- **Responsive & Accessible**: Mobile-first design philosophy with full ARIA compliance and keyboard navigation support.

### 🌍 Global Scale

- **Native Internationalization (i18n)**: Built-in, zero-dependency translation engine. Instant context switching between English and Spanish without page reloads.
- **SEO Optimized**: Dynamic meta tag generation, canonical URL management, and semantic HTML5 structure.

---

## 🛠️ Tech Stack & Architecture

We have carefully selected a stack that balances **Developer Experience (DX)** with **User Experience (UX)**.

| Category       | Technology                                    | Version | Rationale                                                         |
| -------------- | --------------------------------------------- | ------- | ----------------------------------------------------------------- |
| **Core**       | [Astro](https://astro.build/)                 | v5.x    | Unbeatable static performance with dynamic capabilities.          |
| **UI Library** | [React](https://react.dev/)                   | v19     | Best-in-class component ecosystem for complex interactive states. |
| **Styling**    | [Tailwind CSS](https://tailwindcss.com/)      | v4      | Atomic CSS engine for rapid, maintainable, and low-size styling.  |
| **Language**   | [TypeScript](https://www.typescriptlang.org/) | v5.x    | Static typing for enterprise-grade code reliability.              |
| **Motion**     | CSS / Vanilla JS                              | -       | Zero-dependency animations for maximum frame rates.               |
| **Forms**      | Web3Forms                                     | -       | Serverless form handling without backend maintenance.             |
| **Icons**      | Lucide React                                  | Latest  | Consistent, tree-shakeable SVG icon set.                          |

### Architecture Highlight: The "Hydration Gap"

This project utilizes Astro's **Partial Hydration**. Unlike traditional SPAs (Single Page Applications) that hydrate the entire DOM, we strictly isolate interactivity:

1.  **Static Shell**: Navbar, Footer, and Content layouts are static HTML.
2.  **Interactive Islands**: The `Map`, `ContactForm`, and `MagneticButton` components are isolated React roots.
3.  **Result**: The browser main thread remains idle during page load, maximizing Core Web Vitals.

---

## 📂 Project Structure

A highly organized, scalable directory structure designed for enterprise teams.

```bash
PortafolioFullStack/
├── public/                 # Static Assets (served at root)
│   ├── assets/             # Optimized WebP/AVIF images
│   ├── cv.pdf              # Downloadable resources
│   └── locales/            # JSON/JS translation dictionaries
├── src/
│   ├── components/
│   │   ├── islands/        # REACT Interactive Components (Stateful)
│   │   │   ├── Header.jsx  # Complex Navigation Logic
│   │   │   └── Contact.jsx # Form State & Validation
│   │   ├── sections/       # ASTRO Static Page Sections
│   │   │   ├── Hero.astro  # LCP Optimized Entry
│   │   │   └── About.astro # Content Heavy Section
│   │   ├── ui/             # Primitive UI Components
│   │   │   ├── Icon.jsx    # SVG Wrapper
│   │   │   └── Button.astro# Polymorphic Button
│   │   └── layouts/        # Page Shells & Meta Wrappers
│   ├── layouts/            # Global Layouts (Base, Markdown)
│   ├── pages/              # File-based Routing System
│   │   └── index.astro     # Entry point
│   ├── styles/             # Global CSS & Tailwind Config
│   ├── utils/              # Helper Functions & Hooks
│   │   └── i18n.js         # Translation Logic
│   └── env.d.ts            # Environment Type Definitions
├── astro.config.mjs        # Astro Configuration
├── tailwind.config.mjs     # Design System Tokens
├── tsconfig.json           # Strict TypeScript Config
└── package.json            # Dependencies & Scripts
```

---

## 🚀 Getting Started

Follow these steps to set up the project locally for development or contributions.

### Prerequisites

- **Node.js**: v18.17.1 or higher (LTS recommended)
- **Package Manager**: pnpm (preferred), npm, or yarn
- **Git**: Latest version

### Installation

1.  **Clone the Repository**

    ```bash
    git clone https://github.com/GaboInsane6489/PortafolioFullStack.git
    cd PortafolioFullStack
    ```

2.  **Install Dependencies**

    We use `pnpm` for strict dependency management and faster installs.

    ```bash
    pnpm install
    ```

3.  **Start Development Server**

    ```bash
    pnpm dev
    ```

    OPEN [http://localhost:4321](http://localhost:4321) to view the project.

### Build for Production

To create an optimized production build:

```bash
pnpm build
```

To preview the build locally:

```bash
pnpm preview
```

---

## 📜 Available Scripts

Reference for the `package.json` scripts available in this project.

| Script    | Command              | Description                                      |
| :-------- | :------------------- | :----------------------------------------------- |
| `dev`     | `astro dev`          | Starts the local development server with HMR.    |
| `build`   | `astro build`        | Compiles the site for production deployment.     |
| `preview` | `astro preview`      | Serves the production build locally for testing. |
| `astro`   | `astro`              | Runs the Astro CLI directly.                     |
| `check`   | `astro check`        | Runs TypeScript and Astro type checking.         |
| `format`  | `prettier --write .` | Formats code using Prettier (if installed).      |

---

## 📘 Developer Guide

Comprehensive documentation for modifying and extending the portfolio.

### 1. Adding a New Section

To maintain modularity, each homepage section is a separate Astro component.

1.  Create `src/components/sections/MyNewSection.astro`.
2.  Implement your markup and styles.
3.  Import and add it to `src/pages/index.astro`.

```astro
// src/pages/index.astro
import MyNewSection from '../components/sections/MyNewSection.astro';

<main>
  ...
  <MyNewSection />
</main>
```

### 2. Creating an Interactive "Island" (React)

If you need state management (hooks, interactivity):

1.  Create `src/components/islands/InteractiveWidget.jsx`.
2.  Import it into an Astro file.
3.  **CRITICAL**: Use a hydration directive.

```astro
<!-- Hydrate immediately on load (Critical UI) -->
<InteractiveWidget client:load />

<!-- Hydrate only when scrolled into view (Performance Friendly) -->
<InteractiveWidget client:visible />

<!-- Hydrate only when the main thread is idle (Non-Critical) -->
<InteractiveWidget client:idle />
```

### 3. Internationalization (i18n)

We use a lightweight utility in `src/utils/i18n.js`. To add a new key:

1.  Open `src/locales/en.js` and `src/locales/es.js`.
2.  Add your key-value pair.

```javascript
// src/locales/en.js
export const en = {
  // ...
  "my.new.key": "Hello World",
};
```

3.  Usage in Component:

```javascript
const t = useTranslations("en");
<h1>{t("my.new.key")}</h1>;
```

---

## ⚙️ Advanced Configuration

### Astro Configuration (`astro.config.mjs`)

The project is configured to use the React integration and Tailwind CSS.

```javascript
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false, // We import base styles manually for control
    }),
  ],
  compressHTML: true,
  build: {
    inlineStylesheets: "auto",
  },
});
```

### Tailwind Configuration (`tailwind.config.mjs`)

We rely on **CSS Variables** for dynamic theming potential.

- **fontFamily**: Defines `Outfit` and `Inter` via `@font-face` in global CSS.
- **colors**: Extends the palette with Semantic names (`primary`, `surface`, etc.).
- **animation**: Custom keyframes for `fade-up`, `spotlight`, and `magnetic`.

---

## ☁️ Deployment

This project is optimized for deployment on Vercel, Netlify, or any static host.

### Vercel (Recommended)

1.  Install the Vercel CLI or link your GitHub repository.
2.  Astro detects Vercel automatically.
3.  Run:
    ```bash
    vercel deploy
    ```

### Netlify

1.  Create a `netlify.toml` file (optional, often auto-detected).
2.  Build command: `pnpm build`.
3.  Publish directory: `dist`.

---

## ⚡ Performance Strategy

Achieving a **100 Performance Score** on Lighthouse requires multiple strategies:

- **Image Optimization**: All images are converted to WebP/AVIF at build time.
- **Font Loading**: Google Fonts are preconnected and swapped (`font-display: swap`) to prevent FOUT.
- **CSS Minification**: Tailwind creates a minimal CSS bundle containing _only_ used classes.
- **Deferral**: Non-critical JS (analytics, heavy interactions) is delayed until after LCP (Largest Contentful Paint).

### Benchmarks

| Metric         | Score | status |
| -------------- | ----- | ------ |
| Performance    | 90    | 🟢     |
| Accessibility  | 100   | 🟢     |
| Best Practices | 100   | 🟢     |
| SEO            | 100   | 🟢     |

---

## 🎨 Design System

The "Intense Black" design system is defined in `tailwind.config.mjs`.

- **Typography**:
  - _Display_: "Outfit", sans-serif (Bold, Assertive)
  - _Body_: "Inter", sans-serif (Readable, Clean)
- **Colors**:
  - Primary: `#000000` (Void Black)
  - Accents: `#9333ea` (Purple), `#3b82f6` (Blue)
  - Glass: `rgba(255, 255, 255, 0.05)`

To modify the theme, edit the `extend` block in the Tailwind config.

---

## ❓ Troubleshooting

Common issues and solutions for developers.

### Issue: "Hydration Mismatch"

- **Cause**: The HTML generated on the server differs from what React rendered on the client.
- **Fix**: Ensure you aren't using random numbers or window-dependent logic (like `window.innerWidth`) during the initial render. Use `useEffect` for browser-only logic.

### Issue: "Styles not applying"

- **Cause**: Tailwind JIT compiler didn't detect the class name.
- **Fix**: Ensure dynamic class names are full strings (e.g., `bg-red-500` instead of `bg-${color}-500`).

### Issue: "Images 404"

- **Cause**: Incorrect path referencing.
- **Fix**: Assets in `public/` should be referenced with a leading slash (e.g., `/assets/image.jpg`).

---

## 🤝 Contributing

We welcome contributions from the community!

1.  **Fork** the project.
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the branch (`git push origin feature/AmazingFeature`).
5.  Open a **Pull Request**.

Please ensure your code passes all linting checks before submitting.

---

## 📬 Contact

**Gabriel Alexander González García**

- **Role**: Full Stack Engineer
- **Email**: [gabrielgg2005ve@gmail.com](mailto:gabrielgg2005ve@gmail.com)
- **LinkedIn**: [Gabriel González](https://www.linkedin.com/in/gabriel-alexander-gonz%C3%A1lez-garc%C3%ADa-31476636a/)
- **GitHub**: [@GaboInsane6489](https://github.com/GaboInsane6489)

---

<div align="center">
  <sub>Designed and Engineered with ❤️ in Venezuela using Astro & React.</sub>
  <br />
  <sub>© 2025 Gabriel González. All rights reserved.</sub>
</div>
