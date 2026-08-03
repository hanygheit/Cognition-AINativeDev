import Image from "next/image";

export function Slide16Close() {
  return (
    <div className="close-slide">
      <div className="arc-motif arc-motif-close" aria-hidden="true" />
      <p className="eyebrow">Own the outer loops</p>
      <h1>You are the orchestrator—not the typist.</h1>
      <p className="close-secondary">The inner loop got fast. Own the outer loops.</p>
      <blockquote>
        <span>AI-native development is not about producing more code.</span>
        <strong>It is about owning the system that turns intent into reliable outcomes.</strong>
      </blockquote>
      <footer>
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