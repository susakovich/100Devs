// *Variables*
// Create a variable and console log the value
let userName = prompt("What is your name?");
console.log(`Hello there, ${userName}.`);

// Create a variable, add 10 to it, and alert the value
let userAge = Number(prompt("What is your age? "));
userAge += 10;
console.log(`Oppps, ${userName} seems your age is ${userAge}.`);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subFourNums(num1, num2, num3, num4) {
  console.log(`Result of ur substracting is ${num1 - num2 - num3 - num4}`);
}
subFourNums(100, 50, 25, 20);

// Create a function that divides one number by another and returns the remainder
function divideNums(num1, num2) {
  return num1 % num2;
}
let result = divideNums(13, 3);
console.log(`Your result is ${result}.`);

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function addTwoNums(num1, num2) {
  let result = num1 + num2;
  if (result > 50) {
    console.log(`Sum of your numbers is ${result} so JUMANJIIIIII`);
  } else {
    console.log(`Your sum is ${result}.`);
  }
}
addTwoNums(25, 30);

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiplysThreeNums(num1, num2, num3) {
  let product = num1 * num2 * num3;
  if (product % 3 === 0) {
    console.log(`ZEBRAAAAAAAAAAAA`);
  } else {
    console.log(`Your result is ${product}.`);
  }
}
multiplysThreeNums(12, 3, 2);

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function wordNum(word, num) {
  for (let i = 1; i <= num; i++) {
    console.log(`Lets call your word ${word} ${num} times.`);
  }
}
wordNum("Omaewa mou shindeiru", 5);
