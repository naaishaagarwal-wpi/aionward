import type { Metadata } from "next";

import { ContentLink, TeamList } from "@/components/content";
import {
  HandwrittenNote,
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
        <header className="max-w-2xl space-y-4">
          <p className="text-xs font-medium tracking-[0.14em] text-ink-muted uppercase">
            {about.eyebrow}
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            {about.title}
          </h1>
          <p className="text-lg leading-relaxed text-ink-muted">{about.lead}</p>
        </header>

        <TeamList
          members={coFounders}
          title="Co-Founders"
          headingId="about-co-founders"
        />

        <TeamList
          members={executives}
          title="Executive Leadership"
          headingId="about-leadership"
        />

        <TeamList
          members={board}
          title="Board of Directors"
          headingId="about-board"
          allowEmpty
        />

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
