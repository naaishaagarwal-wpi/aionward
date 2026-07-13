import Link from "next/link";

import {
  HandwrittenNote,
  HighlightMark,
  MarginAnnotation,
  SketchDivider,
} from "@/components/notebook";
import type { HomepageOrigin } from "@/content/homepage";

type OriginSectionProps = {
  origin: HomepageOrigin;
};

export function OriginSection({ origin }: OriginSectionProps) {
  return (
    <section aria-labelledby="home-origin-heading" className="space-y-12">
      <SketchDivider label="beginning" />

      <div className="max-w-2xl space-y-4">
        <p className="text-xs font-medium tracking-[0.14em] text-ink-muted uppercase">
          {origin.eyebrow}
        </p>
        <h2
          id="home-origin-heading"
          className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
        >
          {origin.title}
        </h2>
        <p className="text-lg leading-relaxed text-ink-muted">{origin.lead}</p>
      </div>

      <ol className="relative space-y-0">
        {origin.observations.map((observation, index) => (
          <li key={observation.id} className="relative pb-12 last:pb-0">
            {index < origin.observations.length - 1 ? (
              <span
                aria-hidden="true"
                className="absolute top-8 bottom-0 left-[0.7rem] w-px bg-ink/20 sm:left-[0.85rem]"
              />
            ) : null}

            <div className="grid gap-4 sm:grid-cols-[auto_minmax(0,1fr)_minmax(0,10rem)] sm:gap-8">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center border border-ink bg-canvas text-xs font-medium text-ink sm:h-8 sm:w-8">
                <span className="sr-only">Observation </span>
                {index + 1}
              </div>

              <div className="min-w-0 space-y-3">
                <h3 className="text-xl font-semibold tracking-tight">
                  {observation.label}
                </h3>
                <p className="max-w-2xl leading-relaxed text-ink-muted">
                  {observation.body}
                </p>
              </div>

              <MarginAnnotation className="sm:justify-self-end sm:pt-1">
                <Link
                  href={observation.href}
                  className="underline decoration-ink-faint underline-offset-4 hover:decoration-highlight-yellow"
                >
                  {observation.marginNote}
                </Link>
              </MarginAnnotation>
            </div>
          </li>
        ))}
      </ol>

      <div className="max-w-2xl space-y-5 border-t border-ink pt-10">
        <p className="text-xl leading-relaxed text-ink sm:text-2xl">
          <HighlightMark>{origin.belief}</HighlightMark>
        </p>
        <p className="leading-relaxed text-ink-muted">{origin.closing}</p>
        <div className="space-y-2 pt-2">
          <p className="text-xs font-medium tracking-[0.14em] text-ink-muted uppercase">
            AI Visionaries → Girls Applying AI → AI For Seniors
          </p>
          <HandwrittenNote tone="coral" className="block text-3xl sm:text-4xl">
            → {origin.culmination}
          </HandwrittenNote>
        </div>
      </div>
    </section>
  );
}
