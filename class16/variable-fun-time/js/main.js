//--- Easy
//create a variable and assign it a number
let num = 30;
//minus 10 from that number
num -= 10;
//print that number to the console
console.log(num);
//--- Medium
//create a variable that holds a value from the input
// let inputedVal = document.getElementById("danceDanceRevolution").value;
//add 25 to that number
// inputedVal += 25;
//alert that number
// alert(inputedVal);
//--- Hard
//create a variable that holds the h1
const headingOne = document.querySelector("h1");
//add an event listener to that element that console logs the sum of the two previous variables
headingOne.addEventListener("click", sumNum);

function sumNum() {
  let inputedVal = document.getElementById("danceDanceRevolution").value;
  let result = num + Number(inputedVal);
  console.log(result);
}
