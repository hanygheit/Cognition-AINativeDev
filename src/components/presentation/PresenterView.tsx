"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { RenderSlide } from "@/components/slides";
import { getSlide, SLIDE_COUNT } from "@/data/slides";
import { formatDuration } from "@/lib/utils";
import { KeyboardHelp } from "./KeyboardHelp";
import { PresenterControls } from "./PresenterControls";

async function toggleFullscreen() {
  if (document.fullscreenElement) await document.exitFullscreen();
  else await document.documentElement.requestFullscreen();
}

export function PresenterView() {
  const router = useRouter();
  const [current, setCurrent] = useState(1);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [showHelp, setShowHelp] = useState(false);
  const slide = getSlide(current)!;
  const nextSlide = getSlide(Math.min(current + 1, SLIDE_COUNT))!;

  useEffect(() => {
    const timer = window.setInterval(() => setElapsedSeconds((seconds) => seconds + 1), 1000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (["ArrowRight", " ", "PageDown"].includes(event.key)) {
        event.preventDefault();
        setCurrent((value) => Math.min(value + 1, SLIDE_COUNT));
      } else if (["ArrowLeft", "Backspace", "PageUp"].includes(event.key)) {
        event.preventDefault();
        setCurrent((value) => Math.max(value - 1, 1));
      } else if (event.key === "?") setShowHelp(true);
      else if (event.key === "Escape") setShowHelp(false);
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <main className="presenter-page">
      <div className="presenter-current"><RenderSlide id={current} /></div>
      <aside className="presenter-sidebar">
        <section className="next-preview">
          <p className="section-label">Next · {String(nextSlide.id).padStart(2, "0")}</p>
          <RenderSlide compact id={nextSlide.id} />
        </section>
        <section className="presenter-notes">
          <p className="section-label">Speaker notes</p>
          <h2>{slide.title}</h2>
          <p>{slide.notes}</p>
        </section>
        <section className="timing-card">
          <div><span>Elapsed</span><strong>{formatDuration(elapsedSeconds)}</strong></div>
          <div><span>Slide target</span><strong>{formatDuration(slide.durationSeconds)}</strong></div>
        </section>
      </aside>
      <PresenterControls
        current={current}
        elapsedSeconds={elapsedSeconds}
        onFullscreen={() => void toggleFullscreen()}
        onHelp={() => setShowHelp(true)}
        onNext={() => setCurrent((value) => Math.min(value + 1, SLIDE_COUNT))}
        onNotes={() => undefined}
        onOverview={() => router.push("/overview")}
        onPrevious={() => setCurrent((value) => Math.max(value - 1, 1))}
        onRestartTimer={() => setElapsedSeconds(0)}
      />
      {showHelp && <KeyboardHelp onClose={() => setShowHelp(false)} />}
    </main>
  );
}