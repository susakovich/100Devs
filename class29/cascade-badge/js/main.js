//Arrays
//Your pokemon party order which is a list of pokemon has been leaked to Misty. Please create a function that reverses your list and prints it to the console.

function reversePoke(pokemons) {
  console.log(pokemons.reverse());
}
reversePoke(["Pichu", "Pikachu", "Raichu"]);

//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

function compareSquareAndCube(a, b) {
  return (
    a.reduce((accu, curr) => accu + curr ** 2, 0) >
    b.reduce((accu, curr) => accu + curr ** 3, 0)
  );
}
console.log(compareSquareAndCube([3, 3, 3], [1, 2, 3]));

//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]

function onlyEvens(arr) {
  return arr.filter((element, idx) => element % idx === 0);
}
console.log(onlyEvens([22, -6, 32, 82, 9, 25]));
console.log(onlyEvens([68, -1, 1, -7, 10, 10]));

//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.

function sumOfValues(arr) {
  return arr.reduce((accu, curr) => accu + Number(curr), 0);
}
console.log(sumOfValues(["5", 5, "2", 2, "1", 1]));
