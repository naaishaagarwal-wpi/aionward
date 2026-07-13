import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import {
  HandwrittenNote,
  SketchDivider,
} from "@/components/notebook";
import type { HomepageContent } from "@/content/homepage";
import { cn } from "@/lib/utils";

type ClosingSectionProps = {
  closing: HomepageContent["closing"];
};

export function ClosingSection({ closing }: ClosingSectionProps) {
  return (
    <section
      aria-labelledby="home-closing-heading"
      className="space-y-10 pb-6"
    >
      <SketchDivider />

      <div className="mx-auto max-w-2xl space-y-6 text-center">
        <h2
          id="home-closing-heading"
          className="text-3xl font-semibold tracking-tight text-balance sm:text-5xl"
        >
          {closing.message}
        </h2>
        <HandwrittenNote
          tone="coral"
          className="block text-2xl sm:text-3xl"
        >
          {closing.invitation}
        </HandwrittenNote>
        <div className="pt-1">
          <Link
            href={closing.cta.href}
            className={cn(buttonVariants({ size: "lg" }))}
          >
            {closing.cta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
