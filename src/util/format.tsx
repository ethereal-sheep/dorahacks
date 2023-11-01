export const formatStatValue = (
  n: number,
  money?: boolean
): { valueText: string; unit: string | undefined } => {
  if (isNaN(n) || !isFinite(n)) {
    return { valueText: "NaN", unit: "" };
  }

  if (money) {
    // find threshold
    const thresholds = [
      { value: 1_000_000_000, unit: "B" },
      { value: 1_000_000, unit: "M" },
      { value: 1_000, unit: "K" },
      { value: 1, unit: "" },
    ];
    // in case of negative
    const threshold = thresholds.find(({ value }) => {
      return Math.abs(n) >= value;
    });
    if (threshold == null) {
      return { valueText: "0", unit: "" };
    }
    const { value, unit } = threshold;
    const decimal = n / value;

    return { valueText: `${decimal.toFixed(2)}`, unit };
  } else {
    return { valueText: Math.round(n).toLocaleString(), unit: undefined };
  }
};
