"use client";

import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { MdSunny } from "react-icons/md";

type AvailableThemes = "dark" | "light";

export function ThemeSwitcher() {
  const [theme, setTheme] = useState<AvailableThemes>("dark");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as AvailableThemes;
    if (storedTheme) setTheme(storedTheme);
  }, []);

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  function handleThemeChange(event: React.MouseEvent) {
    event.preventDefault();
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  }

  return (
    <div className="flex justify-end gap-2 items-center">
      <button
        onClick={handleThemeChange}
        className="relative inline-flex h-6 w-15 sm:h-8 sm:w-20 items-center rounded-full cursor-pointer bg-gray-300 dark:bg-gray-600 transition-colors"
      >
        <span
          className={`flex items-center justify-center text-slate-900 h-5 w-5 sm:h-6 sm:w-6 transform rounded-full bg-white shadow transition-transform duration-300 ease-in-out ${theme === "dark" ? "translate-x-8 sm:translate-x-12 " : "translate-x-1 sm:translate-x-1"
            }`}
        >
          {theme === "dark" ? <FaMoon className="h-4 w-4 sm:w-5 sm:h-5" size={18} /> : <MdSunny size={18} />}
        </span>
      </button>
    </div>
  );
}
