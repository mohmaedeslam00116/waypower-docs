# hypothesis-debugging

> Root cause through ranked, falsifiable hypotheses and a tight feedback loop — never guess-and-check.
> Source: https://mohmaedeslam00116.github.io/waypower-docs/docs/skills/hypothesis-debugging

<SkillSpec n="06" type="process" invocation="auto-invoked" trigger="A bug or failure with an unknown cause" output="Ranked falsifiable hypotheses, each tested by the cheapest experiment" pairs={['seam-driven-tdd', 'completion-gate']} />

**One line:** debugging as the scientific method — ranked hypotheses, each
falsifiable, each tested by the cheapest experiment that could kill it.

## When it fires

On **any bug, test failure, or unexpected behavior** — before any fix is
proposed. It has pipeline priority: a bug found mid-implementation pauses
`seam-driven-tdd` until the root cause is known.

## What it does

1. **Ranks hypotheses** by likelihood × cost of testing.
2. **Falsifies, doesn't confirm** — each experiment is designed to *kill* a
   hypothesis, not to make the favorite look right.
3. **Tight feedback loop** — smallest possible reproduction, one variable at
   a time.
4. Only then: a fix, verified against the reproduction — which usually becomes
   the regression test.

## What you get

Fixes that stay fixed. No "try this and see" loops, no whack-a-mole — and a
written trail of what was ruled out, so the next occurrence starts from
evidence, not folklore.

## From a real session

<Transcript
  source="the CI install-matrix failure, 2026-09-23 — waypower PR #1, run logs on GitHub"
  lines={[
    {glyph: 'you', text: '“install-matrix passes locally, fails in CI”'},
    {glyph: 'wp', text: <>Using <b>hypothesis-debugging</b> — ranked hypotheses, cheapest kill first</>},
    {glyph: 'gate', text: 'H1 “--json silently dropped?” → CI debug-dump step confirms: the runner’s CLI emits no JSON report'},
    {glyph: 'gate', text: 'H2 “stale CLI on the runner?” → claude-code landed in .agents/skills — pre-1.7 behavior, hypothesis confirmed'},
    {glyph: 'ok', text: 'pinned skills@1.7.0 — 4/4 matrix cells green on the re-run'},
  ]}
/>

## Pairs with

Its regression tests land through [`seam-driven-tdd`](./seam-driven-tdd);
verified fixes pass [`completion-gate`](./completion-gate) before being called
done.
