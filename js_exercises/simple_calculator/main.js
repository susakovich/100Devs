let total = 0;

document.getElementById("zero").addEventListener("click", zer0);
document.getElementById("plusThree").addEventListener("click", add3);
document.getElementById("plusNine").addEventListener("click", mul9);
document.getElementById("minusTwo").addEventListener("click", sub2);
document.getElementById("divideTwo").addEventListener("click", div2);

function zer0() {
  total = 0;
  document.getElementById("result").innerText = total;
  document.querySelector("body").style.backgroundColor = "red";
  document.querySelector("body").style.color = "white";
}

function add3() {
  total += 3;
  document.getElementById("result").innerText = total;
  document.querySelector("body").style.backgroundColor = "purple";
  document.querySelector("body").style.color = "white";
}

function mul9() {
  total *= 9;
  document.getElementById("result").innerText = total;
  document.querySelector("body").style.backgroundColor = "skyblue";
  document.querySelector("body").style.color = "black";
}

function sub2() {
  total -= 2;
  document.getElementById("result").innerText = total;
  document.querySelector("body").style.backgroundColor = "brown";
  document.querySelector("body").style.color = "white";
}

function div2() {
  total /= 2;
  document.getElementById("result").innerText = total;
  document.querySelector("body").style.backgroundColor = "magenta";
  document.querySelector("body").style.color = "black";
}
