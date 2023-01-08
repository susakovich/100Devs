// TODO
// Whale Talk
// Take a phrase like ‘turpentine and turtles’ and translate it into its “whale talk” equivalent: ‘UUEEIEEAUUEE’.

// There are a few simple rules for translating text to whale language:

// There are no consonants. Only vowels excluding “y”.
// The u‘s and e‘s are extra long, so we must double them in our program.
// Once we have converted text to the whale language, the result is sung slowly, as is a custom in the ocean.

// TODO 1
// Create a variable named input that is equal to any phrase you’d like. This variable will contain the text you want to translate into “whale talk”.
// TODO 2
// Whales only speak with the vowels, “a”, “e”, “i”, “o”, and “u”. Using these lowercase letters, create an array named vowels. This array will not be updated so be sure to choose the appropriate declaration keyword.
// Note: The use of this array will be more apparent within the following steps.
// TODO 3
// Create a variable named resultArray and set it equal to an empty array: []. This will serve as a place to store the vowels from the input string.
// TODO 4
// Create a loop to iterate through each letter of the input variable text. In a later step, we will compare each letter with our vowels array.
// TODO 5
// To check your work, log the iterator numbered position inside the for loop and run your code. This should count the number of characters in your input string.
// Comment out this code when you’re ready to move on.
// TODO 6
// Create a nested for loop inside of the for loop you just wrote. Make the inner loop iterate through the vowels array each time the outer loop runs.
// This will enable you to check each letter of input against all the vowels elements during each iteration.
// TODO 7
// To check your work, log the iterator number positions inside the inner for loop and run your code. You should see 0 through 4 repeatedly because vowels is 5 elements long.
// TODO 8
// Inside the second for loop, write a code block that compares the input letter to every letter in the vowels array.
// Note: To check that everything is working properly, log letter matches to the console.
// TODO 9
// Now instead of just logging the letters, add them to the results array.
// Note: To check your work use console.log() to print your resultArray. The letters you logged to the console in step 8 should be now included in your resultArray.
// TODO 10
// Whales double their e‘s and the u‘s in their language.
// Write an if statement that checks if each letter in the input string is equal to 'e'. If so, use the .push() method to add input[i] to the resultArray.
// Note: This statement belongs before the inner for loop block inside the outer for loop. This is because you only want to perform this check once for every letter in the input.
// TODO 11
// Next, you want to double the letter u.
// TODO 12
// At the bottom of the program, log the resultArray to the console.
// TODO 13
// Currently, resultArray outputs an array of characters. To produce proper whale language, we want to capitalize the array elements and put them together as one string.
// Declare a variable resultString that joins our resultArray into a single string and capitalizes all of its letters.
// TODO 14
// Run the program and sing the output out loud — you officially speak whale!
// Note: To confirm, if you change the value of input to ‘turpentine and turtles’, the whale version would read: 'UUEEIEEAUUEE'.
let input = "turpentine and turtles";
const vowels = ["a", "e", "i", "o", "u"];
let resultArray = [];

for (let i = 0; i < input.length; i++) {
  if (input[i] === "e" || input[i] === "u") {
    resultArray.push(input[i]);
  }
  for (let j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) {
      resultArray.push(input[i]);
    }
  }
}
const resultString = resultArray.join(" ").toUpperCase();
console.log(resultString);
