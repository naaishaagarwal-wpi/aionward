import type { Metadata } from "next";

import { ContactForm } from "@/components/content";
import {
  HandwrittenNote,
  NotebookPage,
  SketchDivider,
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
            Contact
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
          <SketchDivider label="topics" />
          <h2
            id="contact-topics"
            className="text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            How can we help?
          </h2>
          <ul className="divide-y divide-border border-y border-border">
            {site.contactChannels.map((channel) => (
              <li
                key={channel.id}
                className="grid gap-2 py-5 sm:grid-cols-[minmax(0,14rem)_minmax(0,1fr)] sm:gap-8"
              >
                <p className="font-semibold tracking-tight text-ink">
                  {channel.label}
                </p>
                <p className="text-ink-muted">{channel.description}</p>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="contact-form-heading" className="space-y-8">
          <SketchDivider label="message" />
          <h2
            id="contact-form-heading"
            className="text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Send a message
          </h2>
          <ContactForm
            channels={site.contactChannels}
            contactEmail={site.contactEmail}
          />
        </section>
      </div>
    </NotebookPage>
  );
}
