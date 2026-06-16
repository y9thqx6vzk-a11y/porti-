import React from "react";

export interface Project {
  title: string;
  category: string;
  metric?: string;
  situation: string;
  task: string;
  action: string;
  result: string;
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const {
    title,
    category,
    metric,
    situation,
    task,
    action,
    result,
    techStack,
    githubUrl,
    demoUrl,
  } = project;

  return (
    <div className="group relative flex flex-col justify-between p-6 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 bg-white dark:bg-slate-900/40 hover:bg-slate-50/50 dark:hover:bg-slate-900/60 transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1 scroll-reveal">
      {/* Decorative hover border glow */}
      <div className="absolute inset-0 rounded-2xl border border-accent/0 group-hover:border-accent/20 dark:group-hover:border-accent-dark/20 pointer-events-none transition-all duration-300" />

      <div>
        {/* Category & High-impact metric */}
        <div className="flex justify-between items-center mb-4 pb-4 border-b border-slate-100 dark:border-slate-800/50">
          <span className="text-[11px] font-bold tracking-wider text-accent dark:text-accent-dark uppercase">
            {category}
          </span>
          {metric && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-450 border border-emerald-500/20 dark:border-emerald-400/20">
              {metric}
            </span>
          )}
        </div>

        {/* Project Title */}
        <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight mb-5 group-hover:text-accent dark:group-hover:text-accent-dark transition-colors duration-200">
          {title}
        </h3>

        {/* STAR Structure */}
        <div className="space-y-4 mb-6 text-xs sm:text-sm">
          {/* Situation */}
          <div className="grid grid-cols-[64px_1fr] gap-x-3 items-start">
            <span className="font-bold text-slate-400 dark:text-slate-500 select-none uppercase text-[9px] tracking-wider bg-slate-100 dark:bg-slate-800/50 px-1.5 py-0.5 rounded-md text-center">
              Situation
            </span>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-sans font-light">
              {situation}
            </p>
          </div>

          {/* Task */}
          <div className="grid grid-cols-[64px_1fr] gap-x-3 items-start">
            <span className="font-bold text-slate-400 dark:text-slate-500 select-none uppercase text-[9px] tracking-wider bg-slate-100 dark:bg-slate-800/50 px-1.5 py-0.5 rounded-md text-center">
              Task
            </span>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-sans font-light">
              {task}
            </p>
          </div>

          {/* Action */}
          <div className="grid grid-cols-[64px_1fr] gap-x-3 items-start">
            <span className="font-bold text-accent dark:text-accent-dark select-none uppercase text-[9px] tracking-wider bg-accent/10 dark:bg-accent-dark/10 px-1.5 py-0.5 rounded-md text-center">
              Action
            </span>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-sans font-light">
              {action}
            </p>
          </div>

          {/* Result */}
          <div className="grid grid-cols-[64px_1fr] gap-x-3 items-start">
            <span className="font-bold text-emerald-600 dark:text-emerald-400 select-none uppercase text-[9px] tracking-wider bg-emerald-500/10 dark:bg-emerald-400/10 px-1.5 py-0.5 rounded-md text-center">
              Result
            </span>
            <p className="text-slate-800 dark:text-slate-200 font-medium leading-relaxed font-sans">
              {result}
            </p>
          </div>
        </div>
      </div>

      <div>
        {/* Technology stack */}
        <div className="flex flex-wrap gap-1.5 mb-5 border-t border-slate-100 dark:border-slate-850 pt-4">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-[10px] font-semibold text-slate-650 dark:text-slate-350 bg-slate-100 dark:bg-slate-800/50 rounded-md transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 text-xs font-semibold">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-slate-550 dark:text-slate-350 hover:text-slate-900 dark:hover:text-white transition-colors duration-200"
            >
              {/* GitHub SVG */}
              <svg
                className="w-3.5 h-3.5 mr-1.5"
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
              Code Repo
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
                className="w-3.5 h-3.5 mr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
              Live Site
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
