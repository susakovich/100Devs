//Create a dog object that has four properties and three methods

const dog = {};

dog.eyeColor = "Blue";
dog.name = "Loki";
dog.breed = "Golden Retriver";
dog.hairColor = "Golden";

dog.bark = function () {
  console.log(`Grr, grrr, roar!`);
};
dog.givePaw = function () {
  console.log(`${dog.name} has given you his paw!`);
};
dog.sitDown = function () {
  console.log(`${dog.name} has sit down!`);
};

console.log(dog);
dog.sitDown();
dog.givePaw();
dog.bark();

// Make a function factory aka contructor
const MakeDog = function (eyeColor, name, breed, hairColor) {
  this.eyeColor = eyeColor;
  this.name = name;
  this.breed = breed;
  this.hairColor = hairColor;

  this.bark = function () {
    console.log(`Grr, grrr, roar!`);
  };
  this.givePaw = function () {
    console.log(`${this.name} has given you his paw!`);
  };
  this.sitDown = function () {
    console.log(`${this.name} has sit down!`);
  };
};

let rex = new MakeDog("Brown", "Rex", "German Shepard", "Brown");
console.log(rex);
rex.givePaw();
rex.sitDown();
