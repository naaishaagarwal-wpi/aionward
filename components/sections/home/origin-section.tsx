import Image from "next/image";

import { HandwrittenNote } from "@/components/notebook";
import type { HomepageOrigin } from "@/content/homepage";

type OriginSectionProps = {
  origin: HomepageOrigin;
};

/**
 * Origin story — editorial column: belief, then the family it started from.
 */
export function OriginSection({ origin }: OriginSectionProps) {
  return (
    <section
      aria-labelledby="home-origin-heading"
      className="space-y-10 sm:space-y-12"
    >
      <div className="max-w-5xl space-y-5 sm:space-y-6">
        <h2
          id="home-origin-heading"
          className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
        >
          {origin.opening}
        </h2>

        <p className="max-w-[70ch] text-lg leading-8 text-ink-muted">
          {origin.supporting}
        </p>

        <p className="max-w-[70ch] text-lg leading-8 text-ink-muted">
          {origin.belonging}
        </p>

        <HandwrittenNote tone="coral" className="block text-xl sm:text-2xl">
          {origin.transition}
        </HandwrittenNote>
      </div>

      <div className="grid gap-6 sm:gap-7 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.9fr)] lg:items-start lg:gap-10">
        <div className="space-y-4 sm:space-y-5">
          <h3 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            {origin.homeTitle}
          </h3>

          <div className="space-y-4">
            {origin.storyBeats.map((beat) => (
              <p
                key={beat.id}
                className="text-lg leading-relaxed text-ink-muted"
              >
                {beat.text}
              </p>
            ))}
          </div>

          <p className="text-lg leading-relaxed text-ink-muted">
            {origin.realization}
          </p>
        </div>

        <figure className="w-full max-w-xs shrink-0 lg:w-72 lg:justify-self-end">
          <div className="relative aspect-[4/5] w-full overflow-hidden border border-border bg-canvas-muted">
            <Image
              src={origin.image.src}
              alt={origin.image.alt}
              fill
              sizes="(max-width: 640px) 80vw, 18rem"
              className="object-cover object-[50%_20%]"
            />
          </div>
        </figure>
      </div>
    </section>
  );
}
