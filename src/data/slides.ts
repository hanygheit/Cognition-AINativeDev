export type SlideTheme = "dark" | "ink" | "paper" | "signal";

export type SlideDefinition = {
  id: number;
  slug: string;
  title: string;
  durationSeconds: number;
  theme: SlideTheme;
  notes: string;
  sources?: string[];
};

export const slides: SlideDefinition[] = [
  {
    id: 1,
    slug: "ai-native-development",
    title: "AI-Native Development",
    durationSeconds: 45,
    theme: "dark",
    notes: "Set expectations: this is a role-evolution talk, not a tools talk. No product demos today.",
  },
  {
    id: 2,
    slug: "your-name-is-on-the-release",
    title: "Your Name Is on the Release",
    durationSeconds: 90,
    theme: "paper",
    notes:
      "Let the scenario unfold without explaining it. Pause on the release decision, then land ownership as the non-delegable engineering responsibility.",
  },
  {
    id: 3,
    slug: "the-bottleneck-moved",
    title: "The Bottleneck Moved",
    durationSeconds: 135,
    theme: "paper",
    notes:
      "Generation capacity is rising faster than the team's ability to earn confidence. Verification now determines whether speed becomes delivery or rework.",
  },
  {
    id: 4,
    slug: "move-control-higher",
    title: "Move Control Higher",
    durationSeconds: 45,
    theme: "paper",
    notes:
      "Control does not disappear when implementation is delegated. It moves outward to behavior, architecture, risk, and business outcomes.",
  },
  {
    id: 5,
    slug: "conditions-change-outcomes",
    title: "Conditions Change Outcomes",
    durationSeconds: 135,
    theme: "paper",
    notes:
      "Say both numbers once, then move to conditions: task structure, repository maturity, prior knowledge, workflow, and verification. Do not pick a winning study.",
    sources: ["peng-2023", "metr-2025"],
  },
  {
    id: 6,
    slug: "four-layers",
    title: "Prompt → Context → Harness → Loop",
    durationSeconds: 135,
    theme: "paper",
    notes:
      "Point out that most teams invest only in the innermost layer. Offer this as a practical working model, not an industry standard.",
  },
  {
    id: 7,
    slug: "three-loops",
    title: "Three Loops. Three Clocks.",
    durationSeconds: 105,
    theme: "paper",
    notes:
      "The inner loop compressed from hours to minutes; the outer loops did not. That is where the engineer's leverage moved.",
  },
  {
    id: 8,
    slug: "sdlc-verbs",
    title: "The SDLC Stayed. The Verbs Changed.",
    durationSeconds: 120,
    theme: "paper",
    notes:
      "Walk one row, not seven. Add that critical and high-risk code still receives line-by-line inspection.",
  },
  {
    id: 9,
    slug: "full-sdlc-ownership",
    title: "What Owning the Full SDLC Actually Means",
    durationSeconds: 150,
    theme: "paper",
    notes:
      "Ownership is not a feeling; it is a set of artifacts with a named owner. Ask who owns each one on their team today.",
  },
  {
    id: 10,
    slug: "start-with-intent",
    title: "Start With Intent, Not Code",
    durationSeconds: 90,
    theme: "paper",
    notes:
      "The questions on the right are the engineering work. No model can answer them without the business context.",
  },
  {
    id: 11,
    slug: "plan-constrain-delegate",
    title: "Plan. Constrain. Delegate.",
    durationSeconds: 105,
    theme: "paper",
    notes:
      "The agent plan is competent and incomplete. The redlines are what a senior engineer adds in ninety seconds.",
  },
  {
    id: 12,
    slug: "verify-the-system",
    title: "Green Tests Are Not Release Confidence",
    durationSeconds: 120,
    theme: "paper",
    notes:
      "Walk the session-capacity requirement from left to right. Green tests are one evidence source; release confidence comes from connecting behavior, boundaries, operations, and critical decisions to a named release owner.",
  },
  {
    id: 13,
    slug: "change-assurance",
    title: "Code Review Is Necessary. It Is No Longer Sufficient.",
    durationSeconds: 120,
    theme: "ink",
    notes:
      "Say the distinction plainly: keep reviewing code, stop treating a clean diff as proof the system is safe.",
  },
  {
    id: 14,
    slug: "engineer-stack",
    title: "The AI-Native Engineer: A Layered Skills Model",
    durationSeconds: 120,
    theme: "paper",
    notes:
      "Yesterday’s senior skills are increasingly becoming earlier-career differentiators, but not instant baselines: teams still need coaching, practice, and context. AI expands an engineer’s reach only when software fundamentals and engineering judgment remain underneath it.",
  },
  {
    id: 15,
    slug: "monday-morning",
    title: "Monday Morning: Five Moves",
    durationSeconds: 105,
    theme: "paper",
    notes:
      "Ask for one bounded workflow, not a transformation programme. Move one is the only one that matters this week.",
  },
  {
    id: 16,
    slug: "own-the-outer-loops",
    title: "Own the Outer Loops",
    durationSeconds: 60,
    theme: "signal",
    notes: "Land the thesis, thank the room, and stop. Do not introduce a new idea here.",
  },
];

export const SLIDE_COUNT = slides.length;

export function getSlide(id: number): SlideDefinition | undefined {
  return slides.find((slide) => slide.id === id);
}
