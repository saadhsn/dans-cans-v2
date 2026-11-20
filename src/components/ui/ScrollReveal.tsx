"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Adds understated scroll-reveal effects without changing the page structure.
 * Content stays visible without JavaScript and for reduced-motion users.
 */
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (!elements.length) return;
    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          (entry.target as HTMLElement).classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -36px 0px" }
    );

    // Hide only elements that haven't already entered the viewport.
    for (const el of elements) {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 28) {
        el.classList.add("is-visible");
      } else {
        el.classList.add("reveal-pending");
        observer.observe(el);
      }
    }

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
