import { chromium } from "playwright";

/** Captures the deterministic all-slides route as a one-slide-per-page PDF. */
export async function generatePresentationPdf(baseUrl: string): Promise<Buffer> {
  const browser = await chromium.launch({
    headless: true,
    args: ["--disable-dev-shm-usage", "--no-sandbox"],
  });

  try {
    const page = await browser.newPage({ viewport: { width: 1600, height: 900 } });
    await page.emulateMedia({ colorScheme: "light", reducedMotion: "reduce" });
    await page.goto(`${baseUrl}/pdf-render`, { waitUntil: "networkidle" });
    await page.waitForSelector('[data-pdf-ready="true"]', { timeout: 30_000 });
    await page.evaluate(() => document.fonts.ready);

    const pdf = await page.pdf({
      displayHeaderFooter: false,
      height: "7.5in",
      margin: { bottom: "0", left: "0", right: "0", top: "0" },
      preferCSSPageSize: true,
      printBackground: true,
      width: "13.333in",
    });

    return Buffer.from(pdf);
  } finally {
    await browser.close();
  }
}