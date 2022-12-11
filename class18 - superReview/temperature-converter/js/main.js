//Write your pseduo code first!

document.querySelector("h1").addEventListener("click", celsToFahr);

function celsToFahr() {
  // Take value from input
  let enteredVal = Number(document.querySelector("input").value);
  // Convert it to celsius to fahrenheit using formula
  let temp = enteredVal * 1.8 + 32;
  // Show value to the user
  document.querySelector(
    "p"
  ).innerText = `Your celsius in fahrenheit is ${temp} `;
}
