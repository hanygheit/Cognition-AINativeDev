# Skill: Presentation Review

End-to-end review pass over the whole deck. Use when asked to "review the presentation", "polish the deck", or before a rehearsal or the live session.

## Read first

1. [../docs/presentation-brief.md](../docs/presentation-brief.md) — thesis and locked slide order
2. [../docs/design-system.md](../docs/design-system.md) — tokens, type scale, layout
3. [../docs/animation-rules.md](../docs/animation-rules.md) — motion budget
4. [../docs/qa-checklist.md](../docs/qa-checklist.md) — verification

## Procedure

1. **Narrative sweep.** Read the 17 titles and pull lines in order, nothing else. Does the argument hold with no other information? Note any slide that does not move the argument forward.
2. **Per-slide pass.** Apply [content-accuracy-review](content-accuracy-review.md) then [slide-design-review](slide-design-review.md) to each slide.
3. **Repetition check.** Count layout archetypes. If more than three slides share the same card/row grid, redesign one into a diagram.
4. **Density check.** Count visible words per slide. Anything over ~60 is a rewrite candidate.
5. **Motion check.** Confirm every reveal is automatic, once, and under the duration budget.
6. **Surface check.** Compare `/present/N`, `/overview` thumbnail, and PDF page N. All three must show the same final composition.
7. **QA.** Run typecheck, lint, build, `test:pdf`.

## Output format

Report as a table: `slide | issue | severity (blocker / polish) | proposed change`. Group by phase (content, design, motion). Do not bury findings in prose.

## Boundaries

- Never add, remove, or reorder slides. If the narrative needs it, raise it as a blocker and stop.
- Never invent evidence, quotes, portraits, or logos.
- Never introduce remote assets, `window.print()`, or click-gated animation steps.
- Prefer the smallest change that fixes the finding.
