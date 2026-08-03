import type { ComponentType } from "react";

import { getSlide } from "@/data/slides";
import { SlideFrame } from "@/components/presentation/SlideFrame";

import { Slide01TwoOutcomes } from "./Slide01TwoOutcomes";
import { Slide02Title } from "./Slide02Title";
import { Slide02YourNameOnRelease } from "./Slide02YourNameOnRelease";
import { Slide03Modes } from "./Slide03Modes";
import { Slide04DevelopmentModes } from "./Slide04DevelopmentModes";
import { Slide04Audience } from "./Slide04Audience";
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
import { Slide17ProjectStructure } from "./Slide17ProjectStructure";

const slideComponents: Record<number, ComponentType> = {
  1: Slide02Title,
  2: Slide02YourNameOnRelease,
  3: Slide03Modes,
  4: Slide04Audience,
  5: Slide04DevelopmentModes,
  6: Slide01TwoOutcomes,
  7: Slide06FourLayers,
  8: Slide07ThreeLoops,
  9: Slide08SdlcVerbs,
  10: Slide09Ownership,
  11: Slide10Intent,
  12: Slide11PlanDelegate,
  13: Slide12Verify,
  14: Slide13AssuranceStack,
  15: Slide14EngineerStack,
  16: Slide15Monday,
  17: Slide17ProjectStructure,
  18: Slide16Close,
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
