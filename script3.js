const prompt = require('prompt-sync')();

let sTotal = prompt(`Event's duration in seconds: `), aux=0;

let h = sTotal/3600;
aux = sTotal%3600;
let m = aux/60;
let s = aux%60;

console.log(`${Math.floor(h)}h ${Math.floor(m)}m ${Math.floor(s)}s`);