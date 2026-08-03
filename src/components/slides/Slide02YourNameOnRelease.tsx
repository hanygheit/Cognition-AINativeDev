import { Check, CircleAlert, TriangleAlert } from "lucide-react";

import { revealDelay } from "@/lib/utils";

const successfulChecks = ["Unit tests passed", "Integration tests passed"];

const releaseRisks = [
  ["Architecture boundary changed", "warning"],
  ["New dependency introduced", "warning"],
  ["Security review incomplete", "danger"],
] as const;

export function Slide02YourNameOnRelease() {
  return (
    <div className="release-slide">
      <div className="release-opening-copy">
        <p className="release-line release-line-first reveal-up">You didn&apos;t write this code.</p>
        <p className="release-line release-line-second reveal-up" style={revealDelay(1100)}>
          But your name is on the release.
        </p>
      </div>

      <section
        aria-label="Release candidate summary"
        className="release-card reveal-up"
        style={revealDelay(2200)}
      >
        <header className="release-card-header">
          <div>
            <span>Release candidate</span>
            <strong>RC-2026.08</strong>
          </div>
          <p>Prepared for production</p>
        </header>

        <div className="release-card-body">
          <div className="release-change-summary">
            <p>
              <strong>3,247</strong>
              <span>AI-generated lines</span>
            </p>
            <p>
              <strong>41</strong>
              <span>files changed</span>
            </p>
          </div>

          <div className="release-assurance-list">
            <div className="release-check-group reveal-in" style={revealDelay(3200)}>
              {successfulChecks.map((check) => (
                <p key={check}>
                  <Check aria-hidden="true" />
                  <span>{check}</span>
                  <strong>Passed</strong>
                </p>
              ))}
            </div>
            <div className="release-risk-group reveal-in" style={revealDelay(4400)}>
              {releaseRisks.map(([risk, severity]) => (
                <p className={`release-risk-${severity}`} key={risk}>
                  {severity === "danger" ? (
                    <CircleAlert aria-hidden="true" />
                  ) : (
                    <TriangleAlert aria-hidden="true" />
                  )}
                  <span>{risk}</span>
                  <strong>{severity === "danger" ? "Incomplete" : "Review"}</strong>
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div aria-hidden="true" className="release-focus-wash reveal-in" style={revealDelay(5900)} />
      <p className="release-decision reveal-scale" style={revealDelay(6100)}>
        Would you ship it?
      </p>
      <p className="release-thesis reveal-up" style={revealDelay(7100)}>
        <span>AI can generate the implementation.</span>
        <strong>The engineer still owns the outcome.</strong>
      </p>
    </div>
  );
}