const hasSixDigits = input =>
  `${input}`.length === 6 && Number(input) === input;

const digitsNeverDecrease = input =>
  `${input}`
    .split('')
    .map(Number)
    .sort((a, b) => a - b)
    .join('') === `${input}`;

const hasTwoRepeatingDigits = input =>
  Object.values(
    `${input}`.split('').reduce(
      (acc, curr) => ({
        ...acc,
        [curr]: Boolean(acc[curr]) ? acc[curr] + 1 : 1,
      }),
      {},
    ),
  ).indexOf(2) > -1;

module.exports = {
  hasSixDigits,
  digitsNeverDecrease,
  hasTwoRepeatingDigits,
};
