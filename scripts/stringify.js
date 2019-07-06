const fs = require('fs');

let file = './token.json';
let str = fs.readFileSync(file).toString();

let json = JSON.parse(str);
// console.log(str);
console.log(JSON.stringify(json));