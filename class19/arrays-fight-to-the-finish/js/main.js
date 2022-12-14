//Create an array of movie titles. Loop through the array and each element to the h2.
let movies = ["LOTR", "Undisputed", "Matrix", "Batman"];

// old way
for (let i = 0; i < movies.length; i++) {
  document.querySelector("h2").innerText += movies[i];
}

movies.forEach((movie, index) =>
  console.log(`Your favorite movies by order are ${index} ${movie}.`)
);
// document.querySelector("h2").innerText = movies;
//Create an array of numbers. Loop through the array and three to each number and replace the old number.
let nums = [10, 20, 30, 40, 50];

nums.forEach((num, idx) => {
  nums[idx] = num + 3;
});
//Find the average of all the numbers from question three

let sum = 0;

for (let i = 0; i < nums.length; i++) {
  sum += nums[i];
}
console.log(sum / nums.length);
