// const func = async () => {
//   console.log("start");
//   await (new Promise(resolve => { }))
//     .then(() => console.log("then"));
//   console.log("end");
// }

// func();

const func = async () => {
  console.log("start");
  await (new Promise(resolve => { return 1; }))
    .then((res) => console.log("then"));
  console.log("end");
}

func();