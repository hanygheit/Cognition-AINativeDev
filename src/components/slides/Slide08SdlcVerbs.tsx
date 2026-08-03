import { revealDelay } from "@/lib/utils";

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
        <p className="eyebrow reveal-in">The lifecycle remains</p>
        <h1 className="reveal-up" style={revealDelay(70)}>The SDLC Stayed. The Verbs Changed.</h1>
      </header>
      <div aria-label="How SDLC verbs change" className="verbs-table" role="table">
        <div className="verbs-head reveal-in" role="row" style={revealDelay(200)}>
          <span role="columnheader">Lifecycle stage</span>
          <span role="columnheader">Traditional emphasis</span>
          <span role="columnheader">AI-native emphasis</span>
        </div>
        {rows.map(([stage, oldVerb, newVerb], index) => (
          <div className="verbs-row reveal-up" key={stage} role="row" style={revealDelay(280 + index * 75)}>
            <strong role="cell">{stage}</strong>
            <span role="cell">{oldVerb}</span>
            <span role="cell">{newVerb}</span>
          </div>
        ))}
      </div>
      <p className="slide-pull-line reveal-up" style={revealDelay(880)}>
        AI changes where engineers apply judgment—not whether judgment is needed.
      </p>
      <small className="source-label reveal-in" style={revealDelay(950)}>
        Critical and high-risk code still receives code-level inspection.
      </small>
    </div>
  );
}