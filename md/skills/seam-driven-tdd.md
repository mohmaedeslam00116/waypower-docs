# seam-driven-tdd

> Test-first development at user-confirmed seams — Iron Law, mandatory verify-RED, tracer-bullet slicing.
> Source: https://mohmaedeslam00116.github.io/waypower-docs/docs/skills/seam-driven-tdd

<SkillSpec n="05" type="process" invocation="auto-invoked" trigger="Implementation begins at confirmed seams" output="Verified RED before every GREEN — enforced, not suggested" pairs={['seam-design', 'completion-gate']} />

**One line:** test-first development where tests live at seams you confirmed —
with the discipline enforced, not suggested.

## When it fires

When implementing **any** feature, bugfix, or behavior change — before writing
implementation code.

## What it does

- **The Iron Law:** no production code without a failing test that demands it.
- **Mandatory verify-RED:** the agent must watch the new test fail *for the
  right reason* before writing the implementation. A test that never failed
  proves nothing.
- **Tracer-bullet slicing:** behavior lands in thin, end-to-end increments
  (inherited from [`tracer-plan`](./tracer-plan)), each green before the next
  begins.
- Tests sit at **user-confirmed seams** (see [`seam-design`](./seam-design)) —
  so they survive refactors instead of punishing them.

## What you get

A test suite that documents behavior at the boundaries that matter, and an
agent that cannot quietly skip the red phase — the most common way "TDD"
degenerates into writing tests after the fact.

## From a real session

<Transcript
  source="the 13/13 eval hardening, 2026-09-23 — run log in the pack repo (domain-glossary/evals/runs)"
  lines={[
    {glyph: 'you', text: '“domain-glossary is the one skill that doesn’t discriminate — fix it”'},
    {glyph: 'wp', text: <>Using <b>seam-driven-tdd</b> — RED first; no changes until the failure is observed</>},
    {glyph: 'gate', text: 'RED — fresh baseline parks operational rules + a diagram in CONTEXT.md (eval 2, verbatim in the log)'},
    {glyph: 'gate', text: 'RED — baseline writes a full ADR for a sort-order preference, instantly (temptation eval)'},
    {glyph: 'ok', text: 'GREEN — new temptation eval + two SKILL.md counters; 13/13 now discriminate'},
  ]}
/>

## Pairs with

Design vocabulary from `seam-design`; bugs found mid-cycle escalate to
[`hypothesis-debugging`](./hypothesis-debugging); completion claims pass
through [`completion-gate`](./completion-gate).
