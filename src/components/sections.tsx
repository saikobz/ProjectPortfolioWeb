import Image from "next/image";
import { siteConfig } from "@/content/site";
import type { Content } from "@/content/site";

export function Hero({ name, t }: { name: string; t: Content }) {
  return (
    <section className="relative mx-auto max-w-5xl px-6 pt-24 pb-20 md:pt-32 md:pb-28">
      <div className="grid items-center gap-10 md:grid-cols-[1fr_auto]">
        <div>
          <div className="hero-rise inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-available opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-available" />
            </span>
            {t.hero.available}
          </div>

          <p className="hero-rise mt-7 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.18em] text-accent">
            <span className="h-px w-8 bg-accent/50" aria-hidden="true" />
            {t.hero.role}
          </p>

          <h1 className="hero-rise mt-5 font-heading text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            {name}
          </h1>

          <p className="hero-rise mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">{t.hero.tagline}</p>

          <div className="hero-rise mt-10 flex flex-wrap gap-3">
            <a
              href={siteConfig.resumePath}
              download
              className="inline-flex items-center rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-accent-hover hover:shadow-md"
            >
              {t.hero.ctaResume}
            </a>
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-xl border border-border bg-background px-5 py-3 text-sm font-semibold transition-colors hover:bg-surface"
            >
              {t.hero.ctaGithub}
            </a>
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-xl border border-border bg-background px-5 py-3 text-sm font-semibold transition-colors hover:bg-surface"
            >
              {t.hero.ctaLinkedin}
            </a>
          </div>
        </div>

        <div className="hero-rise flex justify-center md:justify-end">
          <Image
            src={siteConfig.profileImage}
            alt={name}
            width={480}
            height={480}
            priority
            className="h-40 w-40 md:h-52 md:w-52"
          />
        </div>
      </div>
    </section>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted">
      <span className="h-px w-6 bg-accent/50" aria-hidden="true" />
      {children}
    </p>
  );
}

export function About({ t }: { t: Content }) {
  return (
    <section id="about" className="border-t border-border bg-surface">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <Eyebrow>{t.about.title}</Eyebrow>
        <h2 className="mt-5 max-w-3xl font-heading text-3xl font-semibold leading-tight md:text-4xl">
          {t.about.body}
        </h2>
      </div>
    </section>
  );
}

export function Contact({ t }: { t: Content }) {
  return (
    <section id="contact" className="border-t border-border bg-surface">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <Eyebrow>{t.contact.title}</Eyebrow>
        <h2 className="mt-5 max-w-2xl font-heading text-3xl font-semibold leading-tight md:text-5xl">
          {t.contact.headline}
        </h2>
        <p className="mt-4 text-muted">{t.contact.subtitle}</p>

        <a
          href={`mailto:${siteConfig.links.email}`}
          className="mt-8 inline-block font-heading text-xl font-semibold text-accent underline-offset-4 hover:underline md:text-2xl"
        >
          {siteConfig.links.email}
        </a>

        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-foreground"
          >
            LinkedIn
          </a>
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-foreground"
          >
            GitHub
          </a>
          <a
            href={siteConfig.resumePath}
            download
            className="text-muted transition-colors hover:text-foreground"
          >
            {t.contact.downloadResume}
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer({ t }: { t: Content }) {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-2 px-6 py-8 text-sm text-muted sm:flex-row sm:items-center">
        <span>{t.footer}</span>
        <span className="font-mono text-xs">© {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
