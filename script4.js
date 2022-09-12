const prompt = require('prompt-sync')();

const aText = prompt('A: ');
const a = Number(aText);
const bText = prompt('B: ');
const b = Number(bText);
const cText = prompt('C: ');
const c = Number(cText);

const r = Math.pow(a+b, 2);
const s = Math.pow(b+c, 2);
const d = (r+s)/2;

console.log(`${d} = (${r}+${s})/2`);