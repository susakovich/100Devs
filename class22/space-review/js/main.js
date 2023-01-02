//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let arrayNums = [1, 2, 3, 4, 5];
let arraySum = arrayNums.reduce((acc, curr) => acc + curr, 0);
console.log(arraySum);

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared

function arrayOfNums(arr) {
  return arr.map((num) => num * 2);
}
console.log(arrayOfNums([1, 2, 3, 4, 5]));
//Create a function that takes string
//Print the reverse of that string to the console
function reverseStr(str) {
  return str.split("").reverse().join("");
}
console.log(reverseStr("Danijel"));

//Create a function that takes in a string
//Alert if the string is a palindrome or not

function palindrome(str) {
  let re = /[\W_]/g;
  let lowRegStr = str.toLowerCase().replace(re, "");
  let reverseStr = lowRegStr.split("").reverse().join("");
  return reverseStr === lowRegStr;
}
console.log(palindrome("A man, a plan, a canal. Panama"));
