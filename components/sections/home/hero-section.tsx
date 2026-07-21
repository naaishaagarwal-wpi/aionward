import Image from "next/image";
import Link from "next/link";

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
      className="grid gap-5 sm:gap-8 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:items-end lg:gap-16"
    >
      <div className="flex flex-col gap-5 sm:gap-6 lg:gap-8 lg:pb-1">
        <div className="space-y-3 sm:space-y-4">
          <p className="text-sm font-medium tracking-tight text-ink-muted">
            {hero.brand}
          </p>

          <h1
            id="home-hero-heading"
            className="max-w-[11ch] whitespace-pre-line text-[2.75rem] font-semibold leading-[1.02] tracking-tight text-balance sm:text-6xl sm:leading-[1.02] lg:text-7xl lg:leading-[1.0] xl:text-8xl"
          >
            {hero.headline}
          </h1>

          <HandwrittenNote
            tone="coral"
            className="block max-w-[20ch] text-xl leading-snug sm:max-w-[22ch] sm:text-2xl lg:text-[1.75rem]"
          >
            {hero.annotation}
          </HandwrittenNote>
        </div>

        <div>
          <Link
            href={hero.primaryCta.href}
            className={cn(buttonVariants({ size: "lg" }))}
          >
            {hero.primaryCta.label}
          </Link>
        </div>
      </div>

      <figure className="min-w-0">
        {/*
          Mobile: shorter frame so belief + CTA + interaction peek share the first viewport.
          Crop anchors on the Naaisha ↔ seniors exchange (left-center faces), not ceiling/floor.
        */}
        <div className="relative aspect-[3/2] overflow-hidden border border-border bg-canvas-muted sm:aspect-[4/3] lg:aspect-[5/6] lg:min-h-[30rem]">
          <Image
            src={hero.image.src}
            alt={hero.image.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 52vw"
            priority
            className="object-cover object-[32%_40%] sm:object-[34%_38%] lg:object-[30%_36%]"
          />
        </div>
      </figure>
    </section>
  );
}
