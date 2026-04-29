"use client";

import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

type NavbarProps = {
  onShowSections: (section: string) => void;
};

export default function Navbar({ onShowSections }: NavbarProps) {
  const [open, setOpen] = useState(false);

  const handleClick = (section: string) => {
    onShowSections(section);
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-gray-200 bg-white/90 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/90">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <h1 className="text-lg font-bold text-gray-900 dark:text-white sm:text-xl">
          Mi Portafolio
        </h1>

        <div className="hidden items-center gap-6 text-sm font-medium text-gray-600 dark:text-gray-300 md:flex">
          <button onClick={() => handleClick("hero")} className="hover:text-blue-600">
            Inicio
          </button>
          <button onClick={() => handleClick("skills")} className="hover:text-blue-600">
            Skills
          </button>
          <button onClick={() => handleClick("projects")} className="hover:text-blue-600">
            Proyectos
          </button>
          <button onClick={() => handleClick("contact")} className="hover:text-blue-600">
            Contacto
          </button>
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            className="rounded-lg border border-gray-300 px-3 py-2 text-sm font-semibold text-gray-700 dark:border-slate-700 dark:text-white"
          >
            {open ? "Cerrar" : "Menú"}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-gray-200 bg-white px-4 py-4 dark:border-slate-800 dark:bg-slate-950 md:hidden">
          <div className="flex flex-col gap-4 text-sm font-medium text-gray-700 dark:text-gray-300">
            <button onClick={() => handleClick("hero")} className="text-left">
              Inicio
            </button>
            <button onClick={() => handleClick("skills")} className="text-left">
              Skills
            </button>
            <button onClick={() => handleClick("projects")} className="text-left">
              Proyectos
            </button>
            <button onClick={() => handleClick("contact")} className="text-left">
              Contacto
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
