const squareFlangMass = (a1, a2, b1, b2, thick, dens) => {
  const m = ((((a1 * b1 - a2 * b2) / 1000000) * thick) / 1000) * dens;
  return m.toFixed(2);
};

export default squareFlangMass;
