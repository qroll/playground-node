const path = require('path');

console.log(path.parse('/home/user/dir/file.txt'));
console.log(path.parse('/home/user/dir'));
console.log(path.parse('.'));
console.log(path.parse(path.resolve('.')));