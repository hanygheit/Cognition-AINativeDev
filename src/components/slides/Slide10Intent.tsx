import { revealDelay } from "@/lib/utils";

const questions = [
  "What counts as capacity?",
  "Is check-in concurrent?",
  "Who may override it?",
  "How is the waitlist ordered?",
  "What personal data is exposed?",
  "What happens when notification fails?",
  "What is the rollback behavior?",
];

export function Slide10Intent() {
  return (
    <div className="standard-slide intent-slide">
      <header>
        <p className="eyebrow reveal-in">Value begins before generation</p>
        <h1 className="reveal-up" style={revealDelay(70)}>Start With Intent, Not Code</h1>
      </header>
      <div className="intent-layout">
        <blockquote className="reveal-left" style={revealDelay(200)}>
          “Prevent session overbooking. If capacity is reached, offer a waitlist and notify organizers.”
          <small>Raw business request</small>
        </blockquote>
        <div className="question-field">
          {questions.map((question, index) => (
            <span className="reveal-up" key={question} style={revealDelay(400 + index * 80)}>{question}</span>
          ))}
        </div>
      </div>
      <div className="acceptance-strip reveal-up" style={revealDelay(1020)}>
        <strong>Acceptance criteria</strong>
        <span>Atomic capacity check</span>
        <span>Authorized override</span>
        <span>Stable waitlist order</span>
        <span>Failure-tolerant notification</span>
        <span>Auditable rollback</span>
      </div>
      <p className="slide-pull-line reveal-up" style={revealDelay(1100)}>
        The engineer creates value before the first line is generated.
      </p>
    </div>
  );
}