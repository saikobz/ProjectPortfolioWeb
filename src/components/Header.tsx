"use client";

import Link from "next/link";
import { useLocale } from "@/lib/i18n";
import { siteConfig } from "@/content/site";

const navIds = ["about", "projects", "skills", "experience", "contact"] as const;

export function Header() {
  const { locale, setLocale, t } = useLocale();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-heading text-lg font-semibold tracking-tight">
          {siteConfig.name[locale]}
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-muted md:flex">
          {navIds.map((id) => (
            <a key={id} href={`#${id}`} className="transition-colors hover:text-foreground">
              {t.nav[id]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 text-sm">
          {(["th", "en"] as const).map((lang) => (
            <button
              key={lang}
              type="button"
              onClick={() => setLocale(lang)}
              className={`rounded-md px-2.5 py-1 font-medium uppercase transition-colors ${
                locale === lang
                  ? "bg-accent text-white"
                  : "text-muted hover:bg-surface hover:text-foreground"
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
