# Changelog

All notable changes to `rdc.css` and `rdc.js` are documented here. Template and guideline changes are tracked via git commit history.

Format: `[version] — date — description`

---

## rdc.css

### v2.1 — 2026-06-05
**Accessibility pass — WCAG 2.1 AA compliance improvements**
- Added `--surface-dark: #18253A` token — lighter navy for sidebar and hero headers (replaces squid `#0D1724` on those surfaces; squid unchanged for type/component use)
- Changed `--gray-500` from `#888888` → `#696969` — now passes 4.5:1 on all page backgrounds
- Eyebrow label color (`#C8002A`) — accessible darkened coral for small text on light surfaces; `.page-header .eyebrow` retains full coral on dark bg
- Logo mark initials: coral → white (wine-on-coral was 3.27:1; white-on-wine is 9.3:1)
- Nav section labels: `rgba(white, 0.25)` → `rgba(white, 0.50)` — passes on new surface-dark
- Nav links: `rgba(white, 0.55)` → `rgba(white, 0.65)`
- Logo subtext: `rgba(white, 0.40)` → `rgba(white, 0.60)`
- Sidebar version text: `rgba(white, 0.20)` → `rgba(white, 0.45)`
- Header meta labels: `rgba(white, 0.25)` → `rgba(white, 0.50)`
- Header description: `rgba(white, 0.45)` → `rgba(white, 0.58)`
- Footer links: added underline + `text-underline-offset: 2px` (were color-only)
- Do/Don't labels darkened: green `#16a34a` → `#166534`, red `#dc2626` → `#b91c1c`
- Badge-mist text: `#3a7a84` → `#226268`
- `.content-card-eyebrow` and `.section-eyebrow` updated to `#C8002A`

### v2.0 — 2026-06-05
- Migrated from `rdc-design-system` to `rdc-foundations-library`
- Updated CDN URL in header comment
- No functional changes — all tokens, components, and dark mode rules carried forward

### v1.0 — 2026-05-27 (rdc-design-system)
- Initial release: brand tokens, reset, typography, layout, buttons, badges, cards, forms, alerts, tables, dark mode, layout toggle CSS, responsive breakpoints

---

## rdc.js

### v2.1 — 2026-06-05
- Added keyboard accessibility for scrollable `<pre>` blocks: auto-injects `tabindex="0"` on all pre elements at page load

### v2.0 — 2026-06-05
- Initial release as standalone CDN file
- Extracted layout toggle logic from individual template `<script>` blocks
- Handles: preference restoration, toggle widget injection, interaction wiring
- FOUC prevention remains as inline `<head>` script per template (must run before CSS paints)
