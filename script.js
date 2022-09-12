const prompt = require('prompt-sync')();

const yearsText = prompt('Years: ');
const years = Number(yearsText);
const monthsText = prompt('Meses: ');
const months = Number(monthsText);
const daysText = prompt('Dias: ');
const days = Number(daysText);

const age = years*365+months*30+days;

console.log(`You've lived ${age} days in ${years} years, ${months} months and ${days} days.`);