"use client";

import { useLocale } from "@/lib/i18n";

export function ExperienceSection() {
  const { t } = useLocale();

  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted">
        <span className="h-px w-6 bg-accent/50" aria-hidden="true" />
        {t.experience.title}
      </p>

      <div className="mt-10 space-y-8">
        {t.experience.items.map((item, index) => (
          <div key={`${item.title}-${index}`} className="relative border-l border-border pl-8">
            <span
              className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-accent bg-background"
              aria-hidden="true"
            />
            <p className="font-mono text-xs uppercase tracking-wide text-accent">{item.period}</p>
            <h3 className="mt-1.5 font-heading text-lg font-semibold">{item.title}</h3>
            <p className="mt-2 text-muted">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
