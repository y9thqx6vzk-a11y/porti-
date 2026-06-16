"use client";

import { useEffect, useState } from "react";

const ROLES = [
  "Operations Manager & Process Architect",
  "Systems-Thinking Operations Leader",
  "Logistics Command & Supply Chain Expert",
];

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % ROLES.length);
        setFade(true);
      }, 300); // duration of fade-out
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full py-24 md:py-36 overflow-hidden flex flex-col justify-center items-center text-center px-6 bg-linear-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 dark:bg-accent-dark/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto space-y-8 z-10">
        {/* Intro Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium bg-accent/10 text-accent dark:bg-accent-dark/10 dark:text-accent-dark rounded-full border border-accent/20 dark:border-accent-dark/20 animate-fade-in">
          <span className="w-1.5 h-1.5 rounded-full bg-accent dark:bg-accent-dark animate-ping" />
          Data-Driven Operations & Process Design
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight font-sans">
          Eyal Granot <br />
          <span className="bg-gradient-to-r from-accent to-violet-500 dark:from-accent-dark dark:to-violet-400 bg-clip-text text-transparent">
            Data-Driven Operations Manager <br className="hidden sm:inline" /> & Process Architect
          </span>
        </h1>

        {/* Roles Carousel */}
        <div className="h-10 flex items-center justify-center">
          <p
            className={`text-xl md:text-2xl font-medium text-slate-600 dark:text-slate-350 transition-all duration-300 transform ${
              fade ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
            }`}
          >
            I am a <span className="text-slate-900 dark:text-white font-semibold">{ROLES[currentRoleIndex]}</span>
          </p>
        </div>

        {/* Short Paragraph Description */}
        <p className="max-w-3xl mx-auto text-base md:text-lg text-slate-500 dark:text-slate-400 leading-relaxed font-sans font-light">
          I bridge the gap between complex physical logistics and digital automation. By leveraging AI and system architecture, I transform operational bottlenecks into scalable workflows, ensuring zero downtime and maximum efficiency.
        </p>

        {/* Call-to-actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <button
            onClick={() => scrollToSection("projects")}
            className="w-full sm:w-auto px-8 py-3.5 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-950 dark:hover:bg-slate-200 rounded-xl transition-all duration-200 cursor-pointer shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            View Case Studies
          </button>
          
          <button
            onClick={() => scrollToSection("about")}
            className="w-full sm:w-auto px-8 py-3.5 text-sm font-semibold text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-900 rounded-xl transition-all duration-200 cursor-pointer transform hover:-translate-y-0.5"
          >
            Let&apos;s Talk Operations
          </button>
        </div>
      </div>
    </section>
  );
}
