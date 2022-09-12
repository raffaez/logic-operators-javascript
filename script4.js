const prompt = require('prompt-sync')();

let a = prompt('A: '), b = prompt('B: '); c = prompt('C: ');
let r = Math.pow(Number(a)+Number(b), 2), s = Math.pow(Number(b)+Number(c), 2), d = (r+s)/2;

console.log(`${d} = (${r}+${s})/2`);