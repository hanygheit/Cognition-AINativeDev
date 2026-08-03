import { getSource } from "@/data/sources";

export function Slide01TwoOutcomes() {
  const peng = getSource("peng-2023");
  const metr = getSource("metr-2025");

  return (
    <div className="outcomes-slide">
      <div className="outcome outcome-positive">
        <strong>+55.8%</strong>
        <span>Controlled, self-contained task</span>
        <small>{peng?.shortLabel}</small>
      </div>
      <div className="outcomes-divider" aria-hidden="true" />
      <div className="outcome outcome-negative">
        <strong>−19%</strong>
        <span>Experienced developers, mature repositories</span>
        <small>{metr?.shortLabel}</small>
      </div>
      <p className="outcomes-question">
        Both results are real. What engineering conditions explain the difference?
      </p>
    </div>
  );
}