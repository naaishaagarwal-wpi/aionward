import type { Metadata } from "next";

import { NotebookPage } from "@/components/notebook";
import {
  ClosingSection,
  FeaturedWorkshopsSection,
  GetInvolvedSection,
  HeroSection,
  ImpactSection,
  OriginSection,
  ProgramsSection,
  WhySection,
} from "@/components/sections/home";
import {
  getFeaturedWorkshops,
  getHomepageContent,
  getPrograms,
  getSiteSettings,
} from "@/lib/content";

export const metadata: Metadata = {
  title: {
    absolute: "AI Onward",
  },
  description:
    "A youth-led community where students, girls, seniors, and curious minds explore AI together.",
};

/**
 * Homepage — story first.
 * Impact and featured workshops render only when authentic data exists.
 */
export default async function Home() {
  const [home, programs, site, featuredWorkshops] = await Promise.all([
    getHomepageContent(),
    getPrograms(),
    getSiteSettings(),
    getFeaturedWorkshops(),
  ]);

  return (
    <NotebookPage>
      <div className="space-y-24 sm:space-y-28">
        <HeroSection hero={home.hero} />
        <OriginSection origin={home.origin} />
        <ProgramsSection
          title={home.programsTitle}
          annotation={home.programsAnnotation}
          programs={programs}
        />
        <WhySection why={home.why} />
        <ImpactSection stats={site.impactStats} />
        <FeaturedWorkshopsSection workshops={featuredWorkshops} />
        <GetInvolvedSection getInvolved={home.getInvolved} />
        <ClosingSection closing={home.closing} />
      </div>
    </NotebookPage>
  );
}
