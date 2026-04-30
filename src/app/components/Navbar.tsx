"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

type NavbarProps = {
  onShowSections: (section: string) => void;
};

const links = [
  { id: "hero", label: "Inicio" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Proyectos" },
  { id: "contact", label: "Contacto" },
];

export default function Navbar({ onShowSections }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSectionClick = (section: string) => {
    onShowSections(section);
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-40 bg-gray-100/90 py-4 backdrop-blur-md transition-colors dark:bg-slate-950/90">
      <div className="mx-auto flex w-[92%] max-w-6xl items-center justify-between rounded-2xl bg-white px-4 py-3 shadow-sm transition-colors dark:bg-slate-900 dark:shadow-slate-950 sm:px-6 lg:px-10">
        <h1 className="text-base font-semibold text-gray-700 dark:text-gray-100 sm:text-lg">
          Mi Portafolio
        </h1>

        <div className="hidden items-center gap-8 text-gray-600 font-medium dark:text-gray-300 md:flex">
          {links.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => handleSectionClick(link.id)}
              className="hover:text-gray-900 transition-colors dark:hover:text-white"
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="hidden md:block">
          <ThemeToggle />
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menú"
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 text-gray-700 transition hover:bg-gray-100 dark:border-slate-700 dark:text-gray-100 dark:hover:bg-slate-800 md:hidden"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen && (
        <div className="mx-auto mt-3 w-[92%] rounded-2xl bg-white p-4 shadow-lg dark:bg-slate-900 md:hidden">
          <div className="flex flex-col gap-2">
            {links.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => handleSectionClick(link.id)}
                className="rounded-xl px-4 py-3 text-left font-medium text-gray-700 transition hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-slate-800"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="mt-4 border-t border-gray-200 pt-4 dark:border-slate-700">
            <ThemeToggle />
          </div>
        </div>
      )}
    </nav>
  );
}
