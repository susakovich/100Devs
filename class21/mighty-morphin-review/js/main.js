// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let favHoliday = "New Year";
favHoliday = favHoliday.toUpperCase();
console.log(favHoliday);
//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
let firstName = "Danijel";
alert(firstName.slice(-3));
// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
function substractAllFrom100(n1, n2, n3, n4, n5) {
  let difference = 100 - n1 - n2 - n3 - n4 - n5;
  alert(Math.abs(difference));
}
substractAllFrom100(1, 3, 5, 7, 9);
// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
function lowestHighest(num1, num2, num3) {
  let minNum = Math.min(num1, num2, num3);
  let highNum = Math.max(num1, num2, num3);

  console.log(`Lowest number is ${minNum} and highest is ${highNum}`);
}
lowestHighest(123, 424, 52);

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
// function headTails() {
//   let result = Math.random() * 2;
//   if (result < 0.5) {
//     return "Head";
//   } else {
//     return "Tails";
//   }
// }

// Ternary

const headTails = () => (Math.random() < 0.5 ? "heads" : "tails");

// console.log(headTails());
// console.log(headTails());
// console.log(headTails());
// console.log(headTails());
// console.log(headTails());
//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.
function flipUp(num) {
  for (let i = 1; i <= num; i++) {
    let result = headTails();
    console.log(result);
  }
}

flipUp(10);
