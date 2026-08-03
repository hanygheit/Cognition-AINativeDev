import { revealDelay } from "@/lib/utils";

const layers = [
  "Business intent",
  "Acceptance behavior",
  "Interfaces and data contracts",
  "Architecture and dependencies",
  "Security and supply chain",
  "Operability and rollback",
  "Critical code",
];

export function Slide13AssuranceStack() {
  return (
    <div className="standard-slide assurance-slide">
      <header>
        <p className="eyebrow reveal-in">Change assurance stack</p>
        <h1 className="reveal-up" style={revealDelay(70)}>
          Code Review Is Necessary.<br />It Is No Longer Sufficient.
        </h1>
      </header>
      <div className="assurance-layout">
        <div aria-label="Change assurance layers" className="assurance-stack">
          {layers.map((layer, index) => (
            <div
              className="reveal-up"
              key={layer}
              style={{ width: `${100 - index * 6}%`, ...revealDelay(220 + index * 90) }}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>{layer}
            </div>
          ))}
        </div>
        <blockquote className="reveal-up" style={revealDelay(920)}>
          <span>Do not stop reviewing code.</span>
          <strong>Stop pretending code review alone proves the system is safe.</strong>
        </blockquote>
      </div>
    </div>
  );
}