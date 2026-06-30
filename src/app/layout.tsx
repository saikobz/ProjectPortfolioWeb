import type { Metadata } from "next";
import { Bricolage_Grotesque, IBM_Plex_Sans_Thai } from "next/font/google";
import { LocaleProvider } from "@/lib/i18n";
import { SkipLink } from "@/components/SkipLink";
import { ScrollReveal } from "@/components/interactions";
import { siteConfig } from "@/content/site";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

const ibmPlexSansThai = IBM_Plex_Sans_Thai({
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${siteConfig.name.en} | Junior Full Stack Developer`,
  description: "Portfolio — Full Stack developer building AI-powered web applications.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th" suppressHydrationWarning>
      <body className={`${bricolage.variable} ${ibmPlexSansThai.variable} antialiased`}>
        <LocaleProvider>
          <SkipLink />
          {children}
          <ScrollReveal />
        </LocaleProvider>
      </body>
    </html>
  );
}
