import React from "react";

export default function About() {
  return (
    <section id="about" className="w-full py-24 px-6 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left Column - Philosophy / Highlights */}
          <div className="lg:col-span-5 flex flex-col justify-start space-y-8 scroll-reveal">
            <div>
              <h2 className="text-xs font-semibold tracking-wider text-accent dark:text-accent-dark uppercase mb-3">
                Background
              </h2>
              <p className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
                About Me
              </p>
              <div className="mt-4 h-1 w-12 bg-accent dark:bg-accent-dark rounded-full" />
            </div>

            <div className="space-y-6 pt-4">
              <div className="p-5 rounded-2xl border border-slate-100 dark:border-slate-900 bg-slate-50/50 dark:bg-slate-900/20">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2">Systems Thinking</h4>
                <p className="text-sm text-slate-550 dark:text-slate-400 leading-relaxed font-sans">
                  Approaching development from an operational efficiency perspective. Whether designing API architectures or scaling server loads, I optimize for clarity and resilience.
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-slate-100 dark:border-slate-900 bg-slate-50/50 dark:bg-slate-900/20">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2">Mathematical Rigor</h4>
                <p className="text-sm text-slate-550 dark:text-slate-400 leading-relaxed font-sans">
                  Deepening my software skills through mathematical principles. I leverage linear algebra, calculus, and discrete mathematics to write optimal algorithms and build robust visual systems.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Personal Statement / Cover Letter */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 scroll-reveal">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 tracking-tight leading-relaxed">
              "I truly believe I’d be a great fit for your team. I’m a planner at heart, and finding solutions to complex problems is genuinely what I love doing most."
            </h3>

            <div className="space-y-6 text-slate-600 dark:text-slate-355 text-base leading-relaxed font-sans font-light">
              <p>
                I am a resourceful and effective Operations and Project Manager who brings to every assignment a unique combination of technological capability, leadership skills, and a deep passion and ability to connect.
              </p>
              <p>
                My strong analytical background as a Mathematics student at Ben-Gurion University of the Negev provides the basis for my ability to understand and use AI tools to build digital solutions and automate workflows. I have demonstrated that I can translate complex logistical challenges into clear processes while ensuring engagement and collaboration across diverse teams.
              </p>
              <p>
                Combine my technical side with actually getting things done on the ground and that is the formula that drives me, and will be the energy and ability I will bring to this role.
              </p>
            </div>

            {/* Quick Contact Link */}
            <div className="pt-6">
              <a
                href="mailto:eyalbgr@gmail.com"
                className="inline-flex items-center text-sm font-semibold text-accent dark:text-accent-dark hover:text-accent-hover dark:hover:text-indigo-300 transition-colors"
              >
                Let's collaborate
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1 transition-transform"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
