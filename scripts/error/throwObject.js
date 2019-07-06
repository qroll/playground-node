try {
  try {
    throw { foo: "bar" };
  } catch (err) {
    throw new Error(err);
  }
} catch (err) {
  console.log(typeof err);
  console.log(err.stack);
  console.log(err.message);
}
