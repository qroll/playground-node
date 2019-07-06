try {
  try {
    throw new Error('woah');
  } catch (err) {
    if (err instanceof Error) {
      throw err;
    }
    throw new Error(err);
  }
} catch (err) {
  console.log(typeof err);
  console.log(err.name);
  console.log(err instanceof Error);
  console.log(err.stack);
  console.log(err.message);
}
