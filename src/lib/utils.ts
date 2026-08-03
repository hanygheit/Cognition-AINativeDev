import type { CSSProperties } from "react";

export function cn(
  ...classes: Array<string | false | null | undefined>
): string {
  return classes.filter(Boolean).join(" ");
}

export function formatDuration(totalSeconds: number): string {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

/**
 * Stagger step for the CSS reveal system. Pair with a `reveal-*` class; the
 * element's base styles stay the final state so PDF and reduced-motion
 * surfaces render complete slides.
 */
export function revealDelay(milliseconds: number): CSSProperties {
  return { "--reveal-delay": `${milliseconds}ms` } as CSSProperties;
}
