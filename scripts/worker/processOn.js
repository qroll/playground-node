const path = require('path');
const fork = require('child_process').fork;

class Test {
  constructor() {
    process.on('exit', () => console.log("exit"));
    process.on('SIGINT', () => console.log("SIGINT"));

    const child = fork(path.resolve(__dirname, "child"));
    this.child = child;
  }
}

module.exports = Test;