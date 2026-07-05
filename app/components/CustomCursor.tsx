"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

/**
 * Award-style custom cursor: a fast neon dot + a lagging ring that grows and
 * recolours over interactive elements. Desktop / fine-pointer only.
 */
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    document.documentElement.classList.add("custom-cursor-active");

    // Start centred and fade in — no dependency on the first mouse move.
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    gsap.set([dot, ring], { xPercent: -50, yPercent: -50, x: cx, y: cy, opacity: 0 });
    gsap.to([dot, ring], { opacity: 1, duration: 0.4, delay: 0.15 });

    const xR = gsap.quickTo(ring, "x", { duration: 0.5, ease: "power3" });
    const yR = gsap.quickTo(ring, "y", { duration: 0.5, ease: "power3" });
    const xD = gsap.quickTo(dot, "x", { duration: 0.12, ease: "power3" });
    const yD = gsap.quickTo(dot, "y", { duration: 0.12, ease: "power3" });

    const move = (e: MouseEvent) => {
      xR(e.clientX);
      yR(e.clientY);
      xD(e.clientX);
      yD(e.clientY);
    };

    const interactive =
      "a, button, [role='button'], input, textarea, select, label, [data-cursor-hover]";
    const onOver = (e: Event) => {
      if ((e.target as HTMLElement).closest?.(interactive)) {
        gsap.to(ring, { scale: 1.8, borderColor: "var(--primary)", duration: 0.3 });
        gsap.to(dot, { scale: 0.5, duration: 0.3 });
      }
    };
    const onOut = (e: Event) => {
      if ((e.target as HTMLElement).closest?.(interactive)) {
        gsap.to(ring, { scale: 1, borderColor: "rgba(255,255,255,0.3)", duration: 0.3 });
        gsap.to(dot, { scale: 1, duration: 0.3 });
      }
    };
    const hide = () => gsap.to([dot, ring], { opacity: 0, duration: 0.2 });
    const show = () => gsap.to([dot, ring], { opacity: 1, duration: 0.2 });

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    document.documentElement.addEventListener("mouseleave", hide);
    document.documentElement.addEventListener("mouseenter", show);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      document.documentElement.removeEventListener("mouseleave", hide);
      document.documentElement.removeEventListener("mouseenter", show);
      document.documentElement.classList.remove("custom-cursor-active");
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
    </>
  );
}
