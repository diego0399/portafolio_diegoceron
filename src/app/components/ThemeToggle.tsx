"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

import { translations, type Language } from "./translations";

type ThemeToggleProps = {
  language: Language;
};

type Theme = "light" | "dark";

const THEME_STORAGE_KEY = "portfolio-theme";

export default function ThemeToggle({ language }: ThemeToggleProps) {
  const [theme, setTheme] = useState<Theme>("light");

  const t = translations[language].theme;
  const isDark = theme === "dark";

  useEffect(() => {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);

    const initialTheme: Theme =
      savedTheme === "dark" || savedTheme === "light" ? savedTheme : "light";

    setTheme(initialTheme);

    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  const toggleTheme = () => {
    setTheme((currentTheme) => {
      const newTheme = currentTheme === "dark" ? "light" : "dark";

      localStorage.setItem(THEME_STORAGE_KEY, newTheme);
      document.documentElement.classList.toggle("dark", newTheme === "dark");

      return newTheme;
    });
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? t.switchToLight : t.switchToDark}
      title={isDark ? t.switchToLight : t.switchToDark}
      className="inline-flex items-center gap-2 rounded-xl border border-gray-200 px-3 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-100 dark:border-slate-700 dark:text-gray-100 dark:hover:bg-slate-800"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}

      <span>{isDark ? t.light : t.dark}</span>
    </button>
  );
}
