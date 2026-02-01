"use client";

import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const footerLinks = {
  navigation: [
    { name: "Inicio", href: "#hero", number: "01" },
    { name: "Sobre mí", href: "#about", number: "02" },
    { name: "Skills", href: "#skills", number: "03" },
    { name: "Proyectos", href: "#projects", number: "04" },
    { name: "Educación", href: "#education", number: "05" },
    { name: "Contacto", href: "#contact", number: "06" },
  ],
  social: [
    {
      name: "GitHub",
      handle: "PENDRAGON2121",
      href: "https://github.com/PENDRAGON2121",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      handle: "dev-maqs",
      href: "https://www.linkedin.com/in/dev-maqs/",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      handle: "maqs_18",
      href: "https://www.instagram.com/maqs_18",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      gsap.to(window, {
        duration: 1.2,
        scrollTo: { y: element, offsetY: 0 },
        ease: "power3.inOut",
      });
    }
  };

  return (
    <footer className="relative border-t border-border bg-card/30">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-8 md:px-16 py-20">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Brand section */}
          <div className="lg:col-span-5">
            <a
              href="#hero"
              onClick={(e) => scrollToSection(e, "#hero")}
              className="group flex items-center gap-3 mb-6"
            >
              <div className="w-12 h-12 border border-primary flex items-center justify-center group-hover:bg-primary transition-all duration-300">
                <span className="text-primary font-black text-xl group-hover:text-background transition-colors">
                  M
                </span>
              </div>
              <div>
                <span className="block text-lg font-bold text-foreground">Mauricio Quirós</span>
                <span className="block text-sm text-muted font-mono">Full-Stack Developer</span>
              </div>
            </a>

            <p className="text-muted leading-relaxed max-w-sm mb-8">
              Desarrollador que encuentra en el código la forma de materializar ideas.
              Siempre explorando nuevas tecnologías y construyendo soluciones que impacten.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {footerLinks.social.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-12 h-12 border border-border flex items-center justify-center text-muted hover:text-primary hover:border-primary transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-mono text-primary uppercase tracking-wider mb-6">
              Navegación
            </h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="group flex items-center gap-3 text-muted hover:text-foreground transition-colors"
                  >
                    <span className="text-xs font-mono text-primary/50 group-hover:text-primary">
                      {link.number}
                    </span>
                    <span className="text-sm">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h4 className="text-sm font-mono text-primary uppercase tracking-wider mb-6">
              Contacto
            </h4>
            <div className="space-y-4">
              <a
                href="mailto:mquirossuarez6@gmail.com"
                className="group flex items-center gap-3 text-muted hover:text-primary transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-sm">mquirossuarez6@gmail.com</span>
              </a>
              <div className="flex items-center gap-3 text-muted">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                <span className="text-sm">Costa Rica</span>
              </div>
            </div>

            {/* Availability */}
            <div className="mt-8 p-4 border border-border bg-card/50">
              <div className="flex items-center gap-3 mb-2">
                <div className="relative">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <div className="absolute inset-0 w-2 h-2 bg-primary rounded-full animate-ping" />
                </div>
                <span className="text-sm font-medium text-foreground">Disponible</span>
              </div>
              <p className="text-xs text-muted">
                Abierto a nuevas oportunidades y proyectos
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted text-sm font-mono">
              © {currentYear} Mauricio A. Quirós Suárez
            </p>
            <div className="flex items-center gap-2 text-sm text-muted">
              <span>Diseñado y desarrollado con</span>
              <span className="text-primary">♥</span>
              <span>usando</span>
              <span className="text-primary font-medium">Next.js</span>
              <span>&</span>
              <span className="text-primary font-medium">GSAP</span>
            </div>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <button
        onClick={() => {
          gsap.to(window, {
            duration: 1.5,
            scrollTo: { y: 0 },
            ease: "power3.inOut",
          });
        }}
        className="absolute right-8 bottom-20 w-12 h-12 border border-border hover:border-primary flex items-center justify-center text-muted hover:text-primary transition-all duration-300 group"
        aria-label="Volver arriba"
      >
        <svg
          className="w-5 h-5 transform group-hover:-translate-y-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </footer>
  );
}
