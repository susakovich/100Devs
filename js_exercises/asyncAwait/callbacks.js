// TODO
/*
Today we are going to build and run an ice cream shop and learn asynchronous JavaScript at the same time. Along the way, we will learn to use:
    * Callbacks
    * Promises
    * Async / Await
*/

// using synchronous

console.log(`I`);
console.log(`eat`);
console.log(`Ice Cream`);

// using asynchronous

console.log(`***********`);
console.log(`I`);
setTimeout(() => {
  console.log(`eat`);
}, 2000);
console.log(`Ice Cream`);

// What is a Callback
// Ilustration

function one() {
  console.log(`Do something`);
}
function two(one) {
  console.log(`Do something too`);
  one();
}
two(one);

// Practice
/*
    Steps to make Ice Cream, order is very important to follow
    *1 Place order
    *2 Cut the Fruit
    *3 Add water and ice
    *4 Start the machine
    *5 Select Container
    *6 Select Toppings
    *7 Serve Ice Cream
*/

// Let's make Ice Cream Shop
// The shop will have two parts:
// * The storeroom will have all the ingridients [Our Backend]
// * We'll produce ice cream in our kitches [The Frontend]

let stocks = {
  fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holders: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

/*
The entire business depends on what customer orders. Once we have an order, we start production and then we serve ice cream. We need two functions, for order and production
*/

let order = (fruit, callProduction) => {
  setTimeout(function () {
    console.log(`${stocks.fruits[fruit]} was selected`);

    // order placed, call production to start
    callProduction();
  }, 2000);
};

let production = () => {
  /*
    Here are our steps again, and the time each step will take to execute in seconds
    *1 Place order  => 2
    *2 Cut the Fruit  => 2
    *3 Add water and ice  => 1
    *4 Start the machine  => 1
    *5 Select Container  => 2
    *6 Select Toppings  => 3
    *7 Serve Ice Cream  => 2
*/

  // This is example of Callback hell, aka pyramid of doom
  setTimeout(() => {
    console.log("production has started");
    setTimeout(() => {
      console.log("the fruit has been chopped");
      setTimeout(() => {
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`);
        setTimeout(() => {
          console.log("start the machine");
          setTimeout(() => {
            console.log(`ice cream placed on ${stocks.holders[1]}`);
            setTimeout(() => {
              console.log(`${stocks.toppings[0]} as toppings`);
              setTimeout(() => {
                console.log("serve ice cream");
              }, 2000);
            }, 3000);
          }, 2000);
        }, 1000);
      }, 1000);
    }, 2000);
  }, 0000);
};

order(0, production);
