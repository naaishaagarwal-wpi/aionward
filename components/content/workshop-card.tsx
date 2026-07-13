import Link from "next/link";

import { TapedPhoto } from "@/components/notebook";
import type { Program, Workshop } from "@/lib/types/content";
import { cn } from "@/lib/utils";

type WorkshopCardProps = {
  workshop: Workshop;
  programName?: string | null;
  className?: string;
};

function formatWorkshopDate(isoDate: string) {
  const date = new Date(`${isoDate}T12:00:00`);
  if (Number.isNaN(date.getTime())) return isoDate;
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function WorkshopCard({
  workshop,
  programName,
  className,
}: WorkshopCardProps) {
  const leadPhoto = workshop.photos[0] ?? null;

  return (
    <article
      className={cn(
        "grid gap-6 border border-border p-6 sm:grid-cols-[minmax(0,1fr)_minmax(0,14rem)] sm:p-8",
        className
      )}
    >
      <div className="min-w-0 space-y-3">
        <p className="text-xs tracking-[0.12em] text-ink-faint uppercase">
          {formatWorkshopDate(workshop.date)}
          {workshop.location ? ` · ${workshop.location}` : ""}
        </p>
        <h3 className="text-2xl font-semibold tracking-tight">
          {workshop.title}
        </h3>
        <p className="text-sm text-ink-muted">
          {workshop.audience}
          {programName ? ` · ${programName}` : ""}
        </p>
        <p className="leading-relaxed text-ink-muted">{workshop.description}</p>
        {workshop.registrationLink ? (
          <Link
            href={workshop.registrationLink}
            className="inline-block text-sm font-medium underline decoration-ink-faint underline-offset-4 hover:decoration-highlight-yellow"
          >
            Register
          </Link>
        ) : null}
      </div>

      {leadPhoto ? (
        <TapedPhoto
          image={leadPhoto}
          className="max-w-none"
          sizes="(max-width: 640px) 100vw, 14rem"
        />
      ) : null}
    </article>
  );
}

type WorkshopListProps = {
  workshops: Workshop[];
  programs: Program[];
  className?: string;
};

export function WorkshopList({
  workshops,
  programs,
  className,
}: WorkshopListProps) {
  if (workshops.length === 0) return null;

  const programNameBySlug = new Map(
    programs.map((program) => [program.slug, program.name])
  );

  return (
    <ul className={cn("space-y-6", className)}>
      {workshops.map((workshop) => (
        <li key={workshop.id}>
          <WorkshopCard
            workshop={workshop}
            programName={programNameBySlug.get(workshop.programSlug) ?? null}
          />
        </li>
      ))}
    </ul>
  );
}
