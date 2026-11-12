const choices = ["rock", "paper", "scissors"];

const startBtn = document.querySelector("#startBtn");
const choiceBtns = document.querySelector(".choiceBtns");
const resaultsMsg = document.querySelector(".resaultsMsg");
const roundMsg = document.querySelector(".roundMsg");
const playerPoints = document.querySelector(".playerPoints");
const playerScore = document.querySelector("#playerScore");
const botScore = document.querySelector("#botScore");
const restartBtn = document.querySelector("#restartBtn");

class Player {
  #score = 0;
  constructor(name = "Player") {
    this._name = name;
    this._choice = "";
  }

  addPoint() {
    this.#score++;
  }

  get score() {
    return this.#score;
  }

  get name() {
    return this._name;
  }

  get choice() {
    return this._choice;
  }

  set choice(choice) {
    this._choice = choice;
  }
}

class Computer extends Player {
  constructor(name = "Bot") {
    super(name);
  }

  randomChoice(options) {
    const randomIndex = Math.floor(Math.random() * options.length);
    this._choice = options[randomIndex];
  }
}

let bot = new Computer();
let player = new Player();

const game = (() => {
  let gameFinished = false;

  function reset() {
    gameFinished = false;
    bot = new Computer();
    player = new Player();
    display.toggleChoiceBtns();
    display.playerPointsDisplay();
  }

  function round() {
    if (!gameFinished) {
      bot.randomChoice(choices);
      if (player.choice != "" && bot.choice != "") {
        console.log("Starting Round");
        if (player.choice === bot.choice) {
          console.log("A tie, no points awarded!");
          display.roundTieMsgDisplay();
        } else if (
          (player.choice === "rock" && bot.choice === "scissors") ||
          (player.choice === "scissors" && bot.choice === "paper") ||
          (player.choice === "paper" && bot.choice === "rock")
        ) {
          player.addPoint();
          display.roundMsgDisplay(player.name);
          // console.log("Player Won round!");
          // console.log(player);
        } else {
          bot.addPoint();
          display.roundMsgDisplay(bot.name);
          //console.log("Computer Won round!");
          //console.log(bot);
        }
      }
      checkWinner();
    }
  }

  function checkWinner() {
    display.playerPointsDisplay();
    if (player.score == 3) {
      gameFinished = true;
      display.winningMsgDisplay(player.name);
    } else if (bot.score == 3) {
      gameFinished = true;
      display.winningMsgDisplay(bot.name);
    }
  }

  return { reset, round, checkWinner };
})();

// ---
// Display
// ---

const display = (() => {
  function roundMsgDisplay(winner) {
    roundMsg.classList.remove("hidden");
    const result = winner === player.name ? "You win the round" : "Bot wins the round";
    roundMsg.textContent = `${result}! You: ${player.choice} | Bot: ${bot.choice}`;
  }

  function roundTieMsgDisplay() {
    roundMsg.classList.remove("hidden");
    roundMsg.textContent = `It's a tie — no points awarded! You: ${player.choice} | Bot: ${bot.choice}`;
  }

  function winningMsgDisplay(winner) {
    resaultsMsg.classList.remove("hidden");
    resaultsMsg.textContent = `${winner === player.name ? "🎉 Congratulations! You won the game!" : "💻 Game Over! The computer won the game."}`;
    toggleChoiceBtns();
    roundMsg.classList.add("hidden");
    restartBtn.classList.remove("hidden");
  }

  function playerPointsDisplay() {
    playerScore.textContent = player.score;
    botScore.textContent = bot.score;
  }

  function toggleChoiceBtns() {
    if (choiceBtns.classList.contains("hidden")) {
      choiceBtns.classList.remove("hidden");
      playerPoints.classList.remove("hidden");
    } else {
      choiceBtns.classList.add("hidden");
      playerPoints.classList.add("hidden");
    }
  }

  return {
    winningMsgDisplay,
    roundMsgDisplay,
    roundTieMsgDisplay,
    toggleChoiceBtns,
    playerPointsDisplay,
  };
})();

const eventLiseners = (() => {
  function choiceBtnsEvent() {
    // Attach event listeners to choice buttons
    choiceBtns.addEventListener("click", (e) => {
      if (e.target.dataset.choice) {
        player.choice = e.target.dataset.choice;
      } else return;
      game.round();
    });
  }
  return { choiceBtnsEvent };
})();


// Start Button
startBtn.addEventListener("click", (e) => {
  startBtn.classList.add("hidden");
  display.toggleChoiceBtns();
  eventLiseners.choiceBtnsEvent();
  playerPoints.classList.remove("hidden");
  display.playerPointsDisplay();
});

// Restart Button
restartBtn.addEventListener("click", (e) => {
  restartBtn.classList.add("hidden");
  resaultsMsg.classList.add("hidden");
  playerPoints.classList.add("hidden");
  game.reset();
});

