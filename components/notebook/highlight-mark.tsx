import { cn } from "@/lib/utils";

type HighlightMarkProps = {
  children: React.ReactNode;
  className?: string;
  tone?: "yellow" | "coral" | "sky" | "green";
};

const toneClasses = {
  yellow: "bg-highlight-yellow/70",
  coral: "bg-accent-coral/25",
  sky: "bg-accent-sky/30",
  green: "bg-accent-green/25",
} as const;

/**
 * Marker highlight behind text — small moments of energy, not large blocks.
 */
export function HighlightMark({
  children,
  className,
  tone = "yellow",
}: HighlightMarkProps) {
  return (
    <mark
      className={cn(
        "box-decoration-clone rounded-[0.1em] px-[0.15em] py-[0.05em] text-inherit [-webkit-box-decoration-break:clone]",
        toneClasses[tone],
        className
      )}
    >
      {children}
    </mark>
  );
}
