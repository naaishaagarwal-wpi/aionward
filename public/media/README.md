# AI Onward Media Library

`public/media/` is the **canonical** home for photos, videos, illustrations, and partner-facing visual documents.

## Related folders

| Path | Role |
|------|------|
| `public/media/` | Storytelling assets (this library) |
| `public/brand/` | Logos and brand marks only — unchanged |
| `public/images/` | **Deprecated** — do not add new assets here |

---

## Principles

1. **One canonical home** — each photo or video lives in exactly one place.
2. **Pages reference media** — content files point at paths under `/media/...`. Media does not belong to a page.
3. **Organize by origin** — file by the story, event, person, or program the moment came from — not by where it appears on the site.
4. **Never create homepage-specific folders** — the homepage reuses assets from stories, events, programs, etc.
5. **Never duplicate** an asset because multiple pages use it. Same `src` everywhere.
6. **No metadata JSON in media folders** — captions, alt text, and relationships live in content files (e.g. `content/`), not beside the files.
7. **Descriptive filenames and folder names** that provide context.

Media should show people learning, creating, connecting, and collaborating.

Avoid generic AI imagery, robots, stock technology photos, and overly corporate visuals.

---

## Folder structure

```text
public/media/

  stories/
    Human stories and narratives.

  events/
    workshops/
    talks/
    competitions/

  people/
    executives/
    ambassadors/
    members/

  programs/
    ai-visionaries/
    ai-for-seniors/
    girls-applying-ai/

  illustrations/
    Artwork and visual elements.

  presentations/
    Partner-facing documents.
```

### What belongs where

| Folder | Use for |
|--------|---------|
| `stories/` | Named human narratives and story arcs not tied to a single dated event |
| `events/workshops/` | Workshop moments — prefer dated event folders |
| `events/talks/` | Talks and speaking engagements |
| `events/competitions/` | Competition and showcase moments |
| `people/executives/` | Executive portraits |
| `people/ambassadors/` | Ambassador portraits |
| `people/members/` | Member / volunteer portraits |
| `programs/` | Program life not tied to a dated event (one folder per program) |
| `illustrations/` | Hand-drawn or designed visual elements |
| `presentations/` | Partner decks, PDFs, and unique export documents — not copies of photos |

Photos used in a presentation still live under `events/`, `programs/`, `people/`, or `stories/`. The presentation file references them; it does not own duplicates.

---

## Naming examples

### Workshops

```text
events/workshops/
  2026-03-15-ai-for-seniors-library/
    cover.jpg
    group-photo.jpg
    learning-01.jpg
```

### People

```text
people/executives/
  person-name/
    portrait.jpg

people/ambassadors/
  person-name/
    portrait.jpg

people/members/
  person-name/
    portrait.jpg
```

### Good vs avoid

```text
Good:  senior-learning-chatgpt.jpg
Good:  2026-03-15-ai-for-seniors-library/cover.jpg

Avoid: IMG_4829.jpg
Avoid: photo1.png
Avoid: homepage-hero.jpg
Avoid: final-final2.jpg
```

---

## How pages use media

Content references a path; UI components (`TapedPhoto`, `MediaAsset`, etc.) consume that reference.

Example:

```ts
{
  src: "/media/events/workshops/2026-03-15-ai-for-seniors-library/cover.jpg",
  alt: "Seniors exploring AI together at the library workshop.",
}
```

The same `src` may appear on the homepage, a program page, a workshop page, and a partner presentation. One file on disk.

---

## Deprecated: `public/images/`

Do not add new assets under `public/images/`.

Use `public/media/` with the structure above.
