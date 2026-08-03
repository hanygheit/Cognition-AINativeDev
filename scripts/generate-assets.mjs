import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

import jsQR from "jsqr";
import { PNG } from "pngjs";
import QRCode from "qrcode";

const assetsDirectory = path.join(process.cwd(), "public", "assets");
const qrAssets = [
  {
    fileName: "qr-linkedin-hany-saad.svg",
    id: "linkedin-hany-saad",
    label: "Hany Saad on LinkedIn",
    payload: "https://www.linkedin.com/in/hanysaad/",
  },
  {
    fileName: "qr-presentation-repo.svg",
    id: "presentation-repository",
    label: "AI-Native Development presentation repository",
    payload: "https://github.com/hanygheit/Cognition-AINativeDev",
  },
];

const qrOptions = {
  color: { dark: "#132038", light: "#FFFFFF" },
  errorCorrectionLevel: "H",
  margin: 4,
};

function setPixel(png, x, y, color) {
  if (x < 0 || y < 0 || x >= png.width || y >= png.height) return;
  const offset = (png.width * y + x) << 2;
  png.data[offset] = color[0];
  png.data[offset + 1] = color[1];
  png.data[offset + 2] = color[2];
  png.data[offset + 3] = color[3] ?? 255;
}

function fillRect(png, x, y, width, height, color) {
  for (let row = y; row < y + height; row += 1) {
    for (let column = x; column < x + width; column += 1) {
      setPixel(png, column, row, color);
    }
  }
}

function drawRing(png, centerX, centerY, radius, thickness, color) {
  const minRadius = radius - thickness;
  const maxRadius = radius + thickness;
  for (let y = Math.max(0, centerY - maxRadius); y < Math.min(png.height, centerY + maxRadius); y += 1) {
    for (let x = Math.max(0, centerX - maxRadius); x < Math.min(png.width, centerX + maxRadius); x += 1) {
      const distance = Math.hypot(x - centerX, y - centerY);
      if (distance >= minRadius && distance <= maxRadius) setPixel(png, x, y, color);
    }
  }
}

async function generateSpeakerPlaceholder() {
  const png = new PNG({ width: 512, height: 512 });
  const graphite = [22, 25, 31, 255];
  const paper = [250, 248, 245, 255];
  const amber = [245, 165, 36, 255];

  fillRect(png, 0, 0, 512, 512, graphite);
  drawRing(png, 405, 105, 190, 2, [245, 165, 36, 115]);
  drawRing(png, 405, 105, 135, 2, [245, 165, 36, 80]);
  fillRect(png, 108, 166, 28, 184, paper);
  fillRect(png, 218, 166, 28, 184, paper);
  fillRect(png, 108, 245, 138, 27, paper);
  fillRect(png, 282, 166, 118, 27, amber);
  fillRect(png, 282, 166, 27, 94, amber);
  fillRect(png, 282, 233, 118, 27, amber);
  fillRect(png, 373, 233, 27, 117, amber);
  fillRect(png, 282, 323, 118, 27, amber);
  await writeFile(path.join(assetsDirectory, "speaker-placeholder.png"), PNG.sync.write(png));
}

async function generateEventPlaceholder() {
  const png = new PNG({ width: 1280, height: 720 });
  fillRect(png, 0, 0, 1280, 720, [22, 25, 31, 255]);
  fillRect(png, 0, 0, 22, 720, [245, 165, 36, 255]);
  drawRing(png, 1065, 95, 350, 3, [245, 165, 36, 105]);
  drawRing(png, 1065, 95, 255, 3, [245, 165, 36, 75]);
  drawRing(png, 1065, 95, 160, 3, [245, 165, 36, 55]);
  fillRect(png, 110, 238, 620, 18, [250, 248, 245, 230]);
  fillRect(png, 110, 285, 450, 12, [107, 114, 128, 255]);
  fillRect(png, 110, 322, 530, 12, [107, 114, 128, 210]);
  await writeFile(path.join(assetsDirectory, "cognitionx-placeholder.png"), PNG.sync.write(png));
}

async function generateAndVerifyQr({ fileName, id, label, payload }) {
  const verificationPng = await QRCode.toBuffer(payload, {
    ...qrOptions,
    type: "png",
    width: 1024,
  });
  const png = PNG.sync.read(verificationPng);
  const decoded = jsQR(new Uint8ClampedArray(png.data), png.width, png.height);
  if (decoded?.data !== payload) {
    throw new Error(`QR verification failed for ${fileName}: decoded ${decoded?.data ?? "nothing"}`);
  }

  const rawSvg = await QRCode.toString(payload, {
    ...qrOptions,
    type: "svg",
    width: 512,
  });
  const accessibleSvg = rawSvg
    .replace("<svg ", `<svg role="img" aria-labelledby="${id}-title ${id}-description" `)
    .replace(
      ">",
      `><title id="${id}-title">${label}</title><desc id="${id}-description">QR code linking to ${payload}</desc>`,
    );

  await writeFile(path.join(assetsDirectory, fileName), accessibleSvg, "utf8");
}

await mkdir(assetsDirectory, { recursive: true });
await Promise.all([
  generateSpeakerPlaceholder(),
  generateEventPlaceholder(),
  ...qrAssets.map(generateAndVerifyQr),
]);

console.log("Generated local assets and verified QR targets:");
for (const { fileName, payload } of qrAssets) {
  console.log(`- ${fileName}: ${payload}`);
}
