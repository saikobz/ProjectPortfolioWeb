"use client";

import { useLocale } from "@/lib/i18n";

const groupKeys = ["frontend", "backend", "database", "ai", "tools"] as const;

export function SkillsSection() {
  const { t } = useLocale();

  return (
    <section id="skills" className="border-t border-border bg-surface">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted">
          <span className="h-px w-6 bg-accent/50" aria-hidden="true" />
          {t.skills.title}
        </p>

        <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {groupKeys.map((key) => (
            <div key={key}>
              <h3 className="text-sm font-semibold text-foreground">{t.skills.groups[key]}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {t.skills.items[key].map((skill) => (
                  <li
                    key={skill}
                    className="rounded-lg border border-border bg-background px-3 py-1.5 text-sm text-muted transition-colors hover:border-accent/40 hover:text-foreground"
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
