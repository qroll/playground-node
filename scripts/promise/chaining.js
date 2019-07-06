let promise = Promise.resolve()
  .then(() => {
    return 'a'
  }).then((res) => {
    // use res
    return 'b'
  });

let func = async () => {
  promise.then(console.log).then(console.log)
};

func();