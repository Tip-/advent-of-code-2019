const getAgnosticFuelForMass = mass =>
  Math.max(0, Math.floor(Number(mass) / 3) - 2);

const getFuelForMass = mass => {
  const result = getAgnosticFuelForMass(mass);
  if (result === 0) {
    return result;
  }

  return result + getFuelForMass(result);
};

const getFuelForMasses = masses =>
  masses.reduce((acc, curr) => acc + getFuelForMass(curr), 0);

module.exports = {
  getAgnosticFuelForMass,
  getFuelForMass,
  getFuelForMasses,
};
