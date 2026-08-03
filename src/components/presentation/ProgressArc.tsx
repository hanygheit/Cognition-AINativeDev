type ProgressArcProps = {
  current: number;
  total: number;
};

export function ProgressArc({ current, total }: ProgressArcProps) {
  const radius = 17;
  const circumference = 2 * Math.PI * radius;
  const progress = current / total;

  return (
    <svg aria-label={`Slide ${current} of ${total}`} className="progress-arc" viewBox="0 0 42 42">
      <circle className="progress-track" cx="21" cy="21" r={radius} />
      <circle
        className="progress-value"
        cx="21"
        cy="21"
        r={radius}
        strokeDasharray={circumference}
        strokeDashoffset={circumference * (1 - progress)}
      />
      <text x="21" y="24">{current}</text>
    </svg>
  );
}