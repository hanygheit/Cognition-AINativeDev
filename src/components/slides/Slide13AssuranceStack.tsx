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
        <p className="eyebrow">Change Assurance Stack</p>
        <h1>Code Review Is Necessary.<br />It Is No Longer Sufficient.</h1>
      </header>
      <div className="assurance-layout">
        <div className="assurance-stack" aria-label="Change assurance layers">
          {layers.map((layer, index) => (
            <div style={{ width: `${100 - index * 6}%` }} key={layer}>
              <span>{String(index + 1).padStart(2, "0")}</span>{layer}
            </div>
          ))}
        </div>
        <blockquote>
          <span>Do not stop reviewing code.</span>
          <strong>Stop pretending code review alone proves the system is safe.</strong>
        </blockquote>
      </div>
    </div>
  );
}