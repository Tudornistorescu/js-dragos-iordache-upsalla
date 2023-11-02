const { readFileSync } = require('fs');
const data = readFileSync('./filetext', 'utf-8');
const message = 'Thuis is our node script!';
console.log(data + ' ' + message);
