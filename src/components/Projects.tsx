import React from "react";
import ProjectCard, { Project } from "./ProjectCard";

const MOCK_PROJECTS: Project[] = [
  {
    title: "Tremp_app | AI-Driven Mobility Prototype",
    description:
      "An end-to-end smart mobility application prototype for student and soldier carpool logistics. Built database schemas, custom routing vectors, and integration workflows utilizing advanced prompt sequences.",
    techStack: ["Next.js", "React", "TypeScript", "Node.js", "Express", "PostgreSQL", "LLM APIs"],
    githubUrl: "https://github.com/y9thqx6vzk-a11y/tremp_app.git",
  },
  {
    title: "Sri Lanka Expedition | International Project Management",
    description:
      "End-to-end production, legal framework, and digital infrastructure for a 10-day group tour. Engineered registration automation pipelines to streamline workflow, and leveraged complex prompts to draft legal travel contracts.",
    techStack: ["React", "Vercel", "Legal Design", "B2B Logistics", "Process Automation"],
    githubUrl: "https://github.com/y9thqx6vzk-a11y/savtot-sri-lanka-2.git",
    demoUrl: "https://savtot-sri-lanka-2.vercel.app",
  },
  {
    title: "Military Logistics & Field Operations | IDF Paratroopers",
    description:
      "Directed supply chain pipelines and daily logistics for 140+ soldiers in intense field environments. Planned large-scale operational operations for a military evaluation event of 3,000 participants.",
    techStack: ["Resource Allocation", "Squad Leadership", "Strategic Planning", "Crisis Operations"],
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
