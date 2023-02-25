//--- Easy
//create a variable and assign it a number
let year = 110;
//minus 10 from that number
year -= 10;
//print that number to the console
console.log(year);
//--- Medium
//create a variable that holds a value from the input
// let inputVar = Number(document.querySelector("#danceDanceRevolution").value);
//add 25 to that number
// inputVar += 25;
//alert that number
// alert(inputVar);
//--- Hard
//create a variable that holds the h1
let h1Holder = document.querySelector("h1");
//add an event listener to that element that console logs the sum of the two previous variables
h1Holder.addEventListener("click", sumNum);

function sumNum() {
  let inputVar = Number(document.querySelector("#danceDanceRevolution").value);
  inputVar += 25;

  console.log(year + inputVar);
}
