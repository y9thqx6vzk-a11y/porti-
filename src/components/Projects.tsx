import React from "react";
import ProjectCard, { Project } from "./ProjectCard";

const MOCK_PROJECTS: Project[] = [
  {
    title: "Sri Lanka Expedition",
    category: "Cross-Border Project & Supply Chain",
    metric: "Cost Optimization",
    challenge: "Synchronizing high-end logistics and vendor operations across multiple international time zones, cultures, and regulatory constraints under strict timeline limitations.",
    execution: "Led B2B vendor management, cross-border negotiations, and client delivery workflows. Spearheaded international supply chain stabilization, resolving on-site crises and establishing bespoke food services inside global 5-star hotels.",
    techAutomation: "Built and deployed automated tracking pipelines and GANTT-driven dashboard updates to monitor budget variances and schedule checkpoints, reducing cross-border coordination delays.",
    impact: "Successfully stabilized operations, managed international budgets, and established a resilient supply chain framework for a customized 10-day boutique expedition of 10-20 clients.",
    techStack: ["B2B Negotiations", "GANTT Pipelines", "Supply Chain", "Budget Controls", "Process Design"],
    githubUrl: "https://github.com/y9thqx6vzk-a11y/savtot-sri-lanka-2.git",
    demoUrl: "https://savtot-sri-lanka-2.vercel.app",
  },
  {
    title: "IDF Logistics Command",
    category: "High-Scale Operations & Crisis Management",
    metric: "Zero Downtime",
    challenge: "Providing fail-safe operational support and critical supply line management for rapid-deployment combat units in volatile, unpredictable, and high-stress field conditions.",
    execution: "Directed daily tactical operations and resource allocations, coordinating cross-functional logistics across multiple military units and external supply organizations.",
    techAutomation: "Designed database systems to log inventory movement and automated logistics dispatch queues to ensure instant operational responsiveness.",
    impact: "Managed daily logistics for 140 personnel and orchestrated large-scale, multi-day events for up to 3,000 participants with zero downtime.",
    techStack: ["Resource Allocation", "Crisis Management", "Inventory Controls", "Database Design", "Leadership"],
  },
  {
    title: "AI Automations (Smart Mobility)",
    category: "Process Automation & Product Operations",
    metric: "Process Speed",
    challenge: "Inefficient physical transportation matching and route planning for high-mobility groups, causing resource waste and prolonged operational bottlenecks.",
    execution: "Translated physical operations constraints into programmatic schemas. Spearheaded product operations from design validation to functional engineering, managing client requests and developers.",
    techAutomation: "Architected a custom automation engine using LLM APIs, Next.js, and TypeScript, automating real-time passenger corridor matching and route calculations.",
    impact: "Reduced manual matching time from hours to seconds and designed a scalable digital system that optimizes passenger carpool capacity.",
    techStack: ["Next.js", "React", "TypeScript", "LLM APIs", "System Architecture", "Route Optimization"],
    githubUrl: "https://github.com/y9thqx6vzk-a11y/tremp_app.git",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="w-full py-20 px-6 bg-slate-50/50 dark:bg-slate-900/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center md:text-left scroll-reveal">
          <h2 className="text-xs font-semibold tracking-wider text-accent dark:text-accent-dark uppercase mb-3">
            Experience
          </h2>
          <p className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            Case Studies
          </p>
          <div className="mt-4 h-1 w-12 bg-accent dark:bg-accent-dark rounded-full mx-auto md:mx-0" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {MOCK_PROJECTS.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
