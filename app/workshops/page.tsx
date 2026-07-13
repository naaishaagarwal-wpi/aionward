import type { Metadata } from "next";

import { WorkshopList } from "@/components/content";
import {
  HandwrittenNote,
  NotebookPage,
  SketchDivider,
} from "@/components/notebook";
import {
  getPrograms,
  getWorkshops,
  getWorkshopsPageContent,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Workshops",
  description:
    "Hands-on AI learning experiences across generations — documented as they happen.",
};

export default async function WorkshopsPage() {
  const [page, workshops, programs] = await Promise.all([
    getWorkshopsPageContent(),
    getWorkshops(),
    getPrograms(),
  ]);

  const upcoming = workshops
    .filter((w) => w.status === "upcoming")
    .sort((a, b) => a.date.localeCompare(b.date));
  const completed = workshops
    .filter((w) => w.status === "completed")
    .sort((a, b) => b.date.localeCompare(a.date));

  return (
    <NotebookPage>
      <div className="space-y-16 sm:space-y-20">
        <header className="max-w-2xl space-y-4">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            {page.title}
          </h1>
          <HandwrittenNote tone="coral" className="block text-2xl">
            {page.annotation}
          </HandwrittenNote>
          <p className="text-lg leading-relaxed text-ink-muted">{page.lead}</p>
        </header>

        {upcoming.length > 0 ? (
          <section aria-labelledby="workshops-upcoming" className="space-y-8">
            <SketchDivider label="upcoming" />
            <h2
              id="workshops-upcoming"
              className="text-3xl font-semibold tracking-tight sm:text-4xl"
            >
              Upcoming
            </h2>
            <WorkshopList workshops={upcoming} programs={programs} />
          </section>
        ) : null}

        {completed.length > 0 ? (
          <section aria-labelledby="workshops-completed" className="space-y-8">
            <SketchDivider label="completed" />
            <h2
              id="workshops-completed"
              className="text-3xl font-semibold tracking-tight sm:text-4xl"
            >
              Completed
            </h2>
            <WorkshopList workshops={completed} programs={programs} />
          </section>
        ) : null}
      </div>
    </NotebookPage>
  );
}
