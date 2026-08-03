import { revealDelay } from "@/lib/utils";

const modes = ["Autocomplete", "AI Pair", "Vibe", "Bounded Agent", "AI-Native Team"];

export function Slide04Audience() {
  return (
    <div className="audience-slide">
      <div aria-hidden="true" className="arc-motif arc-motif-left reveal-scale" style={revealDelay(200)} />
      <h1 className="reveal-up">Where Are You Today?</h1>
      <p className="slide-lead reveal-up" style={revealDelay(140)}>
        Pick the mode you worked in most this past week.
      </p>
      <ol>
        {modes.map((mode, index) => (
          <li className="reveal-up" key={mode} style={revealDelay(300 + index * 90)}>
            <span>{index + 1}</span>
            {mode}
          </li>
        ))}
      </ol>
    </div>
  );
}