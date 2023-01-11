//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let nums = [1, 2, 3, 4, 5];
let sum = nums.reduce((accu, curr) => accu + curr, 0);
console.log(sum);

//Create a function that takes in an array of numbers
let newNums = [1, 2, 3, 4, 5];
//Return a new array of numbers that is every original number squared
let squaredNums = newNums.map((num) => num ** 2);
console.log(squaredNums);

//Create a function that takes string
const stringerino = (str) => {
  return str.split("").reverse().join("");
};
//Print the reverse of that string to the console
console.log(stringerino("World"));

//Create a function that takes in a string
//Alert if the string is a palindrome or not
const palindromo = (str) => str === str.split("").reverse().join("");

// another way, with calling the function we already made
const palindromoNew = (str) => str === stringerino(str);

console.log(palindromo("ana")); // true
console.log(palindromo("racecar")); // true

console.log(palindromoNew("ana")); // true
console.log(palindromoNew("racecar")); // true
