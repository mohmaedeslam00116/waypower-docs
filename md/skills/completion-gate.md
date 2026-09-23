# completion-gate

> Evidence before assertions — verification commands must run and pass before any success claim.
> Source: https://mohmaedeslam00116.github.io/waypower-docs/docs/skills/completion-gate

<SkillSpec n="08" type="process" invocation="auto-invoked" trigger='"Done" is about to be claimed' output="Evidence — the verification commands actually ran and passed" pairs={['dual-axis-review', 'finish-handoff']} />

**One line:** "done" now means *verified* — the agent cannot claim success it
hasn't demonstrated.

## When it fires

Whenever the agent is about to claim work is complete, fixed, or passing —
before commits, PRs, or closing tickets.

## What it does

- Requires the **verification commands to actually run** (tests, build, lint,
  typecheck — whatever proves the claim) and their output to be inspected.
- Blocks success claims made from memory, assumption, or "it passed a minute
  ago".
- Makes failures visible instead of summarizing them away.

## What you get

You can trust the word "done". When a waypower-driven agent says the tests
pass, they passed — in this session, just now, with output to show for it.

## From a real session

<Transcript
  source="closing ticket t06 (CI evals + install matrix), 2026-09-23 — evidence links in the ticket"
  lines={[
    {glyph: 'wp', text: <>Using <b>completion-gate</b> — “CI works” is a claim, not evidence</>},
    {glyph: 'gate', text: 'claim → proof: PR #1, run 35918256029 — eval-gate + 4 matrix cells, all pass'},
    {glyph: 'gate', text: 'honesty check — docs claims re-read against the matrix results; wording corrected'},
    {glyph: 'ok', text: 'PASS — merged; ticket closed with run links, not assertions'},
  ]}
/>

## Pairs with

The last gate before [`dual-axis-review`](./dual-axis-review); every skill
that produces work answers to it.
