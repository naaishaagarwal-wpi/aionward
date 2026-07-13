import {
  HandwrittenNote,
  SketchDivider,
} from "@/components/notebook";
import type { HomepageWhy } from "@/content/homepage";

type WhySectionProps = {
  why: HomepageWhy;
};

export function WhySection({ why }: WhySectionProps) {
  return (
    <section aria-labelledby="home-why-heading" className="space-y-10">
      <SketchDivider />

      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start lg:gap-16">
        <div className="space-y-4">
          <h2
            id="home-why-heading"
            className="text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            {why.title}
          </h2>
          <HandwrittenNote tone="green" className="block text-2xl">
            {why.annotation}
          </HandwrittenNote>
        </div>

        <div className="space-y-5">
          {why.paragraphs.map((paragraph, index) => (
            <p
              key={paragraph}
              className={
                index === 0
                  ? "text-xl leading-relaxed text-ink"
                  : "text-lg leading-relaxed text-ink-muted"
              }
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
