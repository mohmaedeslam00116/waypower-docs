---
title: seam-design
description: Shared vocabulary for deep modules — where interfaces go, how to make code testable and AI-navigable.
---

# seam-design

<span className="skill-badge skill-badge--process">process · auto</span>

**One line:** the design vocabulary every other skill speaks — deep modules,
well-placed seams, interfaces worth testing at.

## When it fires

When designing or improving a module's interface, finding deepening
opportunities, deciding where a seam goes, making code more testable or
AI-navigable — or when another skill needs the vocabulary.

## What it does

- Applies **deep-module thinking**: small interface, large implementation.
  Flags shallow modules that leak their insides.
- Locates **seams** — the boundaries where behavior can be observed and
  verified — so tests have somewhere honest to live.
- Keeps interfaces **AI-navigable**: an agent can find the right seam without
  reading the whole codebase, which is what makes the rest of the pipeline
  fast.

## What you get

Modules an agent (and a human) can safely change. The seams you confirm here
are exactly where [`seam-driven-tdd`](./seam-driven-tdd) writes its tests.

## Pairs with

The design half of `seam-driven-tdd`; used throughout
[`tracer-plan`](./tracer-plan) execution whenever a new interface appears.
