# Brand identity

Red Door Collaborative visual identity guidelines. Reference this document when producing any on-brand deliverable — HTML, presentation, print, or otherwise.

---

## Color palette

### Brand colors

| Name | Hex | CSS token | Primary use |
|------|-----|-----------|-------------|
| Coral | `#FF4F58` | `--coral` | Primary CTAs, links, eyebrow labels |
| Squid | `#0D1724` | `--squid` | Dark backgrounds, hero sections, authority type |
| Wine | `#7F0046` | `--wine` | Secondary accent, gradient starting color |
| Mist | `#ABDCE0` | `--mist` | Soft accent only — never a page background |

### Page background

`#F7F6F4` — set automatically by `rdc.css`. Do not override with white or gray.

### Neutral scale

Used for text, borders, and surface variations:
- `--gray-100: #F3F3F3` — light backgrounds, metric cards
- `--gray-200: #E8E8E8` — dividers, borders
- `--gray-500: #888888` — muted text, labels
- `--gray-700: #444444` — body text
- `--gray-900: #1A1A1A` — primary text

### What to avoid
- Do not use Mist as a page background — it reads as institutional / clinical
- Do not use Wine as a CTA — that's Coral's role
- Do not introduce new brand colors without design lead approval
- Do not use raw hex values in HTML — always use CSS tokens (`var(--coral)`) so changes propagate

---

## Typography

### Font stack

| Role | Typeface | Source | Notes |
|------|----------|--------|-------|
| Brand (print) | Suisse Int'l | Swiss Typefaces | Licensed — not for HTML |
| Brand (digital) | Proxima Nova | Adobe Fonts | Licensed |
| HTML substitute | DM Sans | Google Fonts | Use in all HTML deliverables |
| Monospace | DM Mono | Google Fonts | Code blocks, technical labels |

DM Sans is the approved Google Fonts substitute for HTML deliverables. Use the full variable weight range (300–700) from Google Fonts to match Suisse Int'l weight pairings.

### Type scale (HTML)

| Element | Size | Weight | Notes |
|---------|------|--------|-------|
| h1 | `clamp(28px, 4vw, 42px)` | 700 | Fluid, responsive |
| h2 | `clamp(22px, 3vw, 32px)` | 600 | |
| h3 | `20px` | 600 | |
| h4 | `16px` | 600 | |
| Eyebrow | `10px` | 600 | ALL CAPS, 0.14em tracking |
| Body | `15px` | 400 | Line height 1.7 |
| Small / label | `13px` | 400–500 | |
| Micro | `11px` | 400–600 | |

### Rules
- **Sentence case always** — never title case in headings
- Max 3 font weights per page
- Heading letter-spacing: `-0.02em` (handled by rdc.css)
- Eyebrow labels: all-caps, tracked, Coral color

---

## Logo

### Minimum sizes
- Digital: 85px wide
- Print: 0.25 in wide

### Clear space
Equal to the logo's own bounding square on all four sides.

### What never to do
- Do not stretch, rotate, or skew the logo
- Do not split colors, recolor, or add effects
- Do not add drop shadows
- Do not use on backgrounds that reduce contrast below WCAG AA

### File locations
Approved files are in Box:
> Red Door File Database → Red Door Guidelines and Assets → RDC 2025 Branding

Files in this repo's `assets/logos/` folder mirror the approved versions. Always pull from the Box source when printing.

---

## Spacing

8pt base grid with 4px increments. CSS tokens:

`--space-1: 4px` · `--space-2: 8px` · `--space-3: 12px` · `--space-4: 16px`
`--space-6: 24px` · `--space-8: 32px` · `--space-12: 48px` · `--space-16: 64px`

---

## Border radius

`--radius-sm: 4px` · `--radius-md: 8px` · `--radius-lg: 12px`
`--radius-xl: 18px` · `--radius-pill: 999px`

All buttons use `--radius-pill` (pill shape). Cards use `--radius-lg`.

---

## Dark mode

`rdc.css` includes full dark mode support, applied automatically via OS preference or toggled by the user via the layout toggle widget (injected by `rdc.js`). Brand colors (Coral, Wine, Mist, Squid) remain unchanged in dark mode. Neutral surface colors shift to a dark navy scale.

---

## Document last updated

June 2026 — Initial version. Voice & tone and content style are in separate guideline files.
