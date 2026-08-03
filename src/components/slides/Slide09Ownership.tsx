const artifacts = [
  ["Intent", "Problem, outcome, and decision not to build"],
  ["Specification", "Acceptance criteria and edge cases"],
  ["Architecture", "Boundaries, contracts, and data flows"],
  ["Delegation Boundary", "Scope, access, tools, and stopping conditions"],
  ["Evidence Pack", "Tests, security, performance, and observability"],
  ["Release Case", "Rollout, provenance, and rollback"],
  ["Production Learning", "Telemetry, incidents, feedback, and improvement"],
];

export function Slide09Ownership() {
  return (
    <div className="standard-slide ownership-slide">
      <header>
        <p className="eyebrow">Accountability has an address</p>
        <h1>What Owning the Full SDLC Actually Means</h1>
      </header>
      <div className="ownership-list">
        {artifacts.map(([name, detail], index) => (
          <div className="ownership-row" key={name}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{name}</strong>
            <p>{detail}</p>
          </div>
        ))}
      </div>
      <p className="slide-pull-line">Every artifact has an owner. AI is not that owner.</p>
    </div>
  );
}