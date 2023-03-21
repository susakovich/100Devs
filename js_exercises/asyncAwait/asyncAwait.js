let stocks = {
  fruits: ["Strawberry", "Grapes", "Banana", "Apple"],
  liquid: ["Water", "Ice"],
  holders: ["Cone", "Cup", "Stick"],
  toppings: ["Chocolate", "Peanuts"],
};

function toppingsChoice() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log(`Which topping would you love?`));
    }, 3000);
  });
}

// async function kitchen() {
//   console.log(`A`);
//   console.log(`B`);
//   console.log(`C`);

//   await toppingsChoice();

//   console.log(`D`);
//   console.log(`E`);
// }
// kitchen();

// console.log(`doing the dishes`);
// console.log(`cleaning the tables`);
// console.log(`taking orders`);

let isShopOpen = false;

function time(ms) {
  return new Promise((resolve, reject) => {
    if (isShopOpen) {
      setTimeout(resolve, ms);
    } else {
      reject(console.log(`Shop is closed.`));
    }
  });
}

async function kitchen() {
  try {
    await time(2000);
    console.log(`${stocks.fruits[0]} was selected`);

    await time(0000);
    console.log("Production has started");

    await time(2000);
    console.log(`Your ${stocks.fruits[0]} fruit has been chopped`);

    await time(1000);
    console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`);

    await time(1000);
    console.log("Start the machine");

    await time(2000);
    console.log(`Ice cream placed on ${stocks.holders[1]}`);

    await time(3000);
    console.log(`${stocks.toppings[0]} as toppings`);

    await time(2000);
    console.log("Serve Ice Cream");

    await time(1000);
    if (isShopOpen) {
      console.log(`Thank you and come again.`);
    }
  } catch (error) {
    console.log("Customer left");
  }
}

kitchen();
