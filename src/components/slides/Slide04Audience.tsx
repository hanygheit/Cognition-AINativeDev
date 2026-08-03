import {
  ArrowUpRight,
  CircleCheck,
  Code2,
  Network,
  ShieldCheck,
  Target,
  type LucideIcon,
} from "lucide-react";

import { revealDelay } from "@/lib/utils";

type ControlStage = {
  title: string;
  question: string;
  icon: LucideIcon;
};

const controlStages: ControlStage[] = [
  {
    title: "Implementation",
    question: "Is the code correct and maintainable?",
    icon: Code2,
  },
  {
    title: "System Behavior",
    question: "Does it satisfy the requirement and edge cases?",
    icon: CircleCheck,
  },
  {
    title: "Architecture",
    question: "Are boundaries, contracts, dependencies, and data flows sound?",
    icon: Network,
  },
  {
    title: "Delivery Risk",
    question: "Is it secure, observable, reliable, performant, and reversible?",
    icon: ShieldCheck,
  },
  {
    title: "Business Outcome",
    question: "Did it deliver the intended user and business value?",
    icon: Target,
  },
];

export function Slide04Audience() {
  return (
    <div className="control-slide">
      <h1 className="reveal-up">
        Do not hand over engineering judgment to AI.
        <span>Move your control to a higher level.</span>
      </h1>

      <section aria-labelledby="control-scope-label" className="control-progression">
        <div className="control-scope-row reveal-in" style={revealDelay(110)}>
          <p className="control-scope-label" id="control-scope-label">
            Engineering control expands outward
          </p>
          <p className="control-review-note">
            <CircleCheck aria-hidden="true" />
            Code review remains necessary. Inspect AI-generated implementation.
          </p>
        </div>

        <div className="control-path">
          <svg
            aria-hidden="true"
            className="control-scope-arc"
            preserveAspectRatio="none"
            viewBox="0 0 1000 260"
          >
            <path
              className="control-scope-arc-outer reveal-draw"
              d="M 8 238 C 290 232, 638 150, 992 24"
              pathLength="1000"
              style={revealDelay(170)}
            />
            <path
              className="control-scope-arc-inner reveal-draw"
              d="M 8 248 C 316 244, 664 172, 992 52"
              pathLength="1000"
              style={revealDelay(220)}
            />
          </svg>

          <ol
            aria-label="Engineering control expands from implementation to business outcome"
            className="control-levels"
          >
            {controlStages.map(({ icon: Icon, question, title }, index) => (
              <li className="control-stage" key={title}>
                <div
                  className="control-stage-content reveal-up"
                  style={revealDelay(280 + index * 90)}
                >
                  <Icon aria-hidden="true" className="control-stage-icon" strokeWidth={1.7} />
                  <h2>{title}</h2>
                  <p>{question}</p>
                </div>
                {index < controlStages.length - 1 ? (
                  <ArrowUpRight
                    aria-hidden="true"
                    className="control-stage-arrow reveal-in"
                    strokeWidth={1.6}
                    style={revealDelay(335 + index * 90)}
                  />
                ) : null}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <p className="control-close reveal-up" style={revealDelay(820)}>
        Review the implementation. Control the system. Own the outcome.
      </p>
    </div>
  );
}
