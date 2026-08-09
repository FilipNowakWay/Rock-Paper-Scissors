function getPlayerChoice() {
  let playerChoice = prompt("Enter your choice : Rock, Paper Or Scissors");
  while (!playerChoice) {
    playerChoice = prompt("You have entered wrong value, try again: (Rock, Paper, Scissors)");
  }
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

const computerChoice = getComputerChoice();
const playerChoice = getPlayerChoice();
console.log("variable (computerChoice): " + computerChoice);
console.log("variable (playerChoice): " + playerChoice);
