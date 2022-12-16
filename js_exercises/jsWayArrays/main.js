// Create all these programs in a generic fashion: the program output should reflect any update in the array's content.

// Musketeers
// Write a program that:

// Creates an array named musketeers containing values "Athos", "Porthos" and "Aramis".
const musketeers = ["Athos", "Porthos", "Aramis"];
// Shows each array element using a for loop.
for (let i = 0; i < musketeers.length; i++) {
  console.log(`Your musketeers are ${musketeers[i]}.`);
}
// Adds the "D'Artagnan" value to the array.
musketeers.push("D'Artagnan");
// Shows each array element using the forEach() method.
musketeers.forEach((musketeer) => {
  console.log(`Name of our musketeers are ${musketeer}.`);
});
// Remove poor Aramis.
let removedMusketeer = musketeers.splice(2, 1);
console.log(`We have removed ${removedMusketeer}.`);
// Shows each array element using a for-of loop.
for (const musketeer of musketeers) {
  console.log(musketeer);
}

// Sum of values
// Write a program that creates the following array, then calculates and shows the sum of its values (42 in that case).
const values = [3, 11, 7, 2, 9, 10];
let sum = 0;
values.forEach((value) => {
  sum += value;
});
console.log(`Sum of ${values} is ${sum}.
`);

// Array maximum
// Write a program that creates the following array, then calculates and shows the array's maximum value.

const newValues = [3, 11, 7, 2, 9, 10];

let max = newValues[0];

// First index is 1 since max is initialized with value at index 0
for (let i = 1; i < newValues.length; i++) {
  if (newValues[i] > max) {
    max = newValues[i];
  }
}
console.log(max);

// List of words
// Write a program that asks the user for a word until the user types "stop". The program then shows each of these words, except "stop".

let words = [];
let word = "";

while (word !== "stop") {
  word = prompt("Enter a word or stop to quit:");
  if (word !== "stop") {
    words.push(word);
  }
}
console.log(`You have entered the following words:`);
words.forEach((word) => {
  console.log(word);
});
