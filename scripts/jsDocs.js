/**
 * @template T
 * @property {T} friend
 */
class A {
  /**
   * @param {T} friend
   */
  constructor(friend) {
    this.friend = friend;
  }

  /**
   * @return {T}
   */
  getFriend() {
    return this.friend;
  }

  /**
   * @return {Bb | Cc}
   */
  eat() {
    return this.friend.eat();
  }

  /**
   * @return {Bb|Cc}
   */
  static drink(type) {
    switch (type) {
      case "b":
        return B.drink();
      case "c":
        return C.drink();
    }
  }
}

/**
 * @typedef {object} Bb
 * @property {string} bThing
 * @property {string} bbThing
 */

class B {
  constructor(name) {
    this.name = name;
  }

  /**
   * @returns {Bb} thing
   */
  eat() {
    return { bThing: "noms" };
  }

  static drink() {
    return;
  }
}

/**
 * @typedef {object} Cc
 * @property {string} cThing
 * @property {string} ccThing
 */

class C {
  constructor(name) {
    this.name = name;
  }

  /**
   * @returns {Cc} thing
   */
  eat() {
    return { cThing: "booyeah" };
  }

  static drink() {
    return;
  }
}

const b = new B("Baka");
const a = new A(b);
const friend = a.getFriend();

const c = new C("Cocococo");
const anotherA = new A(c);
const cFriend = anotherA.getFriend();

const res = A.drink("b");
