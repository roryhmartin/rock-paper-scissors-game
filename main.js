// Rock Paper Scissors

// Counters to keep scores
let playerScore = 0;
let computerScore = 0;

// Computer picks between rock, paper or scissors by selecting random array item, answer is returned
function getComputerChoice() {
  let computerOptions = ["Rock", "Paper", "Scissors"];
  let computerRandom = computerOptions[Math.floor(Math.random() * computerOptions.length)];
  return computerRandom;
}

// Play a round. First Player picks, then computer.
//then compare options, return win or lose text and increment score
function playRound() {
  const playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
  const computerSelection = getComputerChoice().toLowerCase();

  console.log("computer choice: " + computerSelection);

  if (playerSelection === computerSelection) {
    return "Draw! Both players chose " + playerSelection;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    return "You Win!  " + playerSelection + " Beats " + computerSelection;
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    return "You Lose! Paper beats Rock";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    return "You Win! Scissors beats Paper";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore++;
    return "You Lose! Rock beats Scissors";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    return "You Win! Paper beats Rock";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
    return "You Lose! Scissors Beat Paper";
  } else {
    return "You must make a valid choice";
  }
}

// Repeat playRound 5 times. I am using clog to keep track of what is happening here.
for (let round = 1; round <= 5; round++) {
  console.log(playRound());
  console.log("round: " + round);
  console.log("playerScore " + playerScore);
  console.log("computerScore " + computerScore);
}

// compare player score and computer score and return who is the winner.
function result(playerScore, computerScore) {
  if (playerScore > computerScore) {
    console.log("Player wins!");
  } else if (playerScore < computerScore) {
    console.log("Computer wins!");
  } else {
    console.log("Draw");
  }
}

console.log(result(playerScore, computerScore));
