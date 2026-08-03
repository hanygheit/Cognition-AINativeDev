import type { NextRequest } from "next/server";

import { generatePresentationPdf } from "@/lib/pdf";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const filename = "Hany-Saad-AI-Native-Development-CognitionX-Egypt-2026.pdf";

async function handleRequest(request: NextRequest) {
  try {
    const pdf = await generatePresentationPdf(request.nextUrl.origin);

    return new Response(new Uint8Array(pdf), {
      headers: {
        "Cache-Control": "no-store",
        "Content-Disposition": `attachment; filename="${filename}"`,
        "Content-Type": "application/pdf",
      },
    });
  } catch (error) {
    console.error("PDF generation failed", error);
    return Response.json(
      { error: "PDF generation failed. Confirm that Playwright Chromium is installed." },
      { status: 500 },
    );
  }
}

export const GET = handleRequest;
export const POST = handleRequest;