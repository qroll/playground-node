const wait = (ms) => new Promise(resolve => setTimeout(() => {
  console.log(ms);
  resolve();
}, ms));

// wait(5000).then(() => wait(5000))

const queue = [
  () => wait(5000).then(() => { console.log(1); return 1 }),
  (res) => wait(5000).then(() => { console.log(2 + res); return 2 + res }),
  (res) => wait(5000).then(() => { console.log(3 + res); return 3 + res })
];

(async () => {
  let res;
  for (let task of queue) {
    res = await task(res);
  }
})()