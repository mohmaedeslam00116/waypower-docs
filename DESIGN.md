# Design

Seeded visual system for the waypower docs site. Re-capture from real code
later with `$impeccable document` once the theme has settled.

## Mood

"A senior engineer's desk at 9am — clean white surface, one precise instrument
on it." Stripe/Vercel-docs restraint: pure surfaces, one confident marine-teal
primary doing all the brand work, a single amber accent reserved for status and
calls-to-action.

## Color Strategy

Restrained: near-neutral surfaces + primary ≤10% of pixels + accent spent only
on badges, active states, and the primary CTA.

### Light theme

```css
--wp-bg:      oklch(1.000 0.000   0);   /* pure white — mood lives in brand colors, not surface */
--wp-surface: oklch(0.975 0.004 210);   /* cards, code chrome, footer */
--wp-ink:     oklch(0.220 0.020 225);   /* body text, ≥7:1 on bg */
--wp-primary: oklch(0.520 0.105 205);   /* deep marine teal — links, active nav, CTA fill */
--wp-primary-strong: oklch(0.450 0.110 205); /* hover/active */
--wp-accent:  oklch(0.700 0.150  70);   /* saturated amber — badges, status, sparing highlights */
--wp-muted:   oklch(0.490 0.015 225);   /* secondary text, ≥3.5:1 on bg */
```

### Dark theme

```css
--wp-bg:      oklch(0.170 0.000   0);   /* pure near-black, zero hue tint */
--wp-surface: oklch(0.220 0.000   0);
--wp-ink:     oklch(0.930 0.006 210);
--wp-primary: oklch(0.750 0.100 200);   /* lifted for dark-bg contrast */
--wp-primary-strong: oklch(0.820 0.090 200);
--wp-accent:  oklch(0.780 0.140  75);
--wp-muted:   oklch(0.680 0.010 220);
```

### Rules

- Text on any saturated fill (primary CTA, amber badge) is white or near-white
  — never dark text on mid-luminance saturated color.
- Accent appears on ≤5% of a page. If everything is highlighted, nothing is.
- Borders: 1px, `oklch(from var(--wp-ink) l c h / 8%)` — no shadows for
  separation, ever.

## Typography

- **UI/body:** Inter, system-ui fallback. Body 16px/1.65, measure ≤ 75ch.
- **Code:** JetBrains Mono, ui-monospace fallback. 0.875em.
- **Headings:** Inter tight-tracked (-0.02em), weight 650–700. H1 max 2.5rem —
  confidence is quiet.
- Numbers in eval tables use tabular figures.

## Components

- **Navbar:** bg hairline-bordered, no blur gimmicks. Left: wordmark `waypower`
  (JetBrains Mono, weight 700). Right: Docs, Blog, GitHub.
- **Hero:** one sentence + install command in a real code block with copy
  button. No illustration, no gradient.
- **Skill cards:** surface bg, 1px border, 8px radius. Name in mono, one-line
  trigger description, pipeline position chip.
- **Code blocks:** surface-tinted chrome, line numbers on demand, always a
  copy button.
- **Admonitions:** Infima defaults re-colored to palette; `:::tip` uses
  primary, `:::warning` uses accent.

## Motion

Near-none. 120–150ms ease on hover color/underline only. No scroll
animations, no parallax. Respect `prefers-reduced-motion` globally.

## Layout

Docs: standard two-column (sidebar 280px, content max 760px). Landing: single
column, max 1080px, generous vertical rhythm (96–128px sections).
