# AI-Native Development Presentation

Canonical contract for humans and agents working in this repository.

## Where the rules live

| Topic | Document |
| --- | --- |
| Thesis, locked slide order, evidence rules, tone | [docs/presentation-brief.md](docs/presentation-brief.md) |
| Themes, tokens, typography, layout, forbidden imagery | [docs/design-system.md](docs/design-system.md) |
| Motion budget, reveal system, per-slide sequences | [docs/animation-rules.md](docs/animation-rules.md) |
| Wording gates and banned phrasing | [docs/content-review-checklist.md](docs/content-review-checklist.md) |
| PDF contract, determinism, runtime requirements | [docs/pdf-generation.md](docs/pdf-generation.md) |
| Verification steps before declaring work complete | [docs/qa-checklist.md](docs/qa-checklist.md) |
| Setup, routes, commands, hosting | [README.md](README.md) |
| Asset filenames and rules | [public/assets/README.md](public/assets/README.md) |

Review workflows: [skills/presentation-review.md](skills/presentation-review.md), [skills/slide-design-review.md](skills/slide-design-review.md), [skills/content-accuracy-review.md](skills/content-accuracy-review.md).

Update the owning document when a rule changes. Do not restate these rules elsewhere.

## Project Contract

- Build a conference presentation app, not a dashboard, landing page, document, or generic slide editor.
- Use Next.js App Router, React, strict TypeScript, Tailwind CSS, lucide-react, and Playwright unless the repository establishes an equivalent compatible pattern.
- Preserve the locked order and core content of exactly 17 slides. Do not add, remove, reorder, or materially rewrite slides without explicit approval.
- Preserve a 16:9 stage at every audience viewport. Favor sparse compositions, large-room readability, high contrast, and crisp diagrams over dense text or card grids.
- Keep the visual direction light editorial enterprise keynote, with nested control loops as the recurring motif. Do not add robot, AI-brain, code-rain, decorative orb, or vendor-logo-strip imagery.
- Use only local assets in the final build. Never fabricate a speaker portrait, citation, quote, statistic, event logo, or partner logo.

## Architecture Boundaries

- Keep slide metadata, durations, notes, themes, and sources in `src/data/slides.ts`; keep source details in `src/data/sources.ts`.
- Implement each slide as its own component under `src/components/slides/`. Keep navigation, controls, framing, overview, presenter UI, and PDF controls under `src/components/presentation/`.
- Keep slide components as React Server Components. Interactivity and timers belong to the presentation shell, not to slides.
- Treat presenter notes as data, separate from visual slide content. Never expose notes in audience mode or PDF output.
- Support stable routes `/present/1` through `/present/17`, plus `/presenter`, `/overview`, `/pdf-render`, and `/api/generate-pdf`. Reject or redirect invalid slide numbers safely.
- Keep audience rendering, presenter rendering, and deterministic PDF rendering distinct. Interactive controls and intermediate animation states must not appear in `/pdf-render`.
- Maintain keyboard, mouse, touch, deep-link, fullscreen, overview, notes, presenter, timer, and number-jump behavior when changing navigation.

## Animation Contract

- Reveals are CSS-only, declared in `src/app/globals.css`, applied with `reveal*` classes and `revealDelay()` from `src/lib/utils.ts`.
- An element's base CSS is its final state; keyframes animate from the hidden state. Disabling animation must always leave a complete slide.
- Motion runs once, automatically, on mount. Never add a click step to advance a reveal.
- Motion is disabled under `.pdf-slide`, `.slide-frame-compact`, and `prefers-reduced-motion: reduce`.

## Controls Contract

- The audience control bar is small, low-contrast, and auto-hides after inactivity; it returns on pointer movement or key press.
- Controls must not obscure slide content or animate slide content.
- Presenter mode keeps controls useful but visually secondary to the slide and notes.

## PDF Contract

- Generate PDF server-side with Playwright through `/api/generate-pdf`; never use `window.print()` or browser print as a substitute.
- Wait for fonts and local assets, disable motion and controls, render every slide in its final state, and return one 16:9 slide per page with no margins, headers, footers, controls, or notes.
- Preserve the filename `Hany-Saad-AI-Native-Development-CognitionX-Egypt-2026.pdf` and verify that the result has exactly 17 pages.
- Document Chromium/runtime requirements clearly when the deployment target cannot execute bundled headless Chromium.

## Content And Accessibility

- Keep evidence claims contextual. The `+55.8%`, `-19%`, and DORA references describe specific studies and conditions, not universal productivity guarantees.
- Keep speaker identity and portrait usage limited to slides 1 and 17. Use the supplied portrait only; otherwise retain a tasteful placeholder.
- Use semantic controls, descriptive labels, visible focus states, meaningful alt text, sufficient contrast, keyboard-first interaction, and reduced-motion behavior.
- Do not encode meaning by color alone. Keep source/footer text readable and redesign a slide rather than shrinking core text below conference-room scale.

## Working Rules

- Prefer small, focused changes that preserve the presentation system and existing visual language.
- Do not duplicate slide metadata, notes, navigation rules, or source text across routes and components.
- Do not introduce remote image or font dependencies, browser-print fallbacks, dense prose, or unrelated abstractions.
- When a requested change conflicts with locked content, evidence accuracy, accessibility, or deterministic PDF output, surface the conflict before proceeding.

## Validation

After dependencies are installed, run:

```powershell
npm run typecheck
npm run lint
npm run build
npm run test:pdf
```

Then work through [docs/qa-checklist.md](docs/qa-checklist.md) before declaring presentation work complete.
