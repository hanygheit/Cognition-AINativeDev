# Skill: Slide Design Review

Visual review of a single slide. Use when asked to polish, restyle, or fix the layout of a slide.

## Read first

[../docs/design-system.md](../docs/design-system.md) and [../docs/animation-rules.md](../docs/animation-rules.md).

## Inspect in this order

1. **Hierarchy.** Squint at the slide. Exactly one element should dominate. If two compete, demote one.
2. **Reading path.** Eyebrow → title → dominant visual → takeaway line. Anything outside that path is decoration and should be cut or quietened.
3. **Rhythm.** Padding `4.2cqw / 5cqw`. Gaps from a consistent scale. No one-off spacing values.
4. **Type scale.** Every size maps to a role in the design system. Nothing below `0.9cqw`. No `px` inside a slide.
5. **Colour discipline.** Amber only where a human decides. Teal for structure. Grey for support. No colour-only meaning.
6. **Surfaces.** Hairlines over boxes. At most one elevated surface per slide. No nested borders, no heavy shadows, no gradient fills beyond the theme background.
7. **Archetype.** If the slide is a grid of near-identical cards, ask whether a single diagram, a table, or a stack would say it better.
8. **Room test.** Render at 1280×720 and check legibility as if from 20 metres. Redesign before shrinking text.
9. **Motion.** One sequence, automatic, `250–600ms` steps, ends under `~1.2s`.

## Verify across surfaces

| Surface | Expectation |
| --- | --- |
| `/present/N` | Animated reveal, controls do not overlap content |
| `/overview` | Thumbnail is legible at small size and fully rendered |
| PDF page N | Identical to the final state of `/present/N` |
| Reduced motion | Renders final state immediately |

## Boundaries

- Change presentation, not meaning. Wording changes belong to the content review.
- No cyberpunk, HUD, neon, terminal, robot, brain, orb, gradient-heavy, or dashboard treatments.
- No remote fonts or images.
- Keep slides as server components; reveals are CSS classes plus `revealDelay()`.
