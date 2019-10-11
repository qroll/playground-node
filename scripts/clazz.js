const moment = require("moment");

class AbstractPet {
  get moveTo() {
    return () => {
      console.log("moved!");
    };
  }

  get dateOfBirth() {
    return this._dateOfBirth
      ? moment(this._dateOfBirth).format("DD MMM YYYY")
      : "N/A";
  }

  set dateOfBirth(date) {
    if (!moment.isMoment(date)) {
      this._dateOfBirth = moment(date);
    } else {
      this._dateOfBirth = date;
    }
  }

  skip() {
    console.log("skipped!");
  }

  static jump() {
    // console.log("jumped!");
    new this().skip();
  }
}

const Void = new AbstractPet();
Void.dateOfBirth = "19951003";

console.log("Void: " + Void.dateOfBirth);

class Cat extends AbstractPet {
  get dateOfBirth() {
    return this._dateOfBirth
      ? `${moment(this._dateOfBirth).format("DD MMM YYYY")}, cat`
      : "N/A";
  }

  skip() {
    console.log("cats only skip when they feel like it");
  }

  static jump() {
    // console.log("cats only jump when they feel like it");
    super.jump();
  }
}

class Dog extends AbstractPet {
  get dateOfBirth() {
    return this._dateOfBirth
      ? `${moment(this._dateOfBirth).format("DD MMM YYYY")}, dog`
      : "N/A";
  }

  // static jump() {
  //   console.log(">>> ???");
  //   super.jump();
  // }
}

const Meowy = new Cat();
Meowy.dateOfBirth = "19951003";

// getters/setters are not inherited if you specify one
// https://stackoverflow.com/questions/28950760/override-a-setter-and-the-getter-must-also-be-overridden
console.log("Meowy: " + Meowy.dateOfBirth);

Cat.jump();
AbstractPet.jump();
Void.moveTo();

const GoodBoy = new Dog();
GoodBoy.dateOfBirth = "19951003";
Dog.jump();
