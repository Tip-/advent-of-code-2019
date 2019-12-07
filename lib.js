const intcodeComputer = ({ data, param, param2, mode }) => {
  const intcode = data.split(',').map(Number);
  let cursor = 0;
  let output;
  while (cursor < intcode.length) {
    const input = `${intcode[cursor]}`.padStart(5, '0');
    const opcode = Number(input.slice(-2));
    const parameters = input
      .slice(0, 3)
      .split('')
      .reverse()
      .map(Number)
      .map(Boolean);
    const one = parameters[0] ? cursor + 1 : intcode[cursor + 1];
    const two = parameters[1] ? cursor + 2 : intcode[cursor + 2];
    const three = parameters[2] ? cursor + 3 : intcode[cursor + 3];

    switch (Number(opcode)) {
      case 1:
        intcode[intcode[cursor + 3]] = intcode[one] + intcode[two];
        cursor = cursor + 4;
        break;
      case 2:
        intcode[intcode[cursor + 3]] = intcode[one] * intcode[two];
        cursor = cursor + 4;
        break;
      case 3:
        intcode[one] = param;
        param = param2;
        cursor = cursor + 2;
        break;
      case 4:
        output = intcode[one];
        cursor = cursor + 2;
        break;
      case 5:
        cursor = Boolean(intcode[one]) ? intcode[two] : cursor + 3;
        break;
      case 6:
        cursor = !Boolean(intcode[one]) ? intcode[two] : cursor + 3;
        break;
      case 7:
        intcode[three] = intcode[one] < intcode[two] ? 1 : 0;
        cursor = cursor + 4;
        break;
      case 8:
        intcode[three] = intcode[one] === intcode[two] ? 1 : 0;
        cursor = cursor + 4;
        break;
      case 99:
        return mode === 'OUTPUT' ? output : intcode;
      default:
        break;
    }
  }
  return mode === 'OUTPUT' ? output : intcode;
};

const getPermutations = input => {
  let output = [];

  if (input.length === 1) {
    return input;
  }

  for (let i = 0; i < input.length; i++) {
    const target = input[i];
    const rest = input.filter((_, index) => index !== i);

    for (let j = 0; j < rest.length; j++) {
      output.push([target, getPermutations(rest)[j]]);
    }
  }

  return output.map(chunk => [].concat(...chunk));
};

module.exports = {
  intcodeComputer,
  getPermutations,
};
