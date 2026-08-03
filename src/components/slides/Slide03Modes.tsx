import { revealDelay } from "@/lib/utils";

export function Slide03Modes() {
  return (
    <div className="standard-slide bottleneck-slide">
      <header>
        <p className="eyebrow reveal-in">The verification shift</p>
        <h1 className="reveal-up" style={revealDelay(100)}>The Bottleneck Moved</h1>
      </header>
      <div className="bottleneck-statement">
        <p className="reveal-up" style={revealDelay(240)}>
          <span>Generating code</span>{" "}
          is becoming easier.
        </p>
        <div aria-hidden="true" className="bottleneck-shift reveal-grow-x" style={revealDelay(430)} />
        <p className="reveal-up" style={revealDelay(560)}>
          <span>Knowing whether it deserves to ship</span>{" "}
          is becoming harder.
        </p>
      </div>
      <p className="bottleneck-answer reveal-up" style={revealDelay(780)}>
        The new bottleneck is <strong>verification.</strong>
      </p>
    </div>
  );
}
