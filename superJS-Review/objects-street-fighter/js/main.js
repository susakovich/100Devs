//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
class CreateSF {
  constructor(name, country, age, specialMove) {
    this.name = name;
    this.country = country;
    this.age = age;
    this.specialMove = specialMove;

    this.attack = function () {
      console.log(`${this.name} is going to attack you! Be careful.`);
    };
    this.specialPower = function () {
      console.log(
        `${this.name} will use his ${this.specialMove} special move!!!`
      );
    };
    this.info = function () {
      console.log(
        `${this.name} is from ${this.country} and his age is ${this.age}. You should be careful of his special move: ${this.specialMove}!`
      );
    };
  }
}

CreateSF.prototype.alive = true;

let ryu = new CreateSF("Ryu", "Japan", 36, "Hadoken");
let zangief = new CreateSF("Zangief", "Russia", 32, "Atomic Drop");
let vega = new CreateSF("Vega", "Spain", 32, "Rainbow Suplex");

ryu.info();
zangief.info();
vega.info();
