import type { CSSProperties } from "react";

import { getSource } from "@/data/sources";
import { revealDelay } from "@/lib/utils";

/** Longer than either path, so a single dash covers the whole stroke while drawing. */
const drawLength = { "--draw-length": "1400" } as CSSProperties;

export function Slide05VerificationGap() {
  const source = getSource("dora-2025");

  return (
    <div className="standard-slide verification-slide">
      <header>
        <p className="eyebrow reveal-in">The new bottleneck is confidence</p>
        <h1 className="reveal-up" style={revealDelay(70)}>The Verification Gap</h1>
      </header>
      <div className="verification-chart">
        <div className="chart-label chart-label-generation reveal-in" style={revealDelay(900)}>
          <strong>Generation capacity</strong>
          <span>Code produced per hour</span>
        </div>
        <div className="chart-label chart-label-confidence reveal-in" style={revealDelay(1080)}>
          <strong>Verification capacity</strong>
          <span>Confidence earned per hour</span>
        </div>
        <svg aria-label="Generation capacity rises faster than verification capacity" viewBox="0 0 1000 390">
          <defs>
            <linearGradient id="gap" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0" stopColor="#e0930f" stopOpacity="0.24" />
              <stop offset="1" stopColor="#e0930f" stopOpacity="0.03" />
            </linearGradient>
          </defs>
          <path
            className="gap-fill reveal-in"
            d="M40 340 C 260 330, 410 290, 530 205 C 680 100, 825 55, 960 25 L960 218 C770 205, 630 230, 510 270 C330 330, 180 338, 40 340Z"
            style={revealDelay(1000)}
          />
          <path
            className="generation-line reveal-draw"
            d="M40 340 C260 330, 410 290, 530 205 C680 100, 825 55, 960 25"
            style={{ ...drawLength, ...revealDelay(180) }}
          />
          <path
            className="confidence-line reveal-in"
            d="M40 340 C220 335, 370 320, 510 270 C650 220, 800 202, 960 218"
            style={{ ...revealDelay(760), "--reveal-duration": "520ms" } as CSSProperties}
          />
        </svg>
        <span className="gap-label reveal-scale" style={revealDelay(1200)}>Verification gap</span>
      </div>
      <p className="slide-pull-line reveal-up" style={revealDelay(1320)}>
        Faster output does not automatically mean faster delivery.
      </p>
      <p className="technical-strip reveal-in" style={revealDelay(1400)}>
        review effort · rework · escaped defects · delivery instability · trust
      </p>
      <small className="source-label reveal-in" style={revealDelay(1400)}>{source?.shortLabel}</small>
    </div>
  );
}