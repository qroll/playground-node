// try {
//   try {
//     throw new Error("error 1");
//   } catch (err) {
//     console.log(err.message);

//     throw err;
//   }
// } catch (err) {
//   console.log(err.message)
// }

const err = new Error({ foo: "bar" });
console.log(err.message)