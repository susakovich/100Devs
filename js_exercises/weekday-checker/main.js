document.getElementById("check").onclick = check;
// document.querySelector("#check").addEventListener("click",check);

function check() {
  const day = document.querySelector("#day").value.toLowerCase();

  if (day === "tuesday" || day === "thursday") {
    document.getElementById("placeToSee").innerText = "CLASSS DAAAAY";
  } else if (day === "saturday" || day === "sunday") {
    document.getElementById("placeToSee").innerText = "WEEKENDDD";
  } else {
    document.getElementById("placeToSee").innerText = "BORRRRINGGGGG";
  }
}
