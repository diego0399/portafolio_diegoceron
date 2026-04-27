"use client";

import ThemeToggle from "./ThemeToggle";

type NavbarProps = {
  onShowSections: (section: string) => void;
};

export default function Navbar({ onShowSections }: NavbarProps) {
  return (
    <nav className="flex justify-center items-center bg-gray-100 py-4 transition-colors dark:bg-slate-950">
      <div className="flex items-center justify-between bg-white rounded-2xl shadow-sm px-10 py-3 w-[90%] max-w-5xl transition-colors dark:bg-slate-900 dark:shadow-slate-950">
        <h1 className="text-lg font-semibold text-gray-700 dark:text-gray-100">
          Mi Portafolio
        </h1>

        <div className="flex gap-10 text-gray-600 font-medium dark:text-gray-300">
          <button
            onClick={() => onShowSections("hero")}
            className="hover:text-gray-900 transition-colors dark:hover:text-white"
          >
            Inicio
          </button>

          <button
            onClick={() => onShowSections("skills")}
            className="hover:text-gray-900 transition-colors dark:hover:text-white"
          >
            Skills
          </button>

          <button
            onClick={() => onShowSections("projects")}
            className="hover:text-gray-900 transition-colors dark:hover:text-white"
          >
            Proyectos
          </button>

          <button
            onClick={() => onShowSections("contact")}
            className="hover:text-gray-900 transition-colors dark:hover:text-white"
          >
            Contacto
          </button>
        </div>

        <ThemeToggle />
      </div>
    </nav>
  );
}
