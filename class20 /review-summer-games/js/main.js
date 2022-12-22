//Create a function that takes in an array of numbers. Multiply each number together and alert the product.

function multiplyNums(arr) {
  let product = 1;
  //   using forEach
  //   arr.forEach((num) => (product *= num));

  // using for loop
  for (let i = 0; i < arr.length; i++) {
    product *= arr[i];
  }
  alert(product);
}

multiplyNums([10, 2, 3]);
