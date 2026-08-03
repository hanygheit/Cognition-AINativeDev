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
        <p className="eyebrow">A practical working model</p>
        <h1>Prompt → Context → Harness → Loop</h1>
      </header>
      <div className="layers-layout">
        <div className="nested-rings" aria-label="Four nested control layers">
          {layers.toReversed().map(([label], index) => (
            <div className={`ring ring-${index + 1}`} key={label}>
              <span>{label}</span>
            </div>
          ))}
        </div>
        <div className="layer-definitions">
          {layers.map(([label, detail], index) => (
            <div className="layer-definition" key={label}>
              <span>{index + 1}</span>
              <p><strong>{label}</strong>{detail}</p>
            </div>
          ))}
        </div>
      </div>
      <p className="slide-pull-line">Each layer contains—and depends on—the one before it.</p>
    </div>
  );
}