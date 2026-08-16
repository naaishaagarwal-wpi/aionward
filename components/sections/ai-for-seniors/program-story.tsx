import { SketchDivider } from "@/components/notebook";
import type { AiForSeniorsPageContent } from "@/content/ai-for-seniors";

type StoryProps = {
  content: AiForSeniorsPageContent;
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

export function UseCaseGrid({ content }: StoryProps) {
  return (
    <section aria-labelledby="afs-use-cases" className="space-y-8">
      <div className="space-y-4">
        <h2
          id="afs-use-cases"
          className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
        >
          {content.useCases.heading}
        </h2>
        <p className="text-lg leading-relaxed text-ink-muted">
          {content.useCases.support}
        </p>
      </div>
      <ul className="grid gap-5 sm:grid-cols-2 sm:gap-6">
        {content.useCases.cards.map((card) => (
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

export function WorkshopFlow({ content }: StoryProps) {
  return (
    <section aria-labelledby="afs-workshop" className="space-y-8">
      <SketchDivider />
      <div className="space-y-4">
        <h2
          id="afs-workshop"
          className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
        >
          {content.workshop.heading}
        </h2>
        <p className="text-lg leading-relaxed text-ink-muted">
          {content.workshop.support}
        </p>
      </div>
      <ol className="flex flex-col border border-border lg:flex-row lg:items-stretch">
        {content.workshop.steps.map((step, index) => {
          const isLast = index === content.workshop.steps.length - 1;

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

export function AudienceSection({ content }: StoryProps) {
  return (
    <section aria-labelledby="afs-audiences" className="space-y-8">
      <SketchDivider />
      <h2
        id="afs-audiences"
        className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
      >
        {content.audiences.heading}
      </h2>
      <ul className="grid gap-5 lg:grid-cols-2 lg:gap-6">
        {content.audiences.cards.map((card) => (
          <li key={card.id}>
            <article className="flex h-full flex-col border border-border bg-canvas p-7 sm:p-9">
              <h3 className="text-2xl font-semibold tracking-tight">
                {card.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg sm:leading-relaxed">
                {card.body}
              </p>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
