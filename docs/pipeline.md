---
sidebar_position: 3
title: The pipeline
description: The complete idea-to-ship flow — which skill owns each stage, and where you stay in the loop.
---

# The pipeline

waypower treats every task as a journey through six stages. Each stage has one
skill that owns it, and **human-in-the-loop gates** where the agent must stop
and get your approval before proceeding.

```
┌─────────┐   ┌──────────┐   ┌─────────┐   ┌──────────┐   ┌────────┐   ┌──────────┐
│  IDEA   │──►│  DESIGN  │──►│  PLAN   │──►│  BUILD   │──►│ VERIFY │──►│  SHIP    │
└─────────┘   └──────────┘   └─────────┘   └──────────┘   └────────┘   └──────────┘
                  ▲ gate:        ▲ gate:       bugs ─►        ▲ gate:      finish-
              you approve    you approve   hypothesis-    evidence    handoff
              the spec       the tickets   debugging      + review
```

## Stage by stage

### 1. Intake — `using-waypower`

Always active. Classifies every incoming request, fires the right process
skill, and enforces the red-flag rules ("this is too small for a process" is
usually the moment the process matters most).

### 2. Design — `design-interview`

No code from a vague brief. The skill interviews you in frontier rounds until
the design is fully formed, then produces a **written spec. You approve it
before anything is built.** This gate is the cheapest place in the entire
pipeline to change your mind.

### 3. Plan — `tracer-plan`

The approved spec becomes tracer-bullet tickets: thin, end-to-end slices that
each leave the system working. Executed with per-task review.

> **Too big for one session?** Invoke [`waymap`](./skills/waymap) first — it
> charts the fog into decision tickets on your issue tracker and resolves them
> one at a time.

### 4. Build — `seam-driven-tdd` (+ `seam-design`)

Test-first at user-confirmed seams. The Iron Law: no production code without a
failing test; RED is verified before GREEN is written. `seam-design` supplies
the shared deep-module vocabulary whenever an interface is being shaped.

> **Bug mid-flight?** [`hypothesis-debugging`](./skills/hypothesis-debugging)
> takes over: ranked, falsifiable hypotheses — never guess-and-check.

### 5. Verify — `completion-gate` → `dual-axis-review`

`completion-gate`: no success claim without the verification commands having
actually run — evidence before assertions, always. Then `dual-axis-review`
dispatches two parallel review agents over the diff (Standards + Spec) before
merge.

### 6. Ship — `finish-handoff`

Integrate (merge / PR / keep branch), clean the workspace, and compact the
session into a handoff note the next agent — or next you — can pick up cold.

## Where you stay in the loop

| Gate | You decide |
|------|-----------|
| Spec approval | What gets built |
| Ticket approval | How it gets sliced |
| Seam confirmation | Where the interfaces are |
| Merge | When it ships |

Everything between gates runs autonomously — that's the deal: the agent earns
your trust at the gates so it can run fast between them.
