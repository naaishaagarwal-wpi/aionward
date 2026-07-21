import Image from "next/image";

import { HighlightMark } from "@/components/notebook";
import type { HomepageMoments } from "@/content/homepage";

type MomentsSectionProps = {
  moments: HomepageMoments;
};

/**
 * Documentary proof the movement is already happening.
 * One dominant frame, two supporting — editorial, not a gallery grid.
 */
export function MomentsSection({ moments }: MomentsSectionProps) {
  return (
    <section aria-labelledby="home-moments-heading" className="space-y-10 sm:space-y-12">
      <div className="max-w-2xl space-y-4 sm:space-y-5">
        <h2
          id="home-moments-heading"
          className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl"
        >
          {moments.title}
        </h2>
        <div className="space-y-2 text-lg leading-snug text-ink-muted sm:text-xl sm:leading-snug">
          <p>{moments.lead}</p>
          <p>
            {moments.bridge}{" "}
            <HighlightMark className="text-ink font-medium">
              {moments.realization}
            </HighlightMark>
          </p>
        </div>
      </div>

      <figure className="min-w-0 space-y-2">
        <div className="relative aspect-[16/10] overflow-hidden border border-border bg-canvas-muted sm:aspect-[2/1]">
          <Image
            src={moments.dominant.image.src}
            alt={moments.dominant.image.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 72rem"
            className="object-cover object-[62%_40%] sm:object-[58%_42%]"
          />
        </div>
        <figcaption className="text-sm text-ink-muted">
          {moments.dominant.caption}
        </figcaption>
      </figure>

      <ul className="grid gap-8 sm:grid-cols-2 sm:gap-6 lg:gap-8">
        {moments.supporting.map((moment) => (
          <li key={moment.image.src}>
            <figure className="space-y-2">
              <div className="relative aspect-[4/3] overflow-hidden border border-border bg-canvas-muted">
                <Image
                  src={moment.image.src}
                  alt={moment.image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 36vw"
                  className="object-cover object-center"
                />
              </div>
              <figcaption className="text-sm text-ink-muted">
                {moment.caption}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
}
