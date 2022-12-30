//Create a stopwatch object that has four properties and three methods

let stopwatch = {};

stopwatch.color = "black";
stopwatch.brand = "citizen";
stopwatch.shape = "round";
stopwatch.size = "medium";

stopwatch.start = function () {
  console.log(`Starting!`);
};

stopwatch.stop = () => console.log(`Stoping!`);

stopwatch.sayBrand = () =>
  console.log(`Your watch brand is ${stopwatch.brand}.`);
stopwatch.sayBrand();
