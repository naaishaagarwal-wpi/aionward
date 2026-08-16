import Image from "next/image";
import Link from "next/link";

import { MainNav } from "@/components/layout/main-nav";
import { MobileNav } from "@/components/layout/mobile-nav";
import type { NavLink } from "@/lib/types/content";

type SiteHeaderProps = {
  siteName: string;
  links: NavLink[];
};

/**
 * Header uses the AO monogram plus an HTML wordmark.
 * The horizontal lockup SVG contains large empty padding, so scaling that
 * image cannot make "AI Onward" readable without a tall header.
 */
export function SiteHeader({ siteName, links }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-canvas/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8 lg:px-10">
        <Link
          href="/"
          className="group flex min-w-0 items-center gap-2.5 text-ink transition-opacity hover:opacity-80 sm:gap-3"
        >
          <Image
            src="/brand/ai-onward-mark.svg"
            alt=""
            width={414}
            height={321}
            priority
            unoptimized
            className="h-9 w-auto shrink-0 sm:h-10"
          />
          <span className="truncate text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            {siteName}
          </span>
        </Link>

        <MainNav links={links} />
        <MobileNav links={links} />
      </div>
    </header>
  );
}
