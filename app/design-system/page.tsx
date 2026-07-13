import type { Metadata } from "next";
import Link from "next/link";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  HandwrittenNote,
  HighlightMark,
  MarginAnnotation,
  NotebookPage,
  PaperSurface,
  SketchDivider,
  StickyNote,
  TapedPhoto,
} from "@/components/notebook";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Design System (Internal)",
  robots: { index: false, follow: false },
};

const accentSwatches = [
  { name: "Canvas", className: "bg-canvas border border-border" },
  { name: "Canvas muted", className: "bg-canvas-muted border border-border" },
  { name: "Ink", className: "bg-ink" },
  { name: "Ink muted", className: "bg-ink-muted" },
  { name: "Ink faint", className: "bg-ink-faint" },
  { name: "Highlight yellow", className: "bg-highlight-yellow" },
  { name: "Coral", className: "bg-accent-coral" },
  { name: "Sky", className: "bg-accent-sky" },
  { name: "Green", className: "bg-accent-green" },
  { name: "Purple", className: "bg-accent-purple" },
] as const;

function Section({
  id,
  title,
  description,
  children,
}: {
  id: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 space-y-6">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight text-ink">
          {title}
        </h2>
        <p className="mt-2 max-w-2xl text-ink-muted">{description}</p>
      </div>
      {children}
    </section>
  );
}

function SpecLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 text-xs font-medium tracking-[0.12em] text-ink-faint uppercase">
      {children}
    </p>
  );
}

/**
 * Internal-only visual review. Not linked in public navigation.
 * Uses doc-sourced headline copy only; no fabricated stories or stats.
 */
export default function DesignSystemPage() {
  return (
    <NotebookPage>
      <div className="space-y-14 pb-8">
        <header className="space-y-4 border-b border-border pb-8">
          <p className="text-xs font-medium tracking-[0.15em] text-ink-muted uppercase">
            Internal · Not in navigation
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            AI Onward design system
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-ink-muted">
            Editorial field notes on a white canvas — research journal, sketchbook,
            and publication. Not a literal school notebook.
          </p>
          <HandwrittenNote tone="ink" className="block text-2xl">
            Stories make it alive, not decoration.
          </HandwrittenNote>

          <PaperSurface className="mt-4 border-dashed">
            <SpecLabel>Visual principles</SpecLabel>
            <ul className="space-y-1 text-sm text-ink-muted">
              <li>White canvas · black ink · generous whitespace</li>
              <li>Handwritten annotations and margin observations — sparingly</li>
              <li>Subtle ink sketches for section rhythm</li>
              <li>Real documentary photography when available</li>
              <li>
                Avoid: spiral binding, ruled paper, scrapbook tape, parchment,
                vintage journal aesthetics
              </li>
            </ul>
          </PaperSurface>

          <nav aria-label="On this page" className="pt-2">
            <ul className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-ink-muted">
              {[
                ["notebook-page", "NotebookPage"],
                ["paper-surface", "PaperSurface"],
                ["handwritten", "HandwrittenNote"],
                ["margin", "MarginAnnotation"],
                ["divider", "SketchDivider"],
                ["highlight", "HighlightMark"],
                ["photo", "TapedPhoto"],
                ["sticky", "StickyNote"],
                ["buttons", "Buttons"],
                ["typography", "Typography"],
                ["colors", "Colors"],
              ].map(([id, label]) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className="underline decoration-ink-faint underline-offset-4 hover:text-ink hover:decoration-highlight-yellow"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        <Section
          id="notebook-page"
          title="NotebookPage"
          description="Editorial canvas for each route. White space, readable measure, optional margin column for field observations."
        >
          <PaperSurface>
            <SpecLabel>Default canvas</SpecLabel>
            <p className="text-ink-muted">
              This review lives inside{" "}
              <code className="bg-canvas-muted px-1.5 py-0.5 text-sm text-ink">
                NotebookPage
              </code>
              . Content breathes on a clean white canvas — like an editorial
              spread or research journal page.
            </p>
          </PaperSurface>

          <div className="border border-dashed border-ink-faint p-4">
            <SpecLabel>With margin column (desktop)</SpecLabel>
            <NotebookPage
              className="max-w-none px-0 py-0"
              margin={
                <MarginAnnotation withArrow className="pt-2">
                  Margin reserved for observations.
                </MarginAnnotation>
              }
            >
              <PaperSurface>
                <p className="text-ink-muted">
                  Main column for story and evidence. Margin holds journalist-style
                  asides — no ruled lines, no binding.
                </p>
              </PaperSurface>
            </NotebookPage>
          </div>
        </Section>

        <SketchDivider label="surfaces" />

        <Section
          id="paper-surface"
          title="PaperSurface"
          description="Editorial content blocks on white canvas. Clean border and spacing — not generic cards, not literal paper sheets."
        >
          <PaperSurface>
            <SpecLabel>Default block</SpecLabel>
            <p className="text-ink-muted">
              Use for grouped content sections. Flat, aligned, publication-ready.
            </p>
          </PaperSurface>
        </Section>

        <Section
          id="handwritten"
          title="HandwrittenNote"
          description="Caveat accents paired with Figtree headlines. Observation and emphasis — not body copy."
        >
          <PaperSurface>
            <div className="space-y-6">
              <div>
                <SpecLabel>Headline + annotation pattern</SpecLabel>
                <h3 className="text-3xl font-semibold tracking-tight">
                  AI belongs to everyone.
                </h3>
                <HandwrittenNote tone="coral" className="mt-2 block text-2xl">
                  Yes, everyone.
                </HandwrittenNote>
                <p className="mt-1 text-xs text-ink-faint">
                  Headline from homepage-content.md · annotation shows tone pairing
                </p>
              </div>

              <SketchDivider />

              <div>
                <SpecLabel>Tone variants</SpecLabel>
                <div className="flex flex-wrap gap-x-8 gap-y-3">
                  <HandwrittenNote tone="ink">Ink</HandwrittenNote>
                  <HandwrittenNote tone="coral">Coral</HandwrittenNote>
                  <HandwrittenNote tone="sky">Sky</HandwrittenNote>
                  <HandwrittenNote tone="green">Green</HandwrittenNote>
                  <HandwrittenNote tone="purple">Purple</HandwrittenNote>
                </div>
              </div>
            </div>
          </PaperSurface>
        </Section>

        <Section
          id="margin"
          title="MarginAnnotation"
          description="Journalist-style field notes in the margin. Offset asides with optional arrow cues."
        >
          <div className="flex flex-col gap-8 sm:flex-row sm:items-start">
            <MarginAnnotation>Plain margin observation.</MarginAnnotation>
            <MarginAnnotation withArrow>
              Observation with arrow toward related content.
            </MarginAnnotation>
          </div>
        </Section>

        <Section
          id="divider"
          title="SketchDivider"
          description="Subtle ink sketches between sections. Imperfect strokes — not hairline rules or notebook lines."
        >
          <div className="space-y-8">
            <div>
              <SpecLabel>Plain</SpecLabel>
              <SketchDivider />
            </div>
            <div>
              <SpecLabel>With label</SpecLabel>
              <SketchDivider label="field observation" />
            </div>
          </div>
        </Section>

        <Section
          id="highlight"
          title="HighlightMark"
          description="Occasional marker strokes behind text — emphasis only, not large color fields."
        >
          <PaperSurface>
            <p className="text-lg leading-relaxed text-ink">
              The data layer lives in{" "}
              <HighlightMark tone="yellow">lib/content</HighlightMark> and will
              swap for Contentful later. Accents also appear as{" "}
              <HighlightMark tone="coral">coral</HighlightMark>,{" "}
              <HighlightMark tone="sky">sky</HighlightMark>, and{" "}
              <HighlightMark tone="green">green</HighlightMark> highlight strokes.
            </p>
          </PaperSurface>
        </Section>

        <Section
          id="photo"
          title="TapedPhoto"
          description="Documentary photography with editorial framing. No tape, rotation, or scrapbook styling. Placeholder until real photos exist."
        >
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <TapedPhoto
              image={null}
              placeholderLabel="Workshop photo slot"
            />
            <TapedPhoto
              image={null}
              placeholderLabel="Community photo slot"
            />
            <TapedPhoto image={null} placeholderLabel="Team photo slot" />
          </div>
          <p className="text-sm text-ink-faint">
            Replace placeholders in{" "}
            <code className="bg-canvas-muted px-1.5 py-0.5">
              public/images/
            </code>{" "}
            when real assets are available. Layout stays stable.
          </p>
        </Section>

        <Section
          id="sticky"
          title="StickyNote"
          description="Editorial aside callout — ink border and highlight stroke. Not a literal yellow sticky note."
        >
          <div className="flex flex-wrap gap-6">
            <StickyNote>
              <p className="font-hand text-lg leading-snug">
                Field observation or CTA aside
              </p>
            </StickyNote>
            <StickyNote>
              <p className="text-sm leading-relaxed text-ink-muted">
                Can also carry short supporting copy in default type.
              </p>
            </StickyNote>
          </div>
        </Section>

        <Section
          id="buttons"
          title="Buttons"
          description="shadcn/ui for functional actions only. Visual identity comes from editorial layout and ink typography."
        >
          <PaperSurface>
            <div className="space-y-6">
              <div>
                <SpecLabel>Variants</SpecLabel>
                <div className="flex flex-wrap gap-3">
                  <Button>Default</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link</Button>
                </div>
              </div>
              <div>
                <SpecLabel>Sizes</SpecLabel>
                <div className="flex flex-wrap items-center gap-3">
                  <Button size="sm">Small</Button>
                  <Button size="default">Default</Button>
                  <Button size="lg">Large</Button>
                </div>
              </div>
              <div>
                <SpecLabel>As links (Link + buttonVariants — not Button)</SpecLabel>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/workshops"
                    className={cn(buttonVariants())}
                  >
                    Explore workshops
                  </Link>
                  <Link
                    href="/contact"
                    className={cn(buttonVariants({ variant: "outline" }))}
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </PaperSurface>
        </Section>

        <Section
          id="typography"
          title="Typography hierarchy"
          description="Figtree for UI and headlines. Caveat for handwritten observations only."
        >
          <PaperSurface>
            <div className="space-y-8">
              <div>
                <SpecLabel>Display / H1</SpecLabel>
                <p className="text-4xl font-semibold tracking-tight sm:text-5xl">
                  AI belongs to everyone.
                </p>
              </div>
              <div>
                <SpecLabel>H2 — section title</SpecLabel>
                <p className="text-2xl font-semibold tracking-tight">
                  Our programs
                </p>
              </div>
              <div>
                <SpecLabel>H3 — subsection</SpecLabel>
                <p className="text-xl font-semibold tracking-tight">
                  AI For Seniors
                </p>
              </div>
              <div>
                <SpecLabel>Body large</SpecLabel>
                <p className="text-lg leading-relaxed text-ink-muted">
                  Helping every generation confidently understand, explore, and
                  apply Artificial Intelligence through community, education, and
                  real-world experiences.
                </p>
              </div>
              <div>
                <SpecLabel>Body default</SpecLabel>
                <p className="leading-relaxed text-ink-muted">
                  A youth-led initiative helping people of every generation
                  confidently understand, explore, and apply Artificial
                  Intelligence.
                </p>
              </div>
              <div>
                <SpecLabel>Small / meta</SpecLabel>
                <p className="text-sm tracking-wide text-ink-faint uppercase">
                  Workshops · Community · Learning
                </p>
              </div>
              <div>
                <SpecLabel>Handwritten accent</SpecLabel>
                <HandwrittenNote tone="coral" className="text-2xl">
                  moving AI onward
                </HandwrittenNote>
              </div>
            </div>
          </PaperSurface>
        </Section>

        <Section
          id="colors"
          title="Color accents"
          description="White canvas and black ink base. Accents appear as highlight strokes and small ink moments — never large color blocks."
        >
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {accentSwatches.map((swatch) => (
              <div key={swatch.name} className="space-y-2">
                <div
                  className={cn("h-16 border border-border", swatch.className)}
                  aria-hidden="true"
                />
                <p className="text-sm text-ink-muted">{swatch.name}</p>
              </div>
            ))}
          </div>

          <PaperSurface className="mt-4">
            <SpecLabel>Accent usage — inline marks</SpecLabel>
            <p className="leading-relaxed text-ink">
              Use{" "}
              <span className="text-accent-coral">coral</span>,{" "}
              <span className="text-accent-sky">sky</span>,{" "}
              <span className="text-accent-green">green</span>, and{" "}
              <span className="text-accent-purple">purple</span> sparingly in
              handwritten notes and links. Yellow highlight marks selected text
              and active navigation.
            </p>
          </PaperSurface>
        </Section>

        <SketchDivider label="end of review" />

        <footer className="text-sm text-ink-faint">
          <p>
            This route is excluded from search indexing and public navigation.
            Remove or gate before production if desired.
          </p>
        </footer>
      </div>
    </NotebookPage>
  );
}
