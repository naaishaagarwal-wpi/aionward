import {
  HandwrittenNote,
  HighlightMark,
  SketchDivider,
  TapedPhoto,
} from "@/components/notebook";
import { RequestWorkshopCta } from "@/components/sections/ai-for-seniors/request-workshop-cta";
import type { AiForSeniorsPageContent } from "@/content/ai-for-seniors";

type StoryProps = {
  content: AiForSeniorsPageContent;
  requestHref: string;
  contactEmail: string;
};

export function ProgramIntro({ content }: Pick<StoryProps, "content">) {
  const curiosity = "Just curiosity.";
  const lead = content.hero.reassurance.replace(` ${curiosity}`, "");

  return (
    <section aria-labelledby="afs-intro" className="space-y-6">
      <h2 id="afs-intro" className="sr-only">
        {content.positioning}
      </h2>
      <p className="text-xl leading-relaxed text-ink sm:text-2xl sm:leading-snug">
        {content.hero.support}
      </p>
      <p className="text-lg leading-relaxed text-ink-muted">
        {lead}{" "}
        <HighlightMark className="font-medium text-ink">{curiosity}</HighlightMark>
      </p>
      <HandwrittenNote tone="coral" className="block text-xl sm:text-2xl">
        {content.signature}
      </HandwrittenNote>
      <TapedPhoto
        image={content.hero.image}
        className="max-w-none"
        sizes="(max-width: 1024px) 100vw, 55vw"
        priority
        aspectClassName="aspect-[16/10] sm:aspect-[16/9]"
      />
    </section>
  );
}

export function OriginSection({ content }: Pick<StoryProps, "content">) {
  return (
    <section aria-labelledby="afs-why" className="space-y-6">
      <SketchDivider />
      <div className="space-y-3">
        <h2
          id="afs-why"
          className="text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          {content.origin.heading}
        </h2>
        <HandwrittenNote tone="coral" className="block text-2xl">
          {content.origin.annotation}
        </HandwrittenNote>
      </div>
      <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-10">
        <div className="space-y-4 text-lg leading-relaxed text-ink-muted">
          <p>{content.origin.began}</p>
          <p>{content.origin.story}</p>
          <p className="font-medium text-ink">{content.origin.audience}</p>
        </div>
        <TapedPhoto
          image={content.origin.image}
          className="mx-auto max-w-xs sm:max-w-sm lg:mx-0 lg:max-w-none"
          sizes="(max-width: 1024px) 80vw, 22vw"
          showCaption
          aspectClassName="aspect-[3/4]"
          imageClassName="object-cover object-[50%_15%]"
        />
      </div>
    </section>
  );
}

export function UseCaseGrid({ content }: Pick<StoryProps, "content">) {
  return (
    <section aria-labelledby="afs-use-cases" className="space-y-8">
      <SketchDivider />
      <div className="space-y-3">
        <h2
          id="afs-use-cases"
          className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
        >
          {content.useCases.heading}
        </h2>
        <p className="max-w-2xl text-lg leading-relaxed text-ink-muted">
          {content.useCases.support}
        </p>
      </div>
      <ul className="grid gap-4 sm:grid-cols-2 sm:gap-5">
        {content.useCases.cards.map((card) => (
          <li key={card.id}>
            <article className="flex h-full flex-col border border-border bg-canvas p-6 sm:p-7">
              <span
                aria-hidden="true"
                className="font-hand text-xl leading-none text-accent-coral"
              >
                {card.number}
              </span>
              <h3 className="mt-4 text-xl font-semibold tracking-tight">
                {card.title}
              </h3>
              <p className="mt-2 font-medium text-ink">{card.subheading}</p>
              <p className="mt-3 text-base leading-relaxed text-ink-muted">
                {card.body}
              </p>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function WorkshopFlow({ content }: Pick<StoryProps, "content">) {
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
          {content.workshop.body}
        </p>
      </div>
      <ol className="grid gap-0 border-y border-border md:grid-cols-3 md:divide-x md:divide-border">
        {content.workshop.steps.map((step) => (
          <li
            key={step.id}
            className="border-b border-border py-6 last:border-b-0 md:border-b-0 md:px-6 md:py-8 md:first:pl-0 md:last:pr-0"
          >
            <p className="font-hand text-3xl text-accent-coral">{step.number}</p>
            <p className="mt-3 text-xs font-medium tracking-[0.16em] text-ink uppercase">
              {step.title}
            </p>
            <p className="mt-2 text-base leading-relaxed text-ink-muted">
              {step.body}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function BelongingSection({ content }: Pick<StoryProps, "content">) {
  return (
    <section aria-labelledby="afs-belonging" className="space-y-8">
      <SketchDivider />
      <div className="space-y-4">
        <h2
          id="afs-belonging"
          className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
        >
          {content.belonging.heading}
        </h2>
        <p className="text-lg leading-relaxed text-ink-muted">
          {content.belonging.body}
        </p>
      </div>
      <ul className="grid gap-4 sm:grid-cols-3">
        {content.belonging.statements.map((statement) => (
          <li
            key={statement}
            className="border-l-2 border-highlight-yellow bg-canvas-muted/60 px-4 py-4"
          >
            <p className="font-hand text-xl leading-snug text-ink">{statement}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function OrganizationsSection({
  content,
  requestHref,
}: Omit<StoryProps, "contactEmail">) {
  return (
    <section aria-labelledby="afs-organizations" className="space-y-6">
      <SketchDivider />
      <h2
        id="afs-organizations"
        className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
      >
        {content.organizations.heading}
      </h2>
      <p className="text-lg leading-relaxed text-ink-muted">
        {content.organizations.body}
      </p>
      <div className="space-y-2 border border-border bg-canvas p-6 sm:p-8">
        <p className="text-xl font-semibold tracking-tight">
          {content.organizations.planning}
        </p>
        <p className="text-base leading-relaxed text-ink-muted">
          {content.organizations.tailor}
        </p>
        <div className="pt-4">
          <RequestWorkshopCta
            href={requestHref}
            label={content.requestCtaLabel}
          />
        </div>
      </div>
    </section>
  );
}

export function ClosingSection({
  content,
  requestHref,
  contactEmail,
}: StoryProps) {
  return (
    <section
      aria-labelledby="afs-closing"
      className="space-y-6 border-t border-ink pt-10 sm:pt-12"
    >
      <h2
        id="afs-closing"
        className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
      >
        {content.closing.heading}
      </h2>
      <p className="text-lg leading-relaxed text-ink-muted">
        {content.closing.body}
      </p>
      <RequestWorkshopCta href={requestHref} label={content.requestCtaLabel} />
      <p className="text-base text-ink-muted">
        {content.closing.questionPrompt}{" "}
        <a
          href={`mailto:${contactEmail}`}
          className="font-medium text-ink underline decoration-ink-faint underline-offset-4 hover:decoration-highlight-yellow"
        >
          {contactEmail}
        </a>
      </p>
    </section>
  );
}
