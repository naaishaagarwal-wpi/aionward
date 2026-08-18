import { RequestWorkshopCta } from "@/components/sections/ai-for-seniors/request-workshop-cta";
import type { GirlsApplyingAiPageContent } from "@/content/girls-applying-ai";

type IdentityRailProps = {
  content: GirlsApplyingAiPageContent;
  requestHref: string;
};

function RailBlock({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <p className="text-xs font-medium tracking-[0.16em] text-ink-muted uppercase">
        {label}
      </p>
      <p className="text-base leading-relaxed text-ink sm:text-lg">{children}</p>
    </div>
  );
}

/**
 * Persistent program identity. Sticky on desktop; first in the flow on mobile.
 * Contains the page's only CTA.
 */
export function IdentityRail({ content, requestHref }: IdentityRailProps) {
  return (
    <aside className="border-b border-border pb-10 lg:sticky lg:top-24 lg:self-start lg:border-b-0 lg:border-r lg:pb-0 lg:pr-10 xl:pr-14">
      <div className="space-y-6 lg:space-y-7">
        <div className="space-y-4">
          <p className="text-xs font-medium tracking-[0.16em] text-ink-muted uppercase">
            {content.eyebrow}
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            {content.name}
          </h1>
          <p className="text-lg leading-snug text-ink sm:text-xl sm:leading-snug">
            {content.positioning}
          </p>
        </div>

        <RailBlock label={content.mission.label}>{content.mission.body}</RailBlock>
        <RailBlock label={content.audience.label}>
          {content.audience.body}
        </RailBlock>

        <RequestWorkshopCta href={requestHref} label={content.requestCtaLabel} />
      </div>
    </aside>
  );
}
