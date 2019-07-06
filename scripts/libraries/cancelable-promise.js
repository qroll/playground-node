const CancelablePromise = require('cancelable-promise').default;

// const p1 = new CancelablePromise(resolve => setTimeout(() => resolve("p1"), 1000));
// p1.then(console.log);
// p1.cancel();

// const p2 = new CancelablePromise(resolve => setTimeout(() => resolve("p2"), 1000));
// p2.then(console.log)
//   .then(() => { p2.cancel() })
//   .then(() => console.log('p2 is supposed to be cancelled'));

// const p3 = new CancelablePromise(resolve => setTimeout(() => resolve("p3"), 1000));
// p3.then(console.log)
//   .then(() => p3.cancel())
//   .then(() => console.log('p3 is supposed to be cancelled'));

// const p4 = new CancelablePromise(resolve => setTimeout(() => resolve("p4"), 1000));
// p4
//   // .then(console.log)
//   // .then(() => new Promise(resolve => setTimeout(resolve, 3000))) // this doesn't work
//   .then(() => new Promise(resolve => setTimeout(() => resolve(p4), 3000))) // this does
//   .then(() => console.log('p4 is supposed to be cancelled'));

// setTimeout(() => { p4.cancel(); console.log("cancelled p4") }, 2000);

const p5 = CancelablePromise.resolve('p5');
p5.then(async () => {
  return new Promise(resolve => setTimeout(() => resolve(p5), 1000));
})
  .then(() => console.log('p5 is supposed to be cancelled'));

setTimeout(() => p5.cancel(), 500);