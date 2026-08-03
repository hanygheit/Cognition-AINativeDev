import { SLIDE_COUNT } from "@/data/slides";

export function clampSlide(slide: number): number {
  return Math.min(SLIDE_COUNT, Math.max(1, slide));
}

export function slidePath(slide: number): string {
  return `/present/${clampSlide(slide)}`;
}

export function isValidSlide(slide: number): boolean {
  return Number.isInteger(slide) && slide >= 1 && slide <= SLIDE_COUNT;
}