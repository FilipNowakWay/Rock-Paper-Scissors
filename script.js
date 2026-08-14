playGame();

function getPlayerChoice() {
  let playerChoice = prompt("Enter your choice : Rock, Paper Or Scissors");
  return playerChoice.toLowerCase();
}

function getComputerChoice() {
  let random = Math.floor(Math.random() * 3); //expected output : 0,1 or 2
  switch (random) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(playerSelection, computerSelection) {
    console.log(`Player: ${playerSelection} | Computer: ${computerSelection}`);
    if (computerSelection === playerSelection) console.log("A tie, no points awarded!");
    else if ((playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "scissors" && computerSelection === "paper") ||
      (playerSelection === "paper" && computerSelection === "rock")) {
      console.log("Player Won round!");
      ++humanScore;
    }
    else {
      ++computerScore
      console.log("Computer Won round!")
    }
  }
  let playerSelection = getPlayerChoice();
  let computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
}


