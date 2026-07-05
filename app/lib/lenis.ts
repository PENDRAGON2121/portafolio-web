import type Lenis from "lenis";

// Singleton so any component (Header, ScrollIndicator, …) can drive the
// same smooth-scroll instance created in <SmoothScroll />.
let lenisInstance: Lenis | null = null;

export function setLenis(instance: Lenis | null) {
  lenisInstance = instance;
}

export function getLenis() {
  return lenisInstance;
}

/** Smoothly scroll to an element id ("#hero" or "hero") or a node. */
export function smoothScrollTo(target: string | HTMLElement, offset = 0) {
  const el =
    typeof target === "string"
      ? document.getElementById(target.replace(/^#/, ""))
      : target;
  if (!el) return;

  if (lenisInstance) {
    lenisInstance.scrollTo(el, { offset, duration: 1.2 });
  } else {
    el.scrollIntoView({ behavior: "smooth" });
  }
}
