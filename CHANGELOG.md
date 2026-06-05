# Changelog

All notable changes to `rdc.css` and `rdc.js` are documented here. Template and guideline changes are tracked via git commit history.

Format: `[version] — date — description`

---

## rdc.css

### v2.0 — 2026-06-05
- Migrated from `rdc-design-system` to `rdc-foundations-library`
- Updated CDN URL in header comment
- No functional changes — all tokens, components, and dark mode rules carried forward

### v1.0 — 2026-05-27 (rdc-design-system)
- Initial release: brand tokens, reset, typography, layout, buttons, badges, cards, forms, alerts, tables, dark mode, layout toggle CSS, responsive breakpoints

---

## rdc.js

### v2.0 — 2026-06-05
- Initial release as standalone CDN file
- Extracted layout toggle logic from individual template `<script>` blocks
- Handles: preference restoration, toggle widget injection, interaction wiring
- FOUC prevention remains as inline `<head>` script per template (must run before CSS paints)
