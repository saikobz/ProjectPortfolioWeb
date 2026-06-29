"use client";

import { Header } from "@/components/Header";
import { About, Contact, Footer, Hero } from "@/components/sections";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { useLocale } from "@/lib/i18n";

export function HomePage() {
  const { t } = useLocale();

  return (
    <>
      <Header />
      <main>
        <Hero t={t} />
        <About t={t} />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <Contact t={t} />
      </main>
      <Footer t={t} />
    </>
  );
}
