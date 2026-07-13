import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { buttonVariants } from "@/components/ui/button";
import {
  MediaSection,
  ProgramHero,
  TextBlockSection,
  TestimonialList,
  WorkshopList,
} from "@/components/content";
import {
  HandwrittenNote,
  NotebookPage,
  SketchDivider,
} from "@/components/notebook";
import {
  getProgramBySlug,
  getTestimonialsByProgram,
  getWorkshops,
} from "@/lib/content";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "AI For Seniors",
  description:
    "Helping older adults discover practical ways to use AI with confidence through patient, hands-on workshops.",
};

export default async function AiForSeniorsPage() {
  const program = await getProgramBySlug("ai-for-seniors");
  if (!program) notFound();

  const [workshops, testimonials] = await Promise.all([
    getWorkshops({ programSlug: program.slug }),
    getTestimonialsByProgram(program.slug),
  ]);

  const upcoming = workshops.filter((w) => w.status === "upcoming");
  const completed = workshops.filter((w) => w.status === "completed");
  const photos = workshops.flatMap((w) => w.photos);

  return (
    <NotebookPage>
      <div className="space-y-20 sm:space-y-24">
        <ProgramHero
          program={program}
          annotation="Patience. Practice. Belonging."
          cta={{ label: "Request a workshop", href: "/contact" }}
        />

        {program.whyExists || program.originNote ? (
          <>
            <SketchDivider label="why" />
            <TextBlockSection
              id="afs-why"
              title="Why this exists"
              annotation="It started at home."
            >
              {program.originNote ? <p>{program.originNote}</p> : null}
              {program.whyExists ? <p>{program.whyExists}</p> : null}
              <p>{program.mission}</p>
            </TextBlockSection>
          </>
        ) : null}

        {upcoming.length > 0 ? (
          <section aria-labelledby="afs-upcoming" className="space-y-8">
            <SketchDivider label="upcoming" />
            <h2
              id="afs-upcoming"
              className="text-3xl font-semibold tracking-tight sm:text-4xl"
            >
              Upcoming workshops
            </h2>
            <WorkshopList workshops={upcoming} programs={[program]} />
          </section>
        ) : null}

        {completed.length > 0 ? (
          <section aria-labelledby="afs-history" className="space-y-8">
            <SketchDivider label="history" />
            <h2
              id="afs-history"
              className="text-3xl font-semibold tracking-tight sm:text-4xl"
            >
              Workshop history
            </h2>
            <WorkshopList workshops={completed} programs={[program]} />
          </section>
        ) : null}

        <MediaSection
          id="afs-photos"
          title="From the workshops"
          annotation="Documentary moments"
          photos={photos}
        />

        {testimonials.length > 0 ? (
          <section aria-labelledby="afs-testimonials" className="space-y-8">
            <SketchDivider label="voices" />
            <h2
              id="afs-testimonials"
              className="text-3xl font-semibold tracking-tight sm:text-4xl"
            >
              Voices from the room
            </h2>
            <TestimonialList testimonials={testimonials} />
          </section>
        ) : null}

        <section
          aria-labelledby="afs-request"
          className="space-y-6 border-t border-ink pt-12"
        >
          <SketchDivider />
          <h2
            id="afs-request"
            className="text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Request a workshop
          </h2>
          <HandwrittenNote tone="coral" className="block text-2xl">
            Bring AI For Seniors to your community.
          </HandwrittenNote>
          <p className="max-w-xl leading-relaxed text-ink-muted">
            Invite AI Onward to host a patient, hands-on workshop for older
            adults where you live, learn, or gather.
          </p>
          <Link
            href="/contact"
            className={cn(buttonVariants({ size: "lg" }))}
          >
            Request a workshop
          </Link>
        </section>
      </div>
    </NotebookPage>
  );
}
