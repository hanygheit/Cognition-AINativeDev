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
    slug: "right-ai-for-the-task",
    title: "AI in Development Is No Longer Optional",
    durationSeconds: 60,
    theme: "paper",
    notes: [
      "AI in development is no longer a specialist activity and it is no longer limited to autocomplete.",
      "But that does not mean every task should be delegated to the most autonomous tool available.",
      "For a prototype that may be deleted tomorrow, vibe coding can be exactly the right mode. The goal is learning speed.",
      "For daily engineering work, AI-assisted coding keeps the engineer close to the implementation. The AI drafts; you read, integrate, debug, and remain responsible.",
      "For bounded, well-specified work, a coding agent can analyze the repository, implement multiple changes, run tests, and return a pull request. But delegation does not transfer accountability.",
      "The professional capability is not simply knowing how to use an AI tool. It is knowing which mode fits the task—and what controls that mode requires.",
      "So the question is no longer whether to use AI. The question is how to use it effectively, safely, and responsibly.",
      "These modes may all exist inside the same organization—and even inside the same developer’s working day. So where are you operating today?",
    ].join("\n\n"),
  },
  {
    id: 6,
    slug: "conditions-change-outcomes",
    title: "Conditions Change Outcomes",
    durationSeconds: 120,
    theme: "paper",
    notes:
      "Say both numbers once, then move to conditions: task structure, repository maturity, prior knowledge, workflow, and verification. Do not pick a winning study.",
    sources: ["peng-2023", "metr-2025"],
  },
  {
    id: 7,
    slug: "four-layers",
    title: "Prompt → Context → Harness → Loop",
    durationSeconds: 135,
    theme: "paper",
    notes:
      "Point out that most teams invest only in the innermost layer. Offer this as a practical working model, not an industry standard.",
  },
  {
    id: 8,
    slug: "three-loops",
    title: "Three Loops. Three Clocks.",
    durationSeconds: 105,
    theme: "paper",
    notes:
      "The inner loop compressed from hours to minutes; the outer loops did not. That is where the engineer's leverage moved.",
  },
  {
    id: 9,
    slug: "sdlc-verbs",
    title: "From Sequential Delivery to a Continuous, Human-Guided Loop",
    durationSeconds: 120,
    theme: "paper",
    notes: `AI-native delivery does not replace the SDLC. Discovery, requirements, design, implementation, testing, release, and feedback still exist.

What changes is how the work moves.

In the traditional model, delivery often progresses through sequential handoffs. Requirements move to design, design moves to development, development moves to QA, and feedback arrives after release.

With agents, execution can become much faster and more continuous. Specifications can become implementation plans. Implementation, tests, documentation, and remediation can evolve together.

But notice where the human remains essential: defining the intent, approving the boundaries, judging the evidence, authorizing the release, and interpreting what production tells us.

The agent accelerates the work inside the lifecycle. The engineer still owns the lifecycle.

And ownership is not an abstract leadership word. It means owning a concrete set of engineering artifacts.`,
  },
  {
    id: 10,
    slug: "full-sdlc-ownership",
    title: "What Owning the Full SDLC Actually Means",
    durationSeconds: 150,
    theme: "paper",
    notes:
      "Ownership is not a feeling; it is a set of artifacts with a named owner. Ask who owns each one on their team today.",
  },
  {
    id: 11,
    slug: "start-with-intent",
    title: "Start With Intent, Not Code",
    durationSeconds: 90,
    theme: "paper",
    notes:
      "The questions on the right are the engineering work. No model can answer them without the business context.",
  },
  {
    id: 12,
    slug: "plan-constrain-delegate",
    title: "Plan. Constrain. Delegate.",
    durationSeconds: 105,
    theme: "paper",
    notes:
      "The agent plan is competent and incomplete. The redlines are what a senior engineer adds in ninety seconds.",
  },
  {
    id: 13,
    slug: "verify-the-system",
    title: "Verify the System, Not the Diff",
    durationSeconds: 120,
    theme: "paper",
    notes:
      "Walk the session-capacity requirement from left to right. Green tests are one evidence source; release confidence comes from connecting behavior, boundaries, operations, and critical decisions to a named release owner.",
  },
  {
    id: 14,
    slug: "change-assurance",
    title: "Code Review Is Necessary. It Is No Longer Sufficient.",
    durationSeconds: 120,
    theme: "ink",
    notes:
      "Say the distinction plainly: keep reviewing code, stop treating a clean diff as proof the system is safe.",
  },
  {
    id: 15,
    slug: "engineer-stack",
    title: "The Engineer Moves Up the Stack",
    durationSeconds: 120,
    theme: "paper",
    notes:
      "Yesterday’s senior skills are increasingly becoming earlier-career differentiators, but not instant baselines: teams still need coaching, practice, and context. AI expands an engineer’s reach only when software fundamentals and engineering judgment remain underneath it.",
  },
  {
    id: 16,
    slug: "monday-morning",
    title: "Monday Morning: Five Moves",
    durationSeconds: 105,
    theme: "paper",
    notes:
      "Ask for one bounded workflow, not a transformation programme. Move one is the only one that matters this week.",
  },
  {
    id: 17,
    slug: "own-the-outer-loops",
    title: "Own the Outer Loops",
    durationSeconds: 60,
    theme: "signal",
    notes: "Land the thesis, thank the room, and stop. Do not introduce a new idea here.",
  },
];

export const SLIDE_COUNT = slides.length;
export const TOTAL_DURATION_SECONDS = slides.reduce((total, slide) => total + slide.durationSeconds, 0);

export function getCumulativeDuration(id: number): number {
  return slides
    .filter((slide) => slide.id <= id)
    .reduce((total, slide) => total + slide.durationSeconds, 0);
}

export function getSlide(id: number): SlideDefinition | undefined {
  return slides.find((slide) => slide.id === id);
}
