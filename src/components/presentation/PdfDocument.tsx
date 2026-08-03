"use client";

import { useEffect, useState } from "react";

import { RenderSlide } from "@/components/slides";
import { slides } from "@/data/slides";

export function PdfDocument() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    async function waitForAssets() {
      await document.fonts.ready;
      const images = Array.from(document.images);
      await Promise.all(
        images.map(async (image) => {
          try {
            await image.decode();
          } catch {
            // A failed image is allowed to resolve so the PDF route can expose the visible fallback state.
          }
        }),
      );
      setReady(true);
    }

    void waitForAssets();
  }, []);

  return (
    <main className="pdf-document" data-pdf-ready={ready ? "true" : "false"}>
      {slides.map((slide) => <RenderSlide className="pdf-slide" id={slide.id} key={slide.id} />)}
    </main>
  );
}