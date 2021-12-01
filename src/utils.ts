export const buildWorkingPeriod = (
  startedAt: string,
  endedAt?: string,
): string => {
  const started = new Date(startedAt);

  if (!endedAt) return `${buildWorkingDate(started)} - Present`;

  const ended = new Date(endedAt);
  return `${buildWorkingDate(started)} - ${buildWorkingDate(ended)}`;
};

const buildWorkingDate = (date: Date): string =>
  `${date.getMonth()}/${date.getFullYear().toString().slice(2)}`;
