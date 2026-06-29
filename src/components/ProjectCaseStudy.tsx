"use client";

import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/sections";
import type { Project } from "@/content/site";
import { useLocale } from "@/lib/i18n";

export function ProjectCaseStudy({ project }: { project: Project }) {
  const { locale, t } = useLocale();
  const study = project.caseStudy?.[locale];

  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-6 py-12 md:py-16">
        <Link href="/#projects" className="text-sm text-muted transition-colors hover:text-foreground">
          {t.caseStudy.back}
        </Link>

        <h1 className="mt-6 font-heading text-3xl font-bold md:text-4xl">{project.title[locale]}</h1>
        <p className="mt-2 text-lg text-muted">{project.subtitle[locale]}</p>
        <p className="mt-6 leading-relaxed text-muted">{project.description[locale]}</p>

        {study && (
          <div className="mt-12 space-y-10">
            <section>
              <h2 className="font-heading text-lg font-semibold">{t.caseStudy.problem}</h2>
              <p className="mt-3 text-muted">{study.problem}</p>
            </section>
            <section>
              <h2 className="font-heading text-lg font-semibold">{t.caseStudy.solution}</h2>
              <p className="mt-3 text-muted">{study.solution}</p>
            </section>
            <section>
              <h2 className="font-heading text-lg font-semibold">{t.caseStudy.role}</h2>
              <p className="mt-3 text-muted">{study.role}</p>
            </section>
            <section>
              <h2 className="font-heading text-lg font-semibold">{t.caseStudy.learnings}</h2>
              <ul className="mt-3 list-inside list-disc space-y-2 text-muted">
                {study.learnings.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          </div>
        )}

        <section className="mt-12">
          <h2 className="font-heading text-lg font-semibold">{t.caseStudy.stack}</h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <li key={tech} className="rounded-lg border border-border bg-surface px-3 py-1.5 text-sm">
                {tech}
              </li>
            ))}
          </ul>
        </section>

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
        >
          {t.caseStudy.github}
        </a>
      </main>
      <Footer t={t} />
    </>
  );
}
