import { getSource } from "@/data/sources";
import { revealDelay } from "@/lib/utils";

export function Slide01TwoOutcomes() {
  const peng = getSource("peng-2023");
  const metr = getSource("metr-2025");

  return (
    <div className="outcomes-slide">
      <p className="eyebrow reveal-in">Same promise. Different conditions.</p>
      <div className="outcomes-grid">
        <div className="outcome outcome-positive reveal-up" style={revealDelay(140)}>
          <strong>+55.8%</strong>
          <span className="outcome-direction">faster</span>
          <span className="outcome-condition">Controlled, self-contained task</span>
          <small>{peng?.shortLabel}</small>
        </div>
        <div aria-hidden="true" className="outcomes-divider reveal-grow-y" style={revealDelay(320)} />
        <div className="outcome outcome-negative reveal-up" style={revealDelay(400)}>
          <strong>−19%</strong>
          <span className="outcome-direction">slower</span>
          <span className="outcome-condition">Experienced developers, mature repositories</span>
          <small>{metr?.shortLabel}</small>
        </div>
      </div>
      <p className="outcomes-question reveal-up" style={revealDelay(700)}>
        Both results are real. What engineering conditions explain the difference?
      </p>
    </div>
  );
}