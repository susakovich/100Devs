document.querySelector("#check").addEventListener("click", check);

function check() {
  let day = document.getElementById("day").value;

  if (day === "Tuesday" || day === "Thursday") {
    document.querySelector("#placeToSee").innerText = "CLASSSS DAAAAY";
  } else if (day === "Saturday" || day === "Sunday") {
    document.querySelector("#placeToSee").innerText = "WEEKEND";
  } else {
    document.querySelector("#placeToSee").innerText = "BORRING";
  }
}
