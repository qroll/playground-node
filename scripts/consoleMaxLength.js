/**
 * Does console.log have a max string length?
 */

let str = '';
let len = 2000000;

for (let i = 0; i < len; i++) {
  str += 'o';
};

console.log(str)