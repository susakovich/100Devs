// TODO
// Sleep Debt Calculator
// Did you know that giraffes sleep 4.6 hours a day? We humans need more than that. If we don’t sleep enough, we accumulate sleep debt. In this project we’ll calculate if you’re getting enough sleep each week using a sleep debt calculator.

// The program will determine the actual and ideal hours of sleep for each night of the last week.

// Finally, it will calculate, in hours, how far you are from your weekly sleep goal.

// TODO 1
// The first problem to solve is determining how many hours of sleep you got each night of the week.
// You can create a function that returns any given night’s number of hours of rest. Instead of writing seven different functions (one for each day of the week), let’s write one function with a parameter for the day.
// Create a function named getSleepHours with a single parameter named day.
// TODO 2
// The function should accept a day as an argument and return the number of hours you slept that night.
// For instance, if you got 8 hours of sleep on Monday night, calling getSleepHours('monday') should return 8.
// Use an if/else or switch statement to implement this.
// TODO 3
// Test the function by calling it multiple times and printing the results to the console.
// You can remove the tests when you know your function works.
// TODO 4
// Now that you’ve written a function to get the sleep hours for each night, we need to do three things:
// Get the total sleep hours that you actually slept
// Get the ideal sleep hours that you prefer
// Calculate the sleep debt, if any.
// To get the total sleep hours that you actually slept, create a new function named getActualSleepHours that takes no parameters.
// TODO 5
// Inside the getActualSleepHours() function, call the getSleepHours() function for each day of the week. Add the results together and return the sum using an implicit return.
// TODO 6
// To get the ideal sleep hours that you prefer, create a function named getIdealSleepHours with no parameters.
// Inside the function, declare a variable named idealHours and set its value to your ideal hours per night. Then return the idealHours multiplied by 7.
// You’ll want to multiply by 7 to get the total hours you prefer per week.
// TODO 7
// Test your two new functions by calling them and printing the results to the console.
// You can remove the tests when you know your functions works.
// TODO 8
// Now that you can get the actual sleep hours and the ideal sleep hours, it’s time to calculate sleep debt.
// Create a function named calculateSleepDebt with no parameters.
// Inside of its block, create a variable named actualSleepHours set equal to the getActualSleepHours() function call.
// Then, create another variable named idealSleepHours, set equal to the getIdealSleepHours() function call.
// TODO 9
// Now that you have actualSleepHours and idealSleepHours, you can write a few if/else statements to output the result to the console. The function should fulfill this logic:
// If actual sleep equals ideal sleep, log to the console that the user got the perfect amount of sleep.
// If the actual sleep is greater than the ideal sleep, log to the console that the user got more sleep than needed.
// If the actual sleep is less than the ideal sleep, log to the console that the user should get some rest.
// TODO 10
// To make this calculator more helpful, add the hours the user is over or under their ideal sleep in each log statement in calculateSleepDebt().
// TODO 11
// On the last line of the program, start the program by calling the calculateSleepDebt() function.
// TODO 12
// For extra practice, try these:
// getActualSleepHours() could be implemented without calling getSleepHours(). Use literal numbers and the + operator to rewrite getActualSleepHours(). It should still return the total actual hours slept in the week.
// Some people need to sleep longer than others. Rewrite getIdealSleepHours() so that you can pass it an argument, like getIdealSleepHours(8) where 8 is the ideal hours per night. Update the call to getIdealSleepHours() in calculateSleepDebt() too.
const getSleepHours = (day) => {
  day = day.toLowerCase();

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
};
const getActualSleepHours = () => {
  const totalHoursSlept =
    getSleepHours("monday") +
    getSleepHours("tuesday") +
    getSleepHours("wednesday") +
    getSleepHours("thursday") +
    getSleepHours("friday") +
    getSleepHours("saturday") +
    getSleepHours("sunday");
  return totalHoursSlept;
};
const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours * 7;
};
// console.log(getActualSleepHours());
// console.log(getIdealSleepHours());
const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();

  if (getActualSleepHours() === getIdealSleepHours()) {
    console.log(
      `Perfect amount of sleep which is ${getIdealSleepHours()} hours.`
    );
  } else if (getActualSleepHours() > getIdealSleepHours()) {
    console.log(
      `You slept ${getActualSleepHours()} hours, actually more than needed which is ${getIdealSleepHours()} hours.`
    );
  } else {
    console.log(
      `You slept ${getActualSleepHours()} hours, it's less than ideal sleep, please get some rest.`
    );
  }
};

calculateSleepDebt();
