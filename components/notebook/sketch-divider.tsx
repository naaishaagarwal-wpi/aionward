import { cn } from "@/lib/utils";

type SketchDividerProps = {
  className?: string;
  /** Decorative label in the middle of the line */
  label?: string;
};

/**
 * Hand-drawn section break — imperfect charcoal stroke, not a hairline HR.
 * Labeled dividers expose an accessible name; unlabeled ones are decorative.
 */
export function SketchDivider({ className, label }: SketchDividerProps) {
  if (!label) {
    return (
      <div
        aria-hidden="true"
        className={cn("flex items-center gap-4 py-2", className)}
      >
        <DividerStroke />
        <DividerStroke mirrored />
      </div>
    );
  }

  return (
    <div
      role="separator"
      aria-label={label}
      className={cn("flex items-center gap-4 py-2", className)}
    >
      <DividerStroke />
      <span aria-hidden="true" className="font-hand shrink-0 text-sm text-ink-muted">
        {label}
      </span>
      <DividerStroke mirrored />
    </div>
  );
}

function DividerStroke({ mirrored = false }: { mirrored?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className="h-3 flex-1 text-ink-faint"
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 200 12"
    >
      <path
        d={
          mirrored
            ? "M1 5c22 4 38-3 58 1s42 3 62-2 40 4 58 2"
            : "M1 7c20-4 40 3 60-1s40-3 60 2 40-4 58-2"
        }
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}
