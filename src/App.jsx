
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import CursorGlow from "./components/CursorGlow";

// Case Study Pages
import ActiveArena from "./pages/ActiveArena";
import EUKK from "./pages/EUKK";
import PrelovedPundana from "./pages/PrelovedPundana";
import Tableau from "./pages/Tableau";

import { useEffect } from "react";

function HomePage() {
  useEffect(() => {
    if (window.location.hash === "#projects") {
      const timer = setTimeout(() => {
        document
          .getElementById("projects")
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <CursorGlow />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/projects/e-ukk"
          element={<EUKK />}
        />

        <Route
          path="/projects/active-arena"
          element={<ActiveArena />}
        />

        <Route
          path="/projects/preloved-pundana"
          element={<PrelovedPundana />}
        />

        <Route
          path="/projects/tableau"
          element={<Tableau />}
        />
      </Routes>
    </BrowserRouter>
  );
}
