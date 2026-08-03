# Presentation Brief

The single source of truth for *what this deck says*. Change this file first when the narrative changes.

## Session

| Field | Value |
| --- | --- |
| Title | AI-Native Development: From Writing Code to Owning the Full SDLC |
| Speaker | Hany Saad — Senior Engineering Manager, ITWorx |
| Event | CognitionX Egypt, 3 August 2026 |
| Length | 28:45 planned, 17 slides |
| Audience | Mixed-seniority engineers, tech leads, engineering managers |

## Approved thesis

> AI can generate implementation, but the engineer still owns direction, constraints, verification, and outcomes.

Every slide must visibly serve this thesis. If a slide can be removed without weakening it, the slide is wrong.

## Supporting claims (approved)

1. AI productivity results are **conditional**, not universal.
2. The bottleneck moved from *writing* to *verifying*.
3. The right AI mode depends on task scope and required oversight.
4. Delegation quality is a stack: **Prompt → Context → Harness → Loop**.
5. The inner loop got fast; leverage moved to the outer loops.
6. The SDLC remains; sequential handoffs become continuous, human-guided loops.
7. Ownership is expressed through accountable artifacts.
8. Code review is necessary but no longer sufficient.
9. AI fluency builds on engineering maturity; implementation fluency still matters.

## Locked slide order

| # | Slug | Purpose in the narrative |
| --- | --- | --- |
| 1 | `ai-native-development` | Title and thesis. Frames a role-evolution talk, not a tools talk. |
| 2 | `your-name-is-on-the-release` | Opens on the release decision: generated implementation does not transfer ownership. |
| 3 | `the-bottleneck-moved` | Names the new bottleneck: confidence, not creation. |
| 4 | `move-control-higher` | Moves engineering control from code toward behavior, architecture, risk, and outcome. |
| 5 | `right-ai-for-the-task` | Applies AI modes through task fit, risk, controls, and retained accountability. |
| 6 | `conditions-change-outcomes` | Two real, opposite results. Productivity is conditional. |
| 7 | `four-layers` | The delegation model: Prompt → Context → Harness → Loop. |
| 8 | `three-loops` | Agent / engineering / product loops and their clocks. |
| 9 | `sdlc-verbs` | The lifecycle remains while execution becomes a continuous, human-guided loop. |
| 10 | `full-sdlc-ownership` | Ownership made concrete as seven accountable artifacts. |
| 11 | `start-with-intent` | Walkthrough part 1 — specification is engineering work. |
| 12 | `plan-constrain-delegate` | Walkthrough part 2 — challenge the plan, set the contract. |
| 13 | `verify-the-system` | Walkthrough part 3 — trace the requirement through change assurance to a release decision. |
| 14 | `change-assurance` | Code review → change assurance. |
| 15 | `engineer-stack` | A layered skills model from software fundamentals to end-to-end ownership. |
| 16 | `monday-morning` | Five concrete actions. |
| 17 | `own-the-outer-loops` | Close on the thesis, then stop. |

**Do not** add, remove, reorder, or materially rewrite these 17 slides without explicit approval from the speaker.

## Evidence rules

- `+55.8%` — Peng et al. 2023, a *controlled, self-contained* task. Never present as a general speedup.
- `−19%` — METR 2025, *experienced developers in mature repositories*. Never present as "AI makes you slower".
- DORA 2025 — cited only for the verification/trust/delivery-instability argument.
- Every number appears with its condition next to it, in the same visual group.
- Never invent a statistic, quote, citation, logo, or portrait.

## Tone

Enterprise-keynote calm. Declarative sentences. No hype, no fear, no vendor pitch, no memes.
Prefer "in that study" over "research proves". Prefer "requires" over "must always".

## Speaker notes

Notes live in `src/data/slides.ts` and are **data, not slide content**. They must:

- restate the point the speaker makes out loud, not the words already on screen;
- usually fit in 1–2 sentences; slide 4 is the approved extended walkthrough and transition;
- never appear in audience mode output or in the PDF.
