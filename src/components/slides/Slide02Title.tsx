import Image from "next/image";

import { revealDelay } from "@/lib/utils";

export function Slide02Title() {
  return (
    <div className="title-slide">
      <div aria-hidden="true" className="arc-motif arc-motif-right reveal-scale" style={revealDelay(240)} />
      <p className="eyebrow reveal-in">CognitionX Egypt · 3 August 2026</p>
      <h1 className="reveal-up" style={revealDelay(90)}>AI-Native Development</h1>
      <p className="title-subhead reveal-up" style={revealDelay(210)}>
        From Writing Code to Owning the Full SDLC
      </p>
      <blockquote className="reveal-up" style={revealDelay(360)}>
        A role-evolution talk, not a tools talk.
      </blockquote>
      <p className="title-pillars reveal-in" style={revealDelay(500)}>
        Direction · Constraints · Evidence · Outcomes
      </p>
      <footer className="reveal-in" style={revealDelay(620)}>
        <div className="title-speaker">
          <strong>Hany Saad</strong>
          <span>Senior Engineering Manager, ITWorx</span>
        </div>
        <a
          aria-label="Open Hany Saad's LinkedIn profile"
          className="title-linkedin"
          href="https://www.linkedin.com/in/hanysaad/"
          rel="noreferrer"
          target="_blank"
        >
          <Image
            alt="QR code for Hany Saad's LinkedIn profile"
            data-qr-target="https://www.linkedin.com/in/hanysaad/"
            height={192}
            priority
            src="/assets/qr-linkedin-hany-saad.svg"
            width={192}
          />
          <span>Connect on LinkedIn</span>
        </a>
      </footer>
    </div>
  );
}
