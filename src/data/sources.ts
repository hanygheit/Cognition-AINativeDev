export type SourceDefinition = {
  id: string;
  shortLabel: string;
  title: string;
  url: string;
  context: string;
};

export const sources: SourceDefinition[] = [
  {
    id: "peng-2023",
    shortLabel: "Peng et al. · Microsoft Research / arXiv · 2023",
    title: "The Impact of AI on Developer Productivity: Evidence from GitHub Copilot",
    url: "https://arxiv.org/abs/2302.06590",
    context:
      "Controlled study reporting 55.8% faster completion for a self-contained JavaScript HTTP server task.",
  },
  {
    id: "metr-2025",
    shortLabel: "METR · Mature repository study · 2025",
    title: "Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity",
    url: "https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/",
    context:
      "Randomized study in which experienced developers working in mature repositories took 19% longer with AI tools.",
  },
  {
    id: "dora-2025",
    shortLabel: "DORA · State of AI-assisted Software Development · 2025",
    title: "DORA State of AI-assisted Software Development",
    url: "https://dora.dev/research/2025/dora-report/",
    context:
      "Research on AI adoption, trust, throughput, instability, and the organizational systems needed for effective delivery.",
  },
];

export const sourceDisclaimer =
  "Results describe specific studies and conditions; they are not universal productivity guarantees.";

export function getSource(id: string): SourceDefinition | undefined {
  return sources.find((source) => source.id === id);
}