import Link from "next/link";

import {
  HandwrittenNote,
  SketchDivider,
} from "@/components/notebook";
import type { HomepageContent } from "@/content/homepage";

type GetInvolvedSectionProps = {
  getInvolved: HomepageContent["getInvolved"];
};

export function GetInvolvedSection({ getInvolved }: GetInvolvedSectionProps) {
  return (
    <section aria-labelledby="home-involved-heading" className="space-y-10">
      <SketchDivider label="invite" />

      <div className="max-w-2xl space-y-3">
        <h2
          id="home-involved-heading"
          className="text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          {getInvolved.title}
        </h2>
        <HandwrittenNote tone="coral" className="block text-2xl">
          {getInvolved.annotation}
        </HandwrittenNote>
      </div>

      <ul className="divide-y divide-border border-y border-border">
        {getInvolved.paths.map((path) => (
          <li key={path.id}>
            <Link
              href={path.href}
              className="group flex flex-col gap-1 py-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
            >
              <span className="text-xl font-semibold tracking-tight underline decoration-transparent underline-offset-4 group-hover:decoration-highlight-yellow">
                {path.label}
              </span>
              {path.description ? (
                <span className="max-w-md text-sm leading-relaxed text-ink-muted sm:text-right">
                  {path.description}
                </span>
              ) : null}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
