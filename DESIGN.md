# DESIGN.md — waypower identity system

Version 2 · September 2026 · Applies to the docs site, the logo, and every visual artifact waypower ships.

## Voice

Three words, physical-object words: **machined · exact · unhurried**.

The brand as a physical object: **an instrument calibration sheet**. Ruled rows, tabular numbers, a serial number, a technician's initials. Everything on it earned its place; nothing glows to get attention. That object — not "a SaaS landing page" — is the reference for every design decision.

Aesthetic lane: **precision-instrument documentation**. Not editorial-magazine, not AI-hype gradients, not generic dev-tool pastel. The site should read like the spec sheet of a well-made instrument: numbered, ruled, calibrated. The POV: *a workflow you can trust reads like a document you can audit.*

## Typography

Chosen by procedure (voice words → catalog search → reflex cross-check), not by reflex.

| Role | Face | Why |
|---|---|---|
| Display / headings | **Clash Display** (Fontshare, 500–700) | Engineered grotesque with deliberate cuts; confident at large sizes without shouting. Not a training-data default. |
| Body / UI | **Archivo** (Google, 400–700, `tnum`) | Workhorse grotesque from the technical-manual tradition; tabular figures for every stat and table. |
| Code / spec labels | **JetBrains Mono** | The brand *is* technical — mono is register-legitimate here, not costume. Also owns the named label system below. |

**Rejected by reflex-check:** Inter (the first reflex — banned monoculture default), Space Grotesk, DM Sans, IBM Plex.

**The spec-label system** (named, deliberate — not generic kickers): section markers set in JetBrains Mono, 11–12px, uppercase, tracked +0.18em, formatted as `SPEC / 01`, `PIPELINE / GATES`, `REF / 13`. They appear once per section, always with a 1px rule, never stacked.

## Color

Seeded at **OKLCH hue 200°** (marine-teal) — the committed brand anchor from v1. Amber (hue ~75°) is the signal color and is rationed.

### Light theme
- Paper: `oklch(0.99 0.003 240)` — cool, near-white
- Ink: `oklch(0.22 0.02 250)`; secondary ink `oklch(0.46 0.02 250)`
- Primary marine: `oklch(0.52 0.095 205)` scale (borders/hover/active)
- Instrument panel: `oklch(0.24 0.03 215)` — deep blue-green, used for the hero, the closing CTA, and code surfaces in both themes
- Signal amber: `oklch(0.75 0.15 75)` — the origin node of the logo, the primary CTA, PASS-adjacent highlights
- Verified green (transcripts/evals only): `oklch(0.75 0.15 160)`

### Dark theme
- Paper inverts to `oklch(0.17 0.015 250)`; the instrument panel drops to `oklch(0.13 0.02 215)` so hero sections stay darker than the page
- Primary lightens to `oklch(0.72 0.09 205)`; amber and green hold

Rules: no shadows anywhere (1px borders only), amber never fills large areas, green never appears outside evidence contexts.

## The mark

**The route-W**: a polyline tracing a W — five nodes, one continuous route — on a deep-marine tile with a 7px radius. The first node is amber (the task enters); the rest are paper-white (the route runs). It reads at 16px, it is the pipeline diagram compressed to a glyph, and no other dev-tool brand owns it.

- `static/img/logo.svg` — navbar mark
- `static/img/favicon.svg` — same geometry, slightly heavier strokes for small sizes
- `static/img/social-card.svg` — 1200×630 lockup

## Imagery

The brief implies no photography; the imagery is **crafted artifacts**, register-legitimate for a dev tool:

1. **The session transcript** (hero): a real waypower session rendered as a precise instrument readout — skill announcements, gate rows, green PASS marks. It is the product, shown.
2. **The pipeline route** (pipeline section): six gates as nodes on a ruled line — the logo's polyline expanded back into a diagram.
3. **Spec-sheet rows** (proof section): stats as ruled, tabular-number rows — the calibration sheet, literal.

Zero colored-rectangle placeholders. Zero stock. Zero gradient blobs.

## Motion

- One orchestrated page-load on the homepage hero only: headline rises, the console settles, transcript lines stagger in — under 700ms total, transform + opacity only. `prefers-reduced-motion: reduce` zeroes all of it.
- Everywhere else: hover states only (border color, background). No scroll-jacking, no parallax, no fade-on-scroll.

## Layout & surfaces

- Max content width 1200px; docs keep the standard reading column.
- Dark instrument panels alternate with paper sections — art direction per section, consistency of voice.
- Cards: 1px border, 10px radius, **no shadow, ever**. Hover shifts the border and the title to primary.
- The 1px rule is the primary separator — the calibration-sheet grammar.

## Docs chrome

- Code blocks live on the instrument-panel surface in both themes (nightOwl palette), 1px panel-line border.
- Admonitions: 1px border + 3px left rule, transparent background; marine for notes/tips, amber for important/caution.
- Tables: tabular numbers, ruled rows, no zebra striping.
- Navbar: paper surface, 1px bottom border, route-W mark + Clash Display wordmark.

## Accessibility

- WCAG AA minimum everywhere; amber appears on dark panel only at large/bold sizes or as a graphic accent.
- Focus rings: 2px primary, offset 2px, never removed.
- All diagrams carry text equivalents — the transcript is real text, the route diagram lists its gates in words.

## The slop tests, answered

- **"How was this made?"** — the route-W mark, the instrument-panel hero, and the calibration-sheet proof rows are specific to waypower's story (routing, gates, evidence). A competitor describing "hero, three cards, gradient" would not describe this site.
- **Lane named:** precision-instrument documentation — and the transcript / pipeline-route / spec-row artifacts are native to that lane, not decoration bolted on.
