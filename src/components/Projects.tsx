import React from "react";
import ProjectCard, { Project } from "./ProjectCard";

const MOCK_PROJECTS: Project[] = [
  {
    title: "Smart Mobility Prototype (Tremp_app)",
    category: "End-to-End Product Operations",
    metric: "Resource Efficiency",
    situation: "Identified a critical logistical bottleneck in physical transportation and resource allocation for highly mobile demographics (students and military personnel).",
    task: "Architect a scalable, tech-enabled platform to manage complex carpool logistics and optimize daily transit operations.",
    action: "Led end-to-end product operations from concept to execution. Integrated LLMs and AI tools to map user flows, designed the core system architecture, and directed cross-functional workflows to automate route calculations and match algorithms.",
    result: "Delivered a comprehensive digital prototype that translates physical mobility constraints into an automated, data-driven system, maximizing resource efficiency and scalability.",
    techStack: ["Next.js", "React", "TypeScript", "LLM APIs", "System Architecture", "Route Algorithms"],
    githubUrl: "https://github.com/y9thqx6vzk-a11y/tremp_app.git",
  },
  {
    title: "International Group Expeditions (Sri Lanka)",
    category: "Cross-Border Project & Supply Chain",
    metric: "Stable Budget",
    situation: "An upcoming large-scale expedition to Sri Lanka required complex logistical synchronization across multiple time zones, regulatory environments, and cultures.",
    task: "Build and execute a flawless supply chain, ensuring strict budget optimization and operational efficiency for high-end client deliverables.",
    action: "Managed B2B vendor relations and cross-border negotiations. Developed comprehensive GANTT charts to oversee budget pipelines and executed complex, hyper-specific logistics under strict deadlines—including the establishment of Kosher supply chains within 5-star hotel environments.",
    result: "Secured global vendor contracts, stabilized operational budgets, and established a highly resilient supply chain framework ahead of the project launch.",
    techStack: ["B2B Logistics", "GANTT Charts", "Supply Chain", "Budget Optimization", "Process Automation"],
    githubUrl: "https://github.com/y9thqx6vzk-a11y/savtot-sri-lanka-2.git",
    demoUrl: "https://savtot-sri-lanka-2.vercel.app",
  },
  {
    title: "IDF Paratroopers Logistics Command (R\"sap)",
    category: "High-Scale Operations & Crisis Management",
    metric: "Zero Downtime",
    situation: "Required robust, fail-safe operational support for combat units functioning in high-stress, unpredictable environments.",
    task: "Direct massive supply chains, oversee daily tactical operations for 140+ personnel, and manage logistics for large-scale events accommodating up to 3,000 attendees.",
    action: "Engineered and executed dynamic contingency plans. Managed comprehensive resource allocation, inventory controls, and cross-functional collaboration under extreme, time-sensitive pressure.",
    result: "Achieved continuous operational flow with zero downtime during critical deployments and successfully orchestrated seamless logistics for multi-thousand-person operations.",
    techStack: ["Resource Allocation", "Crisis Operations", "Contingency Planning", "Inventory Controls", "Squad Leadership"],
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
