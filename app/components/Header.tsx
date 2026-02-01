"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const navLinks = [
  { name: "Inicio", href: "#hero", number: "01" },
  { name: "Sobre mí", href: "#about", number: "02" },
  { name: "Skills", href: "#skills", number: "03" },
  { name: "Proyectos", href: "#projects", number: "04" },
  { name: "Educación", href: "#education", number: "05" },
  { name: "Contacto", href: "#contact", number: "06" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Mobile menu animation
    if (menuRef.current) {
      if (isMobileMenuOpen) {
        gsap.fromTo(
          menuRef.current,
          { opacity: 0, height: 0 },
          { opacity: 1, height: "auto", duration: 0.4, ease: "power3.out" }
        );
        // Animate menu items
        gsap.from(menuRef.current.querySelectorAll("li"), {
          x: -30,
          opacity: 0,
          stagger: 0.05,
          duration: 0.4,
          delay: 0.1,
          ease: "power3.out",
        });
      }
    }
  }, [isMobileMenuOpen]);

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
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-background/30 backdrop-blur-sm"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-8 md:px-16">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => scrollToSection(e, "#hero")}
            className="group flex items-center gap-3"
          >
            <div className="w-10 h-10 flex items-center justify-center">
              <img 
                src="/pendragon.ico" 
                alt="Logo" 
                className="w-8 h-8 group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="hidden sm:block">
              <span className="block text-sm font-bold text-foreground">Mauricio</span>
              <span className="block text-xs text-muted font-mono">Developer</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="group relative px-4 py-2 text-muted hover:text-foreground transition-colors duration-300"
                >
                  <span className="text-xs font-mono text-primary/50 group-hover:text-primary mr-1">
                    {link.number}
                  </span>
                  <span className="text-sm font-medium">{link.name}</span>
                  {/* Underline animation */}
                  <span className="absolute bottom-0 left-4 right-4 h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, "#contact")}
            className="hidden lg:flex items-center gap-2 px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-background font-medium text-sm transition-all duration-300"
          >
            <span>Hablemos</span>
            <svg
              className="w-4 h-4"
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

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center border border-border hover:border-primary transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span
                className={`block h-0.5 bg-foreground transition-all duration-300 origin-center ${
                  isMobileMenuOpen ? "rotate-45 translate-y-[7px]" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-foreground transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0 scale-x-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-foreground transition-all duration-300 origin-center ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            ref={menuRef}
            className="lg:hidden border-t border-border overflow-hidden"
          >
            <ul className="py-6 space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="flex items-center gap-4 px-4 py-3 text-muted hover:text-foreground hover:bg-card/50 transition-all"
                  >
                    <span className="text-xs font-mono text-primary">{link.number}</span>
                    <span className="text-lg font-medium">{link.name}</span>
                  </a>
                </li>
              ))}
              <li className="pt-4 px-4">
                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, "#contact")}
                  className="flex items-center justify-center gap-2 w-full py-4 border border-primary text-primary hover:bg-primary hover:text-background font-medium transition-all duration-300"
                >
                  <span>Hablemos</span>
                  <svg
                    className="w-4 h-4"
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
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
