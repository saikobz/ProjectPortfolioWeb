"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { projects, type Project } from "@/content/site";
import { useLocale } from "@/lib/i18n";
import { Waveform } from "@/components/Waveform";

const REDUCED_MOTION =
  typeof window !== "undefined" &&
  typeof window.matchMedia === "function" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function isPortrait(project: Project) {
  return project.imageWidth != null && project.imageHeight != null && project.imageHeight > project.imageWidth;
}

function ProjectImage({ project, locale }: { project: Project; locale: "th" | "en" }) {
  const portrait = isPortrait(project);
  const width = project.imageWidth ?? 1200;
  const height = project.imageHeight ?? 750;
  const wrapRef = useRef<HTMLDivElement>(null);
  const moverRef = useRef<HTMLDivElement>(null);
  const raf = useRef(0);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (REDUCED_MOTION) return;
    const wrap = wrapRef.current;
    const mover = moverRef.current;
    if (!wrap || !mover) return;
    const r = wrap.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    if (raf.current) cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(() => {
      mover.style.transform = `translate(${px * 16}px, ${py * 16}px) scale(1.05)`;
    });
  };

  const reset = () => {
    const mover = moverRef.current;
    if (mover) mover.style.transform = "";
  };

  return (
    <div
      ref={wrapRef}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className={`flex items-center justify-center overflow-hidden px-6 py-8 md:min-h-full md:px-8 md:py-10 ${
        portrait ? "bg-[#0a0b10]" : "bg-surface"
      }`}
    >
      <div ref={moverRef} className="transition-transform duration-500 ease-out will-change-transform">
        <Image
          src={project.thumbnail}
          alt={project.title[locale]}
          width={width}
          height={height}
          loading="lazy"
          className={
            portrait
              ? "h-auto w-full max-w-[220px] object-contain md:max-w-[260px]"
              : "h-auto w-full object-contain"
          }
        />
      </div>
    </div>
  );
}

export function ProjectsSection() {
  const { locale, t } = useLocale();

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div data-reveal>
        <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          <span className="h-px w-6 bg-accent/50" aria-hidden="true" />
          {t.projects.title}
        </p>
      </div>

      <div className="mt-12 grid gap-6">
        {projects.map((project, i) => (
          <article
            key={project.slug}
            data-reveal
            style={{ "--reveal-delay": `${i * 120}ms` } as React.CSSProperties}
            className={`group relative overflow-hidden rounded-2xl border bg-background transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 md:grid md:grid-cols-[minmax(0,340px)_1fr] ${
              project.flagship ? "border-accent/30 ring-1 ring-accent/15" : "border-border"
            }`}
          >
            <span className="card-line" aria-hidden="true" />
            <ProjectImage project={project} locale={locale} />

            <div className="flex flex-1 flex-col p-7 md:p-9">
              <div className="mb-4 flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-heading text-2xl font-semibold tracking-tight md:text-3xl">
                    {project.title[locale]}
                  </h3>
                  <p className="mt-1.5 text-sm text-muted">{project.subtitle[locale]}</p>
                </div>
                {project.flagship && (
                  <span className="shrink-0 rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent">
                    {t.projects.flagship}
                  </span>
                )}
              </div>

              {project.flagship && (
                <Waveform className="mb-5 h-4 opacity-30" bars={36} />
              )}

              <p className="flex-1 text-base leading-relaxed text-muted">
                {project.description[locale]}
              </p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {project.stack.slice(0, 6).map((tech) => (
                  <li
                    key={tech}
                    className="rounded-md bg-surface px-2.5 py-1 text-xs font-medium text-muted"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-wrap items-center gap-4 border-t border-border pt-5">
                <Link
                  href={`/projects/${project.slug}`}
                  className="group/link inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:text-accent-hover"
                >
                  {t.projects.viewCaseStudy}
                  <span className="transition-transform duration-300 group-hover/link:translate-x-1">
                    →
                  </span>
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
