// TODO Create an a class and extend it - Can be anything you would like it to be!

class Animal {
  constructor(name) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
  speak() {
    console.log(`${this._name} makes a sound!`);
  }
}

class Dog extends Animal {
  constructor(name, breed, gender) {
    super(name);
    this._breed = breed;
  }
  get breed() {
    return this._breed;
  }
  speak() {
    super.speak();
    console.log(`${this.name} barks!`);
  }
}

class Cat extends Animal {
  constructor(name, breed) {
    super(name);
    return this._breed;
  }
  get breed() {
    return this._breed;
  }
  speak() {
    super.speak();
    console.log(`${this.name} meows!`);
  }
}
let loki = new Dog("Loki", "Golden Retriver");
let lisa = new Dog("Lisa", "Brittany");
let paca = new Cat("Paca", "British Shorthair");
let farm = [loki, lisa, paca];
for (let animal of farm) {
  animal.speak();
}
// class Animal {
//   constructor(name) {
//     this._name = name;
//   }
//   get name() {
//     return this._name;
//   }
//   roar() {
//     console.log(`Rawrrrrrrrr!!!!`);
//   }
// }

// class Dog extends Animal {
//   constructor(name, breed) {
//     super(name);
//     this.breed = breed;

//     this.sit = function () {
//       console.log(`Sit down ${this.name}!`);
//     };
//   }
// }

// class Cat extends Dog {
//   constructor(name, breed, livesLeft) {
//     super(name, breed);
//     this.livesLeft = livesLeft;

//     this.meow = function () {
//       console.log(`${this.name} is mewowing, feed your cat!`);
//     };
//   }
// }

// class Horse extends Animal {
//   constructor(name, breed, gender) {
//     super(name, breed);
//     this.gender = gender;
//   }

//   speak() {
//     console.log(`Ihaaaaaa Ihaaaaa!!! Brrrrhhhhh!`);
//   }
// }

// let loki = new Dog("Loki", "Golden Retriver");
// console.log(loki);
// loki.roar();
// loki.sit();

// let paca = new Cat("Paca", "British Shorthair", 9);
// console.log(paca);
// paca.roar();
// paca.sit();
// paca.meow();
// console.log(`Your ${paca.name} has ${paca.livesLeft} lives left.`);

// let darkLighting = new Horse("Chief", "Arabian horse", "Male");
// darkLighting.roar();
// darkLighting.speak();
