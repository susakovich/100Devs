//Handle Capital Letters, Place result in DOM, add a check for humpday (Wed)

document.querySelector("#check").addEventListener("click", check);

function check() {
  const day = document.querySelector("#day").value.toLowerCase();

  if (day === "tuesday" || day === "thursday") {
    document.getElementById("placeToSee").innerText = "Class Day";
  } else if (day === "saturday" || day === "sunday") {
    document.getElementById("placeToSee").innerText = "It's the Weekend";
  } else if (day === "wednesday") {
    document.getElementById("placeToSee").innerText = "It's Humpday";
  } else {
    document.getElementById("placeToSee").innerText = "Boring!";
  }
}
