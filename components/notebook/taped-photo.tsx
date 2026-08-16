import Image from "next/image";

import { cn } from "@/lib/utils";
import type { MediaAsset } from "@/lib/types/content";

type TapedPhotoProps = {
  /** Real image asset, or null to show a replaceable placeholder */
  image: MediaAsset | null;
  className?: string;
  /** Placeholder caption when image is missing */
  placeholderLabel?: string;
  sizes?: string;
  priority?: boolean;
  /** Frame ratio. Workshop photos default to 4/3; portraits may use 3/4. */
  aspectClassName?: string;
  /** Hide figcaption when the name is already shown beside the photo. */
  showCaption?: boolean;
  imageClassName?: string;
};

/**
 * Documentary photograph — editorial framing, no scrapbook tape or rotation.
 * When `image` is null, renders a clearly marked placeholder that keeps layout
 * stable until real workshop/community/team photos are added.
 *
 * When showCaption is true, the figcaption is the accessible name and Image
 * uses empty alt to avoid duplicate announcements. When false, Image uses
 * the asset alt text.
 */
export function TapedPhoto({
  image,
  className,
  placeholderLabel = "Photo forthcoming",
  sizes = "(max-width: 768px) 100vw, 40vw",
  priority = false,
  aspectClassName = "aspect-[4/3]",
  showCaption = true,
  imageClassName,
}: TapedPhotoProps) {
  const caption = image?.alt?.trim() || (image ? "Documentary photograph" : null);
  const imageAlt = showCaption ? "" : image?.alt?.trim() || "";

  return (
    <figure className={cn("w-full max-w-md", className)}>
      <div
        className={cn(
          "relative overflow-hidden border border-border bg-canvas-muted",
          aspectClassName
        )}
      >
        {image ? (
          <Image
            src={image.src}
            alt={imageAlt}
            fill
            sizes={sizes}
            priority={priority}
            className={cn("object-cover", imageClassName)}
          />
        ) : (
          <div
            className="flex h-full w-full flex-col items-center justify-center gap-2 px-4 text-center"
            role="img"
            aria-label={`${placeholderLabel}. Replace with real photo.`}
            data-placeholder="image"
          >
            <span className="font-hand text-lg text-ink-muted" aria-hidden="true">
              {placeholderLabel}
            </span>
            <span
              className="text-xs tracking-wide text-ink-faint uppercase"
              aria-hidden="true"
            >
              Replace with real photo
            </span>
          </div>
        )}
      </div>

      {showCaption && caption ? (
        <figcaption className="mt-2 text-sm text-ink-muted">{caption}</figcaption>
      ) : null}
    </figure>
  );
}
