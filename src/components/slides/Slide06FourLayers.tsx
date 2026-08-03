import { revealDelay } from "@/lib/utils";

const layers = [
  ["Prompt", "What are we asking for?"],
  ["Context", "What does the agent need to know?"],
  ["Harness", "What can it access, execute, and change?"],
  ["Loop", "How does it verify, retry, stop, and escalate?"],
];

export function Slide06FourLayers() {
  return (
    <div className="standard-slide layers-slide">
      <header>
        <p className="eyebrow reveal-in">A practical working model</p>
        <h1 className="reveal-up" style={revealDelay(70)}>Prompt → Context → Harness → Loop</h1>
      </header>
      <div className="layers-layout">
        <div aria-label="Four nested control layers" className="nested-rings">
          {layers.toReversed().map(([label], index) => (
            <div
              className={`ring ring-${index + 1} reveal-scale`}
              key={label}
              style={revealDelay(200 + (layers.length - 1 - index) * 110)}
            >
              <span>{label}</span>
            </div>
          ))}
        </div>
        <div className="layer-definitions">
          {layers.map(([label, detail], index) => (
            <div className="layer-definition reveal-up" key={label} style={revealDelay(620 + index * 90)}>
              <span>{index + 1}</span>
              <p><strong>{label}</strong>{detail}</p>
            </div>
          ))}
        </div>
      </div>
      <p className="slide-pull-line reveal-up" style={revealDelay(1000)}>
        Each layer contains—and depends on—the one before it.
      </p>
    </div>
  );
}