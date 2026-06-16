import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-12 px-6 border-t border-slate-200/50 dark:border-slate-800/50 bg-white dark:bg-slate-950 transition-colors duration-300 print:hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left - Copyright */}
        <p className="text-sm text-slate-500 dark:text-slate-400 font-sans">
          &copy; {currentYear} Eyal Bgr. All rights reserved. Built with Next.js & Tailwind.
        </p>

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
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-550 dark:text-slate-400 hover:text-accent dark:hover:text-accent-dark text-sm font-semibold transition-colors duration-200"
          >
            LinkedIn
          </a>
          <a
            href="mailto:contact@example.com"
            className="text-slate-550 dark:text-slate-400 hover:text-accent dark:hover:text-accent-dark text-sm font-semibold transition-colors duration-200"
          >
            Email
          </a>
        </div>

      </div>
    </footer>
  );
}
