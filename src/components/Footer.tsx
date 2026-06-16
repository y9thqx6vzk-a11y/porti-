import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-12 px-6 border-t border-slate-200/50 dark:border-slate-800/50 bg-white dark:bg-slate-950 transition-colors duration-300 print:hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left - Copyright & Hobbies */}
        <div className="flex flex-col space-y-1 text-center md:text-left">
          <p className="text-sm text-slate-550 dark:text-slate-400 font-sans">
            &copy; {currentYear} Eyal Granot. All rights reserved. Built with Next.js & Tailwind.
          </p>
          <p className="text-xs text-slate-400 dark:text-slate-500 font-sans font-light italic">
            Certified yoga instructor, avid traveler, and enthusiast of local guided history.
          </p>
        </div>

        {/* Right - Social Links */}
        <div className="flex space-x-6">
          <a
            href="https://github.com/y9thqx6vzk-a11y"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-550 dark:text-slate-400 hover:text-accent dark:hover:text-accent-dark text-sm font-semibold transition-colors duration-200"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/%D7%90%D7%99%D7%9C-%D7%92%D7%A8%D7%A0%D7%95%D7%AA-b51957415/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-550 dark:text-slate-400 hover:text-accent dark:hover:text-accent-dark text-sm font-semibold transition-colors duration-200"
          >
            LinkedIn
          </a>
          <a
            href="mailto:eyalbgr@gmail.com"
            className="text-slate-550 dark:text-slate-400 hover:text-accent dark:hover:text-accent-dark text-sm font-semibold transition-colors duration-200"
          >
            Email
          </a>
        </div>

      </div>
    </footer>
  );
}
