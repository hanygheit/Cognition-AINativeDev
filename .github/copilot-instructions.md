# GitHub Copilot Instructions

Before planning, implementing, reviewing, or suggesting changes:

- Read and follow the canonical project contract in [AGENTS.md](../AGENTS.md). It indexes every other rule document.
- Use [docs/presentation-brief.md](../docs/presentation-brief.md) for the thesis, the locked 16-slide order, and evidence framing.
- Use [docs/design-system.md](../docs/design-system.md) for themes, tokens, typography, and layout rules.
- Use [docs/animation-rules.md](../docs/animation-rules.md) before adding or changing any motion.
- Use [docs/pdf-generation.md](../docs/pdf-generation.md) before touching `/pdf-render`, `src/lib/pdf.ts`, or the PDF route.
- Use [docs/qa-checklist.md](../docs/qa-checklist.md) to verify work, and [README.md](../README.md) for setup, routes, and Chromium hosting requirements.
- Use [public/assets/README.md](../public/assets/README.md) before adding or replacing presentation assets.

For review work, follow the matching skill:

- [skills/presentation-review.md](../skills/presentation-review.md) — full deck pass
- [skills/slide-design-review.md](../skills/slide-design-review.md) — single-slide visual pass
- [skills/content-accuracy-review.md](../skills/content-accuracy-review.md) — copy, claims, and citations

Hard limits: do not add, remove, or reorder slides; do not fabricate evidence or assets; do not add click-gated animation steps; do not replace server-side PDF generation with browser print.

Do not duplicate these documents in generated guidance. Update the owning document when a project rule or workflow changes.