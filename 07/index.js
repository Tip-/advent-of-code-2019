const fs = require('fs');
const { intcodeComputer, getPermutations } = require('../lib');

const run = (_, data) => {
  const result = getPermutations([0, 1, 2, 3, 4])
    .reduce(
      (acc, phases) => [
        ...acc,
        phases.reduce(
          (acc, phase) =>
            intcodeComputer({
              data,
              param: phase,
              param2: acc,
              mode: 'OUTPUT',
            }),
          0,
        ),
      ],
      [],
    )
    .reduce((max, curr) => (curr > max ? curr : max), 0);

  console.log(result);
};

fs.readFile(__dirname + '/input.txt', 'utf8', run);
