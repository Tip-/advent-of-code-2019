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

  const minimumSignalDelay = Math.min(
    ...commonCoordinates(wireA, wireB)
      .filter(coordinates => coordinates !== '0;0')
      .map(
        coordinates => wireA.indexOf(coordinates) + wireB.indexOf(coordinates),
      ),
  );

  console.log(minimumSignalDelay);
});
