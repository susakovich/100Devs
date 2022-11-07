document.getElementById("check").onclick = check;
// document.querySelector("#check").addEventListener("click",check);

function check() {
  const day = document.querySelector("#day").value;

  if (day === "Tuesday" || day === "Thursday") {
    document.getElementById("placeToSee").innerText = "CLASSS DAAAAY";
  } else if (day === "Saturday" || day === "Sunday") {
    document.getElementById("placeToSee").innerText = "WEEKENDDD";
  } else {
    document.getElementById("placeToSee").innerText = "BORRRRINGGGGG";
  }
}
