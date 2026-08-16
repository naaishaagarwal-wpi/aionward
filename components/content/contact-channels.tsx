import { ContentLink } from "@/components/content/content-link";
import { buttonVariants } from "@/components/ui/button";
import type { ContactChannel } from "@/lib/types/content";
import { cn, emailFromMailto, isMailtoHref } from "@/lib/utils";

type ContactChannelsProps = {
  channels: ContactChannel[];
};

function ChannelAction({ channel }: { channel: ContactChannel }) {
  if (isMailtoHref(channel.href)) {
    const email = emailFromMailto(channel.href);
    return (
      <ContentLink
        href={channel.href}
        className="inline-block text-sm font-medium underline decoration-ink-faint underline-offset-4 hover:decoration-highlight-yellow"
      >
        {email}
      </ContentLink>
    );
  }

  return (
    <ContentLink
      href={channel.href}
      className={cn(buttonVariants({ size: "lg" }), "mt-1")}
    >
      {channel.actionLabel ?? channel.label}
    </ContentLink>
  );
}

export function ContactChannels({ channels }: ContactChannelsProps) {
  return (
    <ul className="divide-y divide-border border-y border-border">
      {channels.map((channel) => (
        <li
          key={channel.id}
          className="grid gap-3 py-6 sm:grid-cols-[minmax(0,14rem)_minmax(0,1fr)] sm:items-start sm:gap-8 sm:py-8"
        >
          <h3 className="font-semibold tracking-tight text-ink">
            {channel.label}
          </h3>
          <div className="space-y-4">
            <p className="text-ink-muted">{channel.description}</p>
            <ChannelAction channel={channel} />
          </div>
        </li>
      ))}
    </ul>
  );
}
