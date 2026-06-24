import React from "react";

export default function About() {
  return (
    <section id="about" className="w-full py-24 px-6 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left Column - Core Principles / Academic Foundation */}
          <div className="lg:col-span-5 flex flex-col justify-start space-y-8 scroll-reveal">
            <div>
              <h2 className="text-xs font-semibold tracking-wider text-accent dark:text-accent-dark uppercase mb-3">
                Philosophy
              </h2>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                Systems-Thinking & Stakeholder Management
              </h3>
              <div className="mt-4 h-1 w-12 bg-accent dark:bg-accent-dark rounded-full" />
            </div>

            <div className="space-y-6 pt-4">
              <div className="p-6 rounded-2xl border border-slate-100 dark:border-slate-900 bg-slate-50/50 dark:bg-slate-900/20">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2">Systems Architecture</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-sans font-light">
                  Operational bottlenecks are indicators of system state. I analyze constraints, design automation steps, and build workflows optimized for scale.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-slate-100 dark:border-slate-900 bg-slate-50/50 dark:bg-slate-900/20">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2">B.Sc. Mathematics Foundation</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-sans font-light">
                  Studying Mathematics at Ben-Gurion University of the Negev trains my mind to abstract complex physical constraints into logical formulas. Note that I am transitioning to part-time studies to fully dedicate my focus to a full-time tech operations role.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-slate-100 dark:border-slate-900 bg-slate-50/50 dark:bg-slate-900/20">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2">EQ & Group Dynamics</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-sans font-light">
                  My background as a Group Facilitator equips me with strong emotional intelligence (EQ). I lead diverse groups, manage interpersonal dynamics, and align teams around common organizational goals.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Personal Statement & Bio */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8 scroll-reveal">
            <h4 className="text-xl font-semibold text-slate-900 dark:text-slate-100 tracking-tight leading-relaxed">
              "While I haven't managed a high-tech office, I hope you'll keep reading. You will find my background unique and highly relevant for your role. My true passion is solving problems and connecting to people."
            </h4>

            <div className="space-y-6 text-slate-650 dark:text-slate-350 text-base leading-relaxed font-sans font-light">
              <p>
                I help find simple, creative solutions to support my team. A key part of this is building strong international B2B partnerships. For example, collaborating with a local travel agent for my current project, a 10-day expedition to Sri Lanka, required building absolute trust while ensuring standards never dropped. This approach helped me navigate complex logistical and financial challenges, such as securing 100% kosher food in a country where seafood and dairy are standard breakfast fare, and navigating creative tax solutions to manage high upfront hotel expenses for our small business.
              </p>
              <p>
                I have always loved envisioning the full picture and translating it into practical steps, an analytical tendency that also led me to study Mathematics at Ben-Gurion University of the Negev. In the military, planning operations for over 140 soldiers, I learned the critical value of meticulous planning. I dive into the smallest details, from securing field supplies in the middle of nowhere to designing our project website.
              </p>
              <p>
                I deeply value the professionalism of the tech industry, and AI is integral to my workflow, though I am highly mindful of maintaining genuine authenticity. I am an independent initiator who is transitioning my studies to part-time to fully dive into an operations team where I can learn, grow, and contribute. I am seeking stability, great people, and a place to collaborate.
              </p>
            </div>

            {/* Contact Details */}
            <div className="pt-8 border-t border-slate-100 dark:border-slate-900 space-y-4">
              <p className="text-sm font-semibold text-slate-955 dark:text-white uppercase tracking-wider">
                Let's Discuss Operations
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 text-sm text-slate-600 dark:text-slate-350">
                <a
                  href="mailto:eyalbgr@gmail.com"
                  className="inline-flex items-center hover:text-accent dark:hover:text-accent-dark transition-colors duration-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4 mr-2 text-slate-400 dark:text-slate-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25H4.5a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                  eyalbgr@gmail.com
                </a>
                <a
                  href="https://wa.me/972543510664"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center hover:text-emerald-500 dark:hover:text-emerald-450 transition-colors duration-200"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 mr-2 text-slate-400 dark:text-slate-500"
                  >
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.403.002 9.803-4.394 9.806-9.799.002-2.593-1.002-5.031-2.828-6.858-1.826-1.826-4.265-2.83-6.861-2.832-5.409 0-9.81 4.402-9.813 9.808 0 1.52.418 3.008 1.21 4.307L1.58 20.16l4.067-1.006z" />
                  </svg>
                  054-3510664 (WhatsApp)
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
