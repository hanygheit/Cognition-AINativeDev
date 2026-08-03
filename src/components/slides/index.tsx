import type { ComponentType } from "react";

import { getSlide } from "@/data/slides";
import { SlideFrame } from "@/components/presentation/SlideFrame";

import { Slide01TwoOutcomes } from "./Slide01TwoOutcomes";
import { Slide02Title } from "./Slide02Title";
import { Slide03Modes } from "./Slide03Modes";
import { Slide04Audience } from "./Slide04Audience";
import { Slide05VerificationGap } from "./Slide05VerificationGap";
import { Slide06FourLayers } from "./Slide06FourLayers";
import { Slide07ThreeLoops } from "./Slide07ThreeLoops";
import { Slide08SdlcVerbs } from "./Slide08SdlcVerbs";
import { Slide09Ownership } from "./Slide09Ownership";
import { Slide10Intent } from "./Slide10Intent";
import { Slide11PlanDelegate } from "./Slide11PlanDelegate";
import { Slide12Verify } from "./Slide12Verify";
import { Slide13AssuranceStack } from "./Slide13AssuranceStack";
import { Slide14EngineerStack } from "./Slide14EngineerStack";
import { Slide15Monday } from "./Slide15Monday";
import { Slide16Close } from "./Slide16Close";

const slideComponents: Record<number, ComponentType> = {
  1: Slide02Title,
  2: Slide01TwoOutcomes,
  3: Slide03Modes,
  4: Slide04Audience,
  5: Slide05VerificationGap,
  6: Slide06FourLayers,
  7: Slide07ThreeLoops,
  8: Slide08SdlcVerbs,
  9: Slide09Ownership,
  10: Slide10Intent,
  11: Slide11PlanDelegate,
  12: Slide12Verify,
  13: Slide13AssuranceStack,
  14: Slide14EngineerStack,
  15: Slide15Monday,
  16: Slide16Close,
};

type RenderSlideProps = Readonly<{
  id: number;
  compact?: boolean;
  className?: string;
}>;

export function RenderSlide({ id, compact, className }: RenderSlideProps) {
  const slide = getSlide(id);
  const SlideComponent = slideComponents[id];

  if (!slide || !SlideComponent) {
    return null;
  }

  return (
    <SlideFrame className={className} compact={compact} slide={slide}>
      <SlideComponent />
    </SlideFrame>
  );
}