// *Variables*
// Declare a variable, assign it a value, and alert the value
let baby = "Dalija";
alert(`Your daughter name is ${baby} and she's wonderful.`);
// Create a variable, divide it by 10, and console log the value
let num1 = 100;
console.log(num1 / 10);
// *Functions*
// Create a function that multiplys 3 numbers and alerts the product
function multiplysThreeNums(num1, num2, num3) {
  let product = num1 * num2 * num3;
  alert(product);
}
multiplysThreeNums(10, 10, 10);
// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result
function takesFourNums(num1, num2, num3, num4) {
  let firstTwo = num1 + num2;
  let result = firstTwo - num3 + num4;
  console.log(result);
}
takesFourNums(10, 20, 2, 5);
// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third. If the value is greater then 25, console log "WE HAVE A WINNNA"
function takesThreeNums(num1, num2, num3) {
  let num = 100;
  let value = (num + num1 - num2) / num3;
  if (value > 25) {
    console.log(`WE HAVE A WINNNAAAAAAAAA`);
  }
}
takesThreeNums(200, 2, 1);
// Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day". Handle capitilization and if the user does not enter a day of the week alert "Try again!"

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3
