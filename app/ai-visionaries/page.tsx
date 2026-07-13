import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  ProgramHero,
  StringListSection,
  TextBlockSection,
} from "@/components/content";
import {
  NotebookPage,
  SketchDivider,
} from "@/components/notebook";
import { getProgramBySlug } from "@/lib/content";

export const metadata: Metadata = {
  title: "AI Visionaries",
  description:
    "A student-led space to explore how Artificial Intelligence can solve real-world problems beyond coding.",
};

export default async function AiVisionariesPage() {
  const program = await getProgramBySlug("ai-visionaries");
  if (!program) notFound();

  return (
    <NotebookPage>
      <div className="space-y-20 sm:space-y-24">
        <ProgramHero
          program={program}
          annotation="Where the movement began."
        />

        <SketchDivider label="origin" />
        <TextBlockSection
          id="visionaries-origin"
          title="Origin and mission"
          annotation="Student-led from the start."
        >
          {program.originNote ? <p>{program.originNote}</p> : null}
          {program.whyExists ? <p>{program.whyExists}</p> : null}
          <p>{program.mission}</p>
        </TextBlockSection>

        <StringListSection
          id="visionaries-activities"
          title="Club activities"
          items={program.activities}
        />
        <StringListSection
          id="visionaries-projects"
          title="Projects"
          items={program.projects}
        />
        <StringListSection
          id="visionaries-leadership"
          title="Leadership"
          items={program.leadershipItems}
        />
        <StringListSection
          id="visionaries-competitions"
          title="Competitions"
          items={program.competitions}
        />
      </div>
    </NotebookPage>
  );
}
