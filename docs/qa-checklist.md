# QA Checklist

## Automated

```powershell
npm run typecheck
npm run lint
npm run build
npm run test:pdf     # requires: npx playwright install chromium
```

`test:pdf` starts the production server, calls `/api/generate-pdf`, asserts exactly 16 pages, and writes `artifacts/Hany-Saad-AI-Native-Development-CognitionX-Egypt-2026.pdf`.

## Routes

- [ ] `/` redirects to `/present/1`
- [ ] `/present/1` … `/present/16` all render
- [ ] `/present/0`, `/present/17`, `/present/abc` return 404 rather than crashing
- [ ] `/overview` renders 16 thumbnails, each linking to its slide
- [ ] `/presenter` renders current slide, next preview, notes, timers
- [ ] `/pdf-render` renders 16 stacked pages with no controls
- [ ] `POST /api/generate-pdf` returns `application/pdf`

## Navigation

- [ ] `→` / `Space` / `PageDown` advance; `←` / `Backspace` / `PageUp` go back
- [ ] `Home` / `End` jump to first / last
- [ ] Number + `Enter` jumps to a slide; the buffer clears itself
- [ ] Bounds are respected at slides 1 and 16 (no dead route)
- [ ] `F` fullscreen, `O` overview, `N` notes, `P` presenter, `?` help, `Esc` closes overlays
- [ ] Touch swipe left/right works and does not fire on a tap

## Presentation quality

- [ ] 16:9 preserved at 1280×720, 1920×1080, 2560×1440, and an ultrawide viewport
- [ ] No text clipping or overflow on any slide at any of those sizes
- [ ] Controls auto-hide after ~3s of inactivity and return on pointer move
- [ ] Controls never obscure slide content when visible
- [ ] Every slide's reveal sequence completes without a click
- [ ] With `prefers-reduced-motion: reduce`, all slides render final state instantly
- [ ] `/overview` thumbnails render final state (no animation)

## PDF

- [ ] Exactly 16 pages
- [ ] 13.333in × 7.5in, no margins, headers, or footers
- [ ] No control bar, no help modal, no number-jump chip
- [ ] No speaker notes anywhere
- [ ] Every slide is in its final animated state
- [ ] Fonts are embedded; local images resolve; the LinkedIn codes on slides 1 and 16 and repository code on slide 16 decode correctly

## Accessibility

- [ ] Every interactive control has an accessible name
- [ ] Visible focus ring on all controls
- [ ] Contrast ≥ 4.5:1 for body text, ≥ 3:1 for large text
- [ ] No meaning conveyed by colour alone
- [ ] Images have meaningful `alt`; decorative motifs are `aria-hidden`

## Console

- [ ] No errors or warnings on any route
- [ ] No hydration mismatch warnings
- [ ] No 404s for fonts or assets
