const modes = [
  ["1", "Autocomplete", "Predicts local code"],
  ["2", "AI Pair", "Drafts while you integrate"],
  ["3", "Vibe Mode", "Optimizes for speed and exploration"],
  ["4", "Bounded Agent", "Executes a specified, testable task"],
  ["5", "AI-Native Workflow", "The team’s SDLC assumes agents exist"],
];

export function Slide03Modes() {
  return (
    <div className="standard-slide modes-slide">
      <header>
        <p className="eyebrow">Operating modes, not a maturity ladder</p>
        <h1>Five Modes of AI Development</h1>
      </header>
      <div className="mode-spectrum">
        {modes.map(([number, title, detail]) => (
          <section className="mode-item" key={title}>
            <span className="mode-number">{number}</span>
            <h2>{title}</h2>
            <p>{detail}</p>
          </section>
        ))}
      </div>
      <div className="control-strength" aria-label="Control strength increases with autonomy">
        <span>More autonomy</span>
        <div />
        <span>Stronger controls</span>
      </div>
      <p className="slide-pull-line">
        More autonomy requires stronger specification, boundaries, evidence, and accountability.
      </p>
      <p className="technical-strip">
        delegated scope · human involvement · appropriate use · accountability · required controls
      </p>
    </div>
  );
}