//Create an espresso machine constructor that makes machines with 4 properties and 3 methods

class CoffeeMachine {
  constructor(color, make, model, price) {
    this.color = color;
    this.make = make;
    this.model = model;
    this.price = price;

    this.turnOn = function () {
      console.log(`Good day. I am here for you.`);
    };
    this.turnOf = function () {
      console.log(`Bye. I'm out!`);
    };
    this.brew = function () {
      console.log(`Please wait, your coffee is brewing.`);
    };
  }
}

let deLonghi = new CoffeeMachine(
  "Black",
  "DeLonghi",
  "Magnifica Evo One",
  1100
);
console.log(machiatto);
macchiato.turnOn();
macchiato.turnOf();
macchiato.brew();
