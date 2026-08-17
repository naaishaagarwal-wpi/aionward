import { SketchDivider } from "@/components/notebook";
import type { AiVisionariesPageContent } from "@/content/ai-visionaries";

type StoryProps = {
  content: AiVisionariesPageContent;
};

function ProcessArrow({ orientation }: { orientation: "right" | "down" }) {
  const isDown = orientation === "down";

  return (
    <span
      aria-hidden="true"
      className={
        isDown
          ? "flex items-center justify-center py-2 text-ink-faint"
          : "flex items-center px-1 text-ink-faint xl:px-2"
      }
    >
      <svg
        className={isDown ? "h-6 w-6" : "h-5 w-8"}
        fill="none"
        viewBox={isDown ? "0 0 24 24" : "0 0 32 20"}
      >
        {isDown ? (
          <path
            d="M12 3v15M5 12l7 7 7-7"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        ) : (
          <path
            d="M2 10h24M19 4l7 6-7 6"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        )}
      </svg>
    </span>
  );
}

function SectionIntro({
  headingId,
  heading,
  supportHeading,
  support,
}: {
  headingId: string;
  heading: string;
  supportHeading: string;
  support: string;
}) {
  return (
    <div className="space-y-4">
      <h2
        id={headingId}
        className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
      >
        {heading}
      </h2>
      <p className="text-xl font-medium leading-snug text-ink sm:text-2xl sm:leading-snug">
        {supportHeading}
      </p>
      <p className="text-lg leading-relaxed text-ink-muted">{support}</p>
    </div>
  );
}

export function LearnSection({ content }: StoryProps) {
  return (
    <section aria-labelledby="aiv-learn" className="space-y-8">
      <SectionIntro
        headingId="aiv-learn"
        heading={content.learn.heading}
        supportHeading={content.learn.supportHeading}
        support={content.learn.support}
      />
      <ul className="grid gap-5 sm:grid-cols-2 sm:gap-6">
        {content.learn.cards.map((card) => (
          <li key={card.id}>
            <article className="flex h-full flex-col border border-border bg-canvas p-6 sm:p-8">
              <span
                aria-hidden="true"
                className="text-xs font-medium tracking-[0.16em] text-ink-muted"
              >
                {card.number}
              </span>
              <h3 className="mt-5 text-2xl font-semibold tracking-tight">
                {card.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-ink-muted sm:text-[1.05rem] sm:leading-relaxed">
                {card.body}
              </p>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function NetworkSection({ content }: StoryProps) {
  const [students, experts, community] = content.network.nodes;

  return (
    <section aria-labelledby="aiv-network" className="space-y-8">
      <SketchDivider />
      <SectionIntro
        headingId="aiv-network"
        heading={content.network.heading}
        supportHeading={content.network.supportHeading}
        support={content.network.support}
      />
      <div className="border border-border">
        <article className="border-b border-border px-6 py-7 sm:px-8 sm:py-8">
          <h3 className="text-2xl font-semibold tracking-tight">
            {students.title}
          </h3>
          <p className="mt-3 text-base leading-relaxed text-ink-muted sm:text-lg sm:leading-relaxed">
            {students.body}
          </p>
        </article>
        <div className="grid lg:grid-cols-2">
          <article className="border-b border-border px-6 py-7 sm:px-8 sm:py-8 lg:border-r lg:border-b-0">
            <h3 className="text-2xl font-semibold tracking-tight">
              {experts.title}
            </h3>
            <p className="mt-3 text-base leading-relaxed text-ink-muted sm:text-lg sm:leading-relaxed">
              {experts.body}
            </p>
          </article>
          <article className="px-6 py-7 sm:px-8 sm:py-8">
            <h3 className="text-2xl font-semibold tracking-tight">
              {community.title}
            </h3>
            <p className="mt-3 text-base leading-relaxed text-ink-muted sm:text-lg sm:leading-relaxed">
              {community.body}
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export function CompeteSection({ content }: StoryProps) {
  return (
    <section aria-labelledby="aiv-compete" className="space-y-8">
      <SketchDivider />
      <SectionIntro
        headingId="aiv-compete"
        heading={content.compete.heading}
        supportHeading={content.compete.supportHeading}
        support={content.compete.support}
      />
      <ol className="flex flex-col border border-border lg:flex-row lg:items-stretch">
        {content.compete.steps.map((step, index) => {
          const isLast = index === content.compete.steps.length - 1;

          return (
            <li
              key={step.id}
              className="flex flex-1 flex-col lg:flex-row lg:items-stretch"
            >
              <div className="flex flex-1 flex-col px-6 py-7 sm:px-8 sm:py-8">
                <p className="text-xs font-medium tracking-[0.16em] text-ink-muted">
                  {step.number}
                </p>
                <p className="mt-3 text-2xl font-semibold tracking-tight uppercase">
                  {step.title}
                </p>
                <p className="mt-3 text-base leading-relaxed text-ink-muted">
                  {step.body}
                </p>
              </div>
              {isLast ? null : (
                <>
                  <div className="lg:hidden">
                    <ProcessArrow orientation="down" />
                  </div>
                  <div className="hidden lg:flex">
                    <ProcessArrow orientation="right" />
                  </div>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </section>
  );
}

export function ClosingSection({ content }: StoryProps) {
  return (
    <section aria-labelledby="aiv-closing" className="space-y-8">
      <SketchDivider />
      <div className="space-y-4">
        <h2
          id="aiv-closing"
          className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
        >
          {content.closing.heading}
        </h2>
        <p className="text-lg leading-relaxed text-ink-muted">
          {content.closing.support}
        </p>
      </div>
      <p className="text-4xl font-semibold tracking-tight whitespace-pre-line text-ink sm:text-5xl sm:leading-[1.15]">
        {content.closing.statement}
      </p>
    </section>
  );
}
