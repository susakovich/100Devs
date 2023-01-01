// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
let favDrink = "    Pepsi Zero   ";
favDrink = favDrink.trim();
console.log(`Your favorite drink is ${favDrink}.`);

//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
let arrayOfWords = "coca cola banana apple peach popcorn";
console.log(arrayOfWords.includes("apple"));

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rps() {
  let compMove = Math.floor(Math.random() * 3);

  if (compMove === 0) {
    compMove = "rock";
  } else if (compMove === 1) {
    compMove = "paper";
  } else {
    compMove = "scissors";
  }
  return compMove;
}
console.log(rps());
console.log(rps());
console.log(rps());
console.log(rps());
console.log(rps());

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

function checkWin(playerChoice) {
  let botChoice = rps();

  if (
    (playerChoice === "rock" && botChoice === "scissors") ||
    (playerChoice === "paper" && botChoice === "rock") ||
    (playerChoice === "scissors" && botChoice === "paper")
  ) {
    console.log(`Player wins! ${playerChoice} beats ${botChoice}`);
  } else if (playerChoice === botChoice) {
    console.log(`It's a tie. ${playerChoice} vs ${botChoice}`);
  } else {
    console.log(`Bot wins because ${botChoice} beats ${playerChoice}`);
  }
}
// checkWin("rock");
//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.

function playGameXTimes(arr) {
  arr.forEach((choice) => checkWin(choice));
}

playGameXTimes(["rock", "paper", "rock", "scissors", "rock"]);
