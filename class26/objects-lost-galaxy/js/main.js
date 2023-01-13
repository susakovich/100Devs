//Create a pizza object that has four properties and three methods

let pizza = {};

pizza.size = "large";
pizza.topings = [
  "turkey ham",
  "onion",
  "corn",
  "chilli paprika",
  "gauda",
  "garlic",
];
pizza.crust = "stuffed";
pizza.sauce = "hot ketchup";

pizza.estimatedDeliveryTime = function () {
  console.log(`Calculating....`);
};
pizza.burnMouth = function () {
  console.log(`Are you satisfied now? See how hot I can be?!`);
};
pizza.frisbee = function () {
  console.log(`Come on, I'm here to be eaten, not to play around with me....`);
};
