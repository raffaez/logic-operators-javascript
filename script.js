const prompt = require('prompt-sync')();

let y = prompt('Years: ');
let m = prompt('Meses: ');
let d = prompt('Dias: ');

let dTotal = y*365+m*30+Number(d);

console.log(`${dTotal} days in ${y} years, ${m} months and ${d} days.`);