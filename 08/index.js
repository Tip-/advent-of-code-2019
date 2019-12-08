const fs = require('fs');
const WIDTH = 25;
const HEIGHT = 6;

const split = arr =>
  arr.length > WIDTH * HEIGHT
    ? [
        arr.slice(0, WIDTH * HEIGHT),
        ...split(arr.slice(WIDTH * HEIGHT), WIDTH * HEIGHT),
      ]
    : [arr];

const run = (_, data) => {
  const layers = split(
    data
      .split('')
      .filter(n => n !== '\n')
      .map(Number),
  );

  const { layer } = layers.reduce(
    ({ zerosCounts, layer }, curr) => {
      const currentLayerZerosCount = curr.filter(digit => !Boolean(digit))
        .length;
      if (currentLayerZerosCount < zerosCounts) {
        return { zerosCounts: currentLayerZerosCount, layer: curr };
      }

      return { zerosCounts, layer };
    },
    { zerosCounts: WIDTH * HEIGHT + 1, layer: [] },
  );

  console.log(
    layer.filter(digit => digit === 1).length *
      layer.filter(digit => digit === 2).length,
  );
};

fs.readFile(__dirname + '/input.txt', 'utf8', run);
