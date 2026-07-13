"use client";

import { useId, useState } from "react";

import { Button } from "@/components/ui/button";
import type { ContactChannel } from "@/lib/types/content";

type ContactFormProps = {
  channels: ContactChannel[];
  contactEmail: string | null;
};

/**
 * Contact form UI only — no backend.
 * If a contact email exists, submit opens a mailto draft.
 */
export function ContactForm({ channels, contactEmail }: ContactFormProps) {
  const formId = useId();
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const topic = String(data.get("topic") || "");
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");

    if (contactEmail) {
      const subject = encodeURIComponent(`AI Onward — ${topic || "Inquiry"}`);
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nTopic: ${topic}\n\n${message}`
      );
      window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
      return;
    }

    setSubmitted(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl space-y-6 border border-border p-6 sm:p-8"
      noValidate
    >
      <div className="space-y-2">
        <label htmlFor={`${formId}-topic`} className="block text-sm font-medium">
          Topic
        </label>
        <select
          id={`${formId}-topic`}
          name="topic"
          required
          className="w-full border border-border bg-canvas px-3 py-2 text-ink outline-none focus-visible:ring-2 focus-visible:ring-ring"
          defaultValue={channels[0]?.label ?? ""}
        >
          {channels.map((channel) => (
            <option key={channel.id} value={channel.label}>
              {channel.label}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor={`${formId}-name`} className="block text-sm font-medium">
          Name
        </label>
        <input
          id={`${formId}-name`}
          name="name"
          type="text"
          required
          autoComplete="name"
          className="w-full border border-border bg-canvas px-3 py-2 text-ink outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor={`${formId}-email`} className="block text-sm font-medium">
          Email
        </label>
        <input
          id={`${formId}-email`}
          name="email"
          type="email"
          required
          autoComplete="email"
          className="w-full border border-border bg-canvas px-3 py-2 text-ink outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor={`${formId}-message`}
          className="block text-sm font-medium"
        >
          Message
        </label>
        <textarea
          id={`${formId}-message`}
          name="message"
          required
          rows={6}
          className="w-full resize-y border border-border bg-canvas px-3 py-2 text-ink outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
      </div>

      <Button type="submit" size="lg">
        Send message
      </Button>

      {submitted && !contactEmail ? (
        <p className="text-sm text-ink-muted" role="status">
          Thanks — this form is ready for a contact email. Once an address is
          added in site settings, messages can open as an email draft.
        </p>
      ) : null}
    </form>
  );
}
