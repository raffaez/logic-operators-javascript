const prompt = require('prompt-sync')();

const factoryCost = prompt('Factory cost: $');
const retailPrice = factoryCost*1.73;

console.log(`Retail price: $${retailPrice.toFixed(2)}`);