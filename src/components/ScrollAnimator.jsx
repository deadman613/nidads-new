"use client";
import { useEffect } from "react";

/**
 * ScrollAnimator — mounts once and sets up IntersectionObservers:
 *
 * 1. Watches elements with .reveal / .reveal-left / .reveal-right /
 *    .reveal-scale / .reveal-down and adds `.in-view` when they enter.
 *
 * 2. Auto-animates every <section> element on the page:
 *    - section headings (h2, h3) → .reveal
 *    - section paragraphs        → .reveal with slight delay
 *    - section cards/grid items  → .reveal-scale with staggered delays
 *
 * No manual class additions needed in component JSX.
 */
export default function ScrollAnimator() {
  useEffect(() => {
    /* ── 1. Auto-inject animation classes into sections ── */
    document.querySelectorAll("section").forEach((section) => {
      // headings
      section.querySelectorAll("h1, h2, h3").forEach((el) => {
        if (!el.classList.contains("reveal") && !el.classList.contains("reveal-left")) {
          el.classList.add("reveal");
        }
      });

      // paragraphs / subtexts
      section.querySelectorAll("p").forEach((el, i) => {
        if (!el.closest("[class*='card']") && !el.classList.contains("reveal")) {
          el.classList.add("reveal");
          if (i === 0) el.classList.add("delay-1");
          if (i === 1) el.classList.add("delay-2");
        }
      });

      // cards / grid items — target common card patterns
      const cardSelectors = [
        "[class*='card']",
        "[class*='Card']",
        "[class*='grid'] > *",
        "[class*='Grid'] > *",
        "article",
        "li[class*='item']",
      ];
      const seen = new Set();
      cardSelectors.forEach((sel) => {
        section.querySelectorAll(sel).forEach((el, i) => {
          if (seen.has(el)) return;
          seen.add(el);
          if (!el.classList.contains("reveal-scale")) {
            el.classList.add("reveal-scale");
            const delays = ["delay-1","delay-2","delay-3","delay-4","delay-5","delay-6"];
            if (i < delays.length) el.classList.add(delays[i]);
          }
        });
      });
    });

    /* ── 2. Observe all reveal elements ── */
    const selectors = [
      ".reveal",
      ".reveal-left",
      ".reveal-right",
      ".reveal-scale",
      ".reveal-down",
      "[data-reveal]",
    ].join(", ");

    const elements = document.querySelectorAll(selectors);
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.10,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
