import { revealDelay } from "@/lib/utils";

const modes = [
  ["1", "Autocomplete", "Predicts the next few lines"],
  ["2", "AI Pair", "Drafts while you integrate"],
  ["3", "Vibe Mode", "Optimizes for speed and exploration"],
  ["4", "Bounded Agent", "Executes a specified, testable task"],
  ["5", "AI-Native Workflow", "Team workflow assumes agents participate"],
];

export function Slide03Modes() {
  return (
    <div className="standard-slide modes-slide">
      <header>
        <p className="eyebrow reveal-in">Operating modes, not a maturity ladder</p>
        <h1 className="reveal-up" style={revealDelay(70)}>Five Modes of AI Development</h1>
      </header>
      <div className="mode-spectrum">
        {modes.map(([number, title, detail], index) => (
          <section className="mode-item reveal-up" key={title} style={revealDelay(220 + index * 90)}>
            <span className="mode-number">{number}</span>
            <h2>{title}</h2>
            <p>{detail}</p>
          </section>
        ))}
      </div>
      <div
        aria-label="Control strength increases with autonomy"
        className="control-strength reveal-in"
        style={revealDelay(700)}
      >
        <span>More autonomy</span>
        <div />
        <span>Stronger controls</span>
      </div>
      <p className="slide-pull-line reveal-up" style={revealDelay(780)}>
        More autonomy requires stronger specification, boundaries, evidence, and accountability.
      </p>
      <p className="technical-strip reveal-in" style={revealDelay(860)}>
        Every mode defines: delegated scope · human involvement · required controls · accountability
      </p>
    </div>
  );
}