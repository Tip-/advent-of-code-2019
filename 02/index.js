const fs = require('fs');

function restoreGravity({ input, value1, value2 }) {
  input[1] = value1;
  input[2] = value2;
  return input;
}

function end({ noun, verb }) {
  console.log(noun * 100 + verb);
}

function process({ intcode, noun, verb }) {
  if (Boolean(noun)) {
    intcode[1] = noun;
  }

  if (Boolean(verb)) {
    intcode[2] = verb;
  }

  for (let position = 0; position < intcode.length; position = position + 4) {
    const opcode = intcode[position];

    switch (opcode) {
      case 1:
        intcode[intcode[position + 3]] =
          intcode[intcode[position + 1]] + intcode[intcode[position + 2]];
        break;
      case 2:
        intcode[intcode[position + 3]] =
          intcode[intcode[position + 1]] * intcode[intcode[position + 2]];
        break;
      case 99:
        return intcode;
      default:
        break;
    }
  }

  return intcode;
}

fs.readFile(__dirname + '/input', 'utf8', function read(err, data) {
  let intcode = restoreGravity({
    input: data.split(',').map(Number),
    value1: 12,
    value2: 2,
  });

  for (let noun = 1; noun < 100; noun++) {
    for (let verb = 1; verb < 100; verb++) {
      if (
        process({
          intcode: [...intcode],
          noun,
          verb,
        })[0] === 19690720
      ) {
        end({ noun, verb });
      }
    }
  }
});
