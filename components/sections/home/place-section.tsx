import { ContentLink } from "@/components/content/content-link";
import { buttonVariants } from "@/components/ui/button";
import type { HomepagePlace } from "@/content/homepage";
import { cn } from "@/lib/utils";

type PlaceSectionProps = {
  place: HomepagePlace;
};

/**
 * Movement invitation — compact action pathways.
 */
export function PlaceSection({ place }: PlaceSectionProps) {
  return (
    <section
      id="your-place"
      aria-labelledby="home-place-heading"
      className="scroll-mt-24 space-y-3 sm:space-y-4"
    >
      <h2
        id="home-place-heading"
        className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
      >
        {place.title}
      </h2>

      <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-3">
        {place.pathways.map((pathway) => (
          <li key={pathway.id}>
            <ContentLink
              href={pathway.href}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-auto w-full justify-center whitespace-normal px-4 py-3 text-base font-semibold"
              )}
            >
              {pathway.label}
            </ContentLink>
          </li>
        ))}
      </ul>
    </section>
  );
}
