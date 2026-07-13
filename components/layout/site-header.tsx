import Link from "next/link";

import { MainNav } from "@/components/layout/main-nav";
import { MobileNav } from "@/components/layout/mobile-nav";
import type { NavLink } from "@/lib/types/content";

type SiteHeaderProps = {
  siteName: string;
  links: NavLink[];
};

export function SiteHeader({ siteName, links }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-canvas/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-10">
        <Link
          href="/"
          className="group shrink-0 text-ink transition-opacity hover:opacity-80"
        >
          <span className="block text-lg font-semibold tracking-tight sm:text-xl">
            {siteName}
          </span>
          <span className="font-hand text-sm text-accent-coral group-hover:underline group-hover:decoration-highlight-yellow group-hover:underline-offset-4">
            moving AI onward
          </span>
        </Link>

        <MainNav links={links} />
        <MobileNav links={links} />
      </div>
    </header>
  );
}
