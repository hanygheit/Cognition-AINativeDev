"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { RenderSlide } from "@/components/slides";
import { getSlide, SLIDE_COUNT } from "@/data/slides";
import { slidePath } from "@/lib/navigation";
import { KeyboardHelp } from "./KeyboardHelp";
import { PresenterControls } from "./PresenterControls";

type PresentationShellProps = {
  readonly slideId: number;
};

type NavigationRouter = {
  push: (href: string) => void;
};

async function toggleFullscreen() {
  if (document.fullscreenElement) {
    await document.exitFullscreen();
  } else {
    await document.documentElement.requestFullscreen();
  }
}

function navigateToSlide(router: NavigationRouter, current: number, target: number) {
  if (target >= 1 && target <= SLIDE_COUNT && target !== current) {
    router.push(slidePath(target));
  }
}

export function PresentationShell({ slideId }: PresentationShellProps) {
  const router = useRouter();
  const [showHelp, setShowHelp] = useState(false);
  const [showNotes, setShowNotes] = useState(false);
  const [controlsActive, setControlsActive] = useState(true);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [numberBuffer, setNumberBuffer] = useState("");
  const pointerStart = useRef<number | null>(null);
  const controlsTimer = useRef<number | null>(null);
  const numberBufferRef = useRef("");
  const slide = getSlide(slideId);

  useEffect(() => {
    const timer = window.setInterval(() => setElapsedSeconds((seconds) => seconds + 1), 1000);
    return () => window.clearInterval(timer);
  }, []);

  function goTo(target: number) {
    navigateToSlide(router, slideId, target);
  }

  useEffect(() => {
    function navigateTo(target: number) {
      navigateToSlide(router, slideId, target);
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (
        event.target instanceof HTMLElement &&
        event.target.matches("input, textarea, select")
      ) return;

      if (/^\d$/.test(event.key)) {
        numberBufferRef.current = `${numberBufferRef.current}${event.key}`.slice(-2);
        setNumberBuffer(numberBufferRef.current);
        return;
      }

      if (event.key === "Enter" && numberBufferRef.current) {
        navigateTo(Number(numberBufferRef.current));
        numberBufferRef.current = "";
        setNumberBuffer("");
        return;
      }

      const navigationTargets: Record<string, number> = {
        ArrowRight: slideId + 1,
        " ": slideId + 1,
        PageDown: slideId + 1,
        ArrowLeft: slideId - 1,
        Backspace: slideId - 1,
        PageUp: slideId - 1,
        Home: 1,
        End: SLIDE_COUNT,
      };
      const navigationTarget = navigationTargets[event.key];
      if (navigationTarget !== undefined) {
        event.preventDefault();
        navigateTo(navigationTarget);
        return;
      }

      const shortcutKey = event.key.length === 1 ? event.key.toLowerCase() : event.key;
      switch (shortcutKey) {
        case "f": void toggleFullscreen(); break;
        case "o": router.push("/overview"); break;
        case "n": setShowNotes((value) => !value); break;
        case "p": router.push("/presenter"); break;
        case "?": setShowHelp((value) => !value); break;
        case "Escape":
          setShowHelp(false);
          setShowNotes(false);
          break;
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [router, slideId]);

  function revealControls() {
    setControlsActive(true);
    if (controlsTimer.current) window.clearTimeout(controlsTimer.current);
    controlsTimer.current = window.setTimeout(() => setControlsActive(false), 3000);
  }

  function finishSwipe(clientX: number) {
    if (pointerStart.current === null) return;
    const distance = clientX - pointerStart.current;
    if (Math.abs(distance) > 60) goTo(slideId + (distance < 0 ? 1 : -1));
    pointerStart.current = null;
  }

  if (!slide) return null;

  return (
    <main
      className="presentation-stage"
      onMouseMove={revealControls}
      onPointerDown={(event) => { pointerStart.current = event.clientX; }}
      onPointerUp={(event) => finishSwipe(event.clientX)}
    >
      <RenderSlide id={slideId} />
      {numberBuffer && <div className="number-jump" aria-live="polite">Jump to {numberBuffer}</div>}
      {showNotes && <aside className="audience-notes"><strong>Speaker notes</strong><p>{slide.notes}</p></aside>}
      <div className={controlsActive ? "controls-visible" : "controls-hidden"}>
        <PresenterControls
          current={slideId}
          elapsedSeconds={elapsedSeconds}
          onFullscreen={() => void toggleFullscreen()}
          onHelp={() => setShowHelp(true)}
          onNext={() => goTo(slideId + 1)}
          onNotes={() => setShowNotes((value) => !value)}
          onOverview={() => router.push("/overview")}
          onPrevious={() => goTo(slideId - 1)}
          onRestartTimer={() => setElapsedSeconds(0)}
        />
      </div>
      {showHelp && <KeyboardHelp onClose={() => setShowHelp(false)} />}
    </main>
  );
}