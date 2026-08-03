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
    slug: "one-promise-two-outcomes",
    title: "One Promise. Two Outcomes.",
    durationSeconds: 90,
    theme: "paper",
    notes:
      "Say both numbers once, then move to conditions: task structure, repository maturity, prior knowledge, workflow, verification. Do not pick a winning study.",
    sources: ["peng-2023", "metr-2025"],
  },
  {
    id: 3,
    slug: "five-modes",
    title: "Five Modes of AI Development",
    durationSeconds: 135,
    theme: "paper",
    notes:
      "Stress that these are operating modes chosen per task, not a maturity ladder to climb. A senior engineer uses all five in one week.",
  },
  {
    id: 4,
    slug: "where-are-you",
    title: "Where Are You Today?",
    durationSeconds: 45,
    theme: "paper",
    notes:
      "Ask for hands per mode and read the room out loud. This calibrates the rest of the talk and buys attention.",
  },
  {
    id: 5,
    slug: "verification-gap",
    title: "The Verification Gap",
    durationSeconds: 135,
    theme: "paper",
    notes:
      "Name the trade the room already feels: generation got cheap, confidence did not. The gap is where rework and escaped defects live.",
    sources: ["dora-2025"],
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
    title: "Verify the System, Not the Diff",
    durationSeconds: 120,
    theme: "paper",
    notes:
      "This checklist is the demo. Emphasise that automated evidence runs before human attention is spent.",
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
    title: "The Engineer Moves Up the Stack",
    durationSeconds: 120,
    theme: "paper",
    notes:
      "Reassure the juniors: implementation fluency is the stem, not the casualty. Expertise gains leverage rather than losing value.",
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