"use client";

import { useLocale } from "@/lib/i18n";

export function ExperienceSection() {
  const { t } = useLocale();

  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-16 md:py-20">
      <h2 className="font-heading text-2xl font-semibold md:text-3xl">{t.experience.title}</h2>

      <div className="mt-10 space-y-8">
        {t.experience.items.map((item) => (
          <div key={item.title} className="border-l-2 border-accent pl-6">
            <p className="text-sm font-medium text-accent">{item.period}</p>
            <h3 className="mt-1 font-heading text-lg font-semibold">{item.title}</h3>
            <p className="mt-2 text-muted">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
