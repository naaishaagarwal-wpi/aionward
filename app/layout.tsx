import type { Metadata } from "next";
import { Caveat, Figtree } from "next/font/google";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { getSiteSettings } from "@/lib/content";
import { cn } from "@/lib/utils";

import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-hand",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "AI Onward",
    template: "%s · AI Onward",
  },
  description:
    "A youth-led initiative helping people of every generation confidently understand, explore, and apply Artificial Intelligence.",
  openGraph: {
    title: "AI Onward",
    description:
      "Helping every generation confidently understand, explore, and apply Artificial Intelligence.",
    siteName: "AI Onward",
    type: "website",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const site = await getSiteSettings();

  return (
    <html
      lang="en"
      className={cn("h-full antialiased", figtree.variable, caveat.variable)}
    >
      <body className="flex min-h-full flex-col font-sans text-ink">
        <SiteHeader siteName={site.siteName} links={site.navLinks} />
        <main className="flex flex-1 flex-col">{children}</main>
        <SiteFooter
          siteName={site.siteName}
          tagline={site.tagline}
          links={site.navLinks}
        />
      </body>
    </html>
  );
}
