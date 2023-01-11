// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question
let whoAreYou = "Tell me, who are you?";
//* we can also use whoAreYou.endsWith("?") instead includes
if (whoAreYou.includes("?")) {
  console.log(whoAreYou);
}

//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console
let aboutMe =
  "I'm Danijel, a jr. dev, 33 years old, recently I started programming so I'm jr. dev.";
console.log(aboutMe.replaceAll("jr. dev", "software engineer"));

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function botMove() {
  let random = Math.floor(Math.random() * 3);

  if (random === 0) {
    return "rock";
  } else if (random === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}
// console.log(botMove());
// console.log(botMove());
// console.log(botMove());

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function checkWin(choice) {
  if (
    (choice === "rock" && botMove() === "scissors") ||
    (choice === "paper" && botMove() === "rock") ||
    (choice === "scissors" && botMove() === "paper")
  ) {
    console.log(`Player won! ${choice} beats ${botMove()}`);
  } else if (choice === botMove()) {
    console.log(`It's a tie! ${choice} vs ${botMove()}`);
  } else {
    console.log(`Bot wins! ${botMove()} beats ${choice}`);
  }
}
// checkWin("rock");
// checkWin("paper");
// checkWin("scissors");

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.

function playGameXTimes(arr) {
  arr.forEach((choice) => checkWin(choice));
}
playGameXTimes(["scissors", "rock", "paper", "rock", "rock"]);
