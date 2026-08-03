"use client";

import { Download, RefreshCw } from "lucide-react";
import { useEffect, useState } from "react";

const filename = "Hany-Saad-AI-Native-Development-CognitionX-Egypt-2026.pdf";
const progressMessages = [
  "Preparing slides",
  "Loading assets",
  "Rendering pages",
  "Building PDF",
];

type PdfState = "idle" | "loading" | "error";

export function PdfButton() {
  const [state, setState] = useState<PdfState>("idle");
  const [progressIndex, setProgressIndex] = useState(0);
  let buttonLabel = "Generate PDF";

  if (state === "loading") {
    buttonLabel = progressMessages[progressIndex];
  } else if (state === "error") {
    buttonLabel = "Retry PDF";
  }

  useEffect(() => {
    if (state !== "loading") {
      return;
    }

    const timer = window.setInterval(() => {
      setProgressIndex((index) => Math.min(index + 1, progressMessages.length - 1));
    }, 1400);

    return () => window.clearInterval(timer);
  }, [state]);

  async function generatePdf() {
    setState("loading");
    setProgressIndex(0);

    try {
      const response = await fetch("/api/generate-pdf", { method: "POST" });
      if (!response.ok) {
        throw new Error("PDF generation failed");
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = filename;
      link.click();
      URL.revokeObjectURL(url);
      setState("idle");
    } catch {
      setState("error");
    }
  }

  return (
    <button
      aria-label={state === "error" ? "Retry PDF generation" : "Generate PDF"}
      className="control-button pdf-button"
      data-state={state}
      disabled={state === "loading"}
      onClick={generatePdf}
      title={buttonLabel}
      type="button"
    >
      {state === "error" ? <RefreshCw aria-hidden="true" /> : <Download aria-hidden="true" />}
      <span>{buttonLabel}</span>
    </button>
  );
}