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
        "grid gap-5 py-8 sm:grid-cols-[minmax(0,11rem)_minmax(0,1fr)] sm:gap-8 sm:py-10",
        className
      )}
    >
      <TapedPhoto
        image={member.photo}
        placeholderLabel={member.name}
        className="max-w-[11rem]"
        sizes="11rem"
        aspectClassName="aspect-[3/4]"
        showCaption={false}
        imageClassName="object-top"
      />
      <div className="space-y-3">
        <div className="space-y-1">
          <h3 className="text-xl font-semibold tracking-tight">{member.name}</h3>
          <p className="text-sm text-ink-muted">{member.role}</p>
        </div>
        {member.bio ? (
          <p className="max-w-2xl text-sm leading-relaxed text-ink-muted sm:text-base">
            {member.bio}
          </p>
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
  /** Keep the section heading visible when no members are confirmed yet. */
  allowEmpty?: boolean;
};

/** Renders nothing when there are no team members, unless allowEmpty is set. */
export function TeamList({
  members,
  title,
  headingId,
  allowEmpty = false,
}: TeamListProps) {
  if (members.length === 0 && !allowEmpty) return null;

  return (
    <section aria-labelledby={headingId} className="space-y-2">
      <h2
        id={headingId}
        className="text-3xl font-semibold tracking-tight sm:text-4xl"
      >
        {title}
      </h2>
      {members.length > 0 ? (
        <ul>
          {members.map((member) => (
            <li
              key={member.id}
              className="border-b border-border last:border-b-0"
            >
              <TeamMemberCard member={member} />
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}
