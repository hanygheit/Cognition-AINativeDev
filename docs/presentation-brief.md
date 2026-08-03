# Presentation Brief

The single source of truth for *what this deck says*. Change this file first when the narrative changes.

## Session

| Field | Value |
| --- | --- |
| Title | AI-Native Development: From Writing Code to Owning the Full SDLC |
| Speaker | Hany Saad — Senior Engineering Manager, ITWorx |
| Event | CognitionX Egypt, 3 August 2026 |
| Length | ~28 minutes, 16 slides |
| Audience | Mixed-seniority engineers, tech leads, engineering managers |

## Approved thesis

> AI can generate implementation, but the engineer still owns direction, constraints, verification, and outcomes.

Every slide must visibly serve this thesis. If a slide can be removed without weakening it, the slide is wrong.

## Supporting claims (approved)

1. AI productivity results are **conditional**, not universal.
2. The bottleneck moved from *writing* to *verifying*.
3. Delegation quality is a stack: **Prompt → Context → Harness → Loop**.
4. The inner loop got fast; leverage moved to the outer loops.
5. The SDLC did not disappear — the verbs changed.
6. Ownership is expressed through accountable artifacts.
7. Code review is necessary but no longer sufficient.
8. Engineers move up the stack; implementation fluency still matters.

## Locked slide order

| # | Slug | Purpose in the narrative |
| --- | --- | --- |
| 1 | `one-promise-two-outcomes` | Cold open. Two real, opposite results. Productivity is conditional. |
| 2 | `ai-native-development` | Title and thesis. Frames a role-evolution talk, not a tools talk. |
| 3 | `five-modes` | Shared vocabulary: five operating modes by autonomy and control. |
| 4 | `where-are-you` | Audience calibration moment against those five modes. |
| 5 | `verification-gap` | Names the new bottleneck: confidence, not creation. |
| 6 | `four-layers` | The delegation model: Prompt → Context → Harness → Loop. |
| 7 | `three-loops` | Agent / engineering / product loops and their clocks. |
| 8 | `sdlc-verbs` | The lifecycle stayed; the verbs changed. |
| 9 | `full-sdlc-ownership` | Ownership made concrete as seven accountable artifacts. |
| 10 | `start-with-intent` | Walkthrough part 1 — specification is engineering work. |
| 11 | `plan-constrain-delegate` | Walkthrough part 2 — challenge the plan, set the contract. |
| 12 | `verify-the-system` | Walkthrough part 3 — evidence, not diff-reading. |
| 13 | `change-assurance` | Code review → change assurance. |
| 14 | `engineer-stack` | What this means for each role. |
| 15 | `monday-morning` | Five concrete actions. |
| 16 | `own-the-outer-loops` | Close on the thesis, then stop. |

**Do not** add, remove, reorder, or materially rewrite these 16 slides without explicit approval from the speaker.

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
- fit in 1–2 sentences;
- never appear in audience mode output or in the PDF.
