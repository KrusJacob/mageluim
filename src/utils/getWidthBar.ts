export const calcWidthHPBar = (currentValue: number, maxValue: number) => {
  if (maxValue === 0) return "0%"; // защита от деления на ноль
  const hpPercent = (currentValue / maxValue) * 100;
  return `${hpPercent}%`;
};
