// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let favFood = "Chevapi";
favFood = "Pizza";
alert(favFood);
//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let someString = "Danijelovski";
alert(someString[1]);
// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
function threeNums(num1, num2, num3) {
  let product = (num1 / num2) * num3;
  alert(product);
}
threeNums(100, 10, 5);
// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
const rootNum = (num) => Math.cbrt(num).toFixed(4);
alert(rootNum(5));
// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
function checkMonth(month) {
  let monthLowerCase = month.toLowerCase();
  if (
    monthLowerCase === "june" ||
    monthLowerCase === "july" ||
    monthLowerCase === "august"
  ) {
    return "YAY";
  } else {
    return "BOO";
  }
}
alert(checkMonth("June"));
//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.

function skip5s(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 5 !== 0) {
      console.log(i);
    }
  }
}
skip5s(100);
