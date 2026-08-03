import { revealDelay } from "@/lib/utils";

const assuranceGroups = [
  {
    label: "Behavior",
    evidence: "Capacity + concurrency tests",
    proof: "No overbooking under load",
  },
  {
    label: "Boundaries",
    evidence: "Authorization + dependency / secret scans",
    proof: "Access and dependencies stay constrained",
  },
  {
    label: "Operations",
    evidence: "Migration / rollback + telemetry / alerts",
    proof: "Deployments stay reversible and observable",
  },
  {
    label: "Critical decisions",
    evidence: "Human review of critical logic",
    proof: "Business rules remain intentional",
  },
];

export function Slide12Verify() {
  return (
    <div className="standard-slide verify-slide">
      <header>
        <p className="eyebrow reveal-in">Verify the whole change</p>
        <h1 className="reveal-up" style={revealDelay(70)}>
          Verify the System, Not the Diff
        </h1>
        <p className="slide-lead reveal-up" style={revealDelay(130)}>
          Verify the behavior, boundaries, operations, and critical decisions—not only the generated code.
        </p>
      </header>

      <div className="verification-flow" aria-label="Requirement to release confidence flow">
        <section className="verification-requirement reveal-left" style={revealDelay(190)}>
          <span className="verification-zone-label">Business requirement</span>
          <blockquote>
            Prevent session overbooking. If capacity is reached, offer a waitlist and notify organizers.
          </blockquote>
          <p>Source of truth</p>
        </section>

        <div className="verification-arrow reveal-grow-x" style={revealDelay(250)} aria-hidden="true" />

        <section className="verification-assurance" aria-label="Change assurance evidence and proof">
          <div className="verification-assurance-heading reveal-in" style={revealDelay(300)}>
            <span className="verification-zone-label">Change assurance</span>
            <span>Evidence</span>
            <span>What it proves</span>
          </div>
          <ol>
            {assuranceGroups.map((group, index) => (
              <li className="reveal-up" key={group.label} style={revealDelay(340 + index * 80)}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{group.label}</strong>
                <p>{group.evidence}</p>
                <span className="assurance-connector" aria-hidden="true">→</span>
                <span className="assurance-proof">{group.proof}</span>
              </li>
            ))}
          </ol>
        </section>

        <div className="verification-arrow reveal-grow-x" style={revealDelay(640)} aria-hidden="true" />

        <section className="verification-decision reveal-right" style={revealDelay(690)}>
          <span className="verification-zone-label">Release decision</span>
          <div className="decision-primary">
            <span>✓ All four proven</span>
            <strong>Release with controls</strong>
            <small>Named engineer decides</small>
          </div>
          <div className="decision-fallback">
            <span>Any evidence gap</span>
            <strong>Hold or narrow scope</strong>
          </div>
        </section>
      </div>

      <p className="slide-pull-line reveal-up" style={revealDelay(740)}>
        Green tests show execution. Change assurance shows the requirement survived.
      </p>
    </div>
  );
}
