# AI-Native Development Conference Presentation

A production-quality 16:9 web presentation for Hany Saad's CognitionX Egypt 2026 session, **AI-Native Development: From Writing Code to Owning the Full SDLC**.

## Run Locally

```powershell
npm install
npm run assets:generate
npx playwright install chromium
npm run dev
```

Open `http://localhost:3000`; the root redirects to slide 1.

## Routes

- `/present/1` through `/present/16` — audience presentation
- `/presenter` — current slide, next preview, notes, and timer
- `/overview` — all slide thumbnails
- `/pdf-render` — deterministic all-slides capture surface
- `/api/generate-pdf` — server-side PDF endpoint

Keyboard controls include arrows, Space, Page Up/Down, Home, End, `F`, `O`, `N`, `P`, `?`, Escape, and number + Enter. Touch swipe and visible previous/next controls are also available.

## Generate PDF

Use **Generate PDF** in the control bar, or run the integration check after a production build:

```powershell
npm run build
npm run test:pdf
```

The API launches Playwright Chromium, waits for local fonts and images, captures `/pdf-render`, and returns `Hany-Saad-AI-Native-Development-CognitionX-Egypt-2026.pdf`. The test starts the production server, calls the endpoint, verifies exactly 16 pages, and writes the result under `artifacts/`.

### Hosting Requirement

The deployment target must permit a Node.js runtime to launch headless Chromium. Install browser binaries during deployment with `npx playwright install chromium`; Linux containers may require `npx playwright install --with-deps chromium`. Serverless targets that prohibit child processes cannot run this endpoint unchanged. In that environment, deploy the app to a container or Node host with Chromium rather than replacing PDF generation with browser print.

## Validation

```powershell
npm run typecheck
npm run lint
npm run build
npm run test:pdf
```

## Sources

- Peng et al., Microsoft Research / arXiv 2023 — controlled study reporting 55.8% faster completion for a self-contained JavaScript HTTP server task.
- METR 2025 — experienced developers working in mature repositories took 19% longer in that study context.
- DORA 2025 — research on AI adoption, trust, throughput, instability, verification, and delivery systems.

Results describe specific studies and conditions; they are not universal productivity guarantees.

## Assets

The deck currently uses a generated abstract speaker placeholder and a generated, verified LinkedIn QR. Replace the portrait only when the real local asset is supplied. See `public/assets/README.md` for filenames and optional event/venue assets.
