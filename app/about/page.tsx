import type { Metadata } from "next";

import { TeamList } from "@/components/content";
import {
  HandwrittenNote,
  HighlightMark,
  NotebookPage,
  SketchDivider,
} from "@/components/notebook";
import { getAboutContent, getTeamByCategory } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "How AI Onward began — from AI Visionaries to Girls Applying AI to AI For Seniors.",
};

export default async function AboutPage() {
  const [about, executives, team] = await Promise.all([
    getAboutContent(),
    getTeamByCategory("executive"),
    getTeamByCategory("team"),
  ]);

  return (
    <NotebookPage>
      <div className="space-y-20 sm:space-y-24">
        <header className="max-w-2xl space-y-4">
          <p className="text-xs font-medium tracking-[0.14em] text-ink-muted uppercase">
            {about.eyebrow}
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            {about.title}
          </h1>
          <p className="text-lg leading-relaxed text-ink-muted">{about.lead}</p>
        </header>

        <section aria-labelledby="about-beginning" className="space-y-8">
          <SketchDivider label="beginning" />
          <h2
            id="about-beginning"
            className="text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            How this began
          </h2>
          <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-ink-muted">
            {about.beginning.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>
          <div className="space-y-2 pt-4">
            <p className="text-xs font-medium tracking-[0.14em] text-ink-muted uppercase">
              {about.arcLabel}
            </p>
            <HandwrittenNote tone="coral" className="block text-3xl">
              → {about.culmination}
            </HandwrittenNote>
          </div>
        </section>

        <section aria-labelledby="about-mission" className="space-y-6">
          <SketchDivider />
          <h2
            id="about-mission"
            className="text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Mission and vision
          </h2>
          <div className="max-w-2xl space-y-4">
            <p className="text-xl leading-relaxed text-ink">
              <HighlightMark>{about.mission}</HighlightMark>
            </p>
            <p className="text-lg leading-relaxed text-ink-muted">
              {about.vision}
            </p>
          </div>
        </section>

        <section aria-labelledby="about-beliefs" className="space-y-6">
          <h2
            id="about-beliefs"
            className="text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Core beliefs
          </h2>
          <ul className="max-w-xl divide-y divide-border border-y border-border">
            {about.beliefs.map((belief) => (
              <li key={belief} className="py-4 text-ink-muted">
                {belief}
              </li>
            ))}
          </ul>
        </section>

        <TeamList
          members={executives}
          title="Executive leadership"
          headingId="about-leadership"
        />

        <TeamList members={team} title="Team" headingId="about-team" />

        <section className="max-w-2xl space-y-3 border-t border-ink pt-12">
          <HandwrittenNote tone="coral" className="block text-2xl">
            Together, we move AI onward.
          </HandwrittenNote>
          <p className="leading-relaxed text-ink-muted">{about.invitation}</p>
        </section>
      </div>
    </NotebookPage>
  );
}
