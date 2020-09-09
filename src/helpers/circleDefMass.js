const circleDefMass = (a, thick, H, l, alfa, dens) => {
  const A = a / 1000,
    THICK = thick / 1000,
    RADIUS = H / 2000,
    L = l / 1000,
    ALFA = (alfa * Math.PI) / 180,
    DENS = dens;

  const A1 = A * THICK,
    A3 = ((L - THICK) / Math.cos(ALFA)) * THICK,
    V1 = RADIUS - A / 2,
    V3 =
      RADIUS -
      A -
      ((L - THICK) / (2 * Math.cos(ALFA))) * Math.sin(ALFA) -
      (THICK / 2) * Math.cos(ALFA);

  const Vc = (A1 * V1 + A3 * V3) / (A1 + A3);
  const m = (A1 + A3) * 2 * Math.PI * Vc * DENS;

  return m.toFixed(2);
};

export default circleDefMass;
