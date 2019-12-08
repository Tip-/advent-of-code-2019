const readline = require('readline');
const fs = require('fs');
const fd = fs.createReadStream(__dirname + '/input');
const readInterface = readline.createInterface({ input: fd });
const { getFuelForMasses } = require('./utils');

let masses = [];

readInterface.on('line', function(mass) {
  masses.push(mass);
});

const run = () => {
  console.log(getFuelForMasses(masses));
};

fd.on('end', run);

module.exports = { run };
