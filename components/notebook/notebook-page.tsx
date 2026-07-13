import { cn } from "@/lib/utils";

type NotebookPageProps = {
  children: React.ReactNode;
  className?: string;
  /**
   * Optional margin column content (desktop) — field observations, annotations.
   * Whitespace only; no ruled lines or binding visuals.
   */
  margin?: React.ReactNode;
};

/**
 * Editorial page canvas — white space, readable measure, generous rhythm.
 * "Notebook" is a metaphor for documentation and discovery, not school stationery.
 */
export function NotebookPage({
  children,
  className,
  margin,
}: NotebookPageProps) {
  return (
    <div
      className={cn(
        "relative mx-auto w-full max-w-6xl flex-1 px-5 py-10 sm:px-8 sm:py-14 lg:px-10",
        className
      )}
    >
      {margin ? (
        <div className="grid gap-8 lg:grid-cols-[minmax(0,11rem)_minmax(0,1fr)] lg:gap-12">
          <div className="hidden min-w-0 lg:block">{margin}</div>
          <div className="min-w-0">{children}</div>
        </div>
      ) : (
        children
      )}
    </div>
  );
}
