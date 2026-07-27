---
name: seo
description: Pro-level SEO guidelines for Swargadwari Dental Care Home. Follow these rules for every page, component, and content change to maintain excellent search visibility.
---

# SEO Guidelines – Swargadwari Dental Care Home

This project is a **Next.js App Router** app for a dental clinic in Surkhet, Nepal. Every code change must preserve or improve SEO. Follow these rules strictly.

---

## 1. Metadata (Every Page MUST Have)

### 1.1 Server Pages

Every page that is a **server component** (no `"use client"`) must export a `metadata` object:

```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page-Specific Title",          // ← DO NOT repeat the clinic name; the template in layout.tsx adds it
  description: "A unique, 120–160 char description with primary keyword + location + call to action.",
  openGraph: {
    title: "Page-Specific OG Title – Swargadwari Dental Care Home",
    description: "OG description (can differ slightly from meta description).",
  },
};
```

**Rules:**
- `title` — use the **template** format (e.g. `"Services"` → renders as `"Services | Swargadwari Dental Care Home"`). Never bake the clinic name into the title string.
- `description` — unique per page. Include the primary keyword for that page and the location `Surkhet` or `Birendranagar`. Max ~160 chars.
- `openGraph` — always provide `title` and `description`. Use full clinic name in OG title.

### 1.2 Client Pages (with `"use client"`)

Client components **cannot export metadata**. Use the **server wrapper pattern**:

1. Rename the client page to a content component (e.g. `page.tsx` → `ServicesContent.tsx`)
2. Create a new `page.tsx` that is a **server component** that imports and renders the content component + exports metadata

```tsx
// src/app/services/page.tsx (SERVER)
import type { Metadata } from "next";
import ServicesContent from "./ServicesContent";

export const metadata: Metadata = { title: "Services", description: "..." };

export default function Page() {
  return <ServicesContent />;
}
```

```tsx
// src/app/services/ServicesContent.tsx (CLIENT)
"use client";
// ... existing client code
```

---

## 2. Structured Data (JSON-LD)

### 2.1 SchemaMarkup Component

The file `src/app/_components/SchemaMarkup.tsx` injects three schemas:

| Schema | Type | Content |
|---|---|---|
| **LocalBusiness** | `Dentist` | Name, address (Near Maya Nursing Home, Birendranagar, Surkhet), geo, phones, email, opening hours (7AM–7PM), services, doctors |
| **BreadcrumbList** | `BreadcrumbList` | Breadcrumb with `itemListElement` positions (update when adding new top-level pages) |
| **FAQPage** | `FAQPage` | 5 Q&A pairs about services, location, hours, booking, doctors |

**When to update SchemaMarkup:**
- Adding a new doctor/staff member → add to `Dentist.knowsAbout` or `employee` array
- Adding a new service → add to `Dentist.hasOfferCatalog.itemListElement`
- Changing address/hours/phones → update the `Dentist` fields
- Adding a new FAQ → add to `FAQPage.mainEntity`

### 2.2 Implementation Pattern

Use the `Script` component with `strategy="beforeInteractive"`:

```tsx
import Script from "next/script";

<Script
  id="schema-unique-id"
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaObject) }}
  strategy="beforeInteractive"
/>
```

Never use inline `<script>` tags. Always use Next.js `<Script>`.

---

## 3. Sitemap & Robots

### 3.1 Sitemap (`src/app/sitemap.ts`)

Dynamic sitemap that exports all public routes with priority and change frequency:

```ts
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://dentalnew-omega.vercel.app";
  // list all public routes with appropriate priority/changeFreq
}
```

**When to update:** add a new entry whenever a new public page is created.

### 3.2 Robots (`src/app/robots.ts`)

Allows all crawlers on public pages. Disallows admin/auth routes:

```ts
disallow: ["/dashboard", "/api/", "/sign-in", "/sign-up", "/authentication"]
```

**When to update:** if new private routes are added, add them to `disallow`.

---

## 4. Semantic HTML

### 4.1 Headings Hierarchy

Every page must follow a strict heading hierarchy:

| Level | Usage |
|---|---|
| `<h1>` | Exactly one per page. Describes the page purpose. On homepage: `sr-only` hidden (since hero video has no text overlay). On inner pages: visible page title. |
| `<h2>` | Section headings within a page. Must have unique `id` attribute for `aria-labelledby`. |
| `<h3>` | Subsections within an `<h2>` section. |
| `<h4>+` | Further nesting if needed. |

**Rules:**
- Never skip levels (don't go h1 → h3)
- Every `<h2>` needs an `id`
- Wrap sections with `<section aria-labelledby="heading-id">`
- Homepage `<h1>` must use `className="sr-only"` (in Tailwind v4, use `sr-only`)

### 4.2 Landmarks

| Element | When to use |
|---|---|
| `<main>` | Wraps the primary content of every page. One per page. |
| `<nav>` | The main navigation (Header already uses `<nav>`). |
| `<footer>` | The site footer (Footer component already uses `<footer>`). |
| `<section aria-labelledby="...">` | Each major content section on the homepage. |
| `<article>` | For self-contained content (blog posts, service descriptions). |

All page content components must have their root wrapped in a `<main>` tag.

---

## 5. Images

### 5.1 Alt Text Rules

Every `<Image>` must have descriptive, keyword-rich alt text:

```
❌ alt="First pic"
❌ alt="project1"
❌ alt="pic1"
✅ alt="Swargadwari Dental Care Home clinic exterior in Birendranagar Surkhet"
✅ alt="Dental treatment room at Swargadwari Dental Care Home Surkhet"
✅ alt="Dental braces treatment before and after at Swargadwari Dental Care Home Nepal"
```

**Pattern:** `"[What/Subject] at Swargadwari Dental Care Home [Location]"`

### 5.2 Loading Strategy

| Position | `loading` prop |
|---|---|
| Above the fold (hero) | `"eager"` (default) |
| Below the fold | `"lazy"` |
| Gallery/carousel | `"lazy"` |

### 5.3 Image Optimization

- Always use `next/image` (never `<img>`)
- Provide `sizes` attribute for responsive images
- Use modern formats: WebP (AVIF is auto-configured in `next.config.ts`)

---

## 6. Video

For hero/background videos:

```tsx
<video
  src="/video.mp4"
  poster="/poster-image.jpg"       // ← REQUIRED: fallback before video loads
  autoPlay muted loop playsInline
>
  <track kind="captions" src="" label="Description" />  // ← include even if empty
  Fallback text for browsers that don't support video.
</video>
```

- Always include `poster` attribute
- Always include fallback text between `<video>` tags
- Add `aria-label` to the wrapping section

---

## 7. Links & Navigation

### 7.1 Internal Links

- Use Next.js `<Link>` component for internal navigation (never `<a>`)
- All nav links in Header and Footer must have meaningful text
- Use `aria-label` on icon-only links

### 7.2 External Links

Always include:
```tsx
target="_blank"
rel="noopener noreferrer"
```

### 7.3 Anchor Tags for Contact

```tsx
<a href="tel:9843230047">9843230047</a>           // phone
<a href="mailto:swargadwaridentalcarehome@gmail.com">email</a>  // email
```

---

## 8. Language & Internationalization

- The `<html>` tag uses `lang="en"` (primary content language is English)
- Hreflang alternates are configured in `layout.tsx` metadata → `alternates.languages`
- If adding new translated content to the i18n system, no hreflang changes needed
- For the language switcher buttons, `aria-label` must describe the action

---

## 9. Performance (Core Web Vitals)

### 9.1 Fonts

Only three fonts are loaded via `next/font`:
- `Geist` (sans, body)
- `Geist_Mono` (mono, code)
- `Playfair_Display` (headings)

Do not add additional fonts without auditing the performance impact.

### 9.2 Image Formats

`next.config.ts` is configured for `["image/avif", "image/webp"]`. Ensure all images in `public/` are optimized before adding (compress under 100KB for small images, under 300KB for large).

### 9.3 Avoid Render-Blocking Resources

- Structured data uses `strategy="beforeInteractive"` (loaded early but non-blocking)
- Fonts use `next/font` which auto-optimizes loading

---

## 10. Checklist for Every New Page/Component

Before committing a new page or modifying an existing one, verify:

- [ ] **Metadata** — Server component exports `metadata` with `title`, `description`, `openGraph`
- [ ] **Client page pattern** — If `"use client"`, use the server wrapper pattern
- [ ] **`<h1>`** — Exactly one per page
- [ ] **Heading hierarchy** — h1 → h2 → h3, no skips, h2s have `id` + `aria-labelledby` sections
- [ ] **`<main>`** — Page content wrapped in `<main>`
- [ ] **Alt text** — Every `<Image>` has descriptive, keyword-rich alt text
- [ ] **Images** — Use `next/image`, set `loading` correctly, provide `sizes`
- [ ] **Video** — Has `poster`, fallback text, `aria-label` on section
- [ ] **External links** — Have `target="_blank" rel="noopener noreferrer"`
- [ ] **Schema** — If new entities added (services, doctors, FAQs), update `SchemaMarkup.tsx`
- [ ] **Sitemap** — New public route added to `sitemap.ts`
- [ ] **Robots** — New private route added to `robots.ts` disallow
- [ ] **Build** — `npm run build` passes with no errors
