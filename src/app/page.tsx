"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactCard from "./components/ContactCard";

import type { Language } from "./components/translations";

const LANGUAGE_STORAGE_KEY = "portfolio-language";

export default function Home() {
  const [activeSection, setActiveSection] = useState("projects");
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);

    if (savedLanguage === "es" || savedLanguage === "en") {
      setLanguage(savedLanguage);
    }
  }, []);

  const toggleLanguage = () => {
    setLanguage((currentLanguage) => {
      const newLanguage = currentLanguage === "es" ? "en" : "es";

      localStorage.setItem(LANGUAGE_STORAGE_KEY, newLanguage);

      return newLanguage;
    });
  };

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 transition-colors duration-300 dark:bg-slate-950 dark:text-gray-100">
      <Navbar
        language={language}
        onToggleLanguage={toggleLanguage}
        onShowSections={setActiveSection}
      />

      <AnimatePresence mode="wait">
        {activeSection === "hero" && (
          <motion.section
            key="hero"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-50 transition-colors duration-300 dark:bg-slate-950"
          >
            <Hero language={language} />
          </motion.section>
        )}

        {activeSection === "skills" && (
          <motion.section
            key="skills"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-50 transition-colors duration-300 dark:bg-slate-950"
          >
            <Skills language={language} />
          </motion.section>
        )}

        {activeSection === "projects" && (
          <motion.section
            key="projects"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-50 transition-colors duration-300 dark:bg-slate-950"
          >
            <Projects language={language} />
          </motion.section>
        )}

        {activeSection === "contact" && (
          <motion.section
            key="contact"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-50 transition-colors duration-300 dark:bg-slate-950"
          >
            <ContactCard language={language} />
          </motion.section>
        )}
      </AnimatePresence>
    </main>
  );
}
