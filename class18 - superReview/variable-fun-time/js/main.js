//--- Easy
//create a variable and assign it a number
let num = 25;
//minus 10 from that number
num -= 10;
//print that number to the console
console.log(num);
//--- Medium
//create a variable that holds a value from the input
let userAge = document.getElementById("danceDanceRevolution").value;
//add 25 to that number
userAge += 25;
//alert that number
alert(userAge);
//--- Hard
//create a variable that holds the h1
const h1Holder = document.querySelector("h1");
//add an event listener to that element that console logs the sum of the two previous variables
h1Holder.addEventListener("click", addTwoNums);

function addTwoNums() {
  console.log(num + Number(userAge));
}
