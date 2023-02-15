//Create an a class and extend it - Can be anything you would like it to be!
class Animal {
  constructor(name) {
    this.name = name;

    this.roar = function () {
      console.log(`Rawrrrrrrrr!!!!`);
    };
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;

    this.sit = function () {
      console.log(`Sit down ${this.name}!`);
    };
  }
}

class Cat extends Dog {
  constructor(name, breed, livesLeft) {
    super(name, breed);
    this.livesLeft = livesLeft;

    this.meow = function () {
      console.log(`${this.name} is mewowing, feed your cat!`);
    };
  }
}

let loki = new Dog("Loki", "Golden Retriver");
console.log(loki);
loki.roar();
loki.sit();

let paca = new Cat("Paca", "British Shorthair", 9);
console.log(paca);
paca.roar();
paca.sit();
paca.meow();
console.log(`Your ${paca.name} has ${paca.livesLeft} lives left.`);
