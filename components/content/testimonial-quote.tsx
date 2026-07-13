import { TapedPhoto } from "@/components/notebook";
import type { Testimonial } from "@/lib/types/content";
import { cn } from "@/lib/utils";

type TestimonialQuoteProps = {
  testimonial: Testimonial;
  className?: string;
};

export function TestimonialQuote({
  testimonial,
  className,
}: TestimonialQuoteProps) {
  const attribution = [
    testimonial.name,
    testimonial.role,
    testimonial.organization,
  ]
    .filter(Boolean)
    .join(" · ");

  return (
    <blockquote
      className={cn(
        "grid gap-6 border-l-2 border-ink pl-5 sm:grid-cols-[minmax(0,1fr)_minmax(0,10rem)] sm:gap-8",
        className
      )}
    >
      <div className="space-y-4">
        <p className="text-xl leading-relaxed text-ink sm:text-2xl">
          “{testimonial.quote}”
        </p>
        <footer className="text-sm text-ink-muted">{attribution}</footer>
      </div>
      {testimonial.photo ? (
        <TapedPhoto
          image={testimonial.photo}
          className="max-w-[10rem]"
          sizes="10rem"
        />
      ) : null}
    </blockquote>
  );
}

type TestimonialListProps = {
  testimonials: Testimonial[];
  className?: string;
};

export function TestimonialList({
  testimonials,
  className,
}: TestimonialListProps) {
  if (testimonials.length === 0) return null;

  return (
    <ul className={cn("space-y-10", className)}>
      {testimonials.map((testimonial) => (
        <li key={testimonial.id}>
          <TestimonialQuote testimonial={testimonial} />
        </li>
      ))}
    </ul>
  );
}
