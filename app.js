let playerScore = 0;
let computerScore = 0;
let gameStatus = true;
const choices = ["rock", "paper", "scissors"];

const selectionButtons = document.getElementsByClassName("selection-button");

const displayDiv = document.createElement('div');
const infoHeader = document.createElement('h4');
const resultHeader = document.createElement('h4');
const scoreHeader = document.createElement('h3');
const announcementHeader = document.createElement('h2');

document.body.appendChild(displayDiv);
displayDiv.appendChild(infoHeader);
displayDiv.appendChild(resultHeader);
displayDiv.appendChild(scoreHeader);
displayDiv.appendChild(announcementHeader);


Array.from(selectionButtons).forEach(btn => {
    btn.addEventListener('click', (e) => { playRound(e.target.value) })
});


const promptUser = () => prompt("Enter your choice (rock, paper, scissors):").trim().toLowerCase();

const getComputerChoice = () => choices[Math.floor(Math.random() * choices.length)];

const promptNewGame = () => {
    const newGameButton = document.createElement('button');
    newGameButton.classList.add('restart-game')
    newGameButton.textContent = 'New Game'
    newGameButton.addEventListener('click', (e) => {
        playerScore = 0;
        computerScore = 0;
        infoHeader.textContent = "";
        resultHeader.textContent = "";
        scoreHeader.textContent = "";
        announcementHeader.textContent = "";
        gameStatus = true;
        newGameButton.remove();
    })
    displayDiv.appendChild(newGameButton);
}
const playRound = (playerSelection) => {

    if (!gameStatus) return

    const computerSelection = getComputerChoice();

    infoHeader.textContent = `You played ${playerSelection}, the computer played ${computerSelection}!`;

    if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        playerScore++;
        resultHeader.textContent = "You win this round!";
    } else if (
        (computerSelection === "rock" && playerSelection === "scissors") ||
        (computerSelection === "paper" && playerSelection === "rock") ||
        (computerSelection === "scissors" && playerSelection === "paper")
    ) {
        computerScore++;
        resultHeader.textContent = "The computer wins this round!";
    } else {
        resultHeader.textContent = "This round is a tie!";
    }

    scoreHeader.textContent = `The score is Player: ${playerScore} - Computer: ${computerScore}`;

    if (playerScore === 5) {
        announcementHeader.textContent = "you win this game.";
        gameStatus = false;
        promptNewGame()
        return
    }
    if (computerScore === 5) {
        announcementHeader.textContent = "The computer wins this game.";
        gameStatus = false;
        promptNewGame()
        return
    }
};

