import Link from "next/link";

import { isExternalHttpUrl } from "@/lib/utils";

type ContentLinkProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
};

/**
 * Content hrefs may be internal paths, mailto:, or external Google Forms.
 * HTTP(S) destinations open in a new tab with an accessible hint.
 */
export function ContentLink({ href, className, children }: ContentLinkProps) {
  const external = isExternalHttpUrl(href);

  return (
    <Link
      href={href}
      className={className}
      {...(external
        ? { target: "_blank" as const, rel: "noopener noreferrer" }
        : {})}
    >
      {children}
      {external ? (
        <span className="sr-only"> (opens in a new tab)</span>
      ) : null}
    </Link>
  );
}
