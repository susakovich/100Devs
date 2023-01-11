//Create a dog object that has four properties and three methods

const dog = {};

dog.eyeColor = "Blue";
dog.name = "Loki";
dog.bread = "Golden Retriver";
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
