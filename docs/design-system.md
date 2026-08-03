# Design System

Visual direction: **light editorial enterprise keynote**. Think printed conference programme, not dashboard.

## Themes

Themes are set per slide in `src/data/slides.ts` and applied by `SlideFrame` as `.slide-theme-*`.

| Theme | Used by | Role |
| --- | --- | --- |
| `paper` | 13 slides | Default. Warm white editorial surface. |
| `dark` | slide 1 and slide 16's footer band | Hero and punctuation only. |
| `ink` | slide 13 | One mid-deck contrast beat. |
| `signal` | slide 16 | Amber close. |

Keep the deck **mostly light**. Adding a fourth dark slide requires a reason written into this file.

## Tokens

Declared in `src/app/globals.css` under `:root`. Use tokens, never raw hex, inside slide CSS.

| Token | Value | Meaning |
| --- | --- | --- |
| `--paper` | `#fbf9f6` | Primary slide surface |
| `--card` | `#ffffff` | Raised surface |
| `--navy` | `#132038` | Headlines, primary type |
| `--ink` | `#1f2328` | Body type |
| `--graphite` | `#141922` | Dark surfaces |
| `--steel` | `#5f6b7a` | Secondary type, captions |
| `--hairline` | `#e4ded5` | Dividers on paper |
| `--structure` | `#1d6f8b` | Structure, systems, diagram spine |
| `--structure-soft` | `#e5f0f4` | Structure fill |
| `--signal` | `#e0930f` | **Human control and key decisions only** |
| `--signal-soft` | `#fdf3e0` | Signal fill |
| `--danger` | `#b3403c` | Risk, redlines |
| `--success` | `#1f7a51` | Evidence satisfied |

### Colour meaning

- Amber (`--signal`) means *a human decides here*. Do not use it decoratively.
- Teal/blue (`--structure`) means *system, boundary, or flow*.
- Never encode meaning by colour alone — always pair with a label, number, or shape.

## Typography

- Display/body: **Outfit**. Mono/labels: **JetBrains Mono**.
- All slide type is sized in `cqw` against the 16:9 container. Never use `px` inside a slide.

| Role | Size | Notes |
| --- | --- | --- |
| Hero title (slides 1, 4) | `4.8–5.5cqw` | One idea only |
| Slide title `h1` | `3.5cqw` | Max two lines |
| Eyebrow | `1cqw` mono, uppercase | One short phrase |
| Lead / pull line | `1.55cqw` | The takeaway sentence |
| Body | `1.1–1.3cqw` | |
| Caption / source | `0.9cqw` minimum | **Never smaller.** |

Redesign the slide rather than shrinking core text below these sizes.

## Layout

- Slide padding: `4.4cqw` vertical, `5cqw` horizontal. Do not vary per slide.
- Rhythm: header → one dominant visual → one takeaway line. Nothing else competes.
- Generous whitespace. A slide should read in five seconds.
- Prefer one diagram over a grid of cards. Repeated card grids are a smell.
- Dividers are `1px` hairlines, not boxes. Avoid nested borders and heavy shadows.

## The motif

Nested control loops (concentric arcs/rings). It appears on the title, the four-layer model, the three loops, and the close. It is the only recurring decorative form.

## Forbidden

Robots, AI brains, neurons, circuit boards, code rain, glowing orbs, neon, cyberpunk/HUD chrome, terminal-console aesthetics, dense KPI dashboards, vendor logo strips, stock photography, remote fonts or images, emoji.
