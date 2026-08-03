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
        <div>
          <strong>Hany Saad</strong>
          <span>Senior Engineering Manager, ITWorx</span>
          <a href="https://www.linkedin.com/in/hanysaad/">linkedin.com/in/hanysaad</a>
        </div>
        <Image
          alt="QR code linking to Hany Saad on LinkedIn"
          className="linkedin-qr"
          height={132}
          priority
          src="/assets/linkedin-qr.png"
          width={132}
        />
      </footer>
    </div>
  );
}