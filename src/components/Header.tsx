"use client";

import Link from "next/link";
import { useLocale } from "@/lib/i18n";
import { siteConfig } from "@/content/site";

const navIds = ["about", "projects", "skills", "experience", "contact"] as const;

export function Header() {
  const { locale, setLocale, t } = useLocale();

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 font-heading text-base font-semibold tracking-tight">
          <span className="inline-block h-2.5 w-2.5 rounded-sm bg-accent" aria-hidden="true" />
          {siteConfig.name[locale]}
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-muted md:flex" aria-label={t.nav.skip}>
          {navIds.map((id) => (
            <a key={id} href={`#${id}`} className="transition-colors hover:text-foreground">
              {t.nav[id]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1 rounded-full border border-border p-0.5 text-xs font-medium" role="group" aria-label="language">
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
