const wait = async (ms, cb) => {
  await new Promise(resolve => setTimeout(resolve, ms));
  cb();
};

describe('test timer', () => {
  test('ya', (done) => {
    wait(100, () => console.log("1"));
    setTimeout(() => wait(console.log("2")), 200);
    wait(300, () => console.log("3"))
    wait(400, done);

    jest.useFakeTimers();
    jest.runAllTimers();
  });
});