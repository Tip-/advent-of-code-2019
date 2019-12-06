const readline = require('readline');
const fs = require('fs');
const fd = fs.createReadStream(__dirname + '/input.txt');
const readInterface = readline.createInterface({ input: fd });

let directOrbits = new Map();
readInterface.on('line', orbit => {
  const [orbited, satellite] = orbit.split(')');
  directOrbits.set(satellite, orbited);
});

const getIndirectOrbits = satellite => {
  if (!directOrbits.has(satellite)) {
    return [];
  }

  const orbited = directOrbits.get(satellite);
  return [orbited, ...getIndirectOrbits(orbited)];
};

const processIndirectOrbits = () => {
  let count = 0;

  for (let [satellite] of directOrbits.entries()) {
    count += getIndirectOrbits(satellite).length;
  }

  console.log(count);
};

fd.on('end', processIndirectOrbits);
