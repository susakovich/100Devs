//Arrays

//Create and array of tv shows. Loop through and print each show to the console
const tvShows = [
  "Breaking Bad",
  "Game of Thrones",
  "Super Natural",
  "Silicon Valley",
];

for (const show of tvShows) {
  console.log(show);
}
console.log("*******forEach********");
tvShows.forEach((show) => console.log(show));

//Create and array of numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//Return a new array of numbers that includes every even number from the previous Arrays
let onlyEvens = (arr) => arr.filter((n) => n % 2 === 0);
console.log(onlyEvens(numbers));
console.log(onlyEvens([12, 451, 25, 2, 2315, 664, 76, 234, 7676]));

//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number
function sumSecondLowAndHight(arr) {
  let sorted = arr.sort((a, b) => a - b);
  alert(sorted[1] + sorted[sorted.length - 2]);
}
sumSecondLowAndHight([23, 4, 5, 612, 65, 1290]);
