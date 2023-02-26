// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".
function lastFirstNum(arr) {
  if (arr[0] < arr[arr.length - 1]) {
    console.log(`Hi`);
  } else if (arr[0] > arr[arr.length - 1]) {
    console.log(`Bye`);
  } else {
    console.log(`We close in an hour.`);
  }
}
lastFirstNum([1, 3, 4, 5, 10]);
lastFirstNum([10, 3, 4, 5, 10]);
lastFirstNum([11, 3, 4, 5, 10]);
