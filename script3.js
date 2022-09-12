const prompt = require('prompt-sync')();

const durationText = prompt(`Event's duration in seconds: `);
const duration = Number(durationText);
let aux = 0;

const hours = duration/3600;
aux = duration%3600;
const minutes = aux/60;
const seconds = aux%60;

console.log(`Event's duration: ${Math.floor(hours)}h ${Math.floor(minutes)}m ${Math.floor(seconds)}s`);