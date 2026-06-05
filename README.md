# RDC Foundations Library

The visual and technical foundation for all Red Door Collaborative HTML output. Import one stylesheet and one script — your HTML is on-brand by default.

**Live brand showcase:** https://reddoorcollaborative.github.io/rdc-foundations-library/

---

## Quick start

Add these blocks to any HTML file to get the full RDC foundation:

```html
<!-- In <head> — FOUC prevention (keep inline) -->
<script>(function(){try{var p=JSON.parse(localStorage.getItem('rdc-prefs')||'{}');document.documentElement.setAttribute('data-theme',p.theme||(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'));}catch(e){}})();</script>

<!-- Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,300&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet">

<!-- RDC CSS -->
<link rel="stylesheet" href="https://reddoorcollaborative.github.io/rdc-foundations-library/rdc.css">
```

```html
<!-- Before </body> — layout toggle + preferences -->
<script src="https://reddoorcollaborative.github.io/rdc-foundations-library/rdc.js"></script>
```

---

## Using with Claude

Paste this into any Claude conversation or Project instruction to get on-brand HTML automatically:

```
You are creating an HTML deliverable for Red Door Collaborative (RDC).

ALWAYS include in <head>:
  <!-- FOUC prevention -->
  <script>(function(){try{var p=JSON.parse(localStorage.getItem('rdc-prefs')||'{}');document.documentElement.setAttribute('data-theme',p.theme||(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'));}catch(e){}})();</script>
  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,300&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet">
  <!-- RDC Foundations Library -->
  <link rel="stylesheet" href="https://reddoorcollaborative.github.io/rdc-foundations-library/rdc.css">

ALWAYS include before </body>:
  <script src="https://reddoorcollaborative.github.io/rdc-foundations-library/rdc.js"></script>

BRAND COLORS:
  --coral: #FF4F58   Primary CTAs, links, eyebrow labels
  --squid: #0D1724   Dark backgrounds, authority type
  --wine:  #7F0046   Secondary accent
  --mist:  #ABDCE0   Soft accent — never a page background
  Page background: #F7F6F4 (set automatically)

KEY RULES:
  - Sentence case for all headings — never title case
  - All buttons: .btn class with pill border-radius (handled automatically)
  - Coral is always the primary CTA color
  - Max 3 font weights per page

DESIGN SYSTEM REFERENCE: https://reddoorcollaborative.github.io/rdc-foundations-library/
```

---

## What's in this repo

```
rdc-foundations-library/
├── rdc.css              ← Single importable stylesheet (all tokens + components)
├── rdc.js               ← Shared JS: layout toggle, preference persistence
├── index.html           ← Brand showcase (live docs)
├── CHANGELOG.md         ← Version history
├── templates/
│   ├── hub.html         ← Hub / landing pages
│   ├── document.html    ← Long-form articles with sidebar nav
│   ├── brief.html       ← Project briefs, scoping docs
│   ├── report.html      ← Reports, metrics, presentations
│   └── client-report.html ← Password-protected client deliverables
├── guidelines/
│   ├── brand-identity.md  ← Visual identity: colors, typography, logo rules
│   ├── voice-tone.md      ← Writing voice and tone
│   └── content-style.md   ← Grammar, formatting, content structure
└── assets/
    └── logos/           ← Approved SVG / PNG logo files
```

---

## Brand tokens

| Token | Value | Use |
|-------|-------|-----|
| `--coral` | `#FF4F58` | Primary CTAs, links, eyebrow labels |
| `--squid` | `#0D1724` | Dark surfaces, primary type |
| `--wine` | `#7F0046` | Secondary accent, gradient start |
| `--mist` | `#ABDCE0` | Soft accent — never page backgrounds |
| `--page-bg` | `#F7F6F4` | Body background (set automatically) |

Typography: **DM Sans** (Google Fonts, free) — web substitute for licensed Suisse Int'l.

---

## Multi-brand extension

Client brand repos load RDC's `rdc.css` as the base, then override CSS custom properties:

```html
<link rel="stylesheet" href=".../rdc-foundations-library/rdc.css">  <!-- RDC base -->
<link rel="stylesheet" href=".../rdc-azure-brand-library/azure.css"> <!-- Client overrides -->
```

---

## Contributing

1. Edit `rdc.css` for token or component changes
2. Edit `rdc.js` for layout toggle or shared behavior changes
3. Add an entry to `CHANGELOG.md`
4. Commit with a clear message — GitHub Pages auto-deploys within ~30s

For templates, follow the pattern in `templates/hub.html`: always use CDN URLs, never relative paths.
