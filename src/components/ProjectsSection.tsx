"use client";

import Image from "next/image";
import Link from "next/link";
import { projects } from "@/content/site";
import { useLocale } from "@/lib/i18n";

export function ProjectsSection() {
  const { locale, t } = useLocale();

  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted">
        <span className="h-px w-6 bg-accent/50" aria-hidden="true" />
        {t.projects.title}
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.slug}
            className={`group flex flex-col overflow-hidden rounded-2xl border bg-background transition-all hover:-translate-y-0.5 hover:shadow-lg ${
              project.flagship ? "border-accent/30 ring-1 ring-accent/15 md:col-span-2" : "border-border"
            }`}
          >
            <Image
              src={project.thumbnail}
              alt={project.title[locale]}
              width={1200}
              height={750}
              loading="lazy"
              className={`w-full object-cover ${project.flagship ? "h-44 md:h-56" : "h-44"}`}
            />

            <div className="flex flex-1 flex-col p-7">
              <div className="mb-4 flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-heading text-2xl font-semibold tracking-tight">{project.title[locale]}</h3>
                  <p className="mt-1.5 text-sm text-muted">{project.subtitle[locale]}</p>
                </div>
                {project.flagship && (
                  <span className="shrink-0 rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent">
                    {t.projects.flagship}
                  </span>
                )}
              </div>

              <p className="flex-1 text-base leading-relaxed text-muted">{project.description[locale]}</p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {project.stack.slice(0, 6).map((tech) => (
                  <li key={tech} className="rounded-md bg-surface px-2.5 py-1 text-xs font-medium text-muted">
                    {tech}
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-wrap items-center gap-4 border-t border-border pt-5">
                <Link
                  href={`/projects/${project.slug}`}
                  className="text-sm font-semibold text-accent transition-colors hover:text-accent-hover"
                >
                  {t.projects.viewCaseStudy} →
                </Link>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  {t.projects.viewGithub}
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
