const {
  hasSixDigits,
  digitsNeverDecrease,
  hasTwoRepeatingDigits,
} = require('./utils');

describe('Password has 6 digits', () => {
  test('12345 does not meet the criteria', () => {
    expect(hasSixDigits(12345)).toBe(false);
  });

  test('1234567 does not meet the criteria', () => {
    expect(hasSixDigits(1234567)).toBe(false);
  });

  test('123456 meets the criteria', () => {
    expect(hasSixDigits(123456)).toBe(true);
  });
});

describe('Password digits never decrease', () => {
  test('123456 meets the criteria', () => {
    expect(digitsNeverDecrease(123456)).toBe(true);
  });

  test('111222 meets the criteria', () => {
    expect(digitsNeverDecrease(111222)).toBe(true);
  });

  test('122221’s does not meet the criteria', () => {
    expect(digitsNeverDecrease(122221)).toBe(false);
  });
});

// * Has two adjacent matching digits,
// * The two adjacent matching digits are not part of a larger group of
//   matching digits

describe('Password digits never decrease', () => {
  test('112233 meets the criteria', () => {
    expect(hasTwoRepeatingDigits(112233)).toBe(true);
  });

  test('123444 does not meet the criteria', () => {
    expect(hasTwoRepeatingDigits(123444)).toBe(false);
  });

  test('111122 meets the criteria', () => {
    expect(hasTwoRepeatingDigits(111122)).toBe(true);
  });
});
