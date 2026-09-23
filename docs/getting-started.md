---
sidebar_position: 2
title: Getting started
description: Install waypower, verify it, and run your first pipeline session in five minutes.
---

# Getting started

## Requirements

- **Claude Code** or a compatible agent harness that supports skills
- **Node.js 18+** (only for the `npx` installer)

## Install

The recommended path — all 13 skills, global, copied (not symlinked):

```bash
npx skills add mohmaedeslam00116/waypower --all -g --copy
```

Pick a single skill instead by naming it:

```bash
npx skills add mohmaedeslam00116/waypower --skill seam-driven-tdd -g --copy
```

The installer runs a security audit on the pack before copying (waypower
passes: **Safe, 0 alerts, Low Risk**).

## Verify

The skills should now exist in your global skills directory:

```bash
ls ~/.claude/skills
```

You should see `using-waypower`, `design-interview`, `tracer-plan`,
`seam-design`, `seam-driven-tdd`, `hypothesis-debugging`, `domain-glossary`,
`completion-gate`, `dual-axis-review`, `waymap`, `finish-handoff`,
`deep-research`, `authoring-skills`.

## Your first session

Start a new agent session in any repo and describe a feature you want:

> "I want to add rate limiting to the API."

This is what should happen, without you asking for any of it:

1. **`using-waypower`** (always active) classifies the request as creative work
   and routes it.
2. **`design-interview`** fires and asks you frontier questions instead of
   guessing — it will not let the agent write code from a vague brief.
3. It ends at a **written spec you approve**. Only then does implementation
   begin.
4. **`tracer-plan`** slices the spec into tickets; **`seam-driven-tdd`**
   implements them test-first, red before green.
5. Before "done" is claimed, **`completion-gate`** demands the verification
   commands actually ran — and **`dual-axis-review`** sends two review agents
   over the diff.
6. **`finish-handoff`** merges, cleans up, and writes a handoff note for the
   next session.

If step 2 didn't happen and the agent jumped straight to code, the skills
aren't loading — check the install directory and restart the session.

## Tool skills: invoked by name

The four tool skills never auto-fire. Ask for them explicitly:

- *"waymap this"* — chart a huge effort into decision tickets
- *"deep-research: how does X's API handle Y?"* — primary-source research,
  findings committed to the repo
- *"finish-handoff"* — integrate and hand off completed work
- *"authoring-skills"* — write or harden a skill of your own

## Updating

Re-run the same install command — it overwrites the copies with the latest
release:

```bash
npx skills add mohmaedeslam00116/waypower --all -g --copy -y
```

## Uninstall

Delete the skill directories from `~/.claude/skills/` (and any other agent
directories the installer detected).
