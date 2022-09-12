const prompt = require('prompt-sync')();

let a=prompt('A: '), b=prompt('B: '), c=prompt('C: '), d=prompt('D: '), e=prompt('E: '), f=prompt('F: ');

let x = (c*e-b*f)/(a*e-b*d), y = (a*f-c*d)/(a*e-b*d)

console.log(`x = ${x.toFixed(2)}, y = ${y.toFixed(2)}`);