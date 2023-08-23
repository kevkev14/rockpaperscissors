const player1Text = document.querySelector("#player1Text");
const player2Text = document.querySelector("#player2Text");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");

document.querySelector(".rock").addEventListener("click", player1Turn);

let player1;
let player2;
let result;

choiceBtns.forEach((button) =>
  button.addEventListener("click", () => {
    player1 = button.textContent;
    player2Turn();
    player1Text.textContent = `player1: ${player1}`;
    player2Text.textContent = `player2: ${player2}`;
    resultText.textContent = checkWinner();
  })
);

function player1Turn() {
  let player1 = "ROCK";
  checkWinner();
}

function player2Turn() {
  const randNum = Math.floor(Math.random() * 3) + 1;

  switch (randNum) {
    case 1:
      player2 = "ROCK";
      break;
    case 2:
      player2 = "PAPER";
      break;
    case 3:
      player2 = "SCISSORS";
      break;
  }
}

function checkWinner() {
  if (player1 == player2) {
    return "Draw!";
  } else if (player2 == "ROCK") {
    return player1 == "PAPER" ? "You Win!" : "You Lose!";
  } else if (player2 == "PAPER") {
    return player1 == "SCISSORS" ? "You Win!" : "You Lose!";
  } else if (player2 == "SCISSORS") {
    return player1 == "ROCK" ? "You Win!" : "You Lose!";
  }
}
