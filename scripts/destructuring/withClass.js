/**
 * Destructuring methods of a class
 */

// This banana has bound its functions

class Banana {
  constructor() {
    this.drive = this.drive.bind(this);
    this.length = 1;
  }

  drive() {
    console.log(this.length);
  }
}

const banana = new Banana();
const { drive } = banana;
drive(); // 1

// This has lost its marbles
// Or the marble has lost... it

class Marble {
  constructor() {
    this.number = 42;
  }

  lose() {
    console.log(this.number);
  }
}

const marble = new Marble();
const { lose } = marble;
// lose(); // this will throw

const boundFunc = lose.bind(marble);
boundFunc(); // 42