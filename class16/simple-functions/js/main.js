//---Easy
//create a function that subtracts two numbers and alerts the difference
function substractTwoNumbers() {
  let num1 = parseInt(prompt("Enter first number: "));
  let num2 = parseInt(prompt("Enter second number: "));
  let result = num1 - num2;
  console.log(`Your result is ${result}`);
}
substractTwoNumbers();
//create a function that divides three numbers and console logs the quotient
function divideThreeNumbers() {
  let num1 = parseInt(prompt("Enter first number: "));
  let num2 = parseInt(prompt("Enter second number: "));
  let num3 = parseInt(prompt("Enter third number: "));
  let result = num1 / num2 / num3;
  console.log(`Your result is ${result}`);
}
divideThreeNumbers();
//create a function that multiplys three numbers and returns the product
function multiplyThreeNumbers() {
  let num1 = parseInt(prompt("Enter first number: "));
  let num2 = parseInt(prompt("Enter second number: "));
  let num3 = parseInt(prompt("Enter third number: "));
  return num1 * num2 * num3;
}
let product = multiplyThreeNumbers();
console.log(`Your result is ${product}`);
//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
function takeThreeNumbers(num1, num2, num3) {
  let sum = num1 + num2;
  return sum % num3;
}
console.log(takeThreeNumbers(3, 3, 2));

//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
function fourNumbers(num1, num2, num3, num4) {
  product = num1 * num2;
  if (product > 100) {
    product += num3 + num4;
    console.log(`Your product value is ${product}.`);
  } else if (product < 100) {
    let result = num3 / num4;
    console.log(`Your result is ${result}.`);
  } else if (product === 100) {
    let threeNums = num1 * num2 * num3;
    alert(threeNums % num4);
  }
}
fourNumbers(10, 100, 2, 2);
