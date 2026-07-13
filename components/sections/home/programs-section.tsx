import Link from "next/link";

import {
  HandwrittenNote,
  SketchDivider,
} from "@/components/notebook";
import type { Program } from "@/lib/types/content";

type ProgramsSectionProps = {
  title: string;
  annotation: string;
  programs: Program[];
};

/**
 * Editorial program list — not a SaaS card grid.
 * Reading order follows the origin arc when possible.
 */
export function ProgramsSection({
  title,
  annotation,
  programs,
}: ProgramsSectionProps) {
  const preferredOrder = [
    "ai-visionaries",
    "girls-applying-ai",
    "ai-for-seniors",
  ];
  const ordered = [...programs].sort((a, b) => {
    const ai = preferredOrder.indexOf(a.slug);
    const bi = preferredOrder.indexOf(b.slug);
    return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi);
  });

  return (
    <section
      id="programs"
      aria-labelledby="home-programs-heading"
      className="scroll-mt-24 space-y-10"
    >
      <SketchDivider label="programs" />

      <div className="max-w-2xl space-y-3">
        <h2
          id="home-programs-heading"
          className="text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          {title}
        </h2>
        <HandwrittenNote tone="sky" className="block text-2xl">
          {annotation}
        </HandwrittenNote>
      </div>

      <ul className="divide-y divide-border border-y border-border">
        {ordered.map((program, index) => (
          <li key={program.id}>
            <Link
              href={`/${program.slug}`}
              className="group grid gap-3 py-8 sm:grid-cols-[4rem_minmax(0,1fr)_auto] sm:items-baseline sm:gap-8"
            >
              <span
                aria-hidden="true"
                className="font-hand text-2xl text-ink-faint"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0 space-y-2">
                <h3 className="text-2xl font-semibold tracking-tight underline decoration-transparent underline-offset-4 group-hover:decoration-highlight-yellow">
                  {program.name}
                </h3>
                <p className="max-w-xl leading-relaxed text-ink-muted">
                  {program.shortDescription}
                </p>
              </div>
              <span className="text-sm font-medium text-ink underline decoration-ink-faint underline-offset-4 group-hover:decoration-highlight-yellow">
                Learn more
                <span className="sr-only"> about {program.name}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
