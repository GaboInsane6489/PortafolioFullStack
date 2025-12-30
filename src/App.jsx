import React, { useState, lazy } from "react";
import Header from "./components/Header";
import Hero from "./components/sections/Hero";
import BackgroundVideo from "./components/ui/BackgroundVideo";
import LazySection from "./components/ui/LazySection";

// Static components for immediate interactivity
import Footer from "./components/Footer";

// Lazy-loaded sections
const About = lazy(() => import("./components/sections/About"));
const Projects = lazy(() => import("./components/sections/Projects"));
const CodeGallery = lazy(() => import("./components/sections/CodeGallery"));
const Experience = lazy(() => import("./components/sections/Experience"));
const Certificates = lazy(() => import("./components/sections/Certificates"));
const GithubSection = lazy(() => import("./components/sections/GithubSection"));
const Contact = lazy(() => import("./components/sections/Contact"));

function App() {
  const [lang, setLang] = useState("en");

  return (
    <div className="relative w-full overflow-x-hidden">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-black focus:text-white dark:focus:bg-white dark:focus:text-black focus:rounded"
      >
        Skip to main content
      </a>

      <BackgroundVideo />

      <Header lang={lang} setLang={setLang} />

      <main id="main-content" className="relative">
        <Hero lang={lang} />

        <LazySection id="about" height="600px">
          <About lang={lang} />
        </LazySection>

        <LazySection id="projects" height="800px">
          <Projects lang={lang} />
        </LazySection>

        <LazySection height="600px">
          <CodeGallery />
        </LazySection>

        <LazySection id="experience" height="800px">
          <Experience lang={lang} />
        </LazySection>

        <LazySection id="certificates" height="600px">
          <Certificates lang={lang} />
        </LazySection>

        <LazySection id="github" height="500px">
          <GithubSection />
        </LazySection>

        <LazySection id="contact" height="700px">
          <Contact lang={lang} />
        </LazySection>
      </main>

      <Footer lang={lang} />
    </div>
  );
}

export default App;
