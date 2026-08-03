import { notFound } from "next/navigation";

import { PresentationShell } from "@/components/presentation/PresentationShell";
import { slides } from "@/data/slides";
import { isValidSlide } from "@/lib/navigation";

export const dynamicParams = false;

export function generateStaticParams() {
  return slides.map((slide) => ({ slide: String(slide.id) }));
}

type PresentPageProps = {
  params: Promise<{ slide: string }>;
};

export default async function PresentPage({ params }: PresentPageProps) {
  const slideId = Number((await params).slide);

  if (!isValidSlide(slideId)) {
    notFound();
  }

  return <PresentationShell slideId={slideId} />;
}