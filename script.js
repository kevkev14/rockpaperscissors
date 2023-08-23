const player1Text = document.querySelector("#player1Text");
const player2Text = document.querySelector("#player2Text");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".buttons");
const player1Element = document.querySelector("#player1");

document.querySelector(".rock").addEventListener("click", rock);
document.querySelector(".paper").addEventListener("click", paper);
document.querySelector(".scissors").addEventListener("click", scissor);


let player1;
let player2;
let result;

  /* choiceBtns.forEach((button) =>
  button.addEventListener("click", () => {
    player1 = button.textContent;
    player2Turn();
    console.log("player2Turn")
    player1Text.textContent = `player1: ${player1}`;
    player2Text.textContent = `player2: ${player2}`;
    resultText.textContent = checkWinner();
  })
);  */



/* function checkWinner(player1, player2) {
  if (player1 === player2) {
    document.querySelector("#draw").classList.remove("hidden");
    console.log("ass")
    
    
  }
   else if (player2 === "rock") {
    return player1 === "paper" ? "You Win!" : "You Lose!";
  }
   else if (player2 === "paper") {
  
    return player1 === "scissors" ? "You Win!" : "You Lose!";
  }
   else if (player2 === "scissors") {
    
    return player1 === "rock" ? "You Win!" : "You Lose!";
  }
} */


/* function checkWinner(player1, player2){
  if (player1 === player2){
    document.querySelector("#player1").classList.add("shake")
    document.querySelector("#draw").classList.remove("hidden");
  }
  else if (player1 === "rock"){
    if (player2 === "scissors"){
    }
    document.querySelector("#win").classList.remove("hidden");

  }
  else if (player1 === "scissors"){
    if (player2 === "rock"){
    }
    document.querySelector("#lose").classList.remove("hidden");

  }

  else if (player1 === "scissors"){
    if(player2 === "paper"){
      document.querySelector("#win").classList.remove("hidden");

    }
  }
  else if (player1 === "paper"){
    if(player2 === "scissors"){
      document.querySelector("#lose").classList.remove("hidden");

    }
  }

  else if (player1 === "paper"){
    if(player2 === "rock"){
      document.querySelector("#win").classList.remove("hidden");

    }
  }
  else if (player1 === "rock"){
    if(player2 === "paper"){
      document.querySelector("#lose").classList.remove("hidden");

    }
  }
} */


function checkWinner(player1, player2) {
  const player1Element = document.querySelector("#player1");
  const drawElement = document.querySelector("#draw");
  const winElement = document.querySelector("#win");
  const loseElement = document.querySelector("#lose");

  if (player1 === player2) {
    player1Element.classList.add("shake");
    drawElement.classList.remove("hidden");
  } else if (
    (player1 === "rock" && player2 === "scissors") ||
    (player1 === "scissors" && player2 === "paper") ||
    (player1 === "paper" && player2 === "rock")
  ) {
    winElement.classList.remove("hidden");
  } else {
    loseElement.classList.remove("hidden");
  }
}


function rock() {
  let player1 = "rock";
  player1Element.classList.add("shake");
  checkWinner(player1, player2);
  console.log("player1Turn", player1)
  console.log(player2)
}

function paper() {
  let player1 = "paper";
  player1Element.classList.add("shake");
  checkWinner(player1, player2);
  console.log("player1Turn", player1)
  console.log(player2)
}

function scissor() {
  let player1 = "scissors";
  player1Element.classList.add("shake");
  checkWinner(player1, player2);
  console.log("player1Turn", player1)
  console.log(player2)
}

function player2Turn() {
  const randNum = Math.floor(Math.random() * 3) + 1;

  switch (randNum) {
    case 1:
      player2 = "rock";
      break;
    case 2:
      player2 = "paper";
      break;
    case 3:
      player2 = "scissors";
      break;
  }
}




player2Turn();
