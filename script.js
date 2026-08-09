let playerChoice = prompt("Enter your choice : Rock, Paper Or Scissors");
while (!playerChoice) {
  playerChoice = prompt("You have entered wrong value, try again: (Rock, Paper, Scissors)");
}

playerChoice = playerChoice.toLowerCase();
console.log("variable (playerChoice): " + playerChoice);
console.log(typeof playerChoice);

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
console.log("variable (computerChoice): " + computerChoice);
