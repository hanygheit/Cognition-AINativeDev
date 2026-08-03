const plan = [
  "Add waitlist storage",
  "Update check-in endpoint",
  "Add organizer notification",
  "Update attendee UI",
  "Add tests",
];

const redlines = [
  "Concurrency is missing",
  "Authorization boundary is unclear",
  "Notification failure must not reverse check-in",
  "No new dependency without approval",
  "Audit event required",
];

export function Slide11PlanDelegate() {
  return (
    <div className="standard-slide delegation-slide">
      <header>
        <p className="eyebrow">Challenge the plan before accepting the work</p>
        <h1>Plan. Constrain. Delegate.</h1>
      </header>
      <div className="delegation-columns">
        <section>
          <span className="section-label">Agent’s proposed plan</span>
          <ol>{plan.map((item) => <li key={item}>{item}</li>)}</ol>
        </section>
        <section className="redline-section">
          <span className="section-label">Human review</span>
          <ul>{redlines.map((item) => <li key={item}>{item}</li>)}</ul>
        </section>
      </div>
      <div className="delegation-contract">
        <strong>Delegation contract</strong>
        <p>bounded tasks · affected interfaces · tests required · permissions allowed · stop / escalation conditions</p>
      </div>
    </div>
  );
}