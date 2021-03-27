export const createRandomColor = () => {
  const h = (360 * Math.random()).toFixed(2);
  const l = (50 + 10 * Math.random()).toFixed(2);

  return `hsl(${h},100%,${l}%)`;
};
