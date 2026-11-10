const choices = ["rock", "paper", "scissors"];
const buttons = document.querySelectorAll(".container button");
const resaultsPara = document.querySelector('.resaultsText');
const victoryMsgText = document.querySelector('.victoryMsgText');
const restartBtnBox = document.querySelector('.restartBtn');

class Player {
  constructor(name = "Player") {
    this.name = name;
    this.score = 0;
    this.choice = "";
  }
  // Manual
  setChoice(choice) {
    this.choice = choice;
  }
}
class Computer extends Player {
  constructor(name = "CPU") {
    super(name);
  }
  // Random Pick
  pickRandomChoice(options) {
    const randomIndex = Math.floor(Math.random() * options.length);
    this.choice = options[randomIndex];
  }
}

const bot = new Computer("CPU-Bot!");
const player = new Player("HUMAN-Player!");

// // 2. Play a single round
// function playRound(playerSelection, computerSelection) {
//   console.log(`Player: ${playerSelection} | Computer: ${computerSelection}`);
//
//   if (computerSelection === playerSelection) {
//     console.log("A tie, no points awarded!");
//   } else if (
//     (playerSelection === "rock" && computerSelection === "scissors") ||
//     (playerSelection === "scissors" && computerSelection === "paper") ||
//     (playerSelection === "paper" && computerSelection === "rock")
//   ) {
//     console.log("Player Won round!");
//     humanScore++;
//   } else {
//     computerScore++;
//     console.log("Computer Won round!");
//   }
//
//   resaultsPara.textContent = `Player: ${humanScore} | Computer: ${computerScore}`;
//
//   // Check if someone won the game (first to 5)
//   if (humanScore >= 5 || computerScore >= 5) {
//
//     // Disable all choice buttons (loop through them since buttons is a NodeList)
//     buttons.forEach(button => {
//       button.disabled = true;
//     });
//
//     if (humanScore >= 5) {
//       victoryMsgText.textContent = "🎉 Congratulations! You won the game!";
//     } else {
//       victoryMsgText.textContent = "💻 Game Over! The computer won the game.";
//     }
//
//     // Check if restart button already exists
//     if (!document.querySelector('.restart-btn')) {
//       const restartBtn = document.createElement('button');
//       restartBtn.classList.add('restart-btn');
//       restartBtn.textContent = 'Restart';
//       restartBtnBox.appendChild(restartBtn);
//
//       restartBtn.addEventListener('click', () => {
//         resetGame(restartBtn);
//       });
//     }
//   }
// }
//
// // Reset scores and UI after someone wins
// function resetGame(restartBtn) {
//   humanScore = 0;
//   computerScore = 0;
//
//   // Re-enable all choice buttons
//   buttons.forEach(button => {
//     button.disabled = false;
//   });
//
//   restartBtn.remove();
//   victoryMsgText.textContent = '';
//   resaultsPara.textContent = 'Player: 0 | Computer: 0';
//   console.log("--- New Game Started ---");
// }



// Attach event listeners to choice buttons
buttons.forEach(button => {
  button.addEventListener('click', () => {
    player.setChoice(button.dataset.choice);
    console.log(player.choice);
  });
});
