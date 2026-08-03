import { getSource } from "@/data/sources";

export function Slide05VerificationGap() {
  const source = getSource("dora-2025");

  return (
    <div className="standard-slide verification-slide">
      <header>
        <p className="eyebrow">The new bottleneck is confidence</p>
        <h1>The Verification Gap</h1>
      </header>
      <div className="verification-chart">
        <div className="chart-label chart-label-generation">
          <strong>Generation speed ↑</strong>
          <span>Creation time ↓</span>
        </div>
        <div className="chart-label chart-label-confidence">
          <strong>Delivery confidence</strong>
          <span>Auditing and verification ↑</span>
        </div>
        <svg aria-label="Generation capacity rises faster than delivery confidence" viewBox="0 0 1000 390">
          <defs>
            <linearGradient id="gap" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0" stopColor="#f5a524" stopOpacity="0.25" />
              <stop offset="1" stopColor="#f5a524" stopOpacity="0.03" />
            </linearGradient>
          </defs>
          <path d="M40 340 C 260 330, 410 290, 530 205 C 680 100, 825 55, 960 25 L960 218 C770 205, 630 230, 510 270 C330 330, 180 338, 40 340Z" fill="url(#gap)" />
          <path className="generation-line" d="M40 340 C260 330, 410 290, 530 205 C680 100, 825 55, 960 25" />
          <path className="confidence-line" d="M40 340 C220 335, 370 320, 510 270 C650 220, 800 202, 960 218" />
        </svg>
        <span className="gap-label">Verification Gap</span>
      </div>
      <p className="slide-pull-line">Faster output does not automatically mean faster delivery.</p>
      <p className="technical-strip">review effort · rework · escaped defects · delivery instability · trust</p>
      <small className="source-label">{source?.shortLabel}</small>
    </div>
  );
}