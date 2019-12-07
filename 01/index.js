const readline = require('readline');
const fs = require('fs');
const fd = fs.createReadStream(__dirname + '/input');
const readInterface = readline.createInterface({ input: fd });

let masses = [];

readInterface.on('line', function(mass) {
  masses.push(mass);
});

const getFuelForMass = mass => {
  const result = Math.max(0, Math.floor(Number(mass) / 3) - 2);
  if (result === 0) {
    return result;
  }

  return result + getFuelForMass(result);
};

const run = () => {
  console.log(
    masses.reduce(function(acc, curr) {
      return acc + getFuelForMass(curr);
    }, 0),
  );
};

fd.on('end', run);
