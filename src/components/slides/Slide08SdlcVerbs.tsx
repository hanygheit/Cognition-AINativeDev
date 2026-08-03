const rows = [
  ["Discovery", "Gather", "Frame"],
  ["Requirements", "Document", "Specify"],
  ["Design", "Diagram", "Constrain"],
  ["Implementation", "Type", "Delegate"],
  ["Testing", "Validate afterwards", "Define evidence first"],
  ["Review", "Read the diff", "Assure the change"],
  ["Release", "Ship", "Prove and recover"],
];

export function Slide08SdlcVerbs() {
  return (
    <div className="standard-slide verbs-slide">
      <header>
        <p className="eyebrow">The lifecycle remains</p>
        <h1>The SDLC Stayed. The Verbs Changed.</h1>
      </header>
      <div className="verbs-table" role="table" aria-label="How SDLC verbs change">
        <div className="verbs-head" role="row">
          <span role="columnheader">Lifecycle</span>
          <span role="columnheader">Local execution</span>
          <span role="columnheader">AI-native ownership</span>
        </div>
        {rows.map(([stage, oldVerb, newVerb]) => (
          <div className="verbs-row" role="row" key={stage}>
            <strong role="cell">{stage}</strong>
            <span role="cell">{oldVerb}</span>
            <span role="cell">{newVerb}</span>
          </div>
        ))}
      </div>
      <p className="slide-pull-line">AI changes where engineers apply judgment—not whether judgment is needed.</p>
      <small className="source-label">Critical and high-risk code still receives code-level inspection.</small>
    </div>
  );
}