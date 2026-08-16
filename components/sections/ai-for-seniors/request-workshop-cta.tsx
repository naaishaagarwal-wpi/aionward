import { ContentLink } from "@/components/content/content-link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type RequestWorkshopCtaProps = {
  href: string;
  label: string;
  className?: string;
};

export function RequestWorkshopCta({
  href,
  label,
  className,
}: RequestWorkshopCtaProps) {
  return (
    <ContentLink
      href={href}
      className={cn(
        buttonVariants({ size: "lg" }),
        "h-auto px-5 py-2.5 text-base whitespace-normal",
        className
      )}
    >
      {label}
    </ContentLink>
  );
}
