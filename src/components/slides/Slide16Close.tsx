import Image from "next/image";

import { revealDelay } from "@/lib/utils";

export function Slide16Close() {
  return (
    <div className="close-slide">
      <div aria-hidden="true" className="arc-motif arc-motif-close reveal-scale" style={revealDelay(240)} />
      <p className="eyebrow reveal-in">Own the outer loops</p>
      <h1 className="reveal-up" style={revealDelay(90)}>You are the orchestrator—not the typist.</h1>
      <p className="close-secondary reveal-up" style={revealDelay(240)}>
        The inner loop got fast. Own the outer loops.
      </p>
      <blockquote className="reveal-up" style={revealDelay(400)}>
        <span>AI-native development is not about producing more code.</span>
        <strong>It is about owning the system that turns intent into reliable outcomes.</strong>
      </blockquote>
      <footer className="reveal-up" style={revealDelay(560)}>
        <Image
          alt="Speaker portrait placeholder for Hany Saad"
          className="speaker-portrait"
          height={120}
          priority
          src="/assets/speaker-placeholder.png"
          width={120}
        />
        <div className="speaker-details">
          <strong>Hany Saad</strong>
          <span>Senior Engineering Manager, ITWorx</span>
        </div>
        <nav aria-label="Speaker and presentation links" className="close-links">
          <a
            aria-label="Open Hany Saad's LinkedIn profile"
            className="qr-link"
            href="https://www.linkedin.com/in/hanysaad/"
            rel="noreferrer"
            target="_blank"
          >
            <Image
              alt="QR code for Hany Saad's LinkedIn profile"
              className="qr-code"
              data-qr-target="https://www.linkedin.com/in/hanysaad/"
              height={160}
              priority
              src="/assets/qr-linkedin-hany-saad.svg"
              width={160}
            />
            <span>LinkedIn</span>
          </a>
          <a
            aria-label="Open the AI-Native Development presentation repository"
            className="qr-link"
            href="https://github.com/hanygheit/Cognition-AINativeDev"
            rel="noreferrer"
            target="_blank"
          >
            <Image
              alt="QR code for the presentation repository"
              className="qr-code"
              data-qr-target="https://github.com/hanygheit/Cognition-AINativeDev"
              height={160}
              priority
              src="/assets/qr-presentation-repo.svg"
              width={160}
            />
            <span>Presentation repo</span>
          </a>
        </nav>
      </footer>
    </div>
  );
}
