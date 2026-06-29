import { siteConfig } from "@/content/site";
import type { Content } from "@/content/site";

export function Hero({ t }: { t: Content }) {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20 md:py-28">
      <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">{t.hero.role}</p>
      <h1 className="font-heading text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
        {siteConfig.name}
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">{t.hero.tagline}</p>

      <div className="mt-10 flex flex-wrap gap-3">
        <a
          href={siteConfig.cvPath}
          download
          className="inline-flex items-center rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
        >
          {t.hero.ctaCv}
        </a>
        <a
          href={siteConfig.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-lg border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-surface"
        >
          {t.hero.ctaGithub}
        </a>
        <a
          href={siteConfig.links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-lg border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-surface"
        >
          {t.hero.ctaLinkedin}
        </a>
      </div>
    </section>
  );
}

export function About({ t }: { t: Content }) {
  return (
    <section id="about" className="border-t border-border bg-surface">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <h2 className="font-heading text-2xl font-semibold md:text-3xl">{t.about.title}</h2>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted md:text-lg">{t.about.body}</p>
      </div>
    </section>
  );
}

export function Contact({ t }: { t: Content }) {
  return (
    <section id="contact" className="border-t border-border bg-surface">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <h2 className="font-heading text-2xl font-semibold md:text-3xl">{t.contact.title}</h2>
        <p className="mt-2 text-muted">{t.contact.subtitle}</p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
          <a href={`mailto:${siteConfig.links.email}`} className="font-medium text-accent hover:underline">
            {siteConfig.links.email}
          </a>
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
            href={siteConfig.cvPath}
            download
            className="inline-flex w-fit items-center rounded-lg border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-background"
          >
            {t.contact.downloadCv}
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer({ t }: { t: Content }) {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-8 text-center text-sm text-muted">{t.footer}</div>
    </footer>
  );
}
