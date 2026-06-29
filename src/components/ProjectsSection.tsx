"use client";

import Link from "next/link";
import { projects } from "@/content/site";
import { useLocale } from "@/lib/i18n";

export function ProjectsSection() {
  const { locale, t } = useLocale();

  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-16 md:py-20">
      <h2 className="font-heading text-2xl font-semibold md:text-3xl">{t.projects.title}</h2>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.slug}
            className="flex flex-col rounded-xl border border-border bg-background p-6 transition-shadow hover:shadow-md"
          >
            <div className="mb-4 flex items-start justify-between gap-2">
              <div>
                <h3 className="font-heading text-xl font-semibold">{project.title[locale]}</h3>
                <p className="mt-1 text-sm text-muted">{project.subtitle[locale]}</p>
              </div>
              {project.flagship && (
                <span className="shrink-0 rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
                  {t.projects.flagship}
                </span>
              )}
            </div>

            <p className="flex-1 text-sm leading-relaxed text-muted">{project.description[locale]}</p>

            <ul className="mt-4 flex flex-wrap gap-2">
              {project.stack.slice(0, 5).map((tech) => (
                <li key={tech} className="rounded-md bg-surface px-2 py-0.5 text-xs text-muted">
                  {tech}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={`/projects/${project.slug}`}
                className="text-sm font-medium text-accent hover:underline"
              >
                {t.projects.viewCaseStudy}
              </Link>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {t.projects.viewGithub} →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
