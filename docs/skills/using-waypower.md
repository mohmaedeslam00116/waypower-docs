---
title: using-waypower
description: The always-active orchestrator — mandatory skill invocation, priority ladder, and red-flag rules.
---

# using-waypower

<span className="skill-badge skill-badge--orchestrator">orchestrator · always active</span>

**One line:** the traffic controller — it decides which process skill owns
whatever you just asked for, and it doesn't let the agent skip.

## When it fires

Always. It loads at the start of every conversation and stays active for the
whole session.

## What it does

- Establishes the **mandatory skill-invocation rule**: when a task matches a
  process skill's trigger, that skill runs — no exceptions for "small" tasks.
- Maintains the **priority ladder** for conflicting triggers (e.g. a bug found
  mid-implementation routes to `hypothesis-debugging` before `seam-driven-tdd`
  resumes).
- Names the **red flags** — the rationalizations agents use to skip process
  ("I'll just quickly…", "this is trivial, no need for…") — and overrides them.
- Exempts the four tool skills from auto-invocation: they run only when you
  call them by name.

## What you get

A session where the pipeline is the default, not the exception. You never have
to remember which skill exists — the orchestrator routes; you decide at the
gates.

## Pairs with

Everything. It's the reason the other eight process skills fire at all.
