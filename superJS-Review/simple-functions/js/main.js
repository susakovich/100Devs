//**Easy
//create a function that subtracts two numbers and alerts the difference
function substractTwoNums(num1, num2) {
  console.log(num1 - num2);
}
substractTwoNums(10, 5);
//create a function that divides three numbers and console logs the quotient
function divideThreeNums(num1, num2, num3) {
  console.log(num1 / num2 / num3);
}
divideThreeNums(100, 10, 2);
//create a function that multiplys three numbers and returns the product
function multiplysThreeNums(num1, num2, num3) {
  return num1 * num2 * num3;
}
console.log(multiplysThreeNums(10, 5, 10));
//**Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
function remainderOfNums(num1, num2, num3) {
  let sumTwo = num1 + num2;
  return sumTwo % num3;
}
console.log(remainderOfNums(123, 13, 11));
//**Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
function multiplyFourNums(num1, num2, num3, num4) {
  let product = num1 * num2;
  if (product > 100) {
    console.log(product + num3 + num4);
  } else if (product < 100) {
    console.log(product - num3 - num4);
  } else {
    console.log((num1 * num2 * num3) % num4);
  }
}
multiplyFourNums(5, 4, 3, 2);
multiplyFourNums(100, 4, 3, 2);
multiplyFourNums(100, 1, 3, 2);
