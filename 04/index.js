const INPUT = '193651-649729';
const MIN = INPUT.split('-')[0];
const MAX = INPUT.split('-')[1];

let possibilitiesCount = 0;

const hasSixDigits = input =>
  `${input}`.length === 6 && Number(input) === input;

const digitsNeverDecrease = input =>
  `${input}`
    .split('')
    .map(Number)
    .sort((a, b) => a - b)
    .join('') === `${input}`;

const hasExactlyTwoRepeatingDigits = input =>
  Object.values(
    `${input}`.split('').reduce(
      (acc, curr) => ({
        ...acc,
        [curr]: Boolean(acc[curr]) ? acc[curr] + 1 : 1,
      }),
      {},
    ),
  ).indexOf(2) > -1;

for (let i = MIN; i < MAX; i++) {
  if (
    hasSixDigits(i) &&
    digitsNeverDecrease(i) &&
    hasExactlyTwoRepeatingDigits(i)
  ) {
    possibilitiesCount++;
    continue;
  }
}

console.log(possibilitiesCount);
