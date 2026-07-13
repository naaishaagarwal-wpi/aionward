import { cn } from "@/lib/utils";

type StickyNoteProps = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "aside" | "li";
};

/**
 * Editorial aside / field observation callout.
 * A highlight stroke and ink border — not a literal sticky note.
 */
export function StickyNote({
  children,
  className,
  as: Comp = "aside",
}: StickyNoteProps) {
  return (
    <Comp
      className={cn(
        "relative max-w-sm border-l-2 border-ink bg-canvas px-4 py-3",
        "before:absolute before:top-0 before:left-0 before:h-[3px] before:w-12 before:bg-highlight-yellow",
        className
      )}
    >
      {children}
    </Comp>
  );
}
