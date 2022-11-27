//Create a function that grabs the number of snacks from the input and tells you to stop that many times

document.getElementById("help").addEventListener("click", stopEating);

function stopEating() {
  let snacks = Number(document.querySelector("input").value);
  document.getElementById("stops").innerText = "";

  for (let i = 1; i <= snacks; i++) {
    document.getElementById("stops").innerText += " STOP!";
  }
}
stopEating();
