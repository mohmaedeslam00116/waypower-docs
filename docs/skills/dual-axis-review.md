---
title: dual-axis-review
description: Two parallel review agents over the diff — Standards and Spec — before merge, and on received feedback.
---

# dual-axis-review

<span className="skill-badge skill-badge--process">process · auto</span>

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

## Pairs with

Runs after [`completion-gate`](./completion-gate), before
[`finish-handoff`](./finish-handoff) merges.
