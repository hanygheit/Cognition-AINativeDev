import {
  CheckCircle2,
  FileCheck2,
  GitBranch,
  RefreshCcw,
  Rocket,
  ShieldCheck,
  Target,
} from "lucide-react";

import { revealDelay } from "@/lib/utils";

const lifecycleStages = [
  { label: "Intent", icon: Target },
  { label: "Specify", icon: FileCheck2 },
  { label: "Constrain", icon: ShieldCheck },
  { label: "Delegate", icon: GitBranch },
  { label: "Verify", icon: CheckCircle2 },
  { label: "Release", icon: Rocket },
  { label: "Learn", icon: RefreshCcw },
];

const traditionalLimitations = [
  "Humans create most artifacts manually",
  "Coding consumes much of the delivery cycle",
  "Testing and review follow implementation",
  "Documentation and operational readiness often lag",
  "Feedback arrives after release",
];

const aiNativePractices = [
  "Humans frame, specify, constrain, and approve",
  "AI accelerates bounded execution",
  "Tests and evidence are defined earlier",
  "Documentation and delivery artifacts evolve with the change",
  "Production feedback continuously updates the next cycle",
];

const humanGates = [
  { className: "gate-specification", purpose: "Specification approval" },
  { className: "gate-architecture", purpose: "Architecture and boundary review" },
  { className: "gate-verification", purpose: "Verification" },
  { className: "gate-release", purpose: "Release approval" },
  { className: "gate-feedback", purpose: "Production feedback" },
];

export function Slide08SdlcVerbs() {
  return (
    <div className="standard-slide sdlc-shift-slide">
      <header>
        <p className="eyebrow reveal-in">THE DELIVERY SHIFT</p>
        <h1 className="reveal-up" style={revealDelay(60)}>
          From Sequential Delivery to a Continuous, Human-Guided Loop
        </h1>
        <p className="slide-lead reveal-up" style={revealDelay(120)}>
          The lifecycle remains. Execution accelerates. Human judgment moves to the control points.
        </p>
      </header>

      <section aria-label="Continuous AI-native delivery lifecycle" className="lifecycle-loop">
        <div className="lifecycle-flow reveal-in" style={revealDelay(430)}>
          <svg aria-hidden="true" className="lifecycle-connectors" preserveAspectRatio="none" viewBox="0 0 900 120">
            <defs>
              <marker id="sdlc-flow-arrow" markerHeight="8" markerWidth="8" orient="auto" refX="7" refY="4">
                <path d="M0,0 L8,4 L0,8 Z" />
              </marker>
            </defs>
            {[
              [84, 173],
              [213, 301],
              [341, 430],
              [470, 559],
              [599, 687],
              [727, 816],
            ].map(([x1, x2]) => (
              <line key={x1} markerEnd="url(#sdlc-flow-arrow)" x1={x1} x2={x2} y1="39" y2="39" />
            ))}
            <path
              className="lifecycle-return reveal-draw"
              d="M836 39 C882 39 882 104 824 104 H78 C20 104 20 39 64 39"
              markerEnd="url(#sdlc-flow-arrow)"
              style={revealDelay(470)}
            />
          </svg>

          <ol className="lifecycle-stages">
            {lifecycleStages.map(({ icon: Icon, label }) => (
              <li className="lifecycle-stage" key={label}>
                <span className="lifecycle-icon"><Icon aria-hidden="true" strokeWidth={1.8} /></span>
                <strong>{label}</strong>
              </li>
            ))}
          </ol>
        </div>

        <div className="human-gates reveal-in" style={revealDelay(720)}>
          {humanGates.map(({ className, purpose }) => (
            <span aria-label={`${purpose}: human decision gate`} className={`human-gate ${className}`} key={purpose}>
              Human decision gate
            </span>
          ))}
        </div>
      </section>

      <div className="delivery-comparison">
        <section aria-labelledby="traditional-delivery-heading" className="delivery-panel traditional-delivery-panel">
          <div className="delivery-panel-intro reveal-left" style={revealDelay(180)}>
            <p className="delivery-panel-kicker">Traditional Delivery</p>
            <div className="delivery-panel-heading">
              <h2 id="traditional-delivery-heading">Sequential handoffs</h2>
              <span aria-hidden="true" className="traditional-sequence">
                <i /><i /><i /><i /><i />
              </span>
            </div>
          </div>
          <ul className="delivery-list reveal-in" style={revealDelay(300)}>
            {traditionalLimitations.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>

        <section aria-labelledby="ai-native-delivery-heading" className="delivery-panel ai-native-delivery-panel reveal-right" style={revealDelay(570)}>
          <p className="delivery-panel-kicker">AI-Native Delivery</p>
          <div className="delivery-panel-heading">
            <h2 id="ai-native-delivery-heading">Continuous, human-guided loops</h2>
            <RefreshCcw aria-hidden="true" className="delivery-loop-icon" strokeWidth={1.8} />
          </div>
          <ul className="delivery-list">
            {aiNativePractices.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>
      </div>

      <blockquote className="sdlc-takeaway reveal-up" style={revealDelay(860)}>
        <strong>The agent accelerates the work inside the lifecycle. The engineer still owns the lifecycle.</strong>
      </blockquote>
    </div>
  );
}
