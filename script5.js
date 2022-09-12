const prompt = require('prompt-sync')();

const g1Text = prompt('Test grade 1: ');
const g1 = Number(g1Text);
const g2Text = prompt('Test grade 2: ');
const g2 = Number(g2Text);
const g3Text = prompt('Test grade 3: ');
const g3 = Number(g3Text);

const average = (g1*2+g2*3+g3*5)/10;

console.log(`Your grade point average is ${average.toFixed(1)}.`);