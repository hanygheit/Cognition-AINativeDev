# Animation Rules

Motion exists to control **reading order**, never to entertain.

## Hard rules

1. **No extra clicks.** Every reveal runs automatically when the slide mounts. Navigation is one key press per slide, always.
2. Animations run **once**. No loops, no infinite pulses, no hover choreography inside slide content.
3. Duration `250–600ms`. Total sequence per slide must finish under `~1.2s`.
4. Motion is limited to opacity, small `translateY`/`translateX` (`≤ 1.2cqw`), `scale` (`≥ 0.96`), and SVG `stroke-dashoffset` line draws.
5. Respect `prefers-reduced-motion`. Both duration *and delay* are neutralised globally.
6. Never animate the control bar into slide content, and never animate slide content in response to control-bar state.

## Implementation

Slides stay **React Server Components**. Reveals are pure CSS, declared once in `globals.css`:

```tsx
<p className="reveal reveal-up" style={revealDelay(120)}>…</p>
```

- `revealDelay(ms)` is in `src/lib/utils.ts` and sets the `--reveal-delay` custom property.
- Classes: `reveal-up`, `reveal-in` (fade only), `reveal-left`, `reveal-scale`, `reveal-draw` (SVG stroke), `reveal-grow` (width/height bars).
- The element's **base CSS is the final state**. Keyframes animate *from* the hidden state. Removing the animation therefore leaves the slide fully rendered — this is what makes the PDF deterministic.

## Where motion is disabled

| Surface | Behaviour |
| --- | --- |
| `/present/*` | Full reveal sequence on mount |
| `/presenter` | Full reveal sequence on the current slide |
| `/overview` (`.slide-frame-compact`) | Disabled — thumbnails render final state |
| `/pdf-render` (`.pdf-slide`) | Disabled — pages render final state |
| `prefers-reduced-motion: reduce` | Disabled globally |

## Stagger budget per slide

Base delay `0ms`, step `70–110ms`, hard cap `900ms` for the last element. Slides with more than eight revealed groups must reveal by *group*, not by item.

## Approved sequences

| Slide | Sequence |
| --- | --- |
| 1 | Eyebrow → title → subhead → quote → pillars → footer |
| 2 | Two evidence panels fade in, divider draws, question line last |
| 3 | Five mode columns left to right, then the control-strength arrow |
| 4 | Title, then the five options left to right |
| 5 | Axes → generation line draws → confidence line draws → gap fill → gap label |
| 6 | Rings appear inside-out, definitions follow top to bottom |
| 7 | Spine draws, inner loop first, then engineering, then product |
| 8 | Table rows reveal top to bottom |
| 9 | Artifact rows reveal one by one |
| 10 | Request → questions → acceptance strip |
| 11 | Plan column → redline column → delegation contract |
| 12 | Evidence items in order → release status → pull line |
| 13 | Assurance layers reveal top to bottom, quote last |
| 14 | Capability stem → capability top → roles |
| 15 | Five moves in order, aside and measurement strip last |
| 16 | Eyebrow → thesis → secondary → closing quote → footer band |
