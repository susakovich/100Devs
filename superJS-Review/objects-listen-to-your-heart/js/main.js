//Create a stopwatch object that has four properties and three methods

// object literal
let stopwatch = {};
stopwatch.color = "black";
stopwatch.shape = "round";
stopwatch.brand = "omega";
stopwatch.smell = "new";

stopwatch.start = function () {
  console.log(`RUNNNNN BRUH`);
};
stopwatch.stop = function () {
  console.log(`STOP RUNNING BRUH`);
};
stopwatch.alarm = function () {
  console.log(`Your alarm is set!`);
};

// class constructor
class Stopwatch {
  constructor(brand, model, color, shape) {
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.shape = shape;

    this.beep = function () {
      console.log(`Beep, beep, beep.`);
    };

    this.startTimer = function () {
      console.log(`Your timer just started.`);
    };

    this.stopTimer = function () {
      console.log(`Your tmer just stopped.`);
    };
  }
}

let citizen = new Stopwatch(
  "Citizen",
  "World Chronograph A-T",
  "Silver",
  "Round"
);
