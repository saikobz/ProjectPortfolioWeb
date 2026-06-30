"use client";

import { useLocale } from "@/lib/i18n";

export function ExperienceSection() {
  const { t } = useLocale();

  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div data-reveal>
        <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          <span className="h-px w-6 bg-accent/50" aria-hidden="true" />
          {t.experience.title}
        </p>
      </div>

      <div className="mt-12 space-y-10">
        {t.experience.items.map((item, index) => (
          <div
            key={`${item.title}-${index}`}
            data-reveal
            style={{ "--reveal-delay": `${index * 120}ms` } as React.CSSProperties}
            className="relative border-l border-border pl-8 transition-colors hover:border-accent/50"
          >
            <span
              className="absolute left-[-5px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-accent bg-background ring-4 ring-background"
              aria-hidden="true"
            />
            <p className="font-mono text-xs uppercase tracking-wide text-accent">{item.period}</p>
            <h3 className="mt-2 font-heading text-lg font-semibold md:text-xl">{item.title}</h3>
            <p className="mt-2 text-muted">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
