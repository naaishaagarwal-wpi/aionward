import Link from "next/link";

import { TapedPhoto } from "@/components/notebook";
import type { TeamMember } from "@/lib/types/content";
import { cn } from "@/lib/utils";

type TeamMemberCardProps = {
  member: TeamMember;
  className?: string;
};

export function TeamMemberCard({ member, className }: TeamMemberCardProps) {
  return (
    <article
      className={cn(
        "grid gap-5 border-b border-border py-8 sm:grid-cols-[minmax(0,10rem)_minmax(0,1fr)]",
        className
      )}
    >
      <TapedPhoto
        image={member.photo}
        placeholderLabel={member.name}
        className="max-w-[10rem]"
        sizes="10rem"
      />
      <div className="space-y-3">
        <div>
          <h3 className="text-xl font-semibold tracking-tight">{member.name}</h3>
          <p className="text-sm text-ink-muted">{member.role}</p>
        </div>
        {member.bio ? (
          <p className="leading-relaxed text-ink-muted">{member.bio}</p>
        ) : null}
        {member.linkedIn ? (
          <Link
            href={member.linkedIn}
            className="inline-block text-sm underline decoration-ink-faint underline-offset-4 hover:decoration-highlight-yellow"
          >
            LinkedIn
            <span className="sr-only"> for {member.name}</span>
          </Link>
        ) : null}
      </div>
    </article>
  );
}

type TeamListProps = {
  members: TeamMember[];
  title: string;
  headingId: string;
};

/** Renders nothing when there are no team members. */
export function TeamList({ members, title, headingId }: TeamListProps) {
  if (members.length === 0) return null;

  return (
    <section aria-labelledby={headingId} className="space-y-2">
      <h2
        id={headingId}
        className="text-3xl font-semibold tracking-tight sm:text-4xl"
      >
        {title}
      </h2>
      <ul>
        {members.map((member) => (
          <li key={member.id}>
            <TeamMemberCard member={member} />
          </li>
        ))}
      </ul>
    </section>
  );
}
