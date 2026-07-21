import type { Metadata } from "next";

import { NotebookPage } from "@/components/notebook";
import {
  HeroSection,
  MomentsSection,
  OriginSection,
  PlaceSection,
} from "@/components/sections/home";
import { getHomepageContent } from "@/lib/content";

export const metadata: Metadata = {
  title: {
    absolute: "AI Onward",
  },
  description:
    "A youth-led community where students, girls, seniors, and curious minds explore AI together.",
};

/**
 * Homepage — four-beat movement landing:
 * belief → why it exists → proof → invitation.
 * Older section components remain available for dedicated pages.
 */
export default async function Home() {
  const home = await getHomepageContent();

  return (
    <NotebookPage>
      <div className="space-y-20 sm:space-y-24">
        <HeroSection hero={home.hero} />
        <OriginSection origin={home.origin} />
        <MomentsSection moments={home.moments} />
        <PlaceSection place={home.place} />
      </div>
    </NotebookPage>
  );
}
