import { revealDelay } from "@/lib/utils";

const artifacts = [
  ["Intent", "Problem, outcome, and the decision not to build"],
  ["Specification", "Acceptance criteria and edge cases"],
  ["Architecture", "Boundaries, contracts, and data flows"],
  ["Delegation boundary", "Scope, access, tools, and stopping conditions"],
  ["Evidence pack", "Tests, security, performance, and observability"],
  ["Release case", "Rollout, provenance, and rollback"],
  ["Production learning", "Telemetry, incidents, feedback, and improvement"],
];

export function Slide09Ownership() {
  return (
    <div className="standard-slide ownership-slide">
      <header>
        <p className="eyebrow reveal-in">Accountability has an address</p>
        <h1 className="reveal-up" style={revealDelay(70)}>What Owning the Full SDLC Actually Means</h1>
      </header>
      <div className="ownership-list">
        {artifacts.map(([name, detail], index) => (
          <div className="ownership-row reveal-left" key={name} style={revealDelay(220 + index * 85)}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{name}</strong>
            <p>{detail}</p>
          </div>
        ))}
      </div>
      <p className="slide-pull-line reveal-up" style={revealDelay(860)}>
        Every artifact has an owner. AI is not that owner.
      </p>
    </div>
  );
}