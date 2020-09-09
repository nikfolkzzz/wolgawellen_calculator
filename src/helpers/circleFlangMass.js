const circleFlangMass = (dmin, dmax, thick, dens) => {
  const dmin2 = Math.pow(dmin / 1000, 2);
  const dmax2 = Math.pow(dmax / 1000, 2);
  thick = thick / 1000;

  const m = (Math.PI / 4) * (dmax2 - dmin2) * thick * dens;
  return m.toFixed(2);
};

export default circleFlangMass;
