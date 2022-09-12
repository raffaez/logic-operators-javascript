const prompt = require('prompt-sync')();

let dTotal = prompt('Age in days: '), aux=0;

let y = dTotal/365;
aux = dTotal%365;
let m = aux/30;
let d = aux%30;

console.log(`${Math.floor(y)} years, ${Math.floor(m)} months and ${d} days in ${dTotal} days.`);