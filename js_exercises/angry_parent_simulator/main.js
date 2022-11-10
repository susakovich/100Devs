//Add what you should be doing - conditionals go here
document.getElementById("yell").addEventListener("click", yell);

function yell() {
  let firstName = document.getElementById("firstName").value;
  let firstMidName = document.getElementById("firstMiddle").value;
  let lastMidName = document.getElementById("lastMiddle").value;
  let lastName = document.getElementById("lastName").value;

  if (firstName === "Azra" && lastName === "Susakovic") {
    document.getElementById(
      "placeToYell"
    ).innerText = `${firstName} ${firstMidName} ${lastMidName} ${lastName} IDI SPAVAJ!`;
    document.querySelector("body").style.backgroundColor = "skyblue";
  } else if (firstName === "Danijel" && lastName === "Susakovic") {
    document.getElementById(
      "placeToYell"
    ).innerText = `${firstName} ${firstMidName} ${lastMidName} ${lastName} uciti,uciti i samo uciti!`;
    document.querySelector("body").style.backgroundColor =
      "rgba(221, 218, 218, 1)";
    document.querySelector("h2").style.color = "rgba(245, 71, 71, 1)";
  } else {
    document.getElementById(
      "placeToYell"
    ).innerText = `${firstName} ${firstMidName} ${lastMidName} ${lastName} bice bolje`;
    document.querySelector("body").style.backgroundColor = "lightgreen";
  }
}

// document.querySelector('#placeToYell').innerText = `${fName} ${fMidName} ${lMidName} ${lName}`

// const synth = window.speechSynthesis;
// document.querySelector('#yell').addEventListener('click', run)
//
// function run() {
//   const fName = document.querySelector('#firstName').value
//   const fMidName = document.querySelector('#firstMiddle').value
//   const lMidName = document.querySelector('#lastMiddle').value
//   const lName = document.querySelector('#lastName').value
//
//   const yellText =  `${fName} ${fMidName} ${lMidName} ${lName}`
//
//   document.querySelector('#placeToYell').innerText = yellText
//
//   let yellThis = new SpeechSynthesisUtterance(yellText);
//
//   synth.speak(yellThis);
// }
