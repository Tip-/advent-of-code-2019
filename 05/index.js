const fs = require('fs');
const param = Number(process.argv[2]);

const run = (_, data) => {
  const intcode = data.split(',').map(Number);
  let cursor = 0;

  while (cursor < intcode.length) {
    const input = `${intcode[cursor]}`.padStart(5, '0');
    const opcode = input.slice(-2);
    const parameters = input
      .slice(0, 3)
      .split('')
      .reverse()
      .map(Number);
    let increment;

    const one = parameters[0] === 0 ? intcode[cursor + 1] : cursor + 1;
    const two = parameters[1] === 0 ? intcode[cursor + 2] : cursor + 2;
    const three = parameters[2] === 0 ? intcode[cursor + 3] : cursor + 3;

    switch (Number(opcode)) {
      case 1:
        increment = 4;
        intcode[three] = intcode[one] + intcode[two];
        break;

      case 2:
        increment = 4;
        intcode[three] = intcode[one] * intcode[two];
        break;

      case 3:
        increment = 2;
        intcode[one] = param;
        break;

      case 4:
        console.log(intcode[one]);
        increment = 2;
        break;

      case 99:
        return intcode;

      default:
        break;
    }

    cursor = cursor + increment;
  }

  return intcode;
};

fs.readFile(__dirname + '/input.txt', 'utf8', run);
