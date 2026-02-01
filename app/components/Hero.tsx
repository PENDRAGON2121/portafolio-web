"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const roleRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      // Animate the vertical line
      tl.from(lineRef.current, {
        scaleY: 0,
        duration: 1.2,
        transformOrigin: "top",
      });

      // Status badge
      tl.from(
        statusRef.current,
        {
          x: -50,
          duration: 0.8,
        },
        "-=0.6"
      );

      // Split name animation - letter by letter
      const nameChars = nameRef.current?.querySelectorAll(".char");
      if (nameChars) {
        tl.from(
          nameChars,
          {
            y: 120,
            rotationX: -90,
            stagger: 0.03,
            duration: 1,
          },
          "-=0.4"
        );
      }

      // Role text with clip reveal
      tl.from(
        roleRef.current,
        {
          clipPath: "inset(0 100% 0 0)",
          duration: 1,
        },
        "-=0.5"
      );

      // Description
      tl.from(
        descRef.current,
        {
          y: 30,
          duration: 0.8,
        },
        "-=0.4"
      );

      // CTA buttons
      tl.from(
        ctaRef.current?.children || [],
        {
          y: 40,
          stagger: 0.15,
          duration: 0.6,
        },
        "-=0.3"
      );

      // Scroll indicator
      tl.from(
        scrollRef.current,
        {
          y: 20,
          duration: 0.6,
        },
        "-=0.2"
      );

      // Continuous floating for scroll indicator
      gsap.to(scrollRef.current, {
        y: 10,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Split name into characters
  const name = "DEV_ MAURICIO";

  return (
    <section
      ref={containerRef}
      id="hero"
      className="min-h-screen relative flex items-center overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

      {/* Vertical accent line */}
      <div
        ref={lineRef}
        className="absolute left-8 md:left-16 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary to-transparent"
      />

      <div className="max-w-7xl mx-auto px-8 md:px-16 py-20 w-full relative z-10 min-h-screen flex flex-col justify-between">
        {/* Top section - Status, Name, Description */}
        <div className="pt-24 md:pt-32">
          {/* Status */}
          <div
            ref={statusRef}
            className="flex items-center gap-3 mb-8"
          >
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          <span className="text-sm text-muted font-mono tracking-wider uppercase">
            Disponible para proyectos
          </span>
        </div>

        {/* Main content */}
        <div className="space-y-4">
          {/* Name - Large display */}
          <h1
            ref={nameRef}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none pb-1"
            style={{ perspective: "1000px" }}
          >
            <span className="block">
              {name.split("").map((char, i) => (
                <span key={i} className="char inline-block">
                  {char}
                </span>
              ))}
            </span>
          </h1>

          {/* Role */}
          <div
            ref={roleRef}
            className="flex items-center gap-4 py-4"
            style={{ clipPath: "inset(0 0 0 0)" }}
          >
            <div className="h-px w-16 bg-primary" />
            <span className="text-xl md:text-2xl font-light tracking-widest text-muted-light uppercase">
              Software Developer
            </span>
          </div>

          {/* Description */}
          <p
            ref={descRef}
            className="text-lg md:text-xl text-muted max-w-2xl leading-relaxed"
          >
            Desarrollador que encuentra en el código la forma de materializar ideas.
            Profesional en Informática Empresarial aplicando conocimientos en soluciones reales.
            Me motiva crear herramientas que realmente impacten.
          </p>
        </div>
        </div>

        {/* Bottom section - CTAs and scroll */}
        <div className="pb-8">
        {/* CTAs */}
        <div ref={ctaRef} className="flex flex-wrap items-center gap-6 mb-8">
          <a
            href="#projects"
            className="group relative px-8 py-4 bg-primary text-background font-semibold rounded-none overflow-hidden transition-all hover:pr-12"
          >
            <span className="relative z-10">Ver Proyectos</span>
            <span className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all group-hover:right-6">
              →
            </span>
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border border-border-light text-foreground font-medium hover:border-primary hover:text-primary transition-all"
          >
            Contacto
          </a>
          <div className="flex items-center gap-4 ml-auto">
            <a
              href="https://github.com/PENDRAGON2121"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-muted hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/dev-maqs/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-muted hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          ref={scrollRef}
          className="flex flex-col items-center gap-2 mx-auto"
        >
          <span className="text-xs text-muted font-mono tracking-widest uppercase">
            Scroll
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
        </div>
        </div>
      </div>

      {/* Corner decoration */}
      <div className="absolute bottom-8 right-8 md:bottom-16 md:right-16">
        <span className="text-xs font-mono text-muted">
          © {new Date().getFullYear()}
        </span>
      </div>
    </section>
  );
}
