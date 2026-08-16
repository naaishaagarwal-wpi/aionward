import type { Metadata } from "next";

import { ContentLink, TeamList } from "@/components/content";
import {
  HandwrittenNote,
  HighlightMark,
  NotebookPage,
  SketchDivider,
} from "@/components/notebook";
import { buttonVariants } from "@/components/ui/button";
import { getAboutContent, getTeamByCategory } from "@/lib/content";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet the students leading AI Onward — co-founders, executive leadership, and the board.",
};

export default async function AboutPage() {
  const [about, coFounders, executives, board] = await Promise.all([
    getAboutContent(),
    getTeamByCategory("co-founder"),
    getTeamByCategory("executive"),
    getTeamByCategory("board"),
  ]);

  return (
    <NotebookPage>
      <div className="space-y-16 sm:space-y-20">
        <header>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            {about.title}
          </h1>
        </header>

        <section aria-labelledby="about-mission" className="space-y-4">
          <h2
            id="about-mission"
            className="font-hand text-2xl font-normal tracking-wide text-accent-coral sm:text-3xl"
          >
            {about.missionTitle}
          </h2>
          <p className="max-w-4xl text-2xl font-semibold leading-snug tracking-tight text-ink sm:text-3xl sm:leading-snug">
            <HighlightMark>{about.mission}</HighlightMark>
          </p>
        </section>

        <section aria-labelledby="about-team" className="space-y-10 sm:space-y-12">
          <div className="space-y-5">
            <h2
              id="about-team"
              className="text-3xl font-semibold tracking-tight sm:text-4xl"
            >
              {about.meetTitle}
            </h2>
            <p className="max-w-none text-left text-lg leading-relaxed text-ink-muted sm:text-xl sm:leading-relaxed">
              {about.meetIntro}
            </p>
          </div>

          <SketchDivider />

          <TeamList
            members={coFounders}
            title="Co-Founders"
            headingId="about-co-founders"
            headingLevel="h3"
          />

          <TeamList
            members={executives}
            title="Executive Leadership"
            headingId="about-leadership"
            headingLevel="h3"
          />

          <TeamList
            members={board}
            title="Board of Directors"
            headingId="about-board"
            headingLevel="h3"
            allowEmpty
          />
        </section>

        <section className="max-w-2xl space-y-5">
          <SketchDivider />
          <HandwrittenNote tone="coral" className="block text-2xl">
            {about.invitation}
          </HandwrittenNote>
          <ContentLink
            href={about.invitationCta.href}
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-auto whitespace-normal"
            )}
          >
            {about.invitationCta.label}
          </ContentLink>
        </section>
      </div>
    </NotebookPage>
  );
}
