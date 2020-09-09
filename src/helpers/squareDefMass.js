const squareDefMass = (a, thick, high, width, l, alfa, dens) => {
  const A = a / 1000,
    THICK = thick / 1000,
    HIGH = high / 1000,
    WIDTH = width / 1000,
    RADIUS = HIGH / 2,
    L = l / 1000,
    ALFA = (alfa * Math.PI) / 180,
    DENS = dens;

  const A1 = A * THICK;
  const A3 = ((L - THICK) / Math.cos(ALFA)) * THICK;
  const V1 = RADIUS - A / 2;
  const V3 =
    RADIUS -
    A -
    ((L - THICK) / (2 * Math.cos(ALFA))) * Math.sin(ALFA) -
    (THICK / 2) * Math.cos(ALFA);

  const Vc = (A1 * V1 + A3 * V3) / (A1 + A3);
  const gap = HIGH - 2 * Vc;

  const perimeter = 2 * (HIGH - gap + WIDTH - gap);
  const m = (A1 + A3) * perimeter * DENS;
  return m.toFixed(2);
};

export default squareDefMass;
