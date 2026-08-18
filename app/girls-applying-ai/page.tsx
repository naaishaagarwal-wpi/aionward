import type { Metadata } from "next";

import { NotebookPage } from "@/components/notebook";
import { IdentityRail } from "@/components/sections/girls-applying-ai/identity-rail";
import {
  ConnectSection,
  InspiredSection,
  ShareSection,
  TogetherSection,
} from "@/components/sections/girls-applying-ai/program-story";
import {
  getGirlsApplyingAiPageContent,
  getSiteSettings,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Girls Applying AI",
  description:
    "Bringing together young women who are already applying AI to share, connect, and learn from one another.",
};

export default async function GirlsApplyingAiPage() {
  const [content, site] = await Promise.all([
    getGirlsApplyingAiPageContent(),
    getSiteSettings(),
  ]);
  const requestHref = site.forms.join;

  return (
    <NotebookPage>
      <div className="lg:grid lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:items-start lg:gap-12 xl:gap-16">
        <IdentityRail content={content} requestHref={requestHref} />
        <div className="mt-12 space-y-16 sm:space-y-20 lg:mt-0">
          <ShareSection content={content} />
          <ConnectSection content={content} />
          <InspiredSection content={content} />
          <TogetherSection content={content} />
        </div>
      </div>
    </NotebookPage>
  );
}
