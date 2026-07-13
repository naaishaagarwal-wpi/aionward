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
  title: "Girls Applying AI",
  description:
    "A welcoming community where girls explore, create, and lead with Artificial Intelligence.",
};

export default async function GirlsApplyingAiPage() {
  const program = await getProgramBySlug("girls-applying-ai");
  if (!program) notFound();

  return (
    <NotebookPage>
      <div className="space-y-20 sm:space-y-24">
        <ProgramHero
          program={program}
          annotation="Curiosity was already there."
        />

        <SketchDivider label="why" />
        <TextBlockSection
          id="gaa-why"
          title="Why it exists"
          annotation="A welcoming space to learn."
        >
          {program.originNote ? <p>{program.originNote}</p> : null}
          {program.whyExists ? <p>{program.whyExists}</p> : null}
        </TextBlockSection>

        <TextBlockSection id="gaa-mission" title="Mission">
          <p>{program.mission}</p>
        </TextBlockSection>

        {program.vision ? (
          <TextBlockSection id="gaa-vision" title="Vision">
            <p>{program.vision}</p>
          </TextBlockSection>
        ) : null}

        <StringListSection
          id="gaa-opportunities"
          title="Opportunities"
          items={program.opportunities}
          annotation="Programs and next steps"
        />
      </div>
    </NotebookPage>
  );
}
