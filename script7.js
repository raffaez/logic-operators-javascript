const prompt = require('prompt-sync')();

const a = prompt('A: ');
const b = prompt('B: ');
const c = prompt('C: ');
const d = prompt('D: ');
const e = prompt('E: ');
const f = prompt('F: ');

const x = (c*e-b*f)/(a*e-b*d), y = (a*f-c*d)/(a*e-b*d)

console.log(`x = ${x.toFixed(2)}, y = ${y.toFixed(2)}`);