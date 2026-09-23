# dual-axis-review

> Two parallel review agents over the diff — Standards and Spec — before merge, and on received feedback.
> Source: https://mohmaedeslam00116.github.io/waypower-docs/docs/skills/dual-axis-review

<SkillSpec n="09" type="process" invocation="auto-invoked" trigger="A diff is ready — or review feedback arrives" output="Two parallel verdicts: engineering standards and spec fitness" pairs={['completion-gate', 'finish-handoff']} />

**One line:** every diff gets reviewed twice, in parallel — once against
engineering standards, once against the spec it claims to implement.

## When it fires

When a task, ticket, or feature is complete and before merging — and again
when review feedback arrives, to verify comments before implementing them.

## What it does

Dispatches **two review sub-agents over the diff**:

- **Standards axis** — code quality, conventions, security, error handling,
  the things that are always true.
- **Spec axis** — does this diff actually do what the approved spec said?
  Nothing more, nothing less — the axis that catches "works, but wrong thing".

Feedback arriving from humans gets the same treatment: verified before it's
implemented, so a mistaken review comment doesn't get obediently merged.

## What you get

Pre-merge review that catches the two failure modes that matter — bad code,
and good code for the wrong requirement — without you reading every line.

## From a real session

<Transcript
  source="the dual-axis review of the t08+t09 docs diff itself, 2026-09-23 — two review sub-agents over that change"
  lines={[
    {glyph: 'you', text: '“Before you push: review the diff properly.”'},
    {glyph: 'wp', text: <>Using <b>dual-axis-review</b> — two sub-agents: standards axis + spec axis</>},
    {glyph: 'gate', text: 'standards — P1: the llms page-order list drifts silently from sidebars.ts → build-time guard added'},
    {glyph: 'gate', text: 'spec — P1: this page carried no transcript; the honest excerpt is the review you’re reading'},
    {glyph: 'ok', text: 'FIX-THEN-SHIP on both axes — P1s landed, P2s triaged, then the diff shipped'},
  ]}
/>

## Pairs with

Runs after [`completion-gate`](./completion-gate), before
[`finish-handoff`](./finish-handoff) merges.
