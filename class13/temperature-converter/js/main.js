//Write your pseduo code first!

// 0 => 32

// need the value in celsius

// convert from cels to fahr

// show it

document.getElementById("check").addEventListener("click", convertCels);

function convertCels() {
  let temp = document.getElementById("cels").value;
  temp = (temp * 9) / 5 + 32;
  document.getElementById("placeToYell").innerText = temp;
}
