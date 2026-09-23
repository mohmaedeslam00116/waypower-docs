---
title: deep-research
description: Primary-source investigation committed to the repo as Markdown — the reading legwork, delegated.
---

# deep-research

<span className="skill-badge skill-badge--tool">tool · manual</span>

**One line:** give a question to a background agent that reads the primary
sources — and commits what it found to your repo.

## When to invoke

Ask for it by name: *"deep-research: how does X handle Y?"* Use it for API
facts, library internals, protocol behavior — anywhere the answer should come
from documentation and source, not from model memory.

## What it does

- Investigates against **high-trust primary sources**: official docs, source
  code, RFCs — not blog summaries of blog summaries.
- Runs as a **background agent**, so your main session keeps moving.
- Captures findings as a **Markdown file in the repo** — the research becomes
  project knowledge, citable and reviewable, not chat ephemera.

## What you get

Answers you'd stake a design on, with the sources attached — and a research
trail the next person (or agent) can extend instead of redoing.

## Pairs with

Feeds [`design-interview`](./design-interview) when the fog is factual;
research tickets in [`waymap`](./waymap) are exactly its job.
