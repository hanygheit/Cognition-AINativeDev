const modes = ["Autocomplete", "AI Pair", "Vibe", "Bounded Agent", "AI-Native Team"];

export function Slide04Audience() {
  return (
    <div className="audience-slide">
      <div className="arc-motif arc-motif-left" aria-hidden="true" />
      <h1>Where Are You Today?</h1>
      <ol>
        {modes.map((mode, index) => (
          <li key={mode}>
            <span>{index + 1}</span>
            {mode}
          </li>
        ))}
      </ol>
    </div>
  );
}