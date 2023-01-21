//Create a button that adds 1 to a botScore stored in localStorage

let deckId = "";

// on page load get deck id and store to deckId global variable
fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    deckId = data.deck_id;
  })
  .catch((err) => {
    console.log(`error ${err}`);
  });

document.querySelector("button").addEventListener("click", drawTwo);

function drawTwo() {
  const url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      document.querySelector("#player1").src = data.cards[0].image;
      document.querySelector("#player2").src = data.cards[1].image;

      // calling helper function
      let player1Value = convertToNum(data.cards[0].value);
      let player2Value = convertToNum(data.cards[1].value);

      // checking for higher values and who won
      if (player1Value > player2Value) {
        document.querySelector("h3").innerText = "Player 1 wins!";
      } else if (player1Value < player2Value) {
        document.querySelector("h3").innerText = "Player 2 wins!";
      } else {
        document.querySelector("h3").innerText = "It's a tie!";
      }
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}

// helper function to convert non number cards to numbers
function convertToNum(value) {
  switch (value) {
    case "ACE":
      return 14;
      break;
    case "KING":
      return 13;
      break;
    case "QUEEN":
      return 12;
      break;
    case "JACK":
      return 11;
      break;
    default:
      return Number(value);
  }
}
