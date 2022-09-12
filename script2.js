const prompt = require('prompt-sync')();

const ageText = prompt('Age in days: ');
const age = Number(ageText);
let aux = 0;

const years = age/365;
aux = age%365;
const months = aux/30;
const days = aux%30;

console.log(`You've lived ${Math.floor(years)} years, ${Math.floor(months)} months and ${days} days in ${age} days.`);