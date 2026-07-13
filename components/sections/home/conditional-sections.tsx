import Link from "next/link";

import {
  HandwrittenNote,
  SketchDivider,
} from "@/components/notebook";
import type { ImpactStat, Workshop } from "@/lib/types/content";

type ImpactSectionProps = {
  stats: ImpactStat[];
};

/**
 * Renders only when at least one confirmed impact number exists.
 * Never invents values — null stats are omitted.
 */
export function ImpactSection({ stats }: ImpactSectionProps) {
  const confirmed = stats.filter(
    (stat): stat is ImpactStat & { value: number } => stat.value !== null
  );

  if (confirmed.length === 0) return null;

  return (
    <section aria-labelledby="home-impact-heading" className="space-y-6">
      <SketchDivider label="impact" />
      <h2 id="home-impact-heading" className="sr-only">
        Impact
      </h2>
      <ul className="grid grid-cols-2 gap-6 sm:grid-cols-4">
        {confirmed.map((stat) => (
          <li key={stat.id} className="space-y-1">
            <p className="text-3xl font-semibold tracking-tight text-ink">
              {stat.value.toLocaleString()}
            </p>
            <p className="text-sm text-ink-muted">{stat.label}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

type FeaturedWorkshopsSectionProps = {
  workshops: Workshop[];
};

/**
 * Renders only when featured workshops exist.
 * Empty arrays produce no section — no fabricated workshop details.
 */
export function FeaturedWorkshopsSection({
  workshops,
}: FeaturedWorkshopsSectionProps) {
  if (workshops.length === 0) return null;

  return (
    <section aria-labelledby="home-workshops-heading" className="space-y-8">
      <SketchDivider label="workshops" />
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <h2
          id="home-workshops-heading"
          className="text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          Featured Workshops
        </h2>
        <HandwrittenNote tone="sky" className="text-xl">
          What&apos;s been happening
        </HandwrittenNote>
      </div>
      <ul className="grid gap-6 md:grid-cols-2">
        {workshops.map((workshop) => (
          <li key={workshop.id} className="border border-border p-6">
            <p className="text-xs tracking-[0.12em] text-ink-faint uppercase">
              {workshop.date}
              {workshop.location ? ` · ${workshop.location}` : ""}
            </p>
            <h3 className="mt-2 text-xl font-semibold tracking-tight">
              {workshop.title}
            </h3>
            <p className="mt-2 leading-relaxed text-ink-muted">
              {workshop.description}
            </p>
          </li>
        ))}
      </ul>
      <p>
        <Link
          href="/workshops"
          className="text-sm font-medium underline decoration-ink-faint underline-offset-4 hover:decoration-highlight-yellow"
        >
          View all workshops
        </Link>
      </p>
    </section>
  );
}
