export const round1dp = (num: number) => (
  Math.round((num + Number.EPSILON) * 1e1) / 1e1
);

export const round2dp = (num: number) => (
  Math.round((num + Number.EPSILON) * 1e2) / 1e2
);
