const readline = require('readline');
const fs = require('fs');
const fd = fs.createReadStream(__dirname + '/input');

const readInterface = readline.createInterface({
  input: fd,
});

let masses = [];

readInterface.on('line', function(mass) {
  masses.push(mass);
});

fd.on('end', function() {
  console.log(
    masses.reduce(function(acc, curr) {
      return acc + Math.max(0, Math.floor(Number(curr) / 3) - 2);
    }, 0),
  );
});
