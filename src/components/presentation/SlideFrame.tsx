import type { ReactNode } from "react";

import type { SlideDefinition } from "@/data/slides";
import { cn } from "@/lib/utils";

type SlideFrameProps = {
  slide: SlideDefinition;
  children: ReactNode;
  className?: string;
  compact?: boolean;
};

/** Maintains the shared 16:9 canvas and accessible slide semantics. */
export function SlideFrame({
  slide,
  children,
  className,
  compact = false,
}: SlideFrameProps) {
  return (
    <article
      aria-label={`Slide ${slide.id}: ${slide.title}`}
      className={cn(
        "slide-frame",
        `slide-theme-${slide.theme}`,
        compact && "slide-frame-compact",
        className,
      )}
      data-slide-id={slide.id}
      data-slide-title={slide.title}
      role="group"
    >
      <div className="slide-content">{children}</div>
    </article>
  );
}