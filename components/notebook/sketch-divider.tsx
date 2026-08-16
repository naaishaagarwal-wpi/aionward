import { cn } from "@/lib/utils";

type SketchDividerProps = {
  className?: string;
  /** Optional label in the middle of the line */
  label?: string;
};

/**
 * Straight section break — a simple ink-colored rule.
 * Labeled dividers expose an accessible name; unlabeled ones are decorative.
 */
export function SketchDivider({ className, label }: SketchDividerProps) {
  if (!label) {
    return (
      <div aria-hidden="true" className={cn("py-2", className)}>
        <div className="h-px w-full bg-border" />
      </div>
    );
  }

  return (
    <div
      role="separator"
      aria-label={label}
      className={cn("flex items-center gap-4 py-2", className)}
    >
      <div className="h-px min-w-0 flex-1 bg-border" />
      <span
        aria-hidden="true"
        className="font-hand shrink-0 text-sm text-ink-muted"
      >
        {label}
      </span>
      <div className="h-px min-w-0 flex-1 bg-border" />
    </div>
  );
}
