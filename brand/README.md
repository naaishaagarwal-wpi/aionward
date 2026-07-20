# AI Onward brand assets

This folder is the **editable source of truth** for brand files.

Website UI deployment copies live under `public/brand/` (served statically).
App Router metadata icons live under `app/` and are separate from header UI.

## Files

| Asset | Purpose |
|-------|---------|
| `AI-Onward.svg` / `AI-Onward.png` | Primary brand mark (AO monogram) |
| `AI-Onward (64 x 64 px).png` | Small mark export |
| `AI-Onward (180 x 180 px).png` | Apple-sized mark export |
| `AI-Onward (256 x 256 px).png` | Medium mark export |
| `AI-Onward (1024 x 1024 px).png` | Large mark export |
| `ai-onward-logo-horizontal.svg` | Website header lockup (mark + wordmark) |
| `ai-onward-logo-horizontal.png` | Raster fallback of the header lockup |
| `opengraph-image.png` | Source for social / Open Graph imagery |

## Deployment copies

Copy header lockups into the public folder when updated:

```
public/brand/
├── ai-onward-logo-horizontal.svg
└── ai-onward-logo-horizontal.png
```

## App Router metadata (do not replace with header assets)

These are managed separately under `app/`:

- `favicon.ico`
- `icon.png`
- `apple-icon.png`
- `opengraph-image.png`

Next.js App Router file conventions emit the correct `<link>` and `og:image` tags automatically.
