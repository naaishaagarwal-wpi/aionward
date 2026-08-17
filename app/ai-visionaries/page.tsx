import type { Metadata } from "next";

import { NotebookPage } from "@/components/notebook";
import { IdentityRail } from "@/components/sections/ai-visionaries/identity-rail";
import {
  ClosingSection,
  CompeteSection,
  LearnSection,
  NetworkSection,
} from "@/components/sections/ai-visionaries/program-story";
import {
  getAiVisionariesPageContent,
  getSiteSettings,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "AI Visionaries",
  description:
    "Helping students learn about AI, connect with people shaping it, and put their ideas to the test.",
};

export default async function AiVisionariesPage() {
  const [content, site] = await Promise.all([
    getAiVisionariesPageContent(),
    getSiteSettings(),
  ]);
  const requestHref = site.forms.join;

  return (
    <NotebookPage>
      <div className="lg:grid lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:items-start lg:gap-12 xl:gap-16">
        <IdentityRail content={content} requestHref={requestHref} />
        <div className="mt-12 space-y-16 sm:space-y-20 lg:mt-0">
          <LearnSection content={content} />
          <NetworkSection content={content} />
          <CompeteSection content={content} />
          <ClosingSection content={content} />
        </div>
      </div>
    </NotebookPage>
  );
}
