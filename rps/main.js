console.log(`Welcome to ROCK, PAPER or SCISSORS`);
console.log(`***********************************`);

// User choosing between rock, paper or scissors

const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();

  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "bomb"
  ) {
    return userInput;
  } else {
    return "Please type: rock, paper or scissors.";
  }
};
// Checking to see is function working correctly
// console.log(`Your choice is ${getUserChoice("paper")}`); true
// console.log(getUserChoice("papir")); wrong

// Create a computer choice

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  //   return a value dependin on a random number
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
};
// Checking to see is function working correctly
// console.log(`Computer plays ${getComputerChoice()}`); true
// console.log(`Computer plays ${getComputerChoice()}`); true
// console.log(`Computer plays ${getComputerChoice()}`); true

// Determine a winner

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "This game is a tie!";
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "Computer won!";
    } else {
      return "You won!";
    }
  }
  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "Computer won!";
    } else {
      return "You won!";
    }
  }
  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "Computer won!";
    } else {
      return "You won!";
    }
  }
  //   Secret word to always win
  if (userChoice === "bomb") {
    return "You won!";
  }
};
// Checking to see is function working correctly
// console.log(determineWinner("rock", "paper"));
// console.log(determineWinner("rock", "rock"));
// console.log(determineWinner("rock", "scissors"));

// Create playGame function and log results

const playGame = () => {
  const userChoice = getUserChoice("paper");
  const computerChoice = getComputerChoice();
  console.log(`You played ${userChoice}`);
  console.log(`***********************************`);
  console.log(`Computer played ${computerChoice}`);
  console.log(`***********************************`);

  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
