"use client";

import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/sections";
import { Waveform } from "@/components/Waveform";
import type { Project } from "@/content/site";
import { useLocale } from "@/lib/i18n";

export function ProjectCaseStudy({ project }: { project: Project }) {
  const { locale, t } = useLocale();
  const study = project.caseStudy?.[locale];

  return (
    <>
      <Header />
      <main id="main" className="relative mx-auto max-w-3xl px-6 py-16 md:py-24">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-foreground"
        >
          {t.caseStudy.back}
        </Link>

        <div data-reveal className="mt-8">
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            <span className="h-px w-8 bg-accent/50" aria-hidden="true" />
            {project.subtitle[locale]}
          </p>
          <h1 className="mt-5 font-heading text-4xl font-bold tracking-tight md:text-6xl">
            {project.title[locale]}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted md:text-xl">
            {project.description[locale]}
          </p>
          <Waveform className="mt-8 h-8 opacity-40" bars={48} />
        </div>

        {project.screenshots.length > 0 && (
          <div data-reveal className="mt-12 grid gap-4 sm:grid-cols-2">
            {project.screenshots.map((shot) => {
              const portrait =
                project.imageHeight != null &&
                project.imageWidth != null &&
                project.imageHeight > project.imageWidth;
              const width = project.imageWidth ?? 1200;
              const height = project.imageHeight ?? 750;

              return (
                <div
                  key={shot.src}
                  className={`overflow-hidden rounded-xl border border-border ${
                    portrait ? "mx-auto w-full max-w-sm bg-[#0a0b10] p-4 sm:col-span-2" : ""
                  } ${!portrait && project.screenshots.length === 1 ? "sm:col-span-2" : ""}`}
                >
                  <Image
                    src={shot.src}
                    alt={shot.alt[locale]}
                    width={width}
                    height={height}
                    loading="lazy"
                    className={`w-full ${portrait ? "h-auto object-contain" : "object-cover"}`}
                  />
                </div>
              );
            })}
          </div>
        )}

        {study && (
          <div className="mt-16 space-y-12">
            <section data-reveal>
              <h2 className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                {t.caseStudy.problem}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-foreground/90 md:text-lg">
                {study.problem}
              </p>
            </section>
            <section data-reveal>
              <h2 className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                {t.caseStudy.solution}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-foreground/90 md:text-lg">
                {study.solution}
              </p>
            </section>
            <section data-reveal>
              <h2 className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                {t.caseStudy.role}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-foreground/90 md:text-lg">
                {study.role}
              </p>
            </section>
            <section data-reveal>
              <h2 className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                {t.caseStudy.learnings}
              </h2>
              <ul className="mt-3 list-inside list-disc space-y-2 text-foreground/90">
                {study.learnings.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          </div>
        )}

        <section data-reveal className="mt-16">
          <h2 className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            {t.caseStudy.stack}
          </h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <li
                key={tech}
                className="rounded-lg border border-border bg-surface px-3 py-1.5 text-sm"
              >
                {tech}
              </li>
            ))}
          </ul>
        </section>

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-glow btn-primary mt-14 inline-flex items-center rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-accent-hover"
        >
          {t.caseStudy.github}
        </a>
      </main>
      <Footer t={t} />
    </>
  );
}
