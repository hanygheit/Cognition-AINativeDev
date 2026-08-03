import { revealDelay } from "@/lib/utils";

const moves = [
  {
    verb: "Choose",
    action: "one bounded, real task",
    support: "Useful enough to matter. Small enough to verify.",
  },
  {
    verb: "Define",
    action: "acceptance criteria first",
    support: "Expected behavior, edge cases, constraints, and evidence.",
  },
  {
    verb: "Make",
    action: "repository context explicit",
    support: "Architecture, contracts, conventions, security, and Definition of Done.",
  },
  {
    verb: "Put",
    action: "automated evidence before human attention",
    support: "Run tests, scans, policy checks, and contract validation first.",
  },
  {
    verb: "Measure",
    action: "delivery—not generated lines",
    support: "Track outcomes, review effort, rework, defects, and release stability.",
  },
];

const contextGroups = [
  {
    label: "Direction",
    items: [
      "AGENTS.md",
      "CLAUDE.md",
      ".github/copilot-instructions.md",
      "Architecture decisions",
      "Definition of Done",
    ],
  },
  {
    label: "Boundaries",
    items: ["Security policies", "API contracts"],
  },
  {
    label: "Evidence",
    items: ["Test strategy", "Acceptance criteria"],
  },
];

const metrics = [
  "Cycle time",
  "Review effort",
  "Rework",
  "Escaped defects",
  "Change-failure rate",
];

export function Slide15Monday() {
  return (
    <div className="standard-slide monday-slide">
      <header>
        <p className="eyebrow reveal-in">Improve one workflow first</p>
        <h1 className="reveal-up" style={revealDelay(70)}>Your AI-Native Starting Playbook</h1>
      </header>
      <div className="moves-layout">
        <ol aria-label="Five moves to begin AI-native delivery">
          {moves.map((move, index) => (
            <li
              className={index === 0 ? "move-primary" : undefined}
              key={move.action}
            >
              <span className="move-number">{index + 1}</span>
              <div>
                <p className="move-action"><strong>{move.verb}</strong> {move.action}</p>
                <p className="move-support reveal-in" style={revealDelay(170 + index * 90)}>
                  {move.support}
                </p>
              </div>
            </li>
          ))}
        </ol>
        <aside className="monday-aside" aria-label="Operating mode and repository guidance">
          <section className="operating-mode reveal-up" style={revealDelay(620)}>
            <h2 className="section-label">Choose the right operating mode</h2>
            <div className="mode-selector" aria-label="Explore, then assist, then delegate">
              <span>Explore</span><span aria-hidden="true">→</span>
              <span>Assist</span><span aria-hidden="true">→</span>
              <strong>Delegate</strong>
            </div>
            <p className="autonomy-principle">
              Increase autonomy only when specification, context, and verification are ready.
            </p>
          </section>
          <section className="repository-guide reveal-up" style={revealDelay(750)}>
            <h2 className="section-label">Make the repository agent-ready</h2>
            <div className="context-groups">
              {contextGroups.map((group) => (
                <div className="context-group" key={group.label}>
                  <h3>{group.label}</h3>
                  <div className="context-chips">
                    {group.items.map((item) => (
                      <span className={item.endsWith(".md") ? "context-file" : undefined} key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </aside>
      </div>
      <div className="measurement-strip reveal-up" style={revealDelay(850)}>
        <strong>Measure outcomes — not generated lines</strong>
        <div className="metric-grid">
          {metrics.map((metric) => <span key={metric}>{metric}</span>)}
        </div>
      </div>
    </div>
  );
}
