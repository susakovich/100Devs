// *Variables*
// Create a variable and console log the value
let dogAge = 5;
console.log(`Age of your dog is ${dogAge}`);
// Create a variable, add 10 to it, and alert the value
let catAge = 5;
catAge += 10;
alert(`Age of your cat is ${catAge}`);
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function substractFourNumbers(num1, num2, num3, num4) {
  let sum = num1 - num2 - num3 - num4;
  alert(`Total sum of your numbers is ${sum}`);
}
substractFourNumbers(130, 54, 20, 4);
// Create a function that divides one number by another and returns the remainder
function divideNumbers(num1, num2) {
  let sum = num1 % num2;
  console.log(`Remainder of your numbers is ${sum}`);
}
divideNumbers(10, 4);
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function addTwoNumbers(num1, num2) {
  let sum = num1 + num2;
  console.log(`Sum of your numbers is ${sum}`);
  if (sum > 50) {
    alert(`Your sum ${sum} is higher then 50 and I can only say JUMANJIIIIII`);
  }
}
addTwoNumbers(100, 33);
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiplysThreeNumbers(num1, num2, num3) {
  let product = num1 * num2 * num3;
  console.log(`Your product sum is ${product}`);
  if (product % 3 === 0) {
    alert("Zebraaaaaa");
  }
}
multiplysThreeNumbers(3, 3, 3);
