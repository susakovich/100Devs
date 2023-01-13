//Create a constructor with 4 properties and 3 methods

function MakePizza(size, toppings, crust, sauce) {
  this.size = size;
  this.toppings = toppings;
  this.crust = crust;
  this.sauce = sauce;

  this.estimatedDeliveryTime = function () {
    console.log(`Calculating....`);
  };
  this.burnMouth = function () {
    console.log(`Are you satisfied now? See how hot I can be?!`);
  };
  this.frisbee = function () {
    console.log(
      `Come on, I'm here to be eaten, not to play around with me....`
    );
  };
}

let capricoza = new MakePizza(
  "medium",
  ["chicken salami", "hot pepperoni", "mozzarela", "olives"],
  "thin",
  "ketchup"
);

MakePizza.prototype.tasty = true;
console.table(capricoza);
console.log(`Size of your Capricoza is ${capricoza.size}`);
console.log(`It is ${capricoza.tasty} that your pizza is tasty.`);
capricoza.burnMouth();
capricoza.estimatedDeliveryTime();
