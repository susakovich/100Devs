let stocks = {
  fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holders: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let isShopOpen = true;

let order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (isShopOpen) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject(console.log(`Shop is closed.`));
    }
  });
};

// step 1
order(2000, () => console.log(`${stocks.fruits[0]} was selected`))
  // step 2
  .then(() => {
    return order(0000, () => console.log("production has started"));
  })
  // step 3
  .then(() => {
    return order(2000, () => console.log("Fruit has been chopped"));
  })
  // step 4
  .then(() => {
    return order(1000, () =>
      console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`)
    );
  })
  // step 5
  .then(() => {
    return order(1000, () => console.log("start the machine"));
  })
  // step 6
  .then(() => {
    return order(2000, () =>
      console.log(`ice cream placed on ${stocks.holders[1]}`)
    );
  })
  // step 7
  .then(() => {
    return order(3000, () => console.log(`${stocks.toppings[0]} as toppings`));
  })
  // Step 8
  .then(() => {
    return order(2000, () => console.log("Serve Ice Cream"));
  })
  .catch(() => {
    console.log("Customer left");
  })
  .finally(() => {
    console.log("End of day");
  });
