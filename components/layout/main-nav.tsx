"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import type { NavLink } from "@/lib/types/content";

type MainNavProps = {
  links: NavLink[];
  className?: string;
};

export function MainNav({ links, className }: MainNavProps) {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary" className={cn("hidden md:block", className)}>
      <ul className="flex flex-wrap items-center justify-end gap-x-5 gap-y-1 lg:gap-x-6">
        {links.map((link) => {
          const isActive =
            link.href === "/"
              ? pathname === "/"
              : pathname.startsWith(link.href);

          return (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "text-sm tracking-wide text-ink-muted transition-colors hover:text-ink",
                  isActive &&
                    "text-ink underline decoration-highlight-yellow decoration-2 underline-offset-6"
                )}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
