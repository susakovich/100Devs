// Create a variable names input, with any phrase, this will be later translated to whale talk
let input = "urpentine and turtles";

// Whales only speak with the vowels, this array won't be updated, so use appropriate declaration
const vowels = ["a", "e", "i", "o", "u"];

// Create a variable and set it equal to an empty array, this will serve as a place to store the vowels from the input string
let resultArray = [];

// Itereting over variables using nested loops, checking same words
for (let i = 0; i < input.length; i++) {
  //   Write an if statement that checks if each letter in the input string is equal to "e" and "u", if so push to resultArray
  if (input[i] === "e" || input[i] === "u") {
    resultArray.push(input[i]);
  }
  for (let j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) {
      resultArray.push(input[i]);
    }
  }
}
// Declare a variable resultString that joins our resultArray into a single string and capitalizes all of it's letters
let resultString = resultArray.join("").toUpperCase();
console.log(resultString);
