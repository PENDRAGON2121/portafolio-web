"use client";

import { useRef } from "react";

const experience = [
  {
    id: "01",
    type: "work",
    title: "Asistente de Tecnología Integral",
    subtitle: "Parque Tempisque",
    description: "Desarrollo web con WordPress y Elementor Pro, implementación de sistemas internos con Next.js y MongoDB, soporte a usuarios, análisis de TI, gestión de Microsoft Tenant y SharePoint, y administración de proyectos de software.",
    status: "Actual",
    year: "Ene 2026 - Presente",
  },
];

const education = [
  {
    id: "02",
    type: "education",
    title: "Informática Empresarial",
    subtitle: "Universidad de Costa Rica",
    description: "Bachillerato en Informática Empresarial con énfasis en desarrollo de software y gestión tecnológica.",
    status: "Completado",
    year: "2021 - 2025",
  },
  {
    id: "03",
    type: "education",
    title: "Diploma de Secundaria",
    subtitle: "Liceo de Bebedero",
    description: "Educación secundaria completa con enfoque en ciencias y matemáticas.",
    status: "Completado",
    year: "2021",
  },
];

const certifications = [
  { name: "Python Essentials 1", org: "Cisco", year: "2023" },
  { name: "Basic Conversational English", org: "IPEC", year: "2022" },
  { name: "Youth Leadership", org: "FOD", year: "2022" },
  { name: "Self-Leadership", org: "UCR", year: "2023" },
];

export default function Education() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      id="education"
      className="min-h-screen relative py-32 px-8 md:px-16 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-accent-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      {/* Large background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
        <span className="text-[12vw] font-black text-white/[0.02] tracking-tighter whitespace-nowrap">
          EXPERIENCE
        </span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-20">
          <span className="block text-sm font-mono text-primary tracking-widest uppercase mb-4">
            / Experiencia & Educación
          </span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight">
            Mi camino
          </h2>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight gradient-text-static pb-1">
            profesional
          </h2>
        </div>

        {/* Current Experience - Featured */}
        <div className="mb-16">
          {experience.map((item) => (
            <div
              key={item.id}
              className="group relative p-8 border border-primary/30 bg-primary/5 backdrop-blur-sm"
            >
              {/* Active indicator */}
              <div className="absolute top-6 right-6 flex items-center gap-2">
                <div className="relative">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <div className="absolute inset-0 w-2 h-2 bg-primary rounded-full animate-ping" />
                </div>
                <span className="text-xs font-mono text-primary uppercase tracking-wider">
                  {item.status}
                </span>
              </div>

              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex items-center gap-4">
                  <span className="text-5xl font-black text-primary/20">
                    {item.id}
                  </span>
                  <div className="w-14 h-14 border border-primary flex items-center justify-center">
                    <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-primary font-semibold text-lg">{item.subtitle}</p>
                  <p className="text-sm text-muted font-mono mt-1">{item.year}</p>
                  <p className="text-muted mt-4 leading-relaxed max-w-2xl">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" />
            </div>
          ))}
        </div>

        {/* Two column layout */}
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Education Timeline - Left */}
          <div className="lg:col-span-7 relative">
            <h3 className="text-xl font-bold text-foreground mb-8 flex items-center gap-3">
              <span className="w-8 h-px bg-primary" />
              Formación Académica
            </h3>

            {/* Vertical timeline line */}
            <div
              className="absolute left-4 top-20 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-accent-secondary"
            />

            <div className="space-y-8">
              {education.map((item) => (
                <div
                  key={item.id}
                  className="relative pl-12"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-2 w-8 h-8 flex items-center justify-center">
                    <div className="w-3 h-3 bg-primary rounded-full" />
                  </div>

                  {/* Content card */}
                  <div className="group p-6 border border-border bg-card/30 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                      <div>
                        <span className="text-xs font-mono text-primary uppercase tracking-wider">
                          Educación
                        </span>
                        <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mt-1">
                          {item.title}
                        </h4>
                        <p className="text-muted">{item.subtitle}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-sm font-mono text-muted">{item.year}</span>
                        <div className="mt-2">
                          <span
                            className={`inline-block px-3 py-1 text-xs font-medium ${
                              item.status === "En progreso"
                                ? "bg-accent/20 text-accent border border-accent/30"
                                : "bg-primary/20 text-primary border border-primary/30"
                            }`}
                          >
                            {item.status}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-muted text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications - Right */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <h3 className="text-xl font-bold text-foreground mb-8 flex items-center gap-3">
                <span className="w-8 h-px bg-primary" />
                Certificaciones
              </h3>

              <div className="space-y-3">
                {certifications.map((cert, i) => (
                  <div
                    key={cert.name}
                    className="group py-4 px-5 border-l-2 border-border bg-card/30 hover:border-primary hover:bg-card/50 transition-all duration-300 flex items-center gap-4"
                  >
                    <span className="text-2xl font-black text-primary/40 group-hover:text-primary/60 transition-colors font-mono w-10 text-center shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                        {cert.name}
                      </h4>
                      <p className="text-sm text-muted">{cert.org}</p>
                    </div>
                    <span className="text-xs font-mono text-primary/60 shrink-0">{cert.year}</span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="mt-8 p-6 border border-border bg-card/30">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-black gradient-text">4</div>
                    <div className="text-xs text-muted font-mono uppercase">Certificados</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black gradient-text">3</div>
                    <div className="text-xs text-muted font-mono uppercase">Instituciones</div>
                  </div>
                </div>
              </div>

              {/* Languages */}
              <div className="mt-6 p-6 border border-border bg-card/30">
                <h4 className="text-sm font-semibold text-foreground mb-4">Idiomas</h4>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted">Español</span>
                      <span className="text-primary font-mono">Nativo</span>
                    </div>
                    <div className="h-1 bg-border rounded-full overflow-hidden">
                      <div className="h-full w-full bg-gradient-to-r from-primary to-accent rounded-full" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted">Inglés</span>
                      <span className="text-primary font-mono">Intermedio</span>
                    </div>
                    <div className="h-1 bg-border rounded-full overflow-hidden">
                      <div className="h-full w-3/4 bg-gradient-to-r from-primary to-accent rounded-full" />
                    </div>
                  </div>
                </div>
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
