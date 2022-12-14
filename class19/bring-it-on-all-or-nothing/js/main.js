// *Variables*
// Declare a variable, assign it a boolean, and alert the value
let haveBaby = true;
alert(haveBaby);

// Declare a variable, reassign it to your favorite color, and console log the value
let favColor = "Purple";
favColor = "Royal Purple";
console.log(`Your favorite color is ${favColor}`);

// *Functions*
// Create a function that takes in 4 numbers and returns the sum of the first 3 numbers divided by the fourth. Return the result. Call the function.
function sumThreeNums(num1, num2, num3, num4) {
  let sum = (num1 + num2 + num3) / num4;
  return sum;
}
console.log(`Sum of your numbers is ${sumThreeNums(100, 100, 100, 10)}`);

// Create a function that takes in 2 numbers. Console log the first number to the power of the second. Call the function.
const powNum = (num1, num2) => {
  console.log(Math.pow(num1, num2));
};

powNum(4, 2);

// *Conditionals*
// Create a function that takes in a boolean and a string. If the boolean is true, alert the string. If the boolean is false, console log the string
function booleanString(bool, str) {
  // Using ternary operators
  bool ? alert(str) : console.log(str);

  //   Using old way
  //   if (bool) {
  //     alert(str);
  //   } else {
  //     console.log(str);
  //   }
}
booleanString(true, "Helloooooo");
booleanString(false, "Helloooooo");

// Using function expression
const alertTrueFalse = (bool, str) => (bool ? alert(str) : console.log(str));
alertTrueFalse("ehe", "dado");
alertTrueFalse(false, "booooooo");

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number, but if the number is divisible by 3 log "fizz" instead of that number, if the number is divisible by 5 log "buzz" instead of the number, and if the number is divisible by 3 and 5 log "fizzbuzz" instead of that number
function fizzBuzz(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 15 === 0) {
      console.log(`fizzbuzz`);
    } else if (i % 3 === 0) {
      console.log(`fizz`);
    } else if (i % 5 === 0) {
      console.log(`buzz`);
    } else {
      console.log(`${i}`);
    }
  }
}

fizzBuzz(100);
