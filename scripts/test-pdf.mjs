import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { spawn } from "node:child_process";

import { PDFDocument } from "pdf-lib";

const port = Number(process.env.TEST_PORT ?? 3210);
const baseUrl = process.env.TEST_BASE_URL ?? `http://127.0.0.1:${port}`;
const outputPath = path.join(process.cwd(), "artifacts", "Hany-Saad-AI-Native-Development-CognitionX-Egypt-2026.pdf");
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
  if (pdf.getPageCount() !== 16) {
    throw new Error(`Expected 16 PDF pages, received ${pdf.getPageCount()}`);
  }

  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(outputPath, bytes);
  console.log(`Verified 16-page PDF: ${outputPath}`);
} finally {
  server?.kill();
}