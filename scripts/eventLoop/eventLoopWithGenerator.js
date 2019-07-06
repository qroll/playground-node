function* generator() {
  yield "generator1";
  yield "generator2";
  yield "generator3";
}
let it = generator();

for (let i = 0; i < 4; i++) {
  // console.log(it.next());
  console.log(it.return());
}

let it2 = generator();
for (let i = 0; i < 4; i++) {
  console.log(it2.next());
}

// Promise.resolve().then(() => {
//   console.log("promise1");
// }).then(() => {
//   console.log("promise2");
// });

// setImmediate(() => console.log('set immediate1'));

// process.nextTick(() => console.log('next tick1'));
// process.nextTick(() => console.log('next tick2'));
// process.nextTick(() => console.log('next tick3'));

// setTimeout(() => console.log('set timeout 1s'), 1000);
// setTimeout(() => console.log('set timeout 0s'), 0);
// setImmediate(() => console.log('set immediate2'));
// setImmediate(() => console.log('set immediate3'));