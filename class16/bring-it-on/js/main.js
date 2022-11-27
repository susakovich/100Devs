// *Variables*
// Create a variable and console log the value
let dog = "Loki";
console.log(`Your dog name is ${dog}.`);
// Create a variable, add 10 to it, and alert the value
let num = 10;
alert(num);
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function substractFourNums(num1, num2, num3, num4) {
  alert(num1 - num2 - num3 - num4);
}
substractFourNums(100, 50, 30, 10);
// Create a function that divides one number by another and returns the remainder
function divideTwoNums(num1, num2) {
  return num1 % num;
}
console.log(divideTwoNums(10, 6));
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function addTwoNums(num1, num2) {
  let result = num1 + num2;
  if (result > 50) {
    alert("Jumanji");
  }
}
addTwoNums(25, 50);
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiplysThreeNums(num1, num2, num3) {
  let sum = num1 * num2 * num3;
  if (sum % 3 === 0) {
    alert("ZEBRA");
  }
}
multiplysThreeNums(20, 5, 5);
//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function wordNumber(word, num) {
  for (let i = 1; i <= num; i++) {
    console.log(word);
  }
}
wordNumber("Dalija", 10);
