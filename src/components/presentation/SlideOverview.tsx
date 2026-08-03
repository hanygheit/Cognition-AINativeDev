import Link from "next/link";

import { RenderSlide } from "@/components/slides";
import { slides } from "@/data/slides";

export function SlideOverview() {
  return (
    <main className="overview-page">
      <header>
        <div><p className="eyebrow">16 slides · 28 minutes</p><h1>Slide overview</h1></div>
        <Link href="/present/1">Start presentation</Link>
      </header>
      <div className="overview-grid">
        {slides.map((slide) => (
          <div className="overview-item" key={slide.id}>
            <RenderSlide compact id={slide.id} />
            <Link
              aria-label={`Open slide ${slide.id}: ${slide.title}`}
              className="overview-link"
              href={`/present/${slide.id}`}
            />
            <span>{String(slide.id).padStart(2, "0")} · {slide.title}</span>
          </div>
        ))}
      </div>
    </main>
  );
}