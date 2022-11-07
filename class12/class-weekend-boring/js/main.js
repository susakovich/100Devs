document.querySelector("#check").addEventListener("click", check);

function check() {
  const day = document.querySelector("#day").value;
  //Conditionals go here
  if (day === "Tuesday" || day === "Thursday") {
    document.getElementById("placeToSee").innerText = "CLASS DAY";
  } else if (day === "Saturday" || day === "Sunday") {
    document.getElementById("placeToSee").innerText = "WEEEEEKAND";
  } else {
    document.getElementById("placeToSee").innerText = "BORIIIIINGGGGG";
  }
}
