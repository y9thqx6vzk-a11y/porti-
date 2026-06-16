"use client";

import React from "react";

interface TimelineItem {
  year: string;
  role: string;
  organization: string;
  details: string[];
}

const EXPERIENCE: Record<string, TimelineItem[]> = {
  Development: [
    {
      year: "2024 - Present",
      role: "Full-Stack Software Engineer",
      organization: "Freelance & Open Source Contribution",
      details: [
        "Architected and deployed responsive Next.js apps with type-safe backend integration.",
        "Optimized client-side rendering times and LCP scores by deferring unused scripts and lazy loading media.",
        "Created custom state-management architectures and integration pipelines using WebSockets and REST APIs.",
      ],
    },
    {
      year: "2023 - 2024",
      role: "Frontend Engineer (Contract)",
      organization: "Triangulation Design Studio",
      details: [
        "Built vector graphics engine components using HTML5 Canvas and React state hooks.",
        "Developed custom Tailwind styling systems, improving cross-browser UI/UX consistency by 35%.",
      ],
    },
  ],
  Logistics: [
    {
      year: "2022 - 2024",
      role: "Operations & Logistics Manager",
      organization: "Global Supply Solutions",
      details: [
        "Managed inventory database workflows and multi-tiered shipping distribution channels.",
        "Streamlined fulfillment logistics, leading to a 15% reduction in shipping latency.",
        "Coordinated complex resource scheduling and supply metrics using advanced data analysis.",
      ],
    },
  ],
  Leadership: [
    {
      year: "2021 - 2022",
      role: "Community Coordinator & Lead Organizer",
      organization: "Yachad Community Initiative",
      details: [
        "Coordinated community-wide operations, leading a volunteer network of over 50 members.",
        "Organized regional mutual-aid networks and resource distribution budgets.",
        "Established clear communication protocols and digital coordination boards.",
      ],
    },
  ],
};

export default function Resume() {
  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <section
      id="resume"
      className="w-full py-24 px-6 bg-slate-50/50 dark:bg-slate-900/10 transition-colors duration-300 print:bg-white print:text-black print:py-0 print:px-0"
    >
      <div className="max-w-6xl mx-auto print:max-w-none">
        
        {/* Header (hidden in print) */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16 scroll-reveal print:hidden">
          <div>
            <h2 className="text-xs font-semibold tracking-wider text-accent dark:text-accent-dark uppercase mb-3">
              Curriculum Vitae
            </h2>
            <p className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
              Work Experience
            </p>
            <div className="mt-4 h-1 w-12 bg-accent dark:bg-accent-dark rounded-full" />
          </div>

          <button
            onClick={handlePrint}
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-950 dark:hover:bg-slate-200 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer transform hover:-translate-y-0.5"
          >
            {/* Download/Print Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
            Download CV
          </button>
        </div>

        {/* Print Header (only visible on paper/print) */}
        <div className="hidden print:block mb-10 border-b pb-6 border-slate-300">
          <h1 className="text-3xl font-bold text-black tracking-tight mb-2">Eyal Bgr</h1>
          <p className="text-slate-600 text-sm font-medium">
            Full-Stack Software Engineer • Operations Manager • Mathematics Student
          </p>
          <div className="flex gap-6 mt-3 text-xs text-slate-500">
            <span>Email: contact@example.com</span>
            <span>Web: porti.example.com</span>
            <span>Github: github.com/y9thqx6vzk-a11y</span>
          </div>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 print:grid-cols-3 print:gap-8">
          {Object.entries(EXPERIENCE).map(([category, items]) => (
            <div key={category} className="space-y-8 scroll-reveal print:break-inside-avoid">
              
              {/* Category Header */}
              <div className="border-b border-slate-200 dark:border-slate-800 pb-3 print:border-slate-300">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent dark:bg-accent-dark" />
                  {category}
                </h3>
              </div>

              {/* Items */}
              <div className="relative pl-4 border-l border-slate-200 dark:border-slate-800 print:border-slate-300 space-y-8">
                {items.map((item, idx) => (
                  <div key={idx} className="relative space-y-2">
                    
                    {/* Circle Node on line */}
                    <div className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-slate-200 dark:bg-slate-800 border-2 border-slate-50 dark:border-slate-950 group-hover:bg-accent transition-colors" />

                    <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 tracking-wide">
                      {item.year}
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                      {item.role}
                    </h4>
                    <p className="text-xs font-semibold text-accent dark:text-accent-dark">
                      {item.organization}
                    </p>
                    <ul className="list-disc pl-4 space-y-1.5 pt-2 text-xs text-slate-500 dark:text-slate-450 leading-relaxed font-sans">
                      {item.details.map((detail, dIdx) => (
                        <li key={dIdx}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
