# What is waypower?

> 13 pressure-tested agent skills that teach your coding agent how to work — a complete idea-to-ship pipeline.
> Source: https://mohmaedeslam00116.github.io/waypower-docs/docs/intro

**Your agent already knows how to code. waypower teaches it how to work.**

waypower is a pack of **13 agent skills** that install into Claude Code (or any
compatible agent harness) and give it a complete, disciplined workflow — from
the first vague idea to a shipped, reviewed branch. One orchestrator skill is
always active; it routes every task through the right process skill at the
right moment, with you approving the decisions that matter.

```bash
npx skills add mohmaedeslam00116/waypower --all -g --copy
```

## The pipeline

waypower is not a bag of tricks — it's one pipeline:

```
idea ──► design-interview ──► spec ──► tracer-plan ──► seam-driven-tdd ──► review ──► finish-handoff
              ▲ you approve            tickets         red → green         dual-axis     merge + handoff
```

For efforts too big for one session, `waymap` charts the fog into decision
tickets first. For anything, `completion-gate` makes "done" mean *verified*.

## Three kinds of skills

| Kind | Count | How they run | Examples |
|------|-------|--------------|----------|
| **Orchestrator** | 1 | Always active — enforces the pipeline | `using-waypower` |
| **Process** | 8 | Auto-invoked when their trigger matches | `design-interview`, `seam-driven-tdd` |
| **Tool** | 4 | You invoke by name, when you want them | `waymap`, `deep-research` |

## Pressure-tested, not vibes-tested

Every skill ships with its own eval scenarios (`evals/evals.json`) and was
graded against paired baseline runs — the same task, with and without the
skill. **12 of 13 skills discriminate cleanly** (the thirteenth,
`domain-glossary`, is being hardened for the next release). The failures were
fixed before release, not documented after.

## This site is dogfooded

This documentation site was itself built through the waypower pipeline —
design-interviewed, planned, and shipped with the skills it documents.
[Read how →](/blog/building-these-docs-with-waypower)

## Next

- [Getting started](./getting-started) — install and first session in 5 minutes
- [The pipeline](./pipeline) — the full idea-to-ship flow, stage by stage
- [Skills reference](./skills/using-waypower) — all 13 skills in detail
