//// Rock Paper Scissors
// Counters to keep scores
let playerScore = 0;
let computerScore = 0;
let roundWinner = '';
// get the buttons
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
// get the div for outputs
const roundResult = document.getElementById('round-result'); // Displays winner
const finalResult = document.getElementById('score-info'); // shows who chose what
const playerSign = document.getElementById('player-sign');
const computerSign = document.getElementById('computer-sign');
const playerScoreOutput = document.getElementById('player-score');
const computerScoreOutput = document.getElementById('computer-score');
const scoreMessage = document.getElementById('score-message');
const endGameModal = document.getElementById('modal-container');
const endGameMessage = document.getElementById('end-game-message');
const overlay = document.getElementById('overlay');
const restartButton = document.getElementById('restart-button');
// Add Event Listeners
rockButton.addEventListener('click', () => handleClick('ROCK'));
paperButton.addEventListener('click', () => handleClick('PAPER'));
scissorsButton.addEventListener('click', () => handleClick('SCISSORS'));
restartButton.addEventListener('click', restartGame);
overlay.addEventListener('click', closeEndGameModal);

// Computer picks between rock, paper or scissors by selecting random array item, answer is returned
function getComputerChoice() {
    let computerOptions = ['Rock', 'Paper', 'Scissors'];
    let computerRandom = computerOptions[Math.floor(Math.random() * computerOptions.length)];
    return computerRandom;
}

function isGameOver() {
    return playerScore === 5 || computerScore === 5;
}

function handleClick(playerSelection) {
    if (isGameOver()) {
        openEndGameModal();
        return;
    }

    const computerSelection = getComputerChoice().toUpperCase();
    playRound(playerSelection, computerSelection);
    updateChoices(playerSelection, computerSelection);
    updateScore();

    if (isGameOver()) {
        openEndGameModal();
        setFinalMessage();
    }
}

function updateChoices(playerSelection, computerSelection) {
    switch (playerSelection) {
        case 'ROCK':
            playerSign.textContent = '✊';
            break;
        case 'PAPER':
            playerSign.textContent = '✋';
            break;
        case 'SCISSORS':
            playerSign.textContent = '✌';
            break;
    }

    switch (computerSelection) {
        case 'ROCK':
            computerSign.textContent = '✊';
            break;
        case 'PAPER':
            computerSign.textContent = '✋';
            break;
        case 'SCISSORS':
            computerSign.textContent = '✌';
            break;
    }
}

function playRound(playerSelection, computerSelection) {
    playerSign.innerText = playerSelection;
    computerSign.innerText = computerSelection;

    if (playerSelection === computerSelection) {
        roundWinner = 'tie';
    }
    if (
        (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
        (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
        (playerSelection === 'PAPER' && computerSelection === 'ROCK')
    ) {
        playerScore++;
        roundWinner = 'player';
    }
    if (
        (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') ||
        (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') ||
        (computerSelection === 'PAPER' && playerSelection === 'ROCK')
    ) {
        computerScore++;
        roundWinner = 'computer';
    }
    updateScoreMessage(roundWinner, playerSelection, computerSelection);
}

function updateScore() {
    if (roundWinner === 'tie') {
        roundResult.textContent = "It's a draw!";
    } else if (roundWinner === 'player') {
        roundResult.textContent = 'You Won!';
    } else if (roundWinner === 'computer') {
        roundResult.textContent = 'You lost!';
    }
    playerScoreOutput.textContent = `Player: ${playerScore}`;
    computerScoreOutput.textContent = `Computer: ${computerScore}`;
}

function updateScoreMessage(winner, playerSelection, computerSelection) {
    if (winner === 'player') {
        scoreMessage.textContent = `${capitalizeFirstLetter(playerSelection)} beat ${computerSelection.toLowerCase()}`;
        return;
    }
    if (winner === 'computer') {
        scoreMessage.textContent = `${capitalizeFirstLetter(playerSelection)} is beaten by ${computerSelection.toLowerCase()}`;
        return;
    }
    scoreMessage.textContent = `${capitalizeFirstLetter(playerSelection)} ties with ${computerSelection.toLowerCase()}`;
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function openEndGameModal() {
    endGameModal.style.display = 'flex';
    overlay.style.display = 'block';
}

function closeEndGameModal() {
    endGameModal.style.display = 'none';
    overlay.style.display = 'none';
}

function setFinalMessage() {
    return playerScore > computerScore ? (endGameMessage.textContent = 'You won!') : (endGameMessage.textContent = 'You lost...');
}

function restartGame() {
    playerScore = 0;
    computerScore = 0;
    roundResult.textContent = 'Make Your Choice';
    scoreMessage.textContent = 'First to score 5 points wins the game';
    playerScoreOutput.textContent = 'Player: 0';
    computerScoreOutput.textContent = 'Computer: 0';
    playerSign.textContent = '❔';
    computerSign.textContent = '❔';
    endGameModal.style.display = 'none';
    overlay.style.display = 'none';
}
