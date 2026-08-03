"use client";

import {
  ArrowLeft,
  ArrowRight,
  Expand,
  Grid2X2,
  HelpCircle,
  NotebookText,
  RotateCcw,
} from "lucide-react";

import { SLIDE_COUNT } from "@/data/slides";
import { formatDuration } from "@/lib/utils";
import { PdfButton } from "./PdfButton";
import { ProgressArc } from "./ProgressArc";

type PresenterControlsProps = {
  current: number;
  elapsedSeconds: number;
  onFullscreen: () => void;
  onHelp: () => void;
  onNext: () => void;
  onNotes: () => void;
  onOverview: () => void;
  onPrevious: () => void;
  onRestartTimer: () => void;
};

export function PresenterControls({
  current,
  elapsedSeconds,
  onFullscreen,
  onHelp,
  onNext,
  onNotes,
  onOverview,
  onPrevious,
  onRestartTimer,
}: PresenterControlsProps) {
  const timerState = elapsedSeconds >= 1680 ? "hard" : elapsedSeconds >= 1500 ? "warning" : "normal";

  return (
    <nav aria-label="Presentation controls" className="presenter-controls">
      <button aria-label="Previous slide" disabled={current === 1} onClick={onPrevious} title="Previous slide" type="button"><ArrowLeft aria-hidden="true" /></button>
      <ProgressArc current={current} total={SLIDE_COUNT} />
      <button aria-label="Next slide" disabled={current === SLIDE_COUNT} onClick={onNext} title="Next slide" type="button"><ArrowRight aria-hidden="true" /></button>
      <div className="control-divider" />
      <button aria-label="Open slide overview" onClick={onOverview} title="Overview" type="button"><Grid2X2 aria-hidden="true" /></button>
      <button aria-label="Toggle fullscreen" onClick={onFullscreen} title="Fullscreen" type="button"><Expand aria-hidden="true" /></button>
      <button aria-label="Toggle speaker notes" onClick={onNotes} title="Speaker notes" type="button"><NotebookText aria-hidden="true" /></button>
      <button aria-label="Restart timer" onClick={onRestartTimer} title="Restart timer" type="button"><RotateCcw aria-hidden="true" /></button>
      <span aria-label={`Elapsed time ${formatDuration(elapsedSeconds)}`} className={`elapsed-timer timer-${timerState}`}>
        {formatDuration(elapsedSeconds)}
      </span>
      <PdfButton />
      <button aria-label="Show keyboard help" onClick={onHelp} title="Keyboard help" type="button"><HelpCircle aria-hidden="true" /></button>
    </nav>
  );
}