import Link from "next/link";

import { HandwrittenNote } from "@/components/notebook";
import type { HomepagePlace } from "@/content/homepage";

type PlaceSectionProps = {
  place: HomepagePlace;
};

/**
 * Movement invitation — identity pathways as editorial rows.
 * Inspiration → participation, without program or signup framing.
 */
export function PlaceSection({ place }: PlaceSectionProps) {
  return (
    <section aria-labelledby="home-place-heading" className="space-y-10 sm:space-y-12">
      <div className="max-w-2xl space-y-3 sm:space-y-4">
        <h2
          id="home-place-heading"
          className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl"
        >
          {place.title}
        </h2>
        <HandwrittenNote tone="coral" className="block text-2xl sm:text-3xl">
          {place.annotation}
        </HandwrittenNote>
      </div>

      <ul className="divide-y divide-border border-y border-border">
        {place.pathways.map((pathway) => (
          <li key={pathway.id}>
            <Link
              href={pathway.href}
              className="group flex flex-col gap-3 py-7 sm:flex-row sm:items-baseline sm:justify-between sm:gap-12 sm:py-8"
            >
              <span className="text-xl font-semibold tracking-tight underline decoration-transparent underline-offset-4 group-hover:decoration-highlight-yellow sm:text-2xl">
                {pathway.label}
              </span>
              <span className="max-w-sm space-y-1 text-base leading-snug text-ink-muted sm:text-right sm:text-lg">
                {pathway.lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
