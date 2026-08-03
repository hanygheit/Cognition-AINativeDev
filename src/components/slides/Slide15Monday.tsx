import { revealDelay } from "@/lib/utils";

const moves = [
  "Choose one bounded, real task",
  "Write acceptance criteria before invoking the agent",
  "Make repository context explicit",
  "Put automated evidence before human attention",
  "Measure delivery—not generated lines",
];

const context = [
  "AGENTS.md", "CLAUDE.md", ".github/copilot-instructions.md", "Architecture decisions",
  "Definition of Done", "Security policies", "API contracts", "Test strategy",
];

export function Slide15Monday() {
  return (
    <div className="standard-slide monday-slide">
      <header>
        <p className="eyebrow reveal-in">Improve one workflow first</p>
        <h1 className="reveal-up" style={revealDelay(70)}>Monday Morning: Five Moves</h1>
      </header>
      <div className="moves-layout">
        <ol>
          {moves.map((move, index) => (
            <li
              className={`reveal-left${index === 0 ? " move-primary" : ""}`}
              key={move}
              style={revealDelay(200 + index * 100)}
            >
              <span>{index + 1}</span>{move}
            </li>
          ))}
        </ol>
        <aside className="reveal-up" style={revealDelay(760)}>
          <div className="mode-selector"><span>Explore</span><span>Assist</span><strong>Delegate</strong></div>
          <p className="section-label">Repository context</p>
          <div className="context-chips">
            {context.map((item, index) => (
              <span className="reveal-in" key={item} style={revealDelay(880 + index * 55)}>{item}</span>
            ))}
          </div>
        </aside>
      </div>
      <div className="measurement-strip reveal-up" style={revealDelay(1340)}>
        <strong>Measure delivery</strong>
        <span>cycle time</span><span>review effort</span><span>rework</span><span>escaped defects</span><span>change failure rate</span>
      </div>
    </div>
  );
}