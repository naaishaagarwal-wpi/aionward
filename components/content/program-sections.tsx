import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { PhotoGrid } from "@/components/content/photo-grid";
import {
  HandwrittenNote,
  MarginAnnotation,
  TapedPhoto,
} from "@/components/notebook";
import type { MediaAsset, Program } from "@/lib/types/content";
import { cn } from "@/lib/utils";

type ProgramHeroProps = {
  program: Program;
  annotation?: string | null;
  cta?: { label: string; href: string } | null;
};

export function ProgramHero({
  program,
  annotation,
  cta,
}: ProgramHeroProps) {
  return (
    <section
      aria-labelledby={`program-hero-${program.slug}`}
      className="grid items-end gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-14"
    >
      <div className="space-y-6">
        <p className="text-xs font-medium tracking-[0.14em] text-ink-muted uppercase">
          Program
        </p>
        <div className="space-y-3">
          <h1
            id={`program-hero-${program.slug}`}
            className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl"
          >
            {program.name}
          </h1>
          {annotation ? (
            <HandwrittenNote tone="coral" className="block text-2xl">
              {annotation}
            </HandwrittenNote>
          ) : null}
        </div>
        <p className="max-w-xl text-lg leading-relaxed text-ink-muted">
          {program.shortDescription}
        </p>
        {cta ? (
          <Link
            href={cta.href}
            className={cn(buttonVariants({ size: "lg" }))}
          >
            {cta.label}
          </Link>
        ) : null}
      </div>

      <div className="space-y-3">
        <MarginAnnotation withArrow className="hidden lg:block">
          A chapter in the AI Onward field notes.
        </MarginAnnotation>
        <TapedPhoto
          image={program.heroImage}
          placeholderLabel={`${program.name} photo`}
          className="max-w-none"
          sizes="(max-width: 1024px) 100vw, 40vw"
          priority
        />
      </div>
    </section>
  );
}

type TextBlockSectionProps = {
  id: string;
  title: string;
  annotation?: string | null;
  children: React.ReactNode;
};

export function TextBlockSection({
  id,
  title,
  annotation,
  children,
}: TextBlockSectionProps) {
  return (
    <section aria-labelledby={id} className="space-y-6">
      <div className="max-w-2xl space-y-3">
        <h2
          id={id}
          className="text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          {title}
        </h2>
        {annotation ? (
          <HandwrittenNote tone="ink" className="block text-xl">
            {annotation}
          </HandwrittenNote>
        ) : null}
      </div>
      <div className="max-w-2xl space-y-4 text-lg leading-relaxed text-ink-muted">
        {children}
      </div>
    </section>
  );
}

type StringListSectionProps = {
  id: string;
  title: string;
  items: string[];
  annotation?: string | null;
};

/** Renders nothing when items are empty — no Coming Soon. */
export function StringListSection({
  id,
  title,
  items,
  annotation,
}: StringListSectionProps) {
  if (items.length === 0) return null;

  return (
    <section aria-labelledby={id} className="space-y-6">
      <div className="max-w-2xl space-y-3">
        <h2
          id={id}
          className="text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          {title}
        </h2>
        {annotation ? (
          <HandwrittenNote tone="sky" className="block text-xl">
            {annotation}
          </HandwrittenNote>
        ) : null}
      </div>
      <ul className="divide-y divide-border border-y border-border">
        {items.map((item) => (
          <li key={item} className="py-5 leading-relaxed text-ink-muted">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

type MediaSectionProps = {
  id: string;
  title: string;
  photos: MediaAsset[];
  annotation?: string | null;
};

export function MediaSection({
  id,
  title,
  photos,
  annotation,
}: MediaSectionProps) {
  if (photos.length === 0) return null;

  return (
    <section aria-labelledby={id} className="space-y-8">
      <div className="max-w-2xl space-y-3">
        <h2
          id={id}
          className="text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          {title}
        </h2>
        {annotation ? (
          <HandwrittenNote tone="ink" className="block text-xl">
            {annotation}
          </HandwrittenNote>
        ) : null}
      </div>
      <PhotoGrid photos={photos} />
    </section>
  );
}
