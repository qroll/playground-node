let moment = require('moment');
let start;
setTimeout(() => console.log(moment().diff(start)), 0)
let p = Promise.resolve(1)
for (let i = 1000000; i; i--) {
  p = p.then(_ => 1);
}
start = moment();