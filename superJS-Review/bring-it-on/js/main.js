// *Variables*
// Create a variable and console log the value
let userName = "Dado";
console.log(userName);
// Create a variable, add 10 to it, and alert the value
let age = 23;
age += 10;
console.log(age);
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function substractFourNums(num1, num2, num3, num4) {
  console.log(num1 - num2 - num3 - num4);
}
substractFourNums(145, 2, 33, 54);
// Create a function that divides one number by another and returns the remainder
function returnRemainder(num1, num2) {
  return num1 % num2;
}
console.log(returnRemainder(189, 23));
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function jumanji(num1, num2) {
  let result = num1 + num2;
  if (result > 50) {
    console.log("Jumanjiiiiiiiiiiii");
  }
}
jumanji(34, 54);
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiplysThreeNums(num1, num2, num3) {
  let result = num1 * num2 * num3;
  if (result % 3 === 0) {
    console.log("ZEBRAAAAAA");
  }
}
multiplysThreeNums(100, 5, 2);
//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function repeatWordXTimes(word, num) {
  return word.repeat(num);
}
console.log(repeatWordXTimes("dado", 5));

function loopWordXTimes(word, num) {
  for (let i = 1; i <= num; i++) {
    console.log(word);
  }
}
loopWordXTimes("da", 5);
