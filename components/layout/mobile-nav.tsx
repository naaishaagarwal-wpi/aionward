"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";

import { cn } from "@/lib/utils";
import type { NavLink } from "@/lib/types/content";

type MobileNavProps = {
  links: NavLink[];
};

export function MobileNav({ links }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const panelId = useId();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        ref={menuButtonRef}
        type="button"
        className="inline-flex h-10 items-center gap-2 border border-border bg-canvas px-3 text-sm text-ink"
        aria-expanded={open}
        aria-controls={panelId}
        aria-haspopup="dialog"
        onClick={() => setOpen((value) => !value)}
      >
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        <span aria-hidden="true" className="flex w-4 flex-col gap-1">
          <span
            className={cn(
              "h-0.5 w-full bg-ink transition-transform",
              open && "translate-y-1.5 rotate-45"
            )}
          />
          <span
            className={cn(
              "h-0.5 w-full bg-ink transition-opacity",
              open && "opacity-0"
            )}
          />
          <span
            className={cn(
              "h-0.5 w-full bg-ink transition-transform",
              open && "-translate-y-1.5 -rotate-45"
            )}
          />
        </span>
        Menu
      </button>

      {open ? (
        <div
          id={panelId}
          className="fixed inset-0 z-50 bg-ink/20 backdrop-blur-[2px]"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setOpen(false);
              menuButtonRef.current?.focus();
            }
          }}
        >
          <div className="absolute inset-x-0 top-0 border-b border-border bg-canvas p-5 shadow-lg">
            <div className="mb-4 flex items-center justify-between">
              <p className="font-hand text-lg text-accent-coral">Navigate</p>
              <button
                ref={closeButtonRef}
                type="button"
                className="text-sm text-ink-muted underline decoration-ink-faint underline-offset-4"
                onClick={() => {
                  setOpen(false);
                  menuButtonRef.current?.focus();
                }}
              >
                Close
              </button>
            </div>
            <ul className="flex flex-col gap-1">
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
                        "block rounded-sm px-2 py-2.5 text-base text-ink transition-colors hover:bg-highlight-yellow/40",
                        isActive && "bg-highlight-yellow/50"
                      )}
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      ) : null}
    </div>
  );
}
