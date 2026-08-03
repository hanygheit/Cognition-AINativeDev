import { revealDelay } from "@/lib/utils";

const repositoryGroups = [
  {
    role: "Instructions",
    primary: "AGENTS.md",
    children: [".github/copilot-instructions.md", ".github/instructions/*.instructions.md"],
    purpose: "Always-on and path-specific rules",
  },
  {
    role: "Agents",
    primary: ".github/agents/",
    children: ["planner.md", "implementer.md", "reviewer.md"],
    purpose: "Roles, tools, and delegated scope",
  },
  {
    role: "Skills",
    primary: ".github/skills/",
    children: ["testing/SKILL.md", "security/SKILL.md", "release/SKILL.md"],
    purpose: "Reusable workflows and resources",
  },
  {
    role: "Hooks",
    primary: ".github/hooks/",
    children: ["policy.json", "validation.json"],
    purpose: "Deterministic lifecycle checks",
  },
  {
    role: "Tools + gates",
    primary: ".github/mcp.json",
    children: ["scripts/agent/verify.ps1"],
    purpose: "Controlled tools and evidence entry points",
  },
];

const readinessQuestions = [
  "Which instructions apply?",
  "Which agent owns the task?",
  "Which skills should load?",
  "Which hooks enforce the gate?",
];

export function Slide17ProjectStructure() {
  return (
    <div className="standard-slide agent-structure-slide">
      <header>
        <p className="eyebrow reveal-in">Instructions → agents → skills → hooks</p>
        <h1 className="reveal-up" style={revealDelay(70)}>
          A Project Structure for Coding Agents
        </h1>
        <p className="slide-lead reveal-up" style={revealDelay(130)}>
          Turn repeated prompts into versioned, reviewable operating assets.
        </p>
      </header>

      <div className="agent-structure-layout">
        <section className="repository-map" aria-label="Sample agent-ready repository structure">
          <div className="repository-root reveal-left" style={revealDelay(180)}>
            <strong>product-service/</strong>
            <span>sample — adapt paths to your runtime</span>
          </div>
          <ul className="repository-groups">
            {repositoryGroups.map((group, index) => (
              <li className="repository-group reveal-left" key={group.role} style={revealDelay(250 + index * 85)}>
                <span className="structure-role">{group.role}</span>
                <div className="structure-path">
                  <strong>{group.primary}</strong>
                  <div className="structure-children">
                    {group.children.map((child) => <span key={child}>{child}</span>)}
                  </div>
                </div>
                <p>{group.purpose}</p>
              </li>
            ))}
          </ul>
        </section>

        <aside className="agent-readiness reveal-up" style={revealDelay(720)}>
          <h2 className="section-label">Before work begins</h2>
          <p>The repository should answer:</p>
          <ol>
            {readinessQuestions.map((question, index) => (
              <li key={question}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{question}</strong>
              </li>
            ))}
          </ol>
        </aside>
      </div>

      <p className="slide-pull-line agent-structure-pull reveal-up" style={revealDelay(840)}>
        Prompts initiate work. Repository configuration makes it repeatable.
      </p>
    </div>
  );
}
