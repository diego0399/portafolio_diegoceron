"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactCard from "./components/ContactCard";

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 transition-colors duration-300 dark:bg-slate-950 dark:text-gray-100">
      <Navbar onShowSections={setActiveSection} />

      <AnimatePresence mode="wait">
        {activeSection === "hero" && (
          <motion.section
            key="hero"
            id="inicio"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 transition-colors duration-300 dark:bg-slate-950"
          >
            <Hero />
          </motion.section>
        )}

        {activeSection === "skills" && (
          <motion.section
            key="skills"
            id="skills"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="py-20 bg-gray-50 transition-colors duration-300 dark:bg-slate-950"
          >
            <Skills />
          </motion.section>
        )}

        {activeSection === "projects" && (
          <motion.section
            key="projects"
            id="projects"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="py-20 bg-gray-50 transition-colors duration-300 dark:bg-slate-950"
          >
            <Projects />
          </motion.section>
        )}

        {activeSection === "contact" && (
          <motion.section
            key="contact"
            id="contact"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="py-20 bg-gray-50 transition-colors duration-300 dark:bg-slate-950"
          >
            <ContactCard />
          </motion.section>
        )}
      </AnimatePresence>
    </main>
  );
}
