const {
  getFuelForMass,
  getAgnosticFuelForMass,
  getFuelForMasses,
} = require('./utils');

test('A module mass of 14 requires 2 fuel', () => {
  expect(getFuelForMass(14)).toBe(2);
});

test('At first, a module of mass 1969 requires 654 fuel', () => {
  expect(getAgnosticFuelForMass(1969)).toBe(654);
});

test('The total fuel required for a module of mass 1969 is 966', () => {
  expect(getFuelForMass(1969)).toBe(966);
});

test('The total fuel required for two modules with respective masses of 1969 and 14 is 968', () => {
  expect(getFuelForMasses([1969, 14])).toBe(966 + 2);
});
