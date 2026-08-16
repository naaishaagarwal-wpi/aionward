import type { Metadata } from "next";

import { NotebookPage } from "@/components/notebook";
import { IdentityRail } from "@/components/sections/ai-for-seniors/identity-rail";
import {
  BelongingSection,
  ClosingSection,
  OrganizationsSection,
  OriginSection,
  ProgramIntro,
  UseCaseGrid,
  WorkshopFlow,
} from "@/components/sections/ai-for-seniors/program-story";
import {
  getAiForSeniorsPageContent,
  getSiteSettings,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "AI For Seniors",
  description:
    "Helping older adults use AI for the things that matter in their everyday life — through hands-on workshops. No technical background required.",
};

export default async function AiForSeniorsPage() {
  const [content, site] = await Promise.all([
    getAiForSeniorsPageContent(),
    getSiteSettings(),
  ]);
  const requestHref = site.forms.workshops;
  const contactEmail = site.emails.general;

  return (
    <NotebookPage>
      <div className="lg:grid lg:grid-cols-[minmax(16.5rem,19.5rem)_minmax(0,1fr)] lg:items-start lg:gap-12 xl:gap-16">
        <IdentityRail content={content} requestHref={requestHref} />
        <div className="mt-12 space-y-16 sm:space-y-20 lg:mt-0">
          <ProgramIntro content={content} />
          <OriginSection content={content} />
          <UseCaseGrid content={content} />
          <WorkshopFlow content={content} />
          <BelongingSection content={content} />
          <OrganizationsSection content={content} requestHref={requestHref} />
          <ClosingSection
            content={content}
            requestHref={requestHref}
            contactEmail={contactEmail}
          />
        </div>
      </div>
    </NotebookPage>
  );
}
