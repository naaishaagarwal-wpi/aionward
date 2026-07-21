import Link from "next/link";

import type { NavLink } from "@/lib/types/content";

type SiteFooterProps = {
  siteName: string;
  links: NavLink[];
  socialLinks: NavLink[];
};

function FooterDivider() {
  return (
    <span aria-hidden="true" className="text-ink-faint">
      |
    </span>
  );
}

export function SiteFooter({ siteName, links, socialLinks }: SiteFooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border bg-canvas-muted">
      <div className="mx-auto max-w-6xl px-5 py-8 sm:px-8 sm:py-10 lg:px-10">
        <nav
          aria-label="Footer"
          className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm leading-relaxed"
        >
          <span className="font-semibold tracking-tight text-ink">
            {siteName}
          </span>

          {links.map((link) => (
            <span key={link.href} className="inline-flex items-center gap-3">
              <FooterDivider />
              <Link
                href={link.href}
                className="text-ink-muted transition-colors hover:text-ink"
              >
                {link.label}
              </Link>
            </span>
          ))}

          {socialLinks.map((link) => (
            <span key={link.href} className="inline-flex items-center gap-3">
              <FooterDivider />
              <Link
                href={link.href}
                className="text-ink-muted transition-colors hover:text-ink"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </Link>
            </span>
          ))}

          <span className="inline-flex items-center gap-3">
            <FooterDivider />
            <span className="text-ink-faint">
              © {year} {siteName}
            </span>
          </span>
        </nav>
      </div>
    </footer>
  );
}
