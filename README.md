# AI-Native Development — CognitionX Egypt 2026

**Speaker:** Hany Saad — Senior Engineering Manager, ITWorx  
**Event:** CognitionX Egypt, 3 August 2026  
**Session:** AI-Native Development: From Writing Code to Owning the Full SDLC

A production-quality, 18-slide 16:9 web presentation built with Next.js 16, React 19, TypeScript, and Tailwind CSS. Features CSS-only reveal animations, a full presenter mode, slide overview, and server-side PDF export via Playwright Chromium.

## Tech Stack

- **Framework:** Next.js 16 App Router, React 19, strict TypeScript
- **Styling:** Tailwind CSS v4, Outfit + JetBrains Mono fonts
- **Icons:** lucide-react
- **PDF:** Playwright Chromium (server-side, deterministic)
- **Animation:** CSS-only reveals — no click steps, motion-safe by default

## Quick Start

```bash
npm install
npm run assets:generate
npx playwright install chromium
npm run dev
```

Open `http://localhost:3000`; the root redirects to slide 1.

## Routes

| Route | Purpose |
|---|---|
| `/present/1` – `/present/18` | Audience presentation |
| `/presenter` | Current slide + next preview, notes, and timer |
| `/overview` | All 18 slide thumbnails |
| `/pdf-render` | Deterministic all-slides capture surface |
| `/api/generate-pdf` | Server-side PDF endpoint |

**Keyboard controls:** Arrow keys, Space, Page Up/Down, Home, End, `F` (fullscreen), `O` (overview), `N` (notes), `P` (presenter), `?` (help), Escape, and number + Enter to jump. Touch swipe and on-screen previous/next controls are also available.

## Generate PDF

Use **Generate PDF** in the control bar, or run the integration test after a production build:

```bash
npm run build
npm run test:pdf
```

The API launches Playwright Chromium, waits for local fonts and images, captures `/pdf-render`, and returns `Hany-Saad-AI-Native-Development-CognitionX-Egypt-2026.pdf`. The test starts the production server, calls the endpoint, verifies exactly 18 pages, decodes every rendered QR code, and writes the result under `artifacts/`.

### Hosting Requirement

The deployment target must permit a Node.js runtime to launch headless Chromium. Install browser binaries during deployment:

```bash
npx playwright install chromium
# Linux containers may additionally need:
npx playwright install --with-deps chromium
```

Serverless targets that prohibit child processes cannot run this endpoint. In that environment, deploy to a container or Node host with Chromium available.

## Validation

```bash
npm run typecheck
npm run lint
npm run build
npm run test:pdf
```

## Project Rules

`AGENTS.md` is the canonical contract for humans and AI agents. It indexes the supporting documents:

- `docs/presentation-brief.md` — thesis, locked 18-slide order, evidence framing
- `docs/design-system.md` — themes, tokens, typography, layout
- `docs/animation-rules.md` — reveal system and approved per-slide sequences
- `docs/content-review-checklist.md` — per-slide content bar
- `docs/qa-checklist.md` — release verification steps
- `docs/pdf-generation.md` — PDF pipeline contract
- `skills/` — review workflows for deck, single-slide design, and content accuracy

## Evidence

- **Peng et al., Microsoft Research / arXiv 2023** — controlled study reporting 55.8% faster completion for a self-contained JavaScript HTTP server task.
- **METR 2025** — experienced developers working in mature repositories took 19% longer in that study context.
- **DORA 2025** — research on AI adoption, trust, throughput, stability, verification, and delivery systems.

Results describe specific studies and conditions; they are not universal productivity guarantees.

## Assets

The deck uses a generated abstract speaker placeholder and verified SVG QR codes for the speaker's LinkedIn profile and this repository. Replace the portrait only when the real local asset is supplied. See `public/assets/README.md` for filenames and optional event/venue assets.
