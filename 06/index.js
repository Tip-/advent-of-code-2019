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

const process = () => {
  const youOrbits = get('YOU');
  const sanOrbits = getIndirectOrbits('SAN');

  const firstCommonOrbit = youOrbits.filter(orbit =>
    sanOrbits.includes(orbit),
  )[0];

  console.log(
    youOrbits.indexOf(firstCommonOrbit) + sanOrbits.indexOf(firstCommonOrbit),
  );
};

fd.on('end', process);
