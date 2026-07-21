import Image from "next/image";

import { HandwrittenNote } from "@/components/notebook";
import type { HomepageOrigin } from "@/content/homepage";

type OriginSectionProps = {
  origin: HomepageOrigin;
};

/**
 * Why AI Onward needs to exist — belief, then the home it started from.
 * Magazine spread on desktop; story sequence on mobile.
 */
export function OriginSection({ origin }: OriginSectionProps) {
  return (
    <section
      aria-labelledby="home-origin-heading"
      className="space-y-12 sm:space-y-14"
    >
      <div className="max-w-3xl space-y-8 sm:space-y-10">
        <div className="space-y-4 sm:space-y-5">
          <h2
            id="home-origin-heading"
            className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl"
          >
            {origin.opening}
          </h2>
          <p className="max-w-xl text-lg leading-snug text-ink-muted sm:text-xl sm:leading-snug">
            {origin.supporting}
          </p>
        </div>

        <ul className="space-y-2 sm:space-y-3">
          {origin.exclusions.map((line) => (
            <li
              key={line}
              className="text-lg font-medium tracking-tight text-ink sm:text-xl"
            >
              {line}
            </li>
          ))}
        </ul>

        <p className="max-w-xl text-lg font-medium leading-snug tracking-tight text-ink sm:text-xl sm:leading-snug">
          {origin.belonging}
        </p>

        <HandwrittenNote tone="coral" className="block text-2xl sm:text-3xl">
          {origin.transition}
        </HandwrittenNote>
      </div>

      <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:gap-14">
        <div className="space-y-8 sm:space-y-10">
          <h3 className="text-2xl font-semibold tracking-tight text-balance sm:text-3xl lg:text-4xl">
            {origin.homeTitle}
          </h3>

          <ul className="max-w-md space-y-5 sm:space-y-6">
            {origin.storyBeats.map((beat) => (
              <li
                key={beat.id}
                className="text-lg leading-snug text-ink-muted sm:text-xl sm:leading-snug"
              >
                {beat.text}
              </li>
            ))}
          </ul>

          <p className="max-w-md text-lg font-medium leading-snug tracking-tight text-ink sm:text-xl">
            {origin.realization}
          </p>
        </div>

        <figure className="min-w-0">
          <div className="relative aspect-[3/4] overflow-hidden border border-border bg-canvas-muted sm:aspect-[4/5] lg:min-h-[26rem]">
            <Image
              src={origin.image.src}
              alt={origin.image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover object-[50%_20%]"
            />
          </div>
        </figure>
      </div>
    </section>
  );
}
