import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import {
  HandwrittenNote,
  MarginAnnotation,
  TapedPhoto,
} from "@/components/notebook";
import type { HomepageHero } from "@/content/homepage";
import { cn } from "@/lib/utils";

type HeroSectionProps = {
  hero: HomepageHero;
};

export function HeroSection({ hero }: HeroSectionProps) {
  return (
    <section
      aria-labelledby="home-hero-heading"
      className="grid items-end gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-16"
    >
      <div className="space-y-7">
        <div className="space-y-2">
          <p className="text-sm font-medium tracking-tight text-ink">
            AI Onward
          </p>
          <HandwrittenNote tone="ink" className="block text-xl">
            {hero.movementLine}
          </HandwrittenNote>
        </div>

        <div className="space-y-3">
          <h1
            id="home-hero-heading"
            className="max-w-[12ch] text-5xl font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl"
          >
            {hero.headline}
          </h1>
          <HandwrittenNote tone="coral" className="block text-2xl sm:text-3xl">
            {hero.annotation}
          </HandwrittenNote>
        </div>

        <p className="max-w-xl text-lg leading-relaxed text-ink-muted">
          {hero.supporting}
        </p>

        <div className="flex flex-wrap gap-3 pt-1">
          <Link
            href={hero.primaryCta.href}
            className={cn(buttonVariants({ size: "lg" }))}
          >
            {hero.primaryCta.label}
          </Link>
          <Link
            href={hero.secondaryCta.href}
            className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
          >
            {hero.secondaryCta.label}
          </Link>
        </div>
      </div>

      <div className="space-y-3 lg:pb-2">
        <MarginAnnotation withArrow className="mb-2 hidden lg:block">
          Field notes from workshops still unfolding.
        </MarginAnnotation>
        <TapedPhoto
          image={null}
          placeholderLabel="Workshop photo"
          className="max-w-none"
          sizes="(max-width: 1024px) 100vw, 38vw"
          priority
        />
      </div>
    </section>
  );
}
