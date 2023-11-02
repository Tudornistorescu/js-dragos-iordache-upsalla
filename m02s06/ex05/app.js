// const fs = require('fs);
// const writeFileSync = fs.writeFileSync;
const { writeFileSync } = require('fs');
const sep = require('path').sep;
writeFileSync('./my-file.text', 'invat node.js', 'utf8');
console.log(sep);
