# Skill: Content Accuracy Review

Guards what the deck *claims*. Use when editing slide copy, speaker notes, or anything involving a number or a citation.

## Read first

[../docs/presentation-brief.md](../docs/presentation-brief.md) and [../docs/content-review-checklist.md](../docs/content-review-checklist.md).

## Evidence rules

| Claim | Only valid framing |
| --- | --- |
| `+55.8%` | Peng et al. 2023 — a controlled, self-contained task. Not a general speedup. |
| `−19%` | METR 2025 — experienced developers in mature repositories, in that study. Not "AI slows you down". |
| DORA 2025 | Adoption, trust, throughput, instability, and the systems around delivery. Not a productivity multiplier. |

- Numbers appear next to their condition, in the same visual group. Never alone.
- Sources live in `src/data/sources.ts` and are rendered from there. Never hard-code a citation into a slide.
- A source label belongs only on a slide that shows a number or a research claim.
- If a claim cannot be traced to `sources.ts`, either soften it to an opinion the speaker owns, or remove it.

## Do not fabricate

Statistics, quotes, attributions, study names, dates, event or partner logos, speaker portraits, customer references, or tool benchmarks. If an asset or figure is missing, keep the placeholder and flag it.

## Language pass

- One term per concept across the deck: *mode*, *loop*, *layer*, *artifact*, *evidence*, *delegation contract*, *change assurance*.
- Declarative, present tense, enterprise register.
- Replace absolutes with conditions: "always" → "when", "proves" → "in that study", "must" → "requires".
- Headline ≤ 8 words. Pull line ≤ 16 words. Body item ≤ 10 words.
- A junior engineer must understand every word; a senior engineer must not find it naive.

## Speaker notes

Notes are data in `src/data/slides.ts`. They say what the speaker *adds*, never what is already visible. One to two sentences. They must never render in audience mode or in the PDF — verify both after any notes change.

## Boundaries

- Do not restructure the deck. Content fixes only.
- If a requested wording change would overstate the evidence, refuse and propose an accurate alternative.
