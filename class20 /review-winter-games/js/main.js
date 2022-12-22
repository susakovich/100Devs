//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)

function evenNumbers(arr) {
  let evens = [];

  //   using for loop
  //   for (let i = 0; i <= arr.length; i++) {
  //     if (arr[i] % 2 === 0) {
  //       evens.push(arr[i]);
  //     }
  //   }

  arr.forEach((num) => {
    if (arr[num] % 2 === 0) {
      evens.push(arr[num]);
    }
  });

  return evens;
}

console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
