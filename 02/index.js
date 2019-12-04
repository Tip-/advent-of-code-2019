const fs = require('fs');

function end(intcode) {
  console.log(intcode[0]);
}

function restoreGravity({ input, value1, value2 }) {
  input[1] = value1;
  input[2] = value2;
  return input;
}

fs.readFile(__dirname + '/input', 'utf8', function read(err, data) {
  let intcode = restoreGravity({
    input: data.split(',').map(Number),
    value1: 12,
    value2: 2,
  });

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
        end(intcode);
        return;
      default:
        break;
    }
  }

  end(intcode);
});
