import { SketchDivider } from "@/components/notebook";
import type { GirlsApplyingAiPageContent } from "@/content/girls-applying-ai";

type StoryProps = {
  content: GirlsApplyingAiPageContent;
};

function SectionIntro({
  headingId,
  number,
  label,
  heading,
  headingClassName,
  children,
}: {
  headingId: string;
  number: string;
  label: string;
  heading: string;
  headingClassName?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-4">
      <p className="text-xs font-medium tracking-[0.16em] text-ink-muted uppercase">
        {number} — {label}
      </p>
      <h2
        id={headingId}
        className={
          headingClassName ??
          "text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
        }
      >
        {heading}
      </h2>
      {children}
    </div>
  );
}

export function ShareSection({ content }: StoryProps) {
  return (
    <section aria-labelledby="gaa-share" className="space-y-8">
      <SectionIntro
        headingId="gaa-share"
        number={content.share.number}
        label={content.share.label}
        heading={content.share.heading}
      >
        {content.share.intro.map((paragraph) => (
          <p key={paragraph} className="text-lg leading-relaxed text-ink-muted">
            {paragraph}
          </p>
        ))}
      </SectionIntro>
      <ul className="grid gap-5 sm:grid-cols-2 sm:gap-6">
        {content.share.cards.map((card, index) => (
          <li
            key={card.id}
            className={index === 2 ? "sm:col-span-2" : undefined}
          >
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

export function ConnectSection({ content }: StoryProps) {
  const [peers, events, fields] = content.connect.blocks;

  return (
    <section aria-labelledby="gaa-connect" className="space-y-8">
      <SketchDivider />
      <SectionIntro
        headingId="gaa-connect"
        number={content.connect.number}
        label={content.connect.label}
        heading={content.connect.heading}
      >
        <p className="text-lg leading-relaxed text-ink-muted">
          {content.connect.intro}
        </p>
      </SectionIntro>
      <div className="border border-border">
        <article className="border-b border-border px-6 py-7 sm:px-8 sm:py-8">
          <h3 className="text-2xl font-semibold tracking-tight">{peers.title}</h3>
          <p className="mt-3 text-base leading-relaxed text-ink-muted sm:text-lg sm:leading-relaxed">
            {peers.body}
          </p>
        </article>
        <div className="grid lg:grid-cols-2">
          <article className="border-b border-border px-6 py-7 sm:px-8 sm:py-8 lg:border-r lg:border-b-0">
            <h3 className="text-2xl font-semibold tracking-tight">
              {events.title}
            </h3>
            <p className="mt-3 text-base leading-relaxed text-ink-muted sm:text-lg sm:leading-relaxed">
              {events.body}
            </p>
          </article>
          <article className="px-6 py-7 sm:px-8 sm:py-8">
            <h3 className="text-2xl font-semibold tracking-tight">
              {fields.title}
            </h3>
            <p className="mt-3 text-base leading-relaxed text-ink-muted sm:text-lg sm:leading-relaxed">
              {fields.body}
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export function InspiredSection({ content }: StoryProps) {
  return (
    <section aria-labelledby="gaa-inspired" className="space-y-8">
      <SketchDivider />
      <SectionIntro
        headingId="gaa-inspired"
        number={content.inspired.number}
        label={content.inspired.label}
        heading={content.inspired.heading}
      >
        <p className="text-lg leading-relaxed text-ink-muted">
          {content.inspired.intro}
        </p>
      </SectionIntro>
      <ul className="divide-y divide-border border-y border-border">
        {content.inspired.blocks.map((block) => (
          <li key={block.id} className="py-7 sm:py-8">
            <h3 className="text-2xl font-semibold tracking-tight">{block.title}</h3>
            <p className="mt-3 text-base leading-relaxed text-ink-muted sm:text-lg sm:leading-relaxed">
              {block.body}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function TogetherSection({ content }: StoryProps) {
  return (
    <section aria-labelledby="gaa-together" className="space-y-8">
      <SectionIntro
        headingId="gaa-together"
        number={content.together.number}
        label={content.together.label}
        heading={content.together.heading}
        headingClassName="text-3xl font-semibold tracking-tight sm:text-[2rem]"
      >
        <p className="text-lg leading-relaxed text-ink-muted">
          {content.together.body}
        </p>
      </SectionIntro>
    </section>
  );
}
