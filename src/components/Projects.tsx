import React from "react";
import ProjectCard, { Project } from "./ProjectCard";

const MOCK_PROJECTS: Project[] = [
  {
    title: "Tremp_app",
    description:
      "A real-time carpooling and ridesharing platform tailored to connect commuters. Built with live geolocation updates, smart route matching algorithms, and instantaneous reservation notifications to make shared travel efficient and reliable.",
    techStack: ["React", "TypeScript", "Node.js", "Express", "Socket.io", "PostgreSQL"],
    githubUrl: "https://github.com/example/tremp-app",
    demoUrl: "https://tremp-app.example.com",
  },
  {
    title: "Triangulation Design Studio",
    description:
      "A visual, high-performance web studio enabling users to upload imagery and generate beautiful vector-based triangulation (low-poly) designs. Supports custom mesh adjustments, edge detection configurations, and export formats (SVG, PNG).",
    techStack: ["Next.js", "React", "TypeScript", "HTML5 Canvas", "Tailwind CSS"],
    githubUrl: "https://github.com/example/triangulation-studio",
    demoUrl: "https://triangulate.example.com",
  },
  {
    title: "Yachad Community",
    description:
      "A community coordination hub that powers mutual-aid initiatives, localized volunteering, shared tool lending libraries, and event planning. Designed to foster local resilience and connection through real-time communication.",
    techStack: ["React", "TypeScript", "Firebase (Auth/Store)", "Tailwind CSS", "Algolia"],
    githubUrl: "https://github.com/example/yachad-community",
    demoUrl: "https://yachad.example.com",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="w-full py-20 px-6 bg-slate-50/50 dark:bg-slate-900/10 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center md:text-left scroll-reveal">
          <h2 className="text-xs font-semibold tracking-wider text-accent dark:text-accent-dark uppercase mb-3">
            Selected Works
          </h2>
          <p className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            Projects I've Built
          </p>
          <div className="mt-4 h-1 w-12 bg-accent dark:bg-accent-dark rounded-full mx-auto md:mx-0" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_PROJECTS.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
