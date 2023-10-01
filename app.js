const playerPointsSpan = document.querySelector(".player_points");
const compPointsSpan = document.querySelector(".computer_points");
const optionsButtons = document.querySelectorAll(".options button");
const choicesSection = document.querySelector(".choices");
const playerChoiceSpan = document.querySelector(".player-choice");
const compChoiceSpan = document.querySelector(".comp-choice");
const results = document.querySelector(".results");
const resetGameButton = document.querySelector(".reset-game");

let playerPoints = 0;
let playerChoice = "";
let compPoints = 0;
let compChoice = "";

function setGame() {
    playerPointsSpan.innerHTML = playerPoints;
    compPointsSpan.innerHTML = compPoints;
    results.innerHTML = "Chose your weapon :)";
    resetGameButton.classList.remove("active");
}

window.onload = setGame;

function playerSelect(event) {
    optionsButtons.forEach((button) => button.classList.remove("active"));
    playerChoice = event.target.dataset.option;
    event.target.classList.add("active");
    resetGameButton.classList.add("active");

    compSelect();
}


const compAvailableChoices = ["ROCK", "PAPER", "SCISSORS", "LIZARD", "SPOCK"];

function compSelect() {
    const randomIndex = Math.floor(Math.random() * compAvailableChoices.length);

    compChoice = compAvailableChoices[randomIndex];

    checkResults();
}

function checkResults() {
    let winner = "";

    if (
        (playerChoice === "ROCK" && compChoice === "SCISSORS") ||
        (playerChoice === "PAPER" && compChoice === "ROCK") ||
        (playerChoice === "SCISSORS" && compChoice === "PAPER") ||
        (playerChoice === "ROCK" && compChoice === "LIZARD") ||
        (playerChoice === "LIZARD" && compChoice === "SPOCK") ||
        (playerChoice === "SPOCK" && compChoice === "SCISSORS") ||
        (playerChoice === "SCISSORS" && compChoice === "LIZARD") ||
        (playerChoice === "LIZARD" && compChoice === "PAPER") ||
        (playerChoice === "PAPER" && compChoice === "SPOCK") ||
        (playerChoice === "SPOCK" && compChoice === "ROCK")
    ) {
        winner = "You Won!";
        playerPoints++;
        playerPointsSpan.innerHTML = playerPoints;
    }
    else if (playerChoice === compChoice) {
        winner = "DRAW!";
    }
    else {
        winner = "You Lost :(";
        compPoints++;
        compPointsSpan.innerHTML = compPoints;
    }
    choicesSection.classList.add("active");
    playerChoiceSpan.innerHTML = playerChoice;
    compChoiceSpan.innerHTML = compChoice;
    results.innerHTML = winner;
}

function resetGame() {
    choicesSection.classList.remove("active");
    optionsButtons.forEach(button => button.classList.remove("active"));
    playerPoints = 0;
    compPoints = 0;
    setGame();
}

optionsButtons.forEach((button) => 
    button.addEventListener("click", playerSelect)
);
resetGameButton.addEventListener("click", resetGame);