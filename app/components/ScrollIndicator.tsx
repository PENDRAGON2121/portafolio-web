"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const sections = [
  { id: "hero", label: "Inicio", number: "01" },
  { id: "about", label: "Sobre mí", number: "02" },
  { id: "skills", label: "Skills", number: "03" },
  { id: "projects", label: "Proyectos", number: "04" },
  { id: "education", label: "Educación", number: "05" },
  { id: "contact", label: "Contacto", number: "06" },
];

export default function ScrollIndicator() {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const indicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Show indicator after initial load
    const showTimer = setTimeout(() => setIsVisible(true), 1500);

    // Progress bar animation
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress(); // Initial call

    // Section detection with ScrollTrigger
    const triggers: ScrollTrigger[] = [];

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        const trigger = ScrollTrigger.create({
          trigger: element,
          start: "top center",
          end: "bottom center",
          onEnter: () => setActiveSection(section.id),
          onEnterBack: () => setActiveSection(section.id),
        });
        triggers.push(trigger);
      }
    });

    // Animate indicator on load
    if (indicatorRef.current) {
      gsap.from(indicatorRef.current, {
        x: -50,
        opacity: 0,
        duration: 1,
        delay: 1.5,
        ease: "power3.out",
      });
    }

    return () => {
      clearTimeout(showTimer);
      window.removeEventListener("scroll", updateProgress);
      triggers.forEach((trigger) => trigger.kill());
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      gsap.to(window, {
        duration: 1.2,
        scrollTo: { y: element, offsetY: 0 },
        ease: "power3.inOut",
      });
    }
  };

  const activeIndex = sections.findIndex((s) => s.id === activeSection);

  return (
    <div
      ref={indicatorRef}
      className={`fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-start gap-1 transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Current section number */}
      <div className="mb-4">
        <span className="text-5xl font-black text-primary/20">
          {sections[activeIndex]?.number || "01"}
        </span>
      </div>

      {/* Progress line container */}
      <div className="relative flex items-center gap-4">
        {/* Vertical progress track */}
        <div className="relative w-px h-48 bg-border/50">
          {/* Progress fill */}
          <div
            className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary to-accent transition-all duration-300 ease-out"
            style={{ height: `${scrollProgress}%` }}
          />

          {/* Section markers */}
          {sections.map((_, index) => (
            <div
              key={index}
              className="absolute left-1/2 -translate-x-1/2 w-2 h-px bg-border"
              style={{ top: `${(index / (sections.length - 1)) * 100}%` }}
            />
          ))}
        </div>

        {/* Section dots */}
        <div className="flex flex-col justify-between h-48">
          {sections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="group relative flex items-center"
              aria-label={`Ir a ${section.label}`}
            >
              {/* Dot */}
              <div
                className={`relative w-2 h-2 rounded-full transition-all duration-300 ${
                  activeSection === section.id
                    ? "bg-primary scale-150"
                    : "bg-border hover:bg-primary/50"
                }`}
              >
                {/* Active glow */}
                {activeSection === section.id && (
                  <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-50" />
                )}
              </div>

              {/* Label tooltip */}
              <div
                className={`absolute left-6 flex items-center gap-2 px-3 py-1.5 bg-card/90 backdrop-blur-sm border border-border whitespace-nowrap transition-all duration-300 ${
                  activeSection === section.id
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-2 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0"
                }`}
              >
                <span className="text-xs font-mono text-primary">{section.number}</span>
                <span className={`text-sm ${activeSection === section.id ? "text-primary font-medium" : "text-muted"}`}>
                  {section.label}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Scroll hint at bottom */}
      <div className="mt-6 flex flex-col items-center">
        <span className="text-xs font-mono text-muted tracking-widest writing-vertical-lr rotate-180">
          SCROLL
        </span>
        <div className="mt-2 w-px h-8 bg-gradient-to-b from-primary/50 to-transparent" />
        {/* Mouse icon */}
        <div className="mt-2 w-5 h-8 border-2 border-muted/50 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </div>
  );
}
