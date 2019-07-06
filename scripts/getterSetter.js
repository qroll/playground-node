class Test {
  constructor() {
    this._foo = 0;
  }

  get foo() {
    return this._foo;
  }

  set foo(thing) {
    this._foo = 'bar' + thing;
  }
}

let test = new Test();
test.foo = 1;
console.log(test.foo);
test.foo++;
console.log(test.foo);
test.foo = undefined;
console.log(test.foo);