document.getElementById("check").addEventListener("click", checkDay);

function checkDay() {
  let day = document.getElementById("day").value.toLowerCase();

  if (day === "tuesday" || day === "thursday") {
    document.getElementById("placeToSee").innerText = "CLASS DAY!";
    document.querySelector("body").style.backgroundColor = "purple";
    document.querySelector("h2").style.color = "white";
  } else if (day === "saturday" || day === "sunday") {
    document.getElementById("placeToSee").innerText = "WEEKENDDD!";
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector("h2").style.color = "white";
  } else {
    document.getElementById("placeToSee").innerText = "BORRING!";
    document.querySelector("body").style.backgroundColor = "brown";
    document.querySelector("h2").style.color = "white";
  }
}
