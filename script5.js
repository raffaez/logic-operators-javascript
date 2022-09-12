const prompt = require('prompt-sync')();

let g1 = prompt('Test grade 1: '), g2 = prompt('Test grade 2: '), g3 = prompt('Test grade 3: ');
let average = (g1*2+g2*3+g3*5)/10;

console.log(`Your grade point average is ${average.toFixed(1)}.`);