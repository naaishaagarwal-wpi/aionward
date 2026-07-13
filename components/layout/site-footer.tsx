import Link from "next/link";

import { SketchDivider } from "@/components/notebook/sketch-divider";
import type { NavLink } from "@/lib/types/content";

type SiteFooterProps = {
  siteName: string;
  tagline: string;
  links: NavLink[];
};

export function SiteFooter({ siteName, tagline, links }: SiteFooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border bg-canvas-muted">
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8 lg:px-10">
        <SketchDivider className="mb-8" />

        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm space-y-2">
            <p className="text-lg font-semibold tracking-tight text-ink">
              {siteName}
            </p>
            <p className="text-sm leading-relaxed text-ink-muted">{tagline}</p>
            <p className="font-hand text-base text-accent-coral">
              Everyone belongs in the future of AI.
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="columns-2 gap-x-10 space-y-2 sm:columns-1">
              {links.map((link) => (
                <li key={link.href} className="break-inside-avoid">
                  <Link
                    href={link.href}
                    className="text-sm text-ink-muted transition-colors hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <p className="mt-10 text-xs tracking-wide text-ink-faint">
          © {year} {siteName}. A youth-led community movement.
        </p>
      </div>
    </footer>
  );
}
