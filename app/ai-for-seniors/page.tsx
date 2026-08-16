import type { Metadata } from "next";

import { NotebookPage } from "@/components/notebook";
import { IdentityRail } from "@/components/sections/ai-for-seniors/identity-rail";
import {
  AudienceSection,
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
    "Helping older adults use AI for the things that matter in THEIR everyday life.",
};

export default async function AiForSeniorsPage() {
  const [content, site] = await Promise.all([
    getAiForSeniorsPageContent(),
    getSiteSettings(),
  ]);
  const requestHref = site.forms.workshops;

  return (
    <NotebookPage>
      <div className="lg:grid lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:items-start lg:gap-12 xl:gap-16">
        <IdentityRail content={content} requestHref={requestHref} />
        <div className="mt-12 space-y-16 sm:space-y-20 lg:mt-0">
          <UseCaseGrid content={content} />
          <WorkshopFlow content={content} />
          <AudienceSection content={content} />
        </div>
      </div>
    </NotebookPage>
  );
}
