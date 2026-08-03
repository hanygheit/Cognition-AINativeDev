import { revealDelay } from "@/lib/utils";

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
        <p className="eyebrow reveal-in">Challenge the plan before accepting the work</p>
        <h1 className="reveal-up" style={revealDelay(70)}>Plan. Constrain. Delegate.</h1>
      </header>
      <div className="delegation-columns">
        <section className="reveal-up" style={revealDelay(200)}>
          <span className="section-label">Agent’s proposed plan</span>
          <ol>
            {plan.map((item, index) => (
              <li className="reveal-in" key={item} style={revealDelay(300 + index * 70)}>{item}</li>
            ))}
          </ol>
        </section>
        <section className="redline-section reveal-up" style={revealDelay(680)}>
          <span className="section-label">Human review</span>
          <ul>
            {redlines.map((item, index) => (
              <li className="reveal-in" key={item} style={revealDelay(780 + index * 70)}>{item}</li>
            ))}
          </ul>
        </section>
      </div>
      <div className="delegation-contract reveal-up" style={revealDelay(1180)}>
        <strong>Delegation contract</strong>
        <p>bounded tasks · affected interfaces · tests required · permissions allowed · stop / escalation conditions</p>
      </div>
    </div>
  );
}