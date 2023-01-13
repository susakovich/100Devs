// *Variables*
// Declare a variable and assign it to a sentance that is a positive affirmation. Print the affirmation to the console multiple times using a method
let positiveAffirmation = "Yes, I will do it! ";
console.log(positiveAffirmation.repeat(10));

//Declare a variable, assign it an array of letters, combine the letters into one word, and alert it
let newWorld = ["N", "e", "w", "W", "o", "r", "l", "d"];
console.log(newWorld.join(""));

// *Functions*
// Create a function that returns rock, paper, lizard, spock or scissors as randomly as possible
const botMove = () => {
  let botMove = Math.floor(Math.random() * 5);

  if (botMove === 0) {
    botMove = "rock";
  } else if (botMove === 1) {
    botMove = "paper";
  } else if (botMove === 2) {
    botMove = "scissors";
  } else if (botMove === 3) {
    botMove = "lizard";
  } else {
    botMove = "spock";
  }
  return botMove;
};
console.log(botMove());
console.log(botMove());
console.log(botMove());

// *Conditionals*
//Create a function that takes in a choice (rock, paper, scissors, lizard, or spock) and determines if they won a game of rock paper scissors against a bot using the above function
