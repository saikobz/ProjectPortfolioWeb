"use client";

import Image from "next/image";
import Link from "next/link";
import { projects, type Project } from "@/content/site";
import { useLocale } from "@/lib/i18n";

function isPortrait(project: Project) {
  return project.imageWidth != null && project.imageHeight != null && project.imageHeight > project.imageWidth;
}

function ProjectImage({ project, locale, flagship }: { project: Project; locale: "th" | "en"; flagship: boolean }) {
  const portrait = isPortrait(project);
  const width = project.imageWidth ?? 1200;
  const height = project.imageHeight ?? 750;

  if (portrait && flagship) {
    return (
      <div className="flex items-center justify-center bg-[#0a0b10] px-2 py-4 md:min-h-full md:px-4 md:py-6">
        <Image
          src={project.thumbnail}
          alt={project.title[locale]}
          width={width}
          height={height}
          loading="lazy"
          className="h-auto w-full max-w-[220px] object-contain md:max-w-[260px]"
        />
      </div>
    );
  }

  return (
    <Image
      src={project.thumbnail}
      alt={project.title[locale]}
      width={width}
      height={height}
      loading="lazy"
      className={`w-full object-cover ${flagship ? "h-44 md:h-56" : "h-44"}`}
    />
  );
}

export function ProjectsSection() {
  const { locale, t } = useLocale();

  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted">
        <span className="h-px w-6 bg-accent/50" aria-hidden="true" />
        {t.projects.title}
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {projects.map((project) => {
          const portrait = isPortrait(project);

          return (
            <article
              key={project.slug}
              className={`group overflow-hidden rounded-2xl border bg-background transition-all hover:-translate-y-0.5 hover:shadow-lg ${
                project.flagship
                  ? "border-accent/30 ring-1 ring-accent/15 md:col-span-2 md:grid md:grid-cols-[minmax(0,300px)_1fr]"
                  : "flex flex-col border-border"
              }`}
            >
              <ProjectImage project={project} locale={locale} flagship={project.flagship} />

              <div className={`flex flex-1 flex-col p-7 ${portrait && project.flagship ? "" : ""}`}>
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
          );
        })}
      </div>
    </section>
  );
}
