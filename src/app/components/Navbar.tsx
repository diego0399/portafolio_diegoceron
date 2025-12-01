"use client";
import { useState } from "react";

type NavbarProps = {
  onShowSections: (section: string) => void;
};

export default function Navbar({ onShowSections }: NavbarProps) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <nav className="flex justify-center items-center bg-gray-100 py-4">
      <div className="flex items-center justify-between bg-white rounded-2xl shadow-sm px-10 py-3 w-[90%] max-w-5xl">
        <h1 className="text-lg font-semibold text-gray-700">Mi Portafolio</h1>

        {/* Links */}
        <div className="flex gap-10 text-gray-600 font-medium">
          <button
            onClick={() => onShowSections("hero")}
            className="hover:text-gray-900 transition-colors"
          >
            Inicio
          </button>
          <button
            onClick={() => onShowSections("skills")}
            className="hover:text-gray-900 transition-colors"
          >
            Skills
          </button>
          <button
            onClick={() => onShowSections("projects")}
            className="hover:text-gray-900 transition-colors"
          >
            Proyectos
          </button>
          <button
            onClick={() => onShowSections("contact")}
            className="hover:text-gray-900 transition-colors"
          >
            Contacto
          </button>
        </div>

        {/* Botón modo oscuro */}
        <button
          onClick={toggleDarkMode}
          className={`relative w-8 h-4 rounded-full transition-colors ${
            darkMode ? "bg-gray-700" : "bg-gray-400"
          }`}
        >
          <span
            className={`absolute top-0.5 left-0.5 w-3 h-3 rounded-full bg-white transition-transform ${
              darkMode ? "translate-x-4" : ""
            }`}
          ></span>
        </button>
      </div>
    </nav>
  );
}
