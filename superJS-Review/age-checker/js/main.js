//Create a conditonal that checks their age
//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too

//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph

document.querySelector("h1").addEventListener("click", checkAge);
const p = document.querySelector("p");
function checkAge() {
  let userAge = document.querySelector("input").value;
  if (userAge < 16) {
    p.innerText = `You can not drive! You are ${userAge} years old`;
  } else if (userAge < 18) {
    p.innerText = `You can't hate from the outside the club, because you can't even get in. You are ${userAge} years old`;
  } else if (userAge < 21) {
    p.innerText = `You can't drink. You are ${userAge} years old`;
  } else if (userAge < 25) {
    p.innerText = `You can't rent cars affordably. You are ${userAge} years old`;
  } else if (userAge < 30) {
    p.innerText = `You can't rent fancy cars affordably. You are ${userAge} years old`;
  } else {
    p.innerText = `There is nothing left to look forward too. You are ${userAge} years old`;
  }
}
