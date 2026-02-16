"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: "01",
    title: "Parque Tempisque",
    subtitle: "Sitio Web Corporativo",
    description:
      "Desarrollo del sitio web oficial de Parque Tempisque con implementación multilenguaje (EN/ES) en WordPress y Elementor Pro, optimizado para SEO y rendimiento.",
    tags: ["WordPress", "Elementor Pro", "WPML", "SEO", "UI/UX"],
    url: "https://www.parquetempisque.com/",
    hasLink: true,
    year: "2026",
    category: "Web Development",
    featured: true,
  },
  {
    id: "02",
    title: "Nebula Assets",
    subtitle: "IT Asset Management + RBAC",
    description:
      "Sistema ITAM full stack para controlar ciclo de vida de hardware, asignaciones, mantenimientos y roles custom. Server Actions, RBAC granular, editor de permisos y auditoría completa.",
    tags: [
      "Next.js 15",
      "Prisma",
      "PostgreSQL",
      "NextAuth v5",
      "Shadcn UI",
      "Docker",
    ],
    url: "https://github.com/PENDRAGON2121/nebula-assets",
    hasLink: true,
    year: "2026",
    category: "Full Stack",
    featured: true,
  },
  {
    id: "03",
    title: "Nebula Tickets",
    subtitle: "Mesa de ayuda integrada",
    description:
      "Aplicación de tickets con dashboards diferenciados para agentes y usuarios, data tables reactivas, historial de actividad y asignaciones con control de permisos.",
    tags: [
      "Next.js 16",
      "Prisma",
      "NextAuth",
      "Tailwind/Shadcn",
      "RBAC",
      "Docker",
    ],
    url: "https://github.com/PENDRAGON2121/nebula-ticket",
    hasLink: true,
    year: "2026",
    category: "Full Stack",
    featured: true,
  },
  {
    id: "04",
    title: "Inventory Manager",
    subtitle: "Sistema de Gestión Empresarial",
    description:
      "Solución multicapa de gestión de inventarios construida con .NET 8.0. Arquitectura RESTful API para gestionar inventario, procesar ventas y operaciones de caja.",
    tags: [".NET 8", "ASP.NET Core", "Azure", "REST API", "SQL Server"],
    url: "https://github.com/PENDRAGON2121/GestionDeInventarios_ApiRest/tree/master",
    hasLink: true,
    year: "2024",
    category: "Backend",
    featured: false,
  },
  {
    id: "05",
    title: "Student Enrollment",
    subtitle: "API de Gestión Académica",
    description:
      "API desarrollada en ASP.NET Core para gestionar información de estudiantes con conexión a servicios cloud de Azure.",
    tags: ["ASP.NET Core", "Azure", "C#", "Entity Framework"],
    url: "https://github.com/PENDRAGON2121/MatriculaWeb.git",
    hasLink: true,
    year: "2024",
    category: "Backend",
    featured: false,
  },
  {
    id: "06",
    title: "Parking Control",
    subtitle: "Sistema de Control Vehicular",
    description:
      "Sistema en Java utilizando sockets y multithreading para gestionar acceso y salida de vehículos en tiempo real.",
    tags: ["Java", "Sockets", "Multithreading", "TCP/IP"],
    url: "https://github.com/PENDRAGON2121/Java_Sockets_Cliente_Servidor_Basico",
    hasLink: true,
    year: "2024",
    category: "Systems",
    featured: false,
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const projectsContainerRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from(headerRef.current?.querySelectorAll(".header-line") || [], {
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        y: 80,
        opacity: 0,
        rotationX: -40,
        stagger: 0.1,
        duration: 1,
        ease: "power4.out",
      });

      // Project cards reveal with clip-path
      const projectCards = projectsContainerRef.current?.querySelectorAll(".project-card");
      projectCards?.forEach((card, index) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          clipPath: "inset(100% 0 0 0)",
          opacity: 0,
          duration: 1,
          delay: index * 0.15,
          ease: "power4.out",
        });
      });

      // Project numbers floating
      const numbers = projectsContainerRef.current?.querySelectorAll(".project-number");
      numbers?.forEach((num, i) => {
        gsap.to(num, {
          y: -15,
          duration: 2 + i * 0.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="min-h-screen relative py-32 px-8 md:px-16 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      {/* Large background number */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 pointer-events-none select-none">
        <span className="text-[30vw] font-black text-white/[0.02] tracking-tighter leading-none">
          {projects[activeProject].id}
        </span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div ref={headerRef} className="mb-20">
          <span className="header-line block text-sm font-mono text-primary tracking-widest uppercase mb-4">
            / Proyectos Destacados
          </span>
          <h2 className="header-line text-5xl md:text-6xl lg:text-7xl font-black tracking-tight">
            Trabajo
          </h2>
          <h2 className="header-line text-5xl md:text-6xl lg:text-7xl font-black tracking-tight gradient-text-static pb-1">
            seleccionado
          </h2>
        </div>

        {/* Featured projects */}
        <div ref={projectsContainerRef} className="space-y-8">
          {projects.filter(p => p.featured).map((project, index) => (
            <div
              key={project.id}
              className="project-card group relative"
              style={{ clipPath: "inset(0 0 0 0)" }}
              onMouseEnter={() => setActiveProject(index)}
            >
              {/* Main card */}
              <div className="relative border border-border bg-card/30 backdrop-blur-sm hover:border-primary/50 transition-all duration-500 overflow-hidden">
                {/* Featured badge */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-primary/20 border border-primary/30 text-primary text-xs font-mono">
                  DESTACADO
                </div>

                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="grid lg:grid-cols-12 gap-8 p-8 md:p-12">
                  {/* Left - Number and category */}
                  <div className="lg:col-span-2 flex lg:flex-col items-center lg:items-start gap-4">
                    <span className="project-number text-6xl md:text-7xl font-black text-primary/10 group-hover:text-primary/30 transition-colors">
                      {project.id}
                    </span>
                    <span className="text-xs font-mono text-muted uppercase tracking-widest lg:mt-4">
                      {project.category}
                    </span>
                  </div>

                  {/* Center - Content */}
                  <div className="lg:col-span-7 space-y-4">
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-lg text-muted mt-1">{project.subtitle}</p>
                    </div>

                    <p className="text-muted leading-relaxed max-w-2xl">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 pt-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 border border-border text-xs font-mono text-muted hover:border-primary/50 hover:text-primary transition-all"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right - Year and link */}
                  <div className="lg:col-span-3 flex lg:flex-col items-center lg:items-end justify-between lg:justify-start gap-4">
                    <span className="text-sm font-mono text-muted">{project.year}</span>

                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                      >
                        <span className="text-sm font-medium">{project.demoLabel}</span>
                        <div className="w-12 h-12 border border-border group-hover/link:border-primary group-hover/link:bg-primary/10 flex items-center justify-center transition-all">
                          <svg
                            className="w-5 h-5 transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M7 17L17 7M17 7H7M17 7v10"
                            />
                          </svg>
                        </div>
                      </a>
                    )}

                    {project.hasLink ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                      >
                        <span className="text-sm font-medium">Ver proyecto</span>
                        <div className="w-12 h-12 border border-border group-hover/link:border-primary group-hover/link:bg-primary/10 flex items-center justify-center transition-all">
                          <svg
                            className="w-5 h-5 transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M7 17L17 7M17 7H7M17 7v10"
                            />
                          </svg>
                        </div>
                      </a>
                    ) : project.comingSoon ? (
                      <div className="flex items-center gap-3 text-muted">
                        <span className="text-sm font-medium">Próximamente</span>
                        <div className="w-12 h-12 border border-primary/50 bg-primary/5 flex items-center justify-center">
                          <svg
                            className="w-5 h-5 text-primary"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center gap-3 text-muted">
                        <span className="text-sm font-medium">Proyecto interno</span>
                        <div className="w-12 h-12 border border-border flex items-center justify-center">
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                            />
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Bottom hover reveal effect */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            </div>
          ))}

          {/* Other projects grid */}
          <div className="mt-16">
            <h3 className="text-xl font-bold text-foreground mb-8 flex items-center gap-3">
              <span className="w-8 h-px bg-primary" />
              Otros proyectos
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.filter(p => !p.featured).map((project) => (
                <div
                  key={project.id}
                  className="project-card group p-6 border border-border bg-card/30 backdrop-blur-sm hover:border-primary/50 transition-all duration-300"
                  style={{ clipPath: "inset(0 0 0 0)" }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-3xl font-black text-primary/20 group-hover:text-primary/40 transition-colors">
                      {project.id}
                    </span>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 border border-border hover:border-primary hover:text-primary transition-all"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>

                  <h4 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                    {project.title}
                  </h4>
                  <p className="text-sm text-muted mb-4 line-clamp-2">
                    {project.subtitle}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-mono text-muted bg-secondary/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 flex flex-col md:flex-row items-center justify-between gap-8 p-8 border border-border bg-card/30 backdrop-blur-sm">
          <div>
            <h3 className="text-2xl font-bold text-foreground">¿Quieres ver más?</h3>
            <p className="text-muted mt-2">
              Explora todos mis proyectos y contribuciones en GitHub
            </p>
          </div>
          <a
            href="https://github.com/PENDRAGON2121"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 px-8 py-4 bg-primary hover:bg-primary-hover text-background font-semibold transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
            <span>Visitar GitHub</span>
            <svg
              className="w-5 h-5 transform group-hover:translate-x-2 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </section>
  );
}
