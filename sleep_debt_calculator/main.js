// Creating function that accepts one parameter, could do this with arrow but wanted to try the old way
function getSleepHours(day) {
  // Making sure to accept lower or uppercase
  day = day.toLowerCase();
  // Checking what day is it and what will return
  switch (day) {
    case "monday":
      return 8;
    case "tuesday":
      return 11;
    case "wednesday":
      return 8;
    case "thursday":
      return 7;
    case "friday":
      return 6;
    case "saturday":
      return 8;
    case "sunday":
      return 8;
    default:
      return "Wrong day.";
  }
}
// Testing to see does function works
// console.log(getSleepHours("friday"));

// Get the total sleep hours that you actually slept
//
function getActualSleepHours() {
  const totalHoursSlept =
    getSleepHours("monday") +
    getSleepHours("tuesday") +
    getSleepHours("wednesday") +
    getSleepHours("thursday") +
    getSleepHours("friday") +
    getSleepHours("saturday") +
    getSleepHours("sunday");
  return totalHoursSlept;
}

// Get the ideal sleep hours that you prefer
function getIdealSleepHours() {
  const idealHours = 8;
  return idealHours * 7;
}
// Testing to see does functions works
// console.log(`Last week you slept ${getActualSleepHours()} hours.`);
// console.log(`Your ideal sleeping hours are ${getIdealSleepHours()}.`);

// Calculating sleep debt
function calculateSleepDebt() {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  //   Comparing to check sleep hours
  if (actualSleepHours === idealSleepHours) {
    return `You got perfect amount of sleep, which is ${getIdealSleepHours()} hours, now go and be productive!`;
  } else if (actualSleepHours > idealSleepHours) {
    return `You got more sleep than needed. You slept ${getActualSleepHours()} hours and you need only ${getIdealSleepHours()} hours, better to do something else.`;
  } else {
    return `You should get some rest, because you slept only ${getActualSleepHours()} hours and your ideal is ${getIdealSleepHours()} hours.`;
  }
}
// Testing to see does functions works
console.log(calculateSleepDebt());
