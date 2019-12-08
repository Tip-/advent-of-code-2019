const fs = require('fs');
const { split } = require('../lib');
const WIDTH = 25;
const HEIGHT = 6;

const run = (_, data) => {
  const layers = split(
    data
      .split('')
      .filter(n => n !== '\n')
      .map(Number),
    WIDTH * HEIGHT,
  );

  let positions = [];

  for (let cursor = 0; cursor < WIDTH * HEIGHT; cursor++) {
    let layer = 0;
    while (layers[layer][cursor] === 2) {
      layer++;
    }

    positions.push(layers[layer][cursor]);
  }

  split(positions, WIDTH).map(line =>
    console.log(line.map(digit => (Boolean(digit) ? '•' : ' ')).join('')),
  );
};

fs.readFile(__dirname + '/input.txt', 'utf8', run);
