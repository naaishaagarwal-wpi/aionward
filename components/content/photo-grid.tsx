import { TapedPhoto } from "@/components/notebook";
import type { MediaAsset } from "@/lib/types/content";
import { cn } from "@/lib/utils";

type PhotoGridProps = {
  photos: MediaAsset[];
  className?: string;
};

/**
 * Documentary photo grid. Renders nothing when empty.
 */
export function PhotoGrid({ photos, className }: PhotoGridProps) {
  if (photos.length === 0) return null;

  return (
    <ul
      className={cn(
        "grid gap-8 sm:grid-cols-2 lg:grid-cols-3",
        className
      )}
    >
      {photos.map((photo) => (
        <li key={`${photo.src}-${photo.alt}`}>
          <TapedPhoto
            image={photo}
            className="max-w-none"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </li>
      ))}
    </ul>
  );
}
