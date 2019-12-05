const fs = require('fs');

const range = length => [...Array(length).keys()].map(i => i + 1);

const commonCoordinates = (wireA, wireB) =>
  wireA.filter(a => wireB.indexOf(a) !== -1);

const getSegmentCrossedCoordinates = ({ x, y, direction, length }) =>
  range(length).map(distance => {
    switch (direction) {
      case 'U':
        return `${x};${y + distance}`;
      case 'D':
        return `${x};${y - distance}`;
      case 'L':
        return `${x - distance};${y}`;
      case 'R':
        return `${x + distance};${y}`;
      default:
        return null;
    }
  });

const getWireCrossedCoordinates = segments =>
  segments.reduce(
    (acc, { direction, length }) => {
      const [x, y] = acc[acc.length - 1].split(';').map(Number);

      return [
        ...acc,
        ...getSegmentCrossedCoordinates({ x, y, direction, length }),
      ];
    },
    ['0;0'],
  );

// const raw = `R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51
// U98,R91,D20,R16,D67,R40,U7,R15,U6,R7`;

fs.readFile(__dirname + '/input', 'utf8', (err, data) => {
  const [wireA, wireB] = data
    .split('\n')
    .filter(Boolean)
    .map(wireSegments =>
      wireSegments.split(',').map(segment => {
        return {
          direction: segment.charAt(0),
          length: Number(segment.slice(1)),
        };
      }),
    )
    .map(getWireCrossedCoordinates);

  const manhattanDistance = Math.min(
    ...commonCoordinates(wireA, wireB)
      .filter(coordinates => coordinates !== '0;0')
      .map(coordinates => {
        const [x, y] = coordinates.split(';').map(Number);
        return Math.abs(x) + Math.abs(y);
      }),
  );

  console.log(manhattanDistance);
});
