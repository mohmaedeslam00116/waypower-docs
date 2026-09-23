---
title: seam-driven-tdd
description: Test-first development at user-confirmed seams — Iron Law, mandatory verify-RED, tracer-bullet slicing.
---

# seam-driven-tdd

<span className="skill-badge skill-badge--process">process · auto</span>

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

## Pairs with

Design vocabulary from `seam-design`; bugs found mid-cycle escalate to
[`hypothesis-debugging`](./hypothesis-debugging); completion claims pass
through [`completion-gate`](./completion-gate).
