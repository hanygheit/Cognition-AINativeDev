import { GitBranch, PencilLine, Sparkles } from "lucide-react";

import { revealDelay } from "@/lib/utils";

const developmentModes = [
  {
    description: "Rapid prototypes, MVP experiments, demos, hackathons, idea validation, and disposable spikes.",
    examples: ["Lovable", "bolt.new", "Google AI Studio"],
    icon: Sparkles,
    principle: "Optimize for learning speed—not production confidence.",
    title: "Vibe Coding",
  },
  {
    description: "Daily coding, debugging, refactoring, tests, documentation, explanation, and unfamiliar code.",
    examples: ["GitHub Copilot", "Cursor", "Equivalent IDE assistants"],
    icon: PencilLine,
    principle: "AI proposes; the engineer reads, integrates, and remains responsible.",
    title: "AI-Assisted Coding",
  },
  {
    description: "Well-specified issues, repository analysis, test repair, controlled modernization, and PR preparation.",
    examples: ["Claude Code", "OpenAI Codex", "Gemini CLI", "Copilot coding agent"],
    icon: GitBranch,
    principle: "Delegate the task—not the accountability.",
    title: "AI Coding Agents",
  },
] as const;

export function Slide04DevelopmentModes() {
  return (
    <div className="standard-slide ai-mode-slide">
      <header>
        <p className="eyebrow reveal-in">How you build changes</p>
        <h1 className="reveal-up" style={revealDelay(90)}>
          AI in Development Is No Longer Optional
        </h1>
        <p className="slide-lead reveal-up" style={revealDelay(180)}>
          Use the right level of AI for the right task.
        </p>
      </header>

      <ol aria-label="Three levels of AI use in development" className="ai-mode-spectrum">
        {developmentModes.map((mode, index) => {
          const Icon = mode.icon;

          return (
            <li
              className={`ai-mode ai-mode-${index + 1} reveal-up`}
              key={mode.title}
              style={revealDelay(300 + index * 120)}
            >
              <div className="ai-mode-heading">
                <span aria-hidden="true" className="ai-mode-icon"><Icon /></span>
                <span className="ai-mode-label">0{index + 1}</span>
                <strong>{mode.title}</strong>
              </div>
              <div className="ai-mode-best-for">
                <span>Best for</span>
                <p>{mode.description}</p>
              </div>
              <blockquote>{mode.principle}</blockquote>
              <div className="ai-mode-examples">
                <span>Examples</span>
                <ul aria-label={`${mode.title} examples`}>
                  {mode.examples.map((example) => <li key={example}>{example}</li>)}
                </ul>
              </div>
            </li>
          );
        })}
      </ol>

      <div className="ai-mode-takeaway reveal-up" style={revealDelay(680)}>
        <blockquote>
          The question is no longer whether to use AI—but how to use it effectively, safely, and responsibly.
        </blockquote>
      </div>

      <p className="ai-mode-disclaimer reveal-in" style={revealDelay(680)}>
        Tool examples illustrate categories and are not endorsements. Choose tools according to task, security,
        privacy, cost, and organizational policy.
      </p>
    </div>
  );
}
