import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { spawn } from "node:child_process";

import jsQR from "jsqr";
import { PDFDocument } from "pdf-lib";
import { chromium } from "playwright";
import { PNG } from "pngjs";

const port = Number(process.env.TEST_PORT ?? 3210);
const baseUrl = process.env.TEST_BASE_URL ?? `http://127.0.0.1:${port}`;
const outputPath = path.join(process.cwd(), "artifacts", "Hany-Saad-AI-Native-Development-CognitionX-Egypt-2026.pdf");
const expectedQrTargets = new Map([
  ["https://www.linkedin.com/in/hanysaad/", 2],
  ["https://github.com/hanygheit/Cognition-AINativeDev", 1],
]);
let server;

async function waitForServer() {
  for (let attempt = 0; attempt < 60; attempt += 1) {
    try {
      const response = await fetch(`${baseUrl}/present/1`);
      if (response.ok) return;
    } catch {
      // The production server is still starting.
    }
    await new Promise((resolve) => setTimeout(resolve, 500));
  }
  throw new Error(`Timed out waiting for ${baseUrl}`);
}

async function verifyRenderedQrCodes() {
  const browser = await chromium.launch({
    headless: true,
    args: ["--disable-dev-shm-usage", "--no-sandbox"],
  });

  try {
    const page = await browser.newPage({
      deviceScaleFactor: 3,
      viewport: { height: 900, width: 1600 },
    });
    await page.emulateMedia({ colorScheme: "light", reducedMotion: "reduce" });
    await page.goto(`${baseUrl}/pdf-render`, { waitUntil: "networkidle" });
    await page.waitForSelector('[data-pdf-ready="true"]', { timeout: 30_000 });

    const qrCodes = page.locator("img[data-qr-target]");
    const count = await qrCodes.count();
    const expectedCount = [...expectedQrTargets.values()].reduce((total, targetCount) => total + targetCount, 0);
    if (count !== expectedCount) {
      throw new Error(`Expected ${expectedCount} rendered QR codes, found ${count}`);
    }

    const actualTargetCounts = new Map();
    for (let index = 0; index < count; index += 1) {
      const qrCode = qrCodes.nth(index);
      const expectedTarget = await qrCode.getAttribute("data-qr-target");
      const screenshot = await qrCode.screenshot({ animations: "disabled" });
      const png = PNG.sync.read(screenshot);
      const decoded = jsQR(new Uint8ClampedArray(png.data), png.width, png.height);

      if (!expectedTarget || decoded?.data !== expectedTarget) {
        throw new Error(
          `Rendered QR verification failed: expected ${expectedTarget ?? "a target"}, decoded ${decoded?.data ?? "nothing"}`,
        );
      }

      actualTargetCounts.set(expectedTarget, (actualTargetCounts.get(expectedTarget) ?? 0) + 1);
      console.log(`Verified rendered QR target: ${expectedTarget}`);
    }

    for (const [target, expectedTargetCount] of expectedQrTargets) {
      const actualTargetCount = actualTargetCounts.get(target) ?? 0;
      if (actualTargetCount !== expectedTargetCount) {
        throw new Error(`Expected ${expectedTargetCount} rendered QR codes for ${target}, found ${actualTargetCount}`);
      }
    }
  } finally {
    await browser.close();
  }
}

try {
  if (!process.env.TEST_BASE_URL) {
    const nextBin = path.join(process.cwd(), "node_modules", "next", "dist", "bin", "next");
    server = spawn(process.execPath, [nextBin, "start", "-p", String(port)], { stdio: "inherit" });
  }

  await waitForServer();
  const response = await fetch(`${baseUrl}/api/generate-pdf`, { method: "POST" });
  if (!response.ok) throw new Error(`PDF endpoint returned ${response.status}: ${await response.text()}`);

  const bytes = new Uint8Array(await response.arrayBuffer());
  const pdf = await PDFDocument.load(bytes);
  if (pdf.getPageCount() !== 18) {
    throw new Error(`Expected 18 PDF pages, received ${pdf.getPageCount()}`);
  }

  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(outputPath, bytes);
  await verifyRenderedQrCodes();
  console.log(`Verified 18-page PDF: ${outputPath}`);
} finally {
  server?.kill();
}
