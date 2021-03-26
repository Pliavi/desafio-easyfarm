export const createRandomColor = () => {
  const h = (360 * Math.random()).toFixed(2);
  const s = (25 + 70 * Math.random()).toFixed(2);
  const l = (85 + 10 * Math.random()).toFixed(2);

  return `hsl(${h},${s}%,${l}%)`;
};
