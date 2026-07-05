"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { getLenis } from "../lib/lenis";

/**
 * Terminal-style boot preloader with a 000 → 100 counter and a reveal wipe.
 * Shows once per browser session.
 */
export default function Preloader() {
  const [hidden, setHidden] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const countRef = useRef<HTMLSpanElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const ran = useRef(false);

  useEffect(() => {
    if (ran.current) return;
    ran.current = true;

    const root = rootRef.current;
    if (!root) return;

    if (sessionStorage.getItem("mq_preloaded")) {
      gsap.set(root, { display: "none" });
      const raf = requestAnimationFrame(() => setHidden(true));
      return () => cancelAnimationFrame(raf);
    }

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const lenis = getLenis();
    lenis?.stop();
    document.documentElement.style.overflow = "hidden";

    const finish = () => {
      sessionStorage.setItem("mq_preloaded", "1");
      document.documentElement.style.overflow = "";
      lenis?.start();
      setHidden(true);
    };

    const counter = { v: 0 };
    const tl = gsap.timeline({ onComplete: finish });

    tl.to(counter, {
      v: 100,
      duration: reduce ? 0.3 : 2,
      ease: "power2.inOut",
      onUpdate: () => {
        const val = Math.round(counter.v);
        if (countRef.current) countRef.current.textContent = String(val).padStart(3, "0");
        if (barRef.current) barRef.current.style.width = val + "%";
      },
    });

    if (reduce) {
      tl.to(root, { opacity: 0, duration: 0.3 });
    } else {
      tl.to(root.querySelectorAll(".pre-fade"), { opacity: 0, y: -16, duration: 0.4, stagger: 0.05 }, "+=0.15");
      tl.to(root, { yPercent: -100, duration: 0.9, ease: "power4.inOut" }, "-=0.05");
    }

    return () => {
      document.documentElement.style.overflow = "";
      lenis?.start();
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[9998] bg-background flex flex-col justify-between p-8 md:p-16 overflow-hidden"
    >
      <div className="grid-bg absolute inset-0 opacity-20" aria-hidden="true" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] max-w-[600px] max-h-[600px] bg-primary/5 rounded-full blur-3xl" aria-hidden="true" />

      {/* Top row */}
      <div className="relative flex items-start justify-between pre-fade">
        <span className="font-mono text-[11px] tracking-[0.25em] text-muted uppercase">
          Mauricio A. Quirós Suárez
        </span>
        <span className="font-mono text-[11px] tracking-[0.25em] text-muted uppercase">
          © 2026
        </span>
      </div>

      {/* Boot log */}
      <div className="relative pre-fade">
        <div className="font-mono text-xs space-y-1.5">
          <p className="text-primary/80">
            &gt; initializing portfolio<span className="animate-pulse">_</span>
          </p>
          <p className="text-muted">&gt; loading modules · gsap · lenis · react</p>
          <p className="text-muted">&gt; compiling experience</p>
        </div>
      </div>

      {/* Counter */}
      <div className="relative flex items-end justify-between gap-6">
        <span className="font-mono text-[11px] tracking-[0.25em] text-muted uppercase pre-fade">
          Loading
        </span>
        <span
          ref={countRef}
          className="block text-[26vw] md:text-[15vw] font-black leading-[0.8] tracking-tighter gradient-text-static"
        >
          000
        </span>
      </div>

      {/* Progress bar */}
      <div
        ref={barRef}
        className="absolute bottom-0 left-0 h-[3px] bg-primary"
        style={{ width: 0, boxShadow: "0 0 12px var(--primary)" }}
        aria-hidden="true"
      />
    </div>
  );
}
