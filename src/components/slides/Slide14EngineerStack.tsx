const capabilities = [
  "Problem and product framing",
  "Architecture and trade-offs",
  "Testing and verification",
  "Security and operational awareness",
  "Domain knowledge",
  "Orchestration and communication",
];

const roles = [
  ["Junior", "Learn concepts and critique generated work earlier"],
  ["Senior", "Scale judgment across more delivery"],
  ["Architect", "Make boundaries machine-readable"],
  ["Manager", "Redesign workflow, controls, and measurement"],
];

export function Slide14EngineerStack() {
  return (
    <div className="standard-slide engineer-slide">
      <header>
        <p className="eyebrow">Implementation fluency remains essential</p>
        <h1>The Engineer Moves Up the Stack</h1>
      </header>
      <div className="engineer-layout">
        <div className="capability-t">
          <div className="capability-top">
            {capabilities.map((capability) => <span key={capability}>{capability}</span>)}
          </div>
          <div className="capability-stem">Implementation fluency</div>
        </div>
        <div className="role-list">
          {roles.map(([role, detail]) => (
            <div key={role}><strong>{role}</strong><span>{detail}</span></div>
          ))}
        </div>
      </div>
      <p className="slide-pull-line">Skills once concentrated in senior roles are becoming earlier-career differentiators.</p>
    </div>
  );
}