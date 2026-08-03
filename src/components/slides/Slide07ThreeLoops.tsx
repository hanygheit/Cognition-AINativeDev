import { revealDelay } from "@/lib/utils";

const loops = [
  { name: "Agent loop", verbs: "implement → test → revise", time: "minutes", className: "agent" },
  { name: "Engineering loop", verbs: "inspect → redirect → approve", time: "hours", className: "engineering" },
  { name: "Product loop", verbs: "observe → learn → reprioritize", time: "days / weeks", className: "product" },
];

export function Slide07ThreeLoops() {
  return (
    <div className="standard-slide loops-slide">
      <header>
        <p className="eyebrow reveal-in">Responsibility expands with leverage</p>
        <h1 className="reveal-up" style={revealDelay(70)}>Three Loops. Three Clocks.</h1>
      </header>
      <div className="loop-map">
        {loops.map((loop, index) => (
          <section
            className={`loop-node loop-${loop.className} reveal-scale`}
            key={loop.name}
            style={revealDelay(240 + index * 180)}
          >
            <span className="loop-index">0{index + 1}</span>
            <h2>{loop.name}</h2>
            <p>{loop.verbs}</p>
            <strong>{loop.time}</strong>
          </section>
        ))}
      </div>
      <blockquote className="reveal-up" style={revealDelay(880)}>
        The inner loop got fast. Your job moved outward.
      </blockquote>
    </div>
  );
}