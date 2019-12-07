const fs = require('fs');
const { intcodeComputer } = require('../lib');

const restoreGravity = ({ input, value1, value2 }) => {
  input[1] = value1;
  input[2] = value2;
  return input;
};

const transformIntcode = ({ input, noun, verb }) => {
  let output = [...input];

  if (Boolean(noun)) {
    output[1] = noun;
  }

  if (Boolean(verb)) {
    output[2] = verb;
  }

  return output.join(',');
};

const run = (_, data) => {
  let intcode = restoreGravity({
    input: data.split(',').map(Number),
    value1: 12,
    value2: 2,
  });

  for (let noun = 1; noun < 100; noun++) {
    for (let verb = 1; verb < 100; verb++) {
      if (
        intcodeComputer({
          data: transformIntcode({
            input: intcode,
            noun,
            verb,
          }),
        })[0] === 19690720
      ) {
        console.log(noun * 100 + verb);
      }
    }
  }
};

fs.readFile(__dirname + '/input', 'utf8', run);
