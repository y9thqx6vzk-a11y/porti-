import React from "react";

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
  imageUrl?: string; // Opt to display beautiful abstract card pattern if no image
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { title, description, techStack, githubUrl, demoUrl } = project;

  return (
    <div className="group relative flex flex-col justify-between p-6 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 bg-white dark:bg-slate-900/50 hover:bg-slate-50/50 dark:hover:bg-slate-900 transition-all duration-300 shadow-xs hover:shadow-lg hover:-translate-y-1 scroll-reveal">
      {/* Decorative hover border glow */}
      <div className="absolute inset-0 rounded-2xl border border-accent/0 group-hover:border-accent/30 dark:group-hover:border-accent-dark/30 pointer-events-none transition-all duration-300" />

      <div>
        {/* Project Visual Accent (abstract gradient) */}
        <div className="w-full h-36 mb-6 rounded-xl bg-gradient-to-br from-slate-100 to-slate-200/50 dark:from-slate-800 dark:to-slate-900/50 flex items-center justify-center overflow-hidden relative border border-slate-100 dark:border-slate-800/30">
          <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <span className="text-sm font-semibold text-slate-400 dark:text-slate-650 group-hover:text-accent dark:group-hover:text-accent-dark tracking-wider transition-colors duration-300">
            {title.toUpperCase()}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight mb-2 group-hover:text-accent dark:group-hover:text-accent-dark transition-colors duration-200">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 leading-relaxed font-sans line-clamp-3">
          {description}
        </p>
      </div>

      <div>
        {/* Technology stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-0.5 text-xs font-semibold text-slate-600 dark:text-slate-350 bg-slate-100 dark:bg-slate-800/50 rounded-md transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 text-sm font-semibold">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors duration-200"
            >
              {/* GitHub SVG */}
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              Code
            </a>
          )}

          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-accent dark:text-accent-dark hover:text-accent-hover dark:hover:text-indigo-300 transition-colors duration-200"
            >
              {/* External Link SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4 mr-1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
