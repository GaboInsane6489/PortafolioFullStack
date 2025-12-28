import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Certificates from "./components/sections/Certificates";
import Contact from "./components/sections/Contact";
import BackgroundVideo from "./components/ui/BackgroundVideo";

function App() {
  const [lang, setLang] = useState("en");

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-black focus:text-white dark:focus:bg-white dark:focus:text-black focus:rounded"
      >
        Skip to main content
      </a>

      <BackgroundVideo />

      <Header lang={lang} setLang={setLang} />

      <main id="main-content">
        <Hero lang={lang} />
        <About lang={lang} />
        <Projects lang={lang} />
        <Experience lang={lang} />
        <Certificates lang={lang} />
        <Contact lang={lang} />
      </main>

      <Footer lang={lang} />
    </>
  );
}

export default App;
