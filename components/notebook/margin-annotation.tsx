import { cn } from "@/lib/utils";

type MarginAnnotationProps = {
  children: React.ReactNode;
  className?: string;
  /** Small arrow cue toward content */
  withArrow?: boolean;
};

/**
 * Field-note annotation — meant for margins or offset asides.
 */
export function MarginAnnotation({
  children,
  className,
  withArrow = false,
}: MarginAnnotationProps) {
  return (
    <aside
      className={cn(
        "relative max-w-[14rem] font-hand text-base leading-relaxed text-ink-muted",
        className
      )}
    >
      {withArrow ? (
        <svg
          aria-hidden="true"
          className="mb-1 h-5 w-10 text-ink-faint"
          fill="none"
          viewBox="0 0 40 20"
        >
          <path
            d="M2 14c8-10 20-12 34-8"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="1.25"
          />
          <path
            d="M30 4l6 2-3 5"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.25"
          />
        </svg>
      ) : null}
      {children}
    </aside>
  );
}
