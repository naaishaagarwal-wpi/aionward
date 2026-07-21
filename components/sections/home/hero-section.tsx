import Image from "next/image";

import { HandwrittenNote } from "@/components/notebook";
import { buttonVariants } from "@/components/ui/button";
import type { HomepageHero } from "@/content/homepage";
import { cn } from "@/lib/utils";

type HeroSectionProps = {
  hero: HomepageHero;
};

/**
 * Homepage cover — magazine on desktop, story opening on mobile.
 * Minimal copy, one CTA, one documentary image.
 */
export function HeroSection({ hero }: HeroSectionProps) {
  return (
    <section
      aria-labelledby="home-hero-heading"
      className="grid gap-6 sm:gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center lg:gap-12"
    >
      <div className="flex flex-col gap-5 sm:gap-6">
        <div className="space-y-4 sm:space-y-5">
          <h1
            id="home-hero-heading"
            className="max-w-xl whitespace-pre-line text-4xl font-semibold leading-[1.08] tracking-tight text-balance sm:max-w-2xl sm:text-5xl sm:leading-[1.06] lg:text-6xl lg:leading-[1.05] xl:text-7xl"
          >
            {hero.headline}
          </h1>

          <HandwrittenNote
            tone="coral"
            className="block max-w-md text-xl leading-snug sm:max-w-lg sm:text-2xl"
          >
            {hero.annotation}
          </HandwrittenNote>
        </div>

        <div>
          <a
            href={hero.primaryCta.href}
            className={cn(buttonVariants({ size: "lg" }))}
          >
            {hero.primaryCta.label}
          </a>
        </div>
      </div>

      <figure className="w-full shrink-0 lg:w-md lg:justify-self-start">
        {/*
          Mobile: shorter frame so belief + CTA + interaction peek share the first viewport.
          Crop anchors on the Naaisha ↔ seniors exchange (left-center faces), not ceiling/floor.
          Explicit w-full / lg:w-md + aspect-* gives fill a stable box at first paint.
        */}
        <div className="relative aspect-[3/2] w-full overflow-hidden border border-border bg-canvas-muted sm:aspect-[4/3] lg:aspect-[4/5]">
          <Image
            src={hero.image.src}
            alt={hero.image.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 28rem"
            priority
            className="object-cover object-[32%_40%] sm:object-[34%_38%] lg:object-[30%_36%]"
          />
        </div>
      </figure>
    </section>
  );
}
