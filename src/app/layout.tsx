import type { Metadata } from "next";
import { IBM_Plex_Sans_Thai, Outfit } from "next/font/google";
import { LocaleProvider } from "@/lib/i18n";
import { siteConfig } from "@/content/site";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
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
  title: `${siteConfig.name} | Junior Full Stack Developer`,
  description: "Portfolio — Full Stack developer building AI-powered web applications.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th" suppressHydrationWarning>
      <body className={`${outfit.variable} ${ibmPlexSansThai.variable} antialiased`}>
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
