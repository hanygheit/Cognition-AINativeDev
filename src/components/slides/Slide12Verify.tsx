const evidence = [
  "Capacity acceptance tests",
  "Concurrent check-in test",
  "Authorization test",
  "Migration and rollback check",
  "Telemetry and alert",
  "Dependency and secret scan",
  "Manual review of critical logic",
];

const statuses = [
  "Requirement satisfied",
  "Risks addressed",
  "Evidence attached",
  "Ready for controlled release",
];

export function Slide12Verify() {
  return (
    <div className="standard-slide verify-slide">
      <header>
        <p className="eyebrow">The evidence is the demo</p>
        <h1>Verify the System, Not the Diff</h1>
      </header>
      <div className="evidence-chain">
        {evidence.map((item, index) => (
          <div className="evidence-item" key={item}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <p>{item}</p>
            <strong aria-label="Verified">✓</strong>
          </div>
        ))}
      </div>
      <div className="release-status">
        {statuses.map((status, index) => (
          <span className={index === statuses.length - 1 ? "status-ready" : ""} key={status}>{status}</span>
        ))}
      </div>
      <p className="slide-pull-line">Explainable. Testable. Observable. Reversible.</p>
    </div>
  );
}