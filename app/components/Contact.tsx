"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const socialLinks = [
  {
    name: "LinkedIn",
    handle: "@dev-maqs",
    href: "https://www.linkedin.com/in/dev-maqs/",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    handle: "@PENDRAGON2121",
    href: "https://github.com/PENDRAGON2121",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "Instagram",
    handle: "@maqs_18",
    href: "https://www.instagram.com/maqs_18",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation - large text reveal
      gsap.from(headerRef.current?.querySelectorAll(".header-line") || [], {
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        y: 120,
        opacity: 0,
        rotationX: -45,
        stagger: 0.15,
        duration: 1.2,
        ease: "power4.out",
      });

      // Content reveal
      gsap.from(contentRef.current, {
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Social links animation
      const socialItems = socialsRef.current?.querySelectorAll(".social-link");
      if (socialItems) {
        gsap.from(socialItems, {
          scrollTrigger: {
            trigger: socialsRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          y: 40,
          opacity: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: "power3.out",
        });
      }

      // Magnetic effect for social buttons
      socialItems?.forEach((item) => {
        item.addEventListener("mousemove", (e: Event) => {
          const mouseEvent = e as MouseEvent;
          const rect = (item as HTMLElement).getBoundingClientRect();
          const x = mouseEvent.clientX - rect.left - rect.width / 2;
          const y = mouseEvent.clientY - rect.top - rect.height / 2;
          gsap.to(item, {
            x: x * 0.3,
            y: y * 0.3,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        item.addEventListener("mouseleave", () => {
          gsap.to(item, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: "elastic.out(1, 0.5)",
          });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="min-h-screen relative py-32 px-8 md:px-16 overflow-hidden flex items-center"
    >
      {/* Background */}
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

      {/* Large background text */}
      <div className="absolute bottom-10 left-0 right-0 pointer-events-none select-none overflow-hidden">
        <span className="text-[20vw] font-black text-white/[0.02] tracking-tighter block text-center">
          CONTACT
        </span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left - Big CTA text */}
          <div ref={headerRef}>
            <div className="overflow-hidden">
              <span className="header-line block text-sm font-mono text-primary tracking-widest uppercase mb-6">
                / Contacto
              </span>
            </div>
            <h2 className="header-line text-5xl md:text-6xl lg:text-8xl font-black tracking-tight leading-none">
              Let&apos;s
            </h2>
            <h2 className="header-line text-5xl md:text-6xl lg:text-8xl font-black tracking-tight leading-none gradient-text-static">
              work
            </h2>
            <h2 className="header-line text-5xl md:text-6xl lg:text-8xl font-black tracking-tight leading-none text-muted-light pb-2">
              together
            </h2>

            {/* Availability indicator */}
            <div className="mt-12 flex items-center gap-4">
              <div className="relative">
                <div className="w-3 h-3 bg-primary rounded-full" />
                <div className="absolute inset-0 w-3 h-3 bg-primary rounded-full animate-ping" />
              </div>
              <span className="text-muted font-mono text-sm uppercase tracking-wider">
                Disponible para proyectos
              </span>
            </div>
          </div>

          {/* Right - Contact info and socials */}
          <div ref={contentRef} className="space-y-12">
            {/* Email CTA */}
            <div className="space-y-4">
              <span className="text-sm font-mono text-muted uppercase tracking-wider">
                Escríbeme a
              </span>
              <a
                href="mailto:mquirossuarez6@gmail.com"
                className="group block text-2xl md:text-3xl lg:text-4xl font-bold text-foreground hover:text-primary transition-colors break-all"
              >
                mquirossuarez6
                <span className="text-primary">@</span>
                gmail.com
                <span className="inline-block ml-3 transform group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform">
                  <svg
                    className="w-8 h-8"
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
                </span>
              </a>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-border via-primary/30 to-border" />

            {/* Social Links */}
            <div className="space-y-6">
              <span className="text-sm font-mono text-muted uppercase tracking-wider">
                Sígueme en
              </span>
              <div ref={socialsRef} className="space-y-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link group flex items-center justify-between p-4 border border-border bg-card/30 hover:border-primary/50 hover:bg-card/50 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 flex items-center justify-center border border-border group-hover:border-primary group-hover:text-primary transition-all">
                        {social.icon}
                      </div>
                      <div>
                        <span className="block font-semibold text-foreground group-hover:text-primary transition-colors">
                          {social.name}
                        </span>
                        <span className="text-sm text-muted">{social.handle}</span>
                      </div>
                    </div>
                    <svg
                      className="w-5 h-5 text-muted group-hover:text-primary transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
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
                  </a>
                ))}
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4 pt-4">
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
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="text-muted">Costa Rica</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </section>
  );
}
