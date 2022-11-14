//Write your pseduo code first!

//On click
document.getElementById("convert").addEventListener("click", celsToFahr);

//Get temperature
function celsToFahr() {
  let cels = document.getElementById("celsius").value;
  //Make formula to convert it

  cels = (cels * 9) / 5 + 32;
  //Add it to the DOM

  document.getElementById(
    "showTemp"
  ).innerText = `Your celsius in fahrenheit is ${cels}`;
}
