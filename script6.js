const prompt = require('prompt-sync')();

const x1Text = prompt('x1 = ');
const x1 = Number(x1Text);
const y1Text = prompt('y1 = ');
const y1 = Number(y1Text);
const x2Text = prompt('x2 = ');
const x2 = Number(x2Text);
const y2Text = prompt('y2 = ');
const y2 = Number(y2Text);

const n1 = Math.pow(x2-x1, 2);
const n2 = Math.pow(y2-y1, 2);
const d = Math.sqrt(n1+n2);

console.log(`√(${x2}-${x1})²+(${y2}-${y1})² = ${d.toFixed(1)}`);