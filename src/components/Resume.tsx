"use client";

import React from "react";

interface TimelineItem {
  year: string;
  role: string;
  organization: string;
  details: string[];
}

const EXPERIENCES: TimelineItem[] = [
  {
    year: "Oct 2025 - Present",
    role: "Operations & Project Manager",
    organization: "Independent Initiative",
    details: [
      "Managed end-to-end operations and production for a customized 10-day expedition to Sri Lanka, handling all itinerary, accommodations, and travel logistics for clients aged 40 to 65.",
      "Built and managed strong B2B partnerships, leading daily coordination with international vendors in English to ensure smooth ground operations.",
      "Negotiated unique agreements with 5-star hotels to secure exclusive kitchen access, successfully directing strict Kosher and vegetarian food logistics.",
      "Provided dedicated client support and handled all project administration, including contracts, budget management, branded merchandise, and solving complex financial and tax issues.",
      "Workflow Automation: Utilized AI tools to design data-driven platforms and process automation workflows, bridging the gap between operational needs and technical execution."
    ]
  },
  {
    year: "Aug 2024 - Present",
    role: "Tour Guide & Group Facilitator",
    organization: "Masa Israeli & Similar Companies",
    details: [
      "Led on-site field operations and implemented structured educational programs, actively managing group dynamics to ensure a safe and inclusive environment.",
      "Handled real-time crisis management and adapted schedules on the fly, taking full ownership of the situation to maintain smooth, continuous operations.",
      "Forged strong, meaningful connections with colleagues and participants, driving engagement and ensuring a high-quality experience for everyone involved.",
      "Rapidly developed new operational expertise through self-directed learning, building key professional networks and alliances from the ground up."
    ]
  },
  {
    year: "Apr 2023 - Apr 2024",
    role: "Logistics & Operations Manager",
    organization: "IDF",
    details: [
      "Managed comprehensive logistics and strategic planning for 140 personnel under extreme operational pressure.",
      "Executed rapid site establishment and sustained long-term operations in austere environments.",
      "Led complex event logistics for up to 3000 participants, including full multi-day accommodation planning.",
      "Handled external vendor management, procurement, and cross-functional partnerships.",
      "Organized specialized corporate events and functions to support team morale and organizational goals."
    ]
  }
];

const EDUCATION = [
  {
    title: "B.Sc. in Mathematics (1st-year student, transitioning to part-time)",
    institution: "Ben-Gurion University of the Negev (Transitioning to part-time to fully dedicate energy to a full-time tech operations role)",
  },
  {
    title: "Certified Tour Guide & Group Facilitator",
    institution: "Eshkolot College & Masa Israeli",
  },
  {
    title: "Certified Yoga Instructor",
    institution: "Vinyasa Yogashala (India)",
  },
];

const SKILLS = {
  "Operations & Logistics": [
    "Project Planning",
    "B2B Communication",
    "Cross-Functional Leadership",
    "Crisis Management",
    "Teamwork & Collaboration"
  ],
  "Technology": [
    "AI-Assisted Development",
    "Process Automation",
    "Tech Integration"
  ],
  "Languages": [
    "Hebrew (Native)",
    "English (Fluent - Business & Conversational)"
  ]
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
        
        {/* Screen Header (hidden on print) */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16 scroll-reveal print:hidden">
          <div>
            <h2 className="text-xs font-semibold tracking-wider text-accent dark:text-accent-dark uppercase mb-3">
              Curriculum Vitae
            </h2>
            <p className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
              Professional Resume
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
            Download CV / Print
          </button>
        </div>

        {/* Print Header (only visible on print/pdf) */}
        <div className="hidden print:block mb-10 border-b pb-6 border-slate-300">
          <h1 className="text-3xl font-bold text-black tracking-tight mb-2">Eyal Granot</h1>
          <p className="text-slate-700 text-sm font-medium">
            Technical Operations & Project Manager
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-1 mt-3 text-xs text-slate-500 font-sans">
            <span>Phone: 054-3510664</span>
            <span>Email: eyalbgr@gmail.com</span>
            <span>LinkedIn: linkedin.com/in/eyal-granot</span>
            <span>GitHub: github.com/y9thqx6vzk-a11y</span>
          </div>
        </div>

        {/* CV Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 print:grid-cols-12 print:gap-8">
          
          {/* Left Side: Timeline of Experience (8 columns width) */}
          <div className="lg:col-span-8 print:col-span-8 space-y-10">
            
            {/* Professional Summary */}
            <div className="space-y-4 print:break-inside-avoid">
              <div className="border-b border-slate-200 dark:border-slate-800 pb-3 print:border-slate-300">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent dark:bg-accent-dark" />
                  Professional Summary
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-sans font-light">
                I am an Operations and Project Manager with a deep passion and natural talent for problem-solving. My core strength lies in visualizing complex situations, from daily workflows to events of up to 3,000 participants, and translating those visions into clear, practical steps, executing them seamlessly alongside the team. My analytical mindset, which led me to study Mathematics, drives me to simplify processes and integrate AI tools to optimize our efficiency. Whether coordinating international B2B relations or navigating sudden crises, I bring calm, structured execution. As a group facilitator, I value authentic human connection and straightforward communication. I am transitioning to part-time studies to fully dedicate my energy to contributing to a welcoming operations team.
              </p>
            </div>

            <div className="border-b border-slate-200 dark:border-slate-800 pb-3 print:border-slate-300">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent dark:bg-accent-dark" />
                Work Experience
              </h3>
            </div>

            <div className="relative pl-5 border-l border-slate-200 dark:border-slate-800 print:border-slate-200 space-y-10">
              {EXPERIENCES.map((item, idx) => (
                <div key={idx} className="relative space-y-2 group print:break-inside-avoid">
                  {/* Node Circle on line */}
                  <div className="absolute -left-[26px] top-1.5 w-3 h-3 rounded-full bg-slate-200 dark:bg-slate-800 border-2 border-slate-50 dark:border-slate-950 group-hover:bg-accent dark:group-hover:bg-accent-dark transition-colors duration-200" />
                  
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                    <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-accent dark:group-hover:text-accent-dark transition-colors duration-200">
                      {item.role}
                    </h4>
                    <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 tracking-wide sm:text-right">
                      {item.year}
                    </span>
                  </div>
                  
                  <p className="text-xs font-bold text-accent dark:text-accent-dark">
                    {item.organization}
                  </p>

                  <ul className="list-disc pl-4 space-y-1.5 pt-2 text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-sans font-light">
                    {item.details.map((detail, dIdx) => (
                      <li key={dIdx}>{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Education & Skills (4 columns width) */}
          <div className="lg:col-span-4 print:col-span-4 space-y-12">
            
            {/* Education & Certs */}
            <div className="space-y-6">
              <div className="border-b border-slate-200 dark:border-slate-800 pb-3 print:border-slate-300">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent dark:bg-accent-dark" />
                  Education & Certifications
                </h3>
              </div>

              <div className="space-y-4">
                {EDUCATION.map((edu, idx) => (
                  <div key={idx} className="space-y-1 print:break-inside-avoid">
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                      {edu.title}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-450 font-sans">
                      {edu.institution}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Skills */}
            <div className="space-y-6">
              <div className="border-b border-slate-200 dark:border-slate-800 pb-3 print:border-slate-300">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent dark:bg-accent-dark" />
                  Skills & Languages
                </h3>
              </div>

              <div className="space-y-6 font-sans">
                {Object.entries(SKILLS).map(([category, items]) => (
                  <div key={category} className="space-y-2 print:break-inside-avoid">
                    <h4 className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                      {category}
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {items.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 text-xs text-slate-600 dark:text-slate-350 bg-slate-100 dark:bg-slate-800/50 rounded-md border border-slate-200/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
