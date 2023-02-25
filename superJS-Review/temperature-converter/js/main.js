//Write your pseduo code first!

// add click on h1
document.querySelector("h1").addEventListener("click", celsToFahr);

// celsius to fahrenheit
function celsToFahr() {
  // save cels temp
  cels = document.querySelector("input").value;
  // need the value in celsius
  let temp = Number(document.querySelector("input").value);
  // convert it to fahrenheit
  temp = temp * 1.8 + 32;
  // show it in the dom
  document.querySelector(
    "h2"
  ).innerText = `${cels} celsius is ${temp} fahrenheit degrees `;
}
