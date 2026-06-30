"use client";

import Image from "next/image";
import { useRef } from "react";
import { siteConfig } from "@/content/site";
import type { Content } from "@/content/site";
import { Waveform } from "@/components/Waveform";

const REDUCED_MOTION =
  typeof window !== "undefined" &&
  typeof window.matchMedia === "function" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

type MagneticProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  download?: boolean;
  target?: string;
  rel?: string;
};

// Primary CTAs get a small magnetic follow toward the cursor. Inline transform
// overrides the .btn-glow hover translate; resets on leave. Skipped under
// reduced-motion. Kept local — only used twice (hero + contact resume).
function Magnetic({ href, children, className, download, target, rel }: MagneticProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const raf = useRef(0);

  const onMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (REDUCED_MOTION) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const mx = (e.clientX - (r.left + r.width / 2)) * 0.3;
    const my = (e.clientY - (r.top + r.height / 2)) * 0.45;
    if (raf.current) cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(() => {
      el.style.transform = `translate(${mx}px, ${my}px)`;
    });
  };

  const reset = () => {
    const el = ref.current;
    if (el) el.style.transform = "";
  };

  return (
    <a
      ref={ref}
      href={href}
      className={className}
      download={download}
      target={target}
      rel={rel}
      onMouseMove={onMove}
      onMouseLeave={reset}
    >
      {children}
    </a>
  );
}

export function Hero({ name, t }: { name: string; t: Content }) {
  const nameRef = useRef<HTMLSpanElement>(null);
  const raf = useRef(0);

  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = nameRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    if (raf.current) cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(() => {
      el.style.setProperty("--mx", `${x}%`);
      el.style.setProperty("--my", `${y}%`);
    });
  };

  return (
    <section
      onMouseMove={onMove}
      className="relative mx-auto max-w-6xl overflow-hidden px-6 pt-28 pb-10 md:pt-36 md:pb-14"
    >
      <div className="aurora" aria-hidden="true" />
      <div className="hero-grid" aria-hidden="true" />

      <div className="relative z-10 grid items-center gap-10 md:grid-cols-[1fr_auto] md:gap-12">
        <div>
          <div className="hero-rise inline-flex items-center gap-2.5 rounded-full border border-border bg-background/70 px-3.5 py-1.5 text-xs font-medium text-muted backdrop-blur-sm">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="pulse-ring absolute inline-flex h-full w-full rounded-full bg-available" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-available" />
            </span>
            {t.hero.available}
          </div>

          <p className="hero-rise mt-7 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            <span className="h-px w-8 bg-accent/50" aria-hidden="true" />
            {t.hero.role}
          </p>

          <h1 className="hero-rise mt-5 font-heading font-extrabold leading-none tracking-[-0.03em] text-[clamp(2.85rem,8.2vw,5.6rem)]">
            <span ref={nameRef} className="spotlight-name">
              <span className="spotlight-name__base">{name}</span>
              <span className="spotlight-name__glow" aria-hidden="true">
                {name}
              </span>
            </span>
          </h1>

          <p className="hero-rise mt-6 max-w-xl text-lg leading-relaxed text-muted md:text-xl">
            {t.hero.tagline}
          </p>

          <div className="hero-rise mt-9 flex flex-wrap gap-3">
            <Magnetic
              href={siteConfig.resumePath}
              download
              className="btn-glow btn-primary inline-flex items-center rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-accent-hover"
            >
              {t.hero.ctaResume}
            </Magnetic>
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow inline-flex items-center rounded-xl border border-border bg-background px-5 py-3 text-sm font-semibold hover:border-accent/40 hover:bg-surface"
            >
              {t.hero.ctaGithub}
            </a>
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow inline-flex items-center rounded-xl border border-border bg-background px-5 py-3 text-sm font-semibold hover:border-accent/40 hover:bg-surface"
            >
              {t.hero.ctaLinkedin}
            </a>
          </div>
        </div>

        <div className="hero-rise flex justify-center md:justify-end">
          <div className="relative">
            <div
              className="absolute -inset-4 -z-10 rounded-4xl bg-linear-to-br from-accent-soft to-transparent blur-2xl"
              aria-hidden="true"
            />
            <div className="float">
              <div className="rounded-[1.6rem] border border-accent/20 bg-surface p-2 shadow-xl shadow-black/5 ring-1 ring-accent/10">
                <Image
                  src={siteConfig.profileImage}
                  alt={name}
                  width={480}
                  height={480}
                  priority
                  className="h-44 w-44 rounded-[1.2rem] object-cover md:h-56 md:w-56"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Signature: live "now playing" strip tied to the audio flagship */}
      <div className="hero-rise relative z-10 mt-14 border-t border-border pt-4 md:mt-20">
        <div className="flex items-center gap-4"> 
          <Waveform className="h-12 flex-1 opacity-70" bars={64} />
        </div>
      </div>
    </section>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
      <span className="h-px w-6 bg-accent/50" aria-hidden="true" />
      {children}
    </p>
  );
}

export function About({ t }: { t: Content }) {
  return (
    <section id="about" className="border-t border-border bg-surface/60">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div data-reveal>
          <Eyebrow>{t.about.title}</Eyebrow>
        </div>
        <p
          data-reveal
          style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
          className="mt-7 max-w-4xl font-heading text-2xl font-medium leading-[1.35] tracking-tight text-foreground-soft md:text-[2rem] md:leading-[1.4]"
        >
          {t.about.body}
        </p>
      </div>
    </section>
  );
}

export function Contact({ t }: { t: Content }) {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-border bg-surface/60">
      <div className="aurora" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div data-reveal>
          <Eyebrow>{t.contact.title}</Eyebrow>
        </div>
        <h2
          data-reveal
          style={{ "--reveal-delay": "100ms" } as React.CSSProperties}
          className="mt-6 max-w-3xl font-heading text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl"
        >
          {t.contact.headline}
        </h2>
        <p
          data-reveal
          style={{ "--reveal-delay": "200ms" } as React.CSSProperties}
          className="mt-5 text-lg text-muted"
        >
          {t.contact.subtitle}
        </p>

        <a
          data-reveal
          href={`mailto:${siteConfig.links.email}`}
          style={{ "--reveal-delay": "300ms" } as React.CSSProperties}
          className="mt-9 inline-block font-heading text-2xl font-semibold text-accent underline decoration-accent/30 underline-offset-8 transition-all hover:decoration-accent md:text-4xl"
        >
          {siteConfig.links.email}
        </a>

        <div
          data-reveal
          style={{ "--reveal-delay": "350ms" } as React.CSSProperties}
          className="mt-10"
        >
          <Waveform className="h-10 opacity-50" bars={56} />
        </div>

        <div
          data-reveal
          style={{ "--reveal-delay": "420ms" } as React.CSSProperties}
          className="mt-8 flex flex-wrap gap-3"
        >
          <Magnetic
            href={siteConfig.resumePath}
            download
            className="btn-glow btn-primary inline-flex items-center rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-accent-hover"
          >
            {t.contact.downloadResume}
          </Magnetic>
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow inline-flex items-center rounded-xl border border-border bg-background px-5 py-3 text-sm font-semibold hover:border-accent/40 hover:bg-surface"
          >
            LinkedIn
          </a>
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow inline-flex items-center rounded-xl border border-border bg-background px-5 py-3 text-sm font-semibold hover:border-accent/40 hover:bg-surface"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

function FooterGlyph() {
  return (
    <span className="flex h-4 items-end gap-[2px]" aria-hidden="true">
      {[40, 100, 60].map((h, i) => (
        <span key={i} className="w-[3px] rounded-full bg-accent" style={{ height: `${h}%` }} />
      ))}
    </span>
  );
}

export function Footer({ t }: { t: Content }) {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-6 py-8 text-sm text-muted sm:flex-row sm:items-center">
        <span className="flex items-center gap-2.5">
          <FooterGlyph />
          {t.footer}
        </span>
        <div className="flex items-center gap-4">
          <a href="#main" className="transition-colors hover:text-foreground">
            ↑ Top
          </a>
          <span className="font-mono text-xs">© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
