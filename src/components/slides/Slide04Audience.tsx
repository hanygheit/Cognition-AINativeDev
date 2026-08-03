import { revealDelay } from "@/lib/utils";

const controlLevels = ["Code", "Behavior", "Architecture", "Risk", "Outcome"];

export function Slide04Audience() {
  return (
    <div className="control-slide">
      <div aria-hidden="true" className="control-rail reveal-grow-y" style={revealDelay(120)} />
      <h1 className="reveal-up">
        Do not surrender control to AI.{" "}
        <span>Move your control to a higher level.</span>
      </h1>
      <ol aria-label="Control moves from code to outcome" className="control-levels">
        {controlLevels.map((level, index) => (
          <li className="reveal-up" key={level} style={revealDelay(300 + index * 100)}>
            <span>{level}</span>
            {index < controlLevels.length - 1 ? <b aria-hidden="true">→</b> : null}
          </li>
        ))}
      </ol>
      <p className="control-close reveal-up" style={revealDelay(900)}>
        You are the orchestrator—not the typist.
      </p>
    </div>
  );
}
