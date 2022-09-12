const prompt = require('prompt-sync')();

let x1 = prompt('x1 = '), y1 = prompt('y1 = '), x2 = prompt('x2 = '), y2 = prompt('y2 = ');

let n1 = Math.pow(x2-x1, 2), n2 = Math.pow(y2-y1, 2), d = Math.sqrt(n1+n2);

console.log(`√(${x2}-${x1})²+(${y2}-${y1})² = ${d.toFixed(1)}`);