let total = 0;

document.getElementById("zero").onclick = addZero;
document.getElementById("plusThree").onclick = addThree;
document.getElementById("plusNine").onclick = addNine;
document.getElementById("minusTwo").onclick = subTwo;
document.getElementById("divideTwo").onclick = divTwo;

function addZero() {
  total = 0;
  document.querySelector("#result").innerText = total;
}

function addThree() {
  total += 3;
  document.querySelector("#result").innerText = total;
}

function addNine() {
  total += 9;
  document.querySelector("#result").innerText = total;
}

function subTwo() {
  total -= 2;
  document.querySelector("#result").innerText = total;
}

function divTwo() {
  total /= 2;
  document.querySelector("#result").innerText = total;
}
