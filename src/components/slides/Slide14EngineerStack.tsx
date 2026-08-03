import {
  Compass,
  Code2,
  GitPullRequest,
  MessageSquareCode,
  Network,
  ShieldCheck,
} from "lucide-react";

import { revealDelay } from "@/lib/utils";

const skillLayers = [
  {
    level: "01",
    title: "Software Fundamentals",
    capabilities: "Programming · OOP · data structures · APIs · databases · debugging · Git",
    icon: Code2,
    tone: "foundation",
  },
  {
    level: "02",
    title: "Engineering Practice",
    capabilities: "Testing · code review · CI/CD · secure coding · observability",
    icon: GitPullRequest,
    tone: "practice",
  },
  {
    level: "03",
    title: "System Design",
    capabilities: "Architecture · boundaries · data contracts · reliability · trade-offs",
    icon: Network,
    tone: "systems",
  },
  {
    level: "04",
    title: "Product & Domain Judgment",
    capabilities: "User needs · business rules · acceptance criteria · domain context",
    icon: Compass,
    tone: "judgment",
  },
  {
    level: "05",
    title: "AI Collaboration",
    capabilities: "Task framing · context · constraints · tool use · critique",
    icon: MessageSquareCode,
    tone: "collaboration",
  },
  {
    level: "06",
    title: "End-to-End Ownership",
    capabilities: "Verification · risk · orchestration · release decisions · outcomes",
    icon: ShieldCheck,
    tone: "ownership",
  },
];

const learningPath = [
  ["01–02", "Foundation", "Build and ship sound software."],
  ["03–04", "Maturity", "Shape systems and problems."],
  ["05–06", "Leverage", "Direct, verify, and own."],
];

export function Slide14EngineerStack() {
  return (
    <div className="standard-slide engineer-slide">
      <header>
        <h1 className="reveal-up" style={revealDelay(70)}>
          The AI-Native Engineer: A Layered Skills Model
        </h1>
        <p className="slide-lead reveal-up" style={revealDelay(140)}>
          AI fluency builds on engineering maturity—not instead of it.
        </p>
      </header>

      <div className="engineer-layout">
        <ol aria-label="Six layers of AI-native engineering capability" className="skill-layer-stack">
          {skillLayers.map(({ capabilities, icon: Icon, level, title, tone }, index) => (
            <li
              className={`skill-layer skill-layer-${tone} reveal-left`}
              key={level}
              style={revealDelay(230 + index * 80)}
            >
              <span className="skill-layer-number">{level}</span>
              <Icon aria-hidden="true" className="skill-layer-icon" strokeWidth={1.8} />
              <strong>{title}</strong>
              <span className="skill-layer-capabilities">{capabilities}</span>
            </li>
          ))}
        </ol>

        <aside className="skill-journey reveal-right" style={revealDelay(760)}>
          <p className="section-label">How capability compounds</p>
          <div className="skill-journey-path">
            {learningPath.map(([levels, label, detail]) => (
              <div key={levels}>
                <span>{levels}</span>
                <strong>{label}</strong>
                <p>{detail}</p>
              </div>
            ))}
          </div>
          <p className="skill-journey-principle">
            <strong>AI amplifies the stack.</strong>
            <span>It does not replace its foundation.</span>
          </p>
        </aside>
      </div>
    </div>
  );
}
