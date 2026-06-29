"use client";

import { useLocale } from "@/lib/i18n";

const groupKeys = ["frontend", "backend", "database", "ai", "tools"] as const;

export function SkillsSection() {
  const { t } = useLocale();

  return (
    <section id="skills" className="border-t border-border bg-surface">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <h2 className="font-heading text-2xl font-semibold md:text-3xl">{t.skills.title}</h2>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {groupKeys.map((key) => (
            <div key={key}>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-muted">
                {t.skills.groups[key]}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {t.skills.items[key].map((skill) => (
                  <li
                    key={skill}
                    className="rounded-lg border border-border bg-background px-3 py-1.5 text-sm"
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
