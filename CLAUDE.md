# CLAUDE.md — RDC Foundations Library

This file is loaded into Claude's context whenever a session involves this repository. Read it before making any changes.

## What this repo is

`rdc-foundations-library` is the CDN source of truth for all Red Door Collaborative HTML output. Every page, template, and deliverable across the org links to this repo for its visual foundation.

**Live docs / brand showcase:** https://reddoorcollaborative.github.io/rdc-foundations-library/

## CDN — always use these URLs

```html
<!-- In <head>: FOUC prevention (keep inline — must run before CSS paints) -->
<script>(function(){try{var p=JSON.parse(localStorage.getItem('rdc-prefs')||'{}');document.documentElement.setAttribute('data-theme',p.theme||(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'));}catch(e){}})();</script>

<!-- Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,300&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet">

<!-- RDC Foundations Library CSS -->
<link rel="stylesheet" href="https://reddoorcollaborative.github.io/rdc-foundations-library/rdc.css">

<!-- Before </body>: layout toggle + preference JS -->
<script src="https://reddoorcollaborative.github.io/rdc-foundations-library/rdc.js"></script>
```

Do NOT use relative CSS paths (`../css/rdc.css`, `./rdc.css`, etc.) in any page that is not inside this repo. Always use the full CDN URL above.

## Brand tokens

### Colors
| Name | Hex | Use |
|------|-----|-----|
| Coral | `#FF4F58` | Primary CTA, links, eyebrow labels |
| Squid | `#0D1724` | Dark surfaces, authority type, hero backgrounds |
| Wine | `#7F0046` | Secondary brand accent, gradient start |
| Mist | `#ABDCE0` | Soft accent — never a page background |
| Page bg | `#F7F6F4` | Set automatically by rdc.css |

### Typography
| Role | Face | Source |
|------|------|--------|
| Brand (print) | Suisse Int'l | Swiss Typefaces (licensed) |
| Brand (digital) | Proxima Nova | Adobe Fonts |
| HTML substitute | DM Sans | Google Fonts (free) |
| Monospace | DM Mono | Google Fonts (free) |

### Rules
- All buttons: `border-radius: 999px` (pill) via `.btn` class — never override
- Coral is always the primary CTA color
- Sentence case for all headings — never title case
- Max 3 font weights per page
- Logo minimum size: 85px wide, no drop shadows, no recoloring
- Logo files: Box → Red Door File Database → Red Door Guidelines and Assets → RDC 2025 Branding

## Repo structure

```
rdc-foundations-library/
├── rdc.css              ← Single importable stylesheet (all tokens + components)
├── rdc.js               ← Shared JS: layout toggle, preference persistence
├── index.html           ← Brand showcase (the live docs page)
├── CHANGELOG.md         ← Version history — update for every rdc.css / rdc.js change
├── templates/
│   ├── hub.html         ← Hub / landing pages
│   ├── document.html    ← Long-form articles with sidebar nav
│   ├── brief.html       ← Project briefs, scoping docs
│   ├── report.html      ← Reports, metrics, presentations
│   └── client-report.html ← Password-protected client deliverables
├── guidelines/
│   ├── brand-identity.md  ← Visual identity: colors, typography, logo rules
│   ├── voice-tone.md      ← Writing voice, tone, and register guidance
│   └── content-style.md   ← Grammar, formatting, content structure rules
└── assets/
    └── logos/           ← Approved SVG / PNG logo files
```

## Editing rules

- **rdc.css changes**: add an entry to `CHANGELOG.md` — changes propagate instantly to all CDN consumers
- **rdc.js changes**: add an entry to `CHANGELOG.md` — same propagation
- **Template changes**: only affect new pages that copy the template
- **Guidelines**: living documents — update whenever brand decisions change

## Multi-brand model

Client brand repos (e.g., `rdc-azure-brand-library`) load RDC's `rdc.css` as the base, then override CSS custom properties for brand-specific colors. This keeps all structural/layout consistency while allowing brand-specific theming:

```html
<link rel="stylesheet" href="...rdc-foundations-library/rdc.css">  <!-- RDC base -->
<link rel="stylesheet" href="...rdc-azure-brand-library/azure.css"> <!-- Azure token overrides -->
```

## Related repos

| Repo | Relationship |
|------|-------------|
| `rdc-knowledge-base` | PARA-structured internal wiki — consumes this foundation |
| `rdc-azure-brand-library` | Azure brand reference — should override from this base |
| `rdc-central` | Main Red Door hub — built on this foundation |
| `rdc-design-system` | ARCHIVED predecessor — redirect points here |

## Maintainers

Brian Jensen (admin) · Visual Design Lead · Motion Design Lead · Content Design Lead
All changes via Claude + GitHub MCP — no local code tooling required for maintainers.
