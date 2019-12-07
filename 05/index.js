const fs = require('fs');
const { intcodeComputer } = require('../lib');
const param = Number(process.argv[2]);

const run = (_, data) => {
  console.log(intcodeComputer({ data, param, mode: 'OUTPUT' }));
};

fs.readFile(__dirname + '/input.txt', 'utf8', run);
