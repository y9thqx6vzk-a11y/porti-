"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      return document.documentElement.classList.contains("dark") ? "dark" : "light";
    }
    return "light";
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => {
      setMounted(true);
    });
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/50 dark:border-slate-800/50 bg-white/75 dark:bg-slate-950/75 backdrop-blur-md transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo / Title */}
        <div className="flex items-center space-x-2">
          <a
            href="#"
            className="text-lg font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent tracking-tight font-sans hover:opacity-80 transition-opacity"
          >
            Eyal Granot
          </a>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600 dark:text-slate-300">
          <button
            onClick={() => scrollToSection("projects")}
            className="hover:text-accent dark:hover:text-accent-dark transition-colors duration-200 cursor-pointer"
          >
            Case Studies
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="hover:text-accent dark:hover:text-accent-dark transition-colors duration-200 cursor-pointer"
          >
            About Me
          </button>
          <button
            onClick={() => scrollToSection("resume")}
            className="hover:text-accent dark:hover:text-accent-dark transition-colors duration-200 cursor-pointer"
          >
            Resume
          </button>
        </nav>

        {/* Controls */}
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="p-2 rounded-full border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-900 transition-all duration-200 text-slate-700 dark:text-slate-350 cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-accent"
          >
            {mounted && theme === "dark" ? (
              // Sun Icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 animate-pulse"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m0 13.5V21M4.95 4.95l1.58 1.58m10.94 10.94l1.58 1.58M3 12h2.25m13.5 0H21M4.95 19.05l1.58-1.58m10.94-10.94l1.58-1.58M12 7.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Z"
                />
              </svg>
            ) : (
              // Moon Icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                />
              </svg>
            )}
          </button>

          {/* Action CTA in header */}
          <button
            onClick={() => scrollToSection("resume")}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold tracking-wide text-white bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-950 dark:hover:bg-slate-200 rounded-lg transition-all duration-200 cursor-pointer shadow-xs hover:shadow-md"
          >
            Hire Me
          </button>
        </div>
      </div>
    </header>
  );
}
