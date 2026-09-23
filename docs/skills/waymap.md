---
title: waymap
description: Chart huge, foggy efforts into a map of decision tickets on the issue tracker — then resolve them one at a time.
---

# waymap

<span className="skill-badge skill-badge--tool">tool · manual</span>

**One line:** for work too big for one session — a living map of decision
tickets on your issue tracker, resolved one at a time until the way is clear.

## When to invoke

Ask for it by name: *"waymap this."* Use it when the effort is large and the
path is foggy — a migration, a new product area, anything where "just start"
would mean discovering the plan by accident. Never auto-fires.

## What it does

- **Chart mode:** names the destination first (via
  [`design-interview`](./design-interview)), then maps the frontier
  breadth-first into a single map issue (`waymap:map`) plus child tickets.
- **Ticket types:** `research` (find out), `prototype` (try it cheap),
  `grilling` (decide with a human), `task` (build it) — each carrying a
  `waymap:<type>` label.
- **Blocking edges** wire the dependency graph, so the map always shows what's
  resolvable *now*.
- **Resolve mode:** clears one ticket at a time; the map is an index, not a
  knowledge store — findings live in the tickets.

## What you get

The fog made visible and finite. At any moment you can answer: where are we,
what's decided, what's blocking what, what's next — across sessions, agents,
and weeks.

## Pairs with

Feeding resolved tickets into [`tracer-plan`](./tracer-plan) and
[`seam-driven-tdd`](./seam-driven-tdd); session continuity via
[`finish-handoff`](./finish-handoff).
