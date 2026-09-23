# domain-glossary

> Owns the project's domain model and CONTEXT.md glossary — one word per concept, everywhere.
> Source: https://mohmaedeslam00116.github.io/waypower-docs/docs/skills/domain-glossary

<SkillSpec n="07" type="process" invocation="auto-invoked" trigger="A concept gets named, or an ADR is written" output="One word per concept — CONTEXT.md and ADRs stay coherent" pairs={['design-interview']} />

**One line:** the project's vocabulary police — one name per concept, kept in
a living `CONTEXT.md`, so agents and humans stop talking past each other.

## When it fires

When discussing codebase terminology, writing or editing a `CONTEXT.md`, or
recording or editing an ADR (architecture decision record).

## What it does

- Builds and sharpens the **domain model**: entities, relationships, and the
  exact word for each concept.
- Owns the **CONTEXT.md glossary** — the single source of truth an agent reads
  to learn what things are called in *this* repo.
- Records decisions as **ADRs** so "why" survives the people who made it.

## What you get

Agents that use your project's real vocabulary from message one — and never
invent a second name for a concept that already has one.

:::note Known limitation
`domain-glossary` is the one skill whose evals didn't discriminate cleanly at
v0.1.0 — it's being hardened for the next release. It works; we just haven't
proven how much yet.
:::

## Pairs with

Feeds vocabulary into every other skill; its glossary is most valuable to
[`design-interview`](./design-interview) and [`seam-design`](./seam-design).
