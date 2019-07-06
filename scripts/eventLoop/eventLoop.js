const moment = require('moment');

async function syncFunc() {
  let k = 0;
  for (let i = 0; i < 90000000; i++) {
    await k++;
  }
  console.log("syncFunc")
}

async function asyncFunc() {
  await new Promise(resolve => {
    console.log("asyncFunc");
    resolve();
  });
}

setImmediate(() => console.log('set immediate1'));
setImmediate(() => console.log('set immediate2'));

new Promise(async (resolve) => {
  let a = new Date();
  await syncFunc();
  await asyncFunc();
  let b = new Date();

  console.log(moment(a).diff(moment(b)));
  resolve('fs promise resolved');

}).then(res => console.log(res))


Promise.resolve().then(() =>
  console.log('promise1 resolved')
);
Promise.resolve().then(() => console.log('promise2 resolved'));
Promise.resolve().then(() => {
  console.log('promise3 resolved');
  process.nextTick(() => console.log('next tick inside promise resolve handler'));
});

Promise.resolve().then(() => console.log('promise4 resolved'));
Promise.resolve().then(() => console.log('promise5 resolved'));

process.nextTick(() => console.log('next tick1'));
process.nextTick(() => console.log('next tick2'));
process.nextTick(() => console.log('next tick3'));

setTimeout(() => console.log('set timeout 1s'), 1000);
setTimeout(() => console.log('set timeout 0s'), 0);
setImmediate(() => console.log('set immediate3'));
setImmediate(() => console.log('set immediate4'));