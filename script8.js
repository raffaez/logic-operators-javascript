const prompt = require('prompt-sync')();

let factoryCost = prompt('Factory cost: '), retailPrice = factoryCost*1.73;

console.log(`Retail price: $${retailPrice.toFixed(2)}`);