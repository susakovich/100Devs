//---Easy
//create a function that subtracts two numbers and alerts the difference
function substractTwoNums(num1, num2) {
  let difference = num1 - num2;
  alert(difference);
}
substractTwoNums(10, 5);

//create a function that divides three numbers and console logs the quotient
function divideThreeNums(num1, num2, num3) {
  let threeNums = num1 / num2 / num3;
  console.log(threeNums);
}
divideThreeNums(1000, 10, 1);

//create a function that multiplys three numbers and returns the product
function multiplysThreeNums(num1, num2, num3) {
  let product = num1 * num2 * num3;
  return product;
}
console.log(multiplysThreeNums(10, 10, 10));

//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
function remainderThreeNums(num1, num2, num3) {
  let sum = num1 + num2;
  return sum % num3;
}
console.log(remainderThreeNums(100, 3, 3));

//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
function fourNums(num1, num2, num3, num4) {
  let product = num1 * num2;
  if (product > 100) {
    console.log(num3 + num4);
  } else if (product < 100) {
    console.log(num3 - num4);
  } else if (product === 100) {
    let threeNums = num1 * num2 * num3;
    alert(threeNums % num4);
  }
}
fourNums(1000, 2, 3, 4);
