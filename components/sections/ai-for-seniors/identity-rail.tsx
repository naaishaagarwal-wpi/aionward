import { RequestWorkshopCta } from "@/components/sections/ai-for-seniors/request-workshop-cta";
import type { AiForSeniorsPageContent } from "@/content/ai-for-seniors";

type IdentityRailProps = {
  content: AiForSeniorsPageContent;
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
      <p className="text-[0.7rem] font-medium tracking-[0.16em] text-ink-muted uppercase">
        {label}
      </p>
      <p className="text-sm leading-relaxed text-ink">{children}</p>
    </div>
  );
}

/**
 * Program identity — sticky on desktop, first in the vertical flow on mobile.
 */
export function IdentityRail({ content, requestHref }: IdentityRailProps) {
  return (
    <aside className="border-b border-border pb-10 lg:sticky lg:top-24 lg:max-h-[calc(100vh-6.5rem)] lg:overflow-y-auto lg:border-b-0 lg:border-r lg:pb-4 lg:pr-8">
      <div className="space-y-8">
        <div className="space-y-3">
          <p className="text-[0.7rem] font-medium tracking-[0.16em] text-ink-muted uppercase">
            Program
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            {content.name}
          </h1>
          <p className="text-base leading-snug text-ink">
            {content.positioning}
          </p>
        </div>

        <RailBlock label={content.railWhy.label}>{content.railWhy.body}</RailBlock>
        <RailBlock label={content.mission.label}>{content.mission.body}</RailBlock>
        <RailBlock label={content.vision.label}>{content.vision.body}</RailBlock>

        <RequestWorkshopCta href={requestHref} label={content.requestCtaLabel} />
      </div>
    </aside>
  );
}
