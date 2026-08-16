import type { Metadata } from "next";

import { ContactChannels } from "@/components/content";
import {
  HandwrittenNote,
  NotebookPage,
  SketchDivider,
  StickyNote,
} from "@/components/notebook";
import { getSiteSettings } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach AI Onward for workshops, volunteering, partnerships, media, or general inquiries.",
};

export default async function ContactPage() {
  const site = await getSiteSettings();

  return (
    <NotebookPage>
      <div className="space-y-16 sm:space-y-20">
        <header className="max-w-2xl space-y-4">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Contact AI Onward
          </h1>
          <HandwrittenNote tone="coral" className="block text-2xl">
            Tell us how you want to get involved.
          </HandwrittenNote>
          <p className="text-lg leading-relaxed text-ink-muted">
            Whether you want to host a workshop, volunteer, partner with us, or
            share a media inquiry — we want to hear from you.
          </p>
        </header>

        <section aria-labelledby="contact-topics" className="space-y-8">
          <SketchDivider label="paths" />
          <h2
            id="contact-topics"
            className="text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            How can we help?
          </h2>
          <ContactChannels channels={site.contactChannels} />
          <StickyNote className="max-w-xl">
            <h2
              id="contact-disclaimer"
              className="mb-1.5 text-xs font-medium tracking-[0.14em] text-ink-muted uppercase"
            >
              Disclaimer
            </h2>
            <p className="text-sm leading-relaxed text-ink-muted">
              When you use one of our forms, Google Forms collects the
              information you submit so we can respond to your inquiry.
            </p>
          </StickyNote>
        </section>
      </div>
    </NotebookPage>
  );
}
