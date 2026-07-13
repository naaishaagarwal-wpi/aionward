import { cn } from "@/lib/utils";

type PaperSurfaceProps = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "article";
};

/**
 * Editorial content block on a white canvas.
 * Clean border and spacing — not a literal sheet of paper.
 */
export function PaperSurface({
  children,
  className,
  as: Comp = "div",
}: PaperSurfaceProps) {
  return (
    <Comp
      className={cn(
        "border border-border bg-canvas p-6 sm:p-8",
        className
      )}
    >
      {children}
    </Comp>
  );
}
