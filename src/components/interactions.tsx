"use client";

import { useEffect, useRef } from "react";

// One global IntersectionObserver that reveals any [data-reveal] element as it
// scrolls into view. A MutationObserver keeps it working across client-side
// route changes (home -> case study) without re-mounting.
export function ScrollReveal() {
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") {
      document
        .querySelectorAll<HTMLElement>("[data-reveal]")
        .forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.12 },
    );

    const scan = () => {
      document
        .querySelectorAll<HTMLElement>("[data-reveal]:not(.is-visible)")
        .forEach((el) => io.observe(el));
    };

    scan();
    const mo = new MutationObserver(() => scan());
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}

// Thin accent bar at the very top of the page that tracks scroll position.
// Also writes a global `--energy` (0..1, scroll velocity) to documentElement so
// every Waveform inherits it. rAF-throttled, passive listeners, self-stops when
// idle so there is no perpetual animation frame loop.
export function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    let lastY = window.scrollY;
    let lastT = performance.now();
    let energy = 0;
    let target = 0;
    const doc = document.documentElement;

    const write = () => {
      raf = 0;
      const max = doc.scrollHeight - doc.clientHeight;
      const progress = max > 0 ? doc.scrollTop / max : 0;
      ref.current?.style.setProperty("--scroll", String(progress));

      energy += (target - energy) * 0.25;
      target *= 0.9;
      doc.style.setProperty("--energy", energy.toFixed(3));

      if (target > 0.01 || energy > 0.01) {
        raf = requestAnimationFrame(write);
      } else {
        energy = 0;
        doc.style.setProperty("--energy", "0");
      }
    };

    const onScroll = () => {
      const now = performance.now();
      const dy = window.scrollY - lastY;
      const dt = Math.max(now - lastT, 1);
      lastY = window.scrollY;
      lastT = now;
      target = Math.max(target, Math.min((Math.abs(dy) / dt) * 0.12, 1));
      if (!raf) raf = requestAnimationFrame(write);
    };

    const onResize = () => {
      if (!raf) raf = requestAnimationFrame(write);
    };

    write();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return <div ref={ref} className="scroll-progress" aria-hidden="true" />;
}
