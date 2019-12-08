const {
  hasSixDigits,
  digitsNeverDecrease,
  hasTwoRepeatingDigits,
} = require('./utils');

const INPUT = '193651-649729';
const MIN = INPUT.split('-')[0];
const MAX = INPUT.split('-')[1];

let possibilitiesCount = 0;

for (let i = MIN; i < MAX; i++) {
  if (hasSixDigits(i) && digitsNeverDecrease(i) && hasTwoRepeatingDigits(i)) {
    possibilitiesCount++;
    continue;
  }
}

console.log(possibilitiesCount);
