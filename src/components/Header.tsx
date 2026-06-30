"use client";

import Link from "next/link";
import { useLocale } from "@/lib/i18n";
import { siteConfig } from "@/content/site";
import { ScrollProgress } from "@/components/interactions";

const navIds = ["about", "projects", "skills", "experience", "contact"] as const;

export function Header() {
  const { locale, setLocale, t } = useLocale();

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-md">
      <ScrollProgress />
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-2.5 font-heading text-base font-semibold tracking-tight"
        >
          <span className="flex h-4 items-end gap-[2px]" aria-hidden="true">
            <span className="w-[3px] rounded-full bg-accent" style={{ height: "45%" }} />
            <span className="w-[3px] rounded-full bg-accent" style={{ height: "100%" }} />
            <span className="w-[3px] rounded-full bg-accent" style={{ height: "65%" }} />
          </span>
          {siteConfig.name[locale]}
        </Link>

        <nav
          className="hidden items-center gap-7 text-sm text-muted md:flex"
          aria-label={t.nav.skip}
        >
          {navIds.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className="relative transition-colors hover:text-foreground after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
            >
              {t.nav[id]}
            </a>
          ))}
        </nav>

        <div
          className="flex items-center gap-1 rounded-full border border-border p-0.5 text-xs font-medium"
          role="group"
          aria-label="language"
        >
          {(["th", "en"] as const).map((lang) => (
            <button
              key={lang}
              type="button"
              onClick={() => setLocale(lang)}
              className={`rounded-full px-2.5 py-1 uppercase transition-colors ${
                locale === lang ? "bg-accent text-white" : "text-muted hover:text-foreground"
              }`}
              aria-pressed={locale === lang}
            >
              {lang}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
