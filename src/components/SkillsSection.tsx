"use client";

import { useLocale } from "@/lib/i18n";

const groupKeys = ["frontend", "backend", "database", "ai", "tools"] as const;

export function SkillsSection() {
  const { t } = useLocale();

  return (
    <section id="skills" className="border-t border-border bg-surface/60">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div data-reveal>
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            <span className="h-px w-6 bg-accent/50" aria-hidden="true" />
            {t.skills.title}
          </p>
        </div>

        <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {groupKeys.map((key, i) => (
            <div
              key={key}
              data-reveal
              style={{ "--reveal-delay": `${i * 100}ms` } as React.CSSProperties}
            >
              <h3 className="text-sm font-semibold text-foreground">{t.skills.groups[key]}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {t.skills.items[key].map((skill) => (
                  <li
                    key={skill}
                    className="cursor-default rounded-lg border border-border bg-background px-3 py-1.5 text-sm text-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40 hover:bg-accent-soft hover:text-accent"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
