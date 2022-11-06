document.getElementById("purple").onclick = getPurple;
document.getElementById("green").onclick = getGreen;
document.getElementById("blue").onclick = getBlue;
document.getElementById("yellow").onclick = getYellow;

function getPurple() {
  document.querySelector("body").style.backgroundColor = "rgb(123, 16, 126)";
  document.querySelector("body").style.color = "white";
}

function getGreen() {
  document.querySelector("body").style.backgroundColor = "rgb(20, 118, 51)";
  document.querySelector("body").style.color = "black";
}

function getBlue() {
  document.querySelector("body").style.backgroundColor = "rgb(0, 191, 255)";
  document.querySelector("body").style.color = "white";
}

function getYellow() {
  document.querySelector("body").style.backgroundColor = "rgb(220, 212, 57)";
  document.querySelector("body").style.color = "black";
}
