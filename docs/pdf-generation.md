# PDF Generation

## Contract

- One 16:9 slide per page, 17 pages, `13.333in × 7.5in`, zero margins.
- No control bar, no notes, no help modal, no intermediate animation state.
- Filename is fixed: `Hany-Saad-AI-Native-Development-CognitionX-Egypt-2026.pdf`.
- Generation is **server-side Playwright only**. `window.print()` and browser print dialogs are not acceptable substitutes.

## How it works

| Piece | File | Responsibility |
| --- | --- | --- |
| Route | `src/app/api/generate-pdf/route.ts` | `GET`/`POST`, sets `Content-Disposition`, maps failure to a 500 with an actionable message |
| Renderer | `src/lib/pdf.ts` | Launches Chromium, emulates light + reduced motion, waits for readiness, calls `page.pdf()` |
| Surface | `src/app/pdf-render/page.tsx` → `PdfDocument` | Renders all 17 slides stacked, sets `data-pdf-ready` after fonts and images settle |
| Test | `scripts/test-pdf.mjs` | Boots the production server, calls the endpoint, asserts 17 pages, decodes all three QR placements, writes `artifacts/` |

The renderer blocks on `[data-pdf-ready="true"]`, so anything asynchronous a slide needs must be awaited inside `PdfDocument` before that flag flips.

## Determinism rules

1. **Base CSS is the final state.** Reveal keyframes animate *from* hidden. `.pdf-slide` sets `animation: none`, so pages render complete.
2. No `IntersectionObserver`, viewport, or scroll-driven reveals — all 17 slides are laid out at once.
3. No `Date`, `Math.random`, or client-only values inside slide content.
4. Local assets only. A remote font or image will either stall or silently drop from the PDF.
5. Page break control lives in `.pdf-slide { break-after: page }` plus `@page { size: 13.333in 7.5in; margin: 0 }`. Changing either can produce 17 or 32 pages — always re-run `npm run test:pdf`.

## Runtime requirement

The endpoint needs a Node.js runtime allowed to spawn headless Chromium.

```powershell
npx playwright install chromium
# Linux containers:
npx playwright install --with-deps chromium
```

Serverless targets that forbid child processes cannot run this endpoint unchanged. Deploy to a container or Node host with Chromium available — do **not** replace PDF generation with browser print.

## Troubleshooting

| Symptom | Cause |
| --- | --- |
| 500 "Confirm that Playwright Chromium is installed" | Browser binary missing on the host |
| Timeout on `data-pdf-ready` | An image or font never resolves; check `public/assets` |
| Page count ≠ 17 | A slide overflowed `7.5in` or a break rule changed |
| Blank/half-drawn diagrams | A reveal animation is not disabled under `.pdf-slide` |
| Missing background colours | `printBackground` was disabled |
