---
slug: building-these-docs-with-waypower
title: "This site was built by the skills it documents"
authors: mohmaedeslam
tags: [dogfooding, meta, waypower]
---

The fastest way to find out whether a workflow pack works is to make it build
its own marketing site. So that's what we did: the pages you're reading were
designed, planned, and shipped through the waypower pipeline itself. This is
the honest log of what that looked like.

{/* truncate */}

## The request was one sentence

"Build a docs site for the pack. New repo, a popular docs template, and use
our own skills to do it."

A vague brief — which is exactly the trigger condition for
[`design-interview`](/docs/skills/design-interview). It fired, and instead of
scaffolding immediately, the agent asked. Two rounds:

1. **Register, users, purpose, outcome.** Inferred hypotheses from the
   waypower repo (developers evaluating the pack in under five minutes; the
   install command as the success metric), confirmed and sharpened in
   conversation.
2. **Brand personality.** Four candidate personalities; the pick was
   *confident engineering* — "Stripe/Vercel docs: the certainty of an expert
   who doesn't need noise." Plus the explicit anti-reference: AI-hype landing
   pages with gradient blobs and empty promises.

The interview also settled the one architectural decision: **Docusaurus** —
chosen for its built-in blog (this post needed somewhere to live), versioning
that will track pack releases, and first-class GitHub Pages deployment.

## The spec became artifacts before it became code

The interview's output was committed to the repo *before* any page existed:

- **`PRODUCT.md`** — who the site serves, what success looks like, the five
  design principles ("show, don't tell", "the install command is sacred",
  "answer-first pages", "calm authority", "practice what you preach").
- **`DESIGN.md`** — the seeded visual system: a pure-white surface, one deep
  marine-teal primary (seeded at OKLCH hue 200°) doing all the brand work, a
  saturated amber accent rationed to badges and the primary CTA, Inter +
  JetBrains Mono, near-zero motion.

Every color on this site traces back to that file. The "no shadows, 1px
borders" rule is why nothing here glows.

## Then the pipeline did what it does

- **Planning:** the build was sliced into verifiable tickets — config, theme,
  content, landing, blog, deploy — each shippable on its own.
- **Verification ([completion-gate](/docs/skills/completion-gate)):** "the
  site works" was not accepted until `docusaurus build` ran green and every
  internal link resolved — evidence, not assertion.
- **Ship ([finish-handoff](/docs/skills/finish-handoff)):** clean git history,
  pushed to a dedicated public repo, deployed to GitHub Pages, and this
  handoff of a blog post so the next session starts warm.

## What dogfooding actually surfaced

Two honest observations:

1. **The interview gate paid for itself immediately.** The template question
   alone (Docusaurus vs VitePress vs Starlight vs MkDocs Material) would have
   been a coin flip without the interview's criteria: blog + versioning +
   Pages deploy made it a one-minute decision.
2. **The pipeline bends for content work.** Strict RED-GREEN TDD doesn't map
   onto prose. The skills adapted — verification became "build passes, links
   resolve" — which is exactly what a good process should do: hold the
   discipline, flex the mechanics.

## The takeaway

A workflow you wouldn't use on your own project is a workflow you shouldn't
ship. This site is the proof artifact: the same pipeline documented in the
[skills reference](/docs/skills/using-waypower) produced the design system,
the content, and the deploy — in one session, with the gates doing their job.

Try it on yours:

```bash
npx skills add mohmaedeslam00116/waypower --all -g --copy
```
