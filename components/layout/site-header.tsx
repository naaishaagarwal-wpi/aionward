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
 * Header uses the horizontal lockup from public/brand (mark + wordmark).
 * Metadata icons under app/ remain independent.
 *
 * Accessible name comes from a visually hidden site name (the lockup already
 * shows "AI Onward" — duplicating it visibly would stack the wordmark twice).
 */
export function SiteHeader({ siteName, links }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-canvas/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8 sm:py-4 lg:px-10">
        <Link
          href="/"
          className="group flex min-w-0 items-center gap-2.5 text-ink transition-opacity hover:opacity-80 sm:gap-3"
        >
          <Image
            src="/brand/ai-onward-logo-horizontal.svg"
            alt=""
            width={200}
            height={100}
            priority
            unoptimized
            className="h-9 w-auto shrink-0 sm:h-11"
          />
          <span className="sr-only">{siteName}</span>
          <span
            aria-hidden="true"
            className="font-hand truncate text-sm text-accent-coral group-hover:underline group-hover:decoration-highlight-yellow group-hover:underline-offset-4"
          >
            Everyone belongs in the future of AI.
          </span>
        </Link>

        <MainNav links={links} />
        <MobileNav links={links} />
      </div>
    </header>
  );
}
