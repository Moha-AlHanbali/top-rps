let playerScore = 0;
let computerScore = 0;

const choices = ["rock", "paper", "scissor"];

const promptUser = () => prompt("Enter your choice (rock, paper, scissor):").trim().toLowerCase();

const getComputerChoice = () => choices[Math.floor(Math.random() * choices.length)];

const playerSelection = () => {
    let userInput = promptUser();

    if (choices.includes(userInput)) return userInput;

    while (!choices.includes(userInput)) {
        console.log("Invalid input.");
        userInput = promptUser();
    }
    return userInput;
}

const playRound = () => {
    const playerChoice = playerSelection();
    const computerSelection = getComputerChoice();

    console.log(`You played ${playerChoice}, the computer played ${computerSelection}!`);

    if (
        (playerChoice === "rock" && computerSelection === "scissor") ||
        (playerChoice === "paper" && computerSelection === "rock") ||
        (playerChoice === "scissor" && computerSelection === "paper")
    ) {
        playerScore++;
        console.log("You win this round!");
    } else if (
        (computerSelection === "rock" && playerChoice === "scissor") ||
        (computerSelection === "paper" && playerChoice === "rock") ||
        (computerSelection === "scissor" && playerChoice === "paper")
    ) {
        computerScore++;
        console.log("The computer wins this round!");
    } else {
        console.log("This round is a tie!");
    }

    console.log(`The score is Player: ${playerScore} - Computer: ${computerScore}`);

    if (playerScore === 10) {
        console.log("you win this game.");
        return
    }
    if (computerScore === 10) {
        console.log("The computer wins this game.");
        return
    }
    playRound();
};

playRound();
