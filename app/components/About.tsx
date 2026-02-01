"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const highlights = [
  { number: "01", title: "Desarrollo", desc: "Soluciones tecnológicas innovadoras" },
  { number: "02", title: "Aprendizaje", desc: "Siempre explorando nuevas tecnologías" },
  { number: "03", title: "Colaboración", desc: "Trabajo en equipo y liderazgo" },
];

const quickFacts = [
  { 
    label: "Empresa", 
    value: "Parque Tempisque",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  { 
    label: "Puesto", 
    value: "Asistente TI",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  { 
    label: "Universidad", 
    value: "UCR",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422m-6.16 3.422v6.061m0-6.061L5.84 10.578" />
      </svg>
    )
  },
  { 
    label: "Ubicación", 
    value: "Costa Rica",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const decorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Decorative element rotation only
      gsap.to(decorRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
        rotation: 180,
        ease: "none",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="min-h-screen relative py-32 px-8 md:px-16 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      {/* Decorative rotating element */}
      <div
        ref={decorRef}
        className="absolute top-20 right-20 w-32 h-32 border border-primary/20 rotate-45 hidden lg:block"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Asymmetric layout */}
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Left column - Title and intro */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="mb-8">
              <span className="block text-sm font-mono text-primary tracking-widest uppercase mb-4">
                / Sobre mí
              </span>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight">
                Creando
              </h2>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight gradient-text-static">
                soluciones
              </h2>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-muted-light pb-1">
                digitales
              </h2>
            </div>

            {/* Quick facts grid */}
            <div className="grid grid-cols-2 gap-3 mt-12">
              {quickFacts.map((fact, index) => (
                <div
                  key={fact.label}
                  className="fact-item group relative"
                >
                  {/* Card container */}
                  <div className="p-4 bg-card/50 border border-border/60 rounded-sm hover:border-primary/40 hover:bg-card/80 transition-all duration-300">
                    {/* Number indicator */}
                    <span className="absolute -top-2 -left-1 text-[10px] font-mono text-primary/40 font-bold">
                      0{index + 1}
                    </span>
                    
                    {/* Icon and label row */}
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-primary/70 group-hover:text-primary transition-colors">
                        {fact.icon}
                      </span>
                      <span className="text-[11px] font-mono text-muted/80 uppercase tracking-widest">
                        {fact.label}
                      </span>
                    </div>
                    
                    {/* Value */}
                    <p className="text-foreground font-medium text-sm pl-6 group-hover:text-primary transition-colors">
                      {fact.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column - Content */}
          <div className="lg:col-span-7 space-y-12">
            {/* Main text */}
            <div className="space-y-6">
              <p className="text-2xl md:text-3xl font-light text-foreground leading-relaxed">
                Profesional en desarrollo de software con enfoque en{" "}
                <span className="text-primary font-medium">soluciones tecnológicas</span>{" "}
                que generan impacto real. Especializado en identificar y resolver 
                necesidades a través de la innovación tecnológica.
              </p>
              <p className="text-lg text-muted leading-relaxed max-w-2xl">
                Actualmente me desempeño como Asistente de Tecnología Integral en 
                Parque Tempisque, donde aplico conocimientos técnicos para mejorar 
                procesos y sistemas operativos. Egresado de Informática Empresarial 
                de la Universidad de Costa Rica, combino una sólida formación académica 
                con experiencia práctica en el campo.
              </p>
              <p className="text-base text-muted/80 leading-relaxed max-w-2xl">
                Mi enfoque se centra en impulsar la transformación digital mediante 
                soluciones escalables que alinean tecnología con objetivos de negocio, 
                convirtiendo desafíos técnicos en ventajas competitivas y eficiencias operativas.
              </p>
            </div>

            {/* Current Experience Card */}
            <div className="p-6 border border-primary/30 bg-primary/5 backdrop-blur-sm relative overflow-hidden">
              {/* Active badge */}
              <div className="absolute top-4 right-4 flex items-center gap-2">
                <div className="relative">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <div className="absolute inset-0 w-2 h-2 bg-primary rounded-full animate-ping" />
                </div>
                <span className="text-xs font-mono text-primary uppercase">Actual</span>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 border border-primary/50 flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground">Asistente de Tecnología Integral</h3>
                  <p className="text-primary font-medium">Parque Tempisque</p>
                  <p className="text-sm text-muted mt-1 font-mono">Enero 2026 - Presente</p>
                  <p className="text-muted mt-3 text-sm leading-relaxed">
                    Desarrollo web, implementación de sistemas internos, soporte tecnológico
                    y gestión de proyectos de software para el parque empresarial y tecnológico.
                  </p>
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div className="space-y-3">
              {highlights.map((item) => (
                <div
                  key={item.number}
                  className="group flex items-center gap-4 py-4 px-5 border-l-2 border-border hover:border-primary bg-card/30 hover:bg-card/50 transition-all duration-300"
                >
                  <span className="text-2xl font-black text-primary/40 group-hover:text-primary/60 transition-colors font-mono w-10 text-center shrink-0">
                    {item.number}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-12 pt-8 border-t border-border">
              <div className="space-y-1">
                <span className="text-5xl font-black gradient-text">6+</span>
                <p className="text-sm text-muted font-mono uppercase tracking-wider">
                  Proyectos
                </p>
              </div>
              <div className="space-y-1">
                <span className="text-5xl font-black gradient-text">4</span>
                <p className="text-sm text-muted font-mono uppercase tracking-wider">
                  Certificaciones
                </p>
              </div>
              <div className="space-y-1">
                <span className="text-5xl font-black gradient-text">2</span>
                <p className="text-sm text-muted font-mono uppercase tracking-wider">
                  Idiomas
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </section>
  );
}
