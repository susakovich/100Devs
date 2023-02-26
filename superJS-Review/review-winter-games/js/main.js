//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array . Bonus: (do not use map or filter)

function evenNumsFinder(arr) {
  let onlyEvens = [];
  arr.forEach((num) => {
    if (num % 2 === 0) {
      onlyEvens.push(num);
    }
  });
  return onlyEvens;
}

console.log(evenNumsFinder([23, 2, 4, 55, 120]));

// using filter
const evens = (arr) => arr.filter((num) => num % 2 === 0);
console.log(evens([23, 4, 12, 113, 90, 77]));
