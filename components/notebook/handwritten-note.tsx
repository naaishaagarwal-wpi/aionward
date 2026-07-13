import { cn } from "@/lib/utils";

type HandwrittenNoteProps = {
  children: React.ReactNode;
  className?: string;
  as?: "span" | "p" | "em";
  /** Accent color for the ink */
  tone?: "ink" | "coral" | "sky" | "green" | "purple";
};

const toneClasses = {
  ink: "text-ink",
  coral: "text-accent-coral",
  sky: "text-accent-sky",
  green: "text-accent-green",
  purple: "text-accent-purple",
} as const;

/**
 * Marker / handwriting accent next to clean typography.
 * Example: headline "AI belongs to everyone." + note "Yes, everyone."
 */
export function HandwrittenNote({
  children,
  className,
  as: Comp = "span",
  tone = "coral",
}: HandwrittenNoteProps) {
  return (
    <Comp
      className={cn(
        "font-hand text-[1.15em] leading-snug tracking-wide",
        toneClasses[tone],
        className
      )}
    >
      {children}
    </Comp>
  );
}
