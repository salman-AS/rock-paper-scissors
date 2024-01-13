let player = 0;
let computer = 0;
let winner;


const result = document.querySelector(".result");
const playerScore = document.querySelector("#player");
const computerScore = document.querySelector("#computer");
const final = document.querySelector(".final");
const btns = document.querySelectorAll(".button");
btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        let playerChoice = btn.id;
        let computerChoice = getComputerChoice();
        console.log(playerChoice);
        winner = playRound(playerChoice, computerChoice);
        playGame();
    });
})

function getComputerChoice() {
    let items = ["rock", "paper", "scissors"];
    let choice = items[Math.floor(Math.random() * items.length)];
    return choice;
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        result.textContent = "It's a tie!!!";
        console.log("It's a tie!");
    }
    else if ((playerSelection == "rock" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "scissors") || (playerSelection == "scissors" && computerSelection == "rock")) {
        result.textContent = `You lose! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}!`;
        console.log(`You lose! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}!`);
        return 0;
    }
    else if ((playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "paper") || (playerSelection == "rock" && computerSelection == "scissors")) {
        result.textContent = `You win! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}!`;
        console.log(`You win! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}!`);
        return 1;
    }
    else {
        console.log("Invalid choice!");
        return 2;
    }
}



function playGame() {
    final.textContent = "";
    if (winner == 0)
        computer++;
    else if (winner == 1)
        player++;
    playerScore.textContent = `${player}`;
    computerScore.textContent = `${computer}`;
    console.log(`Points\nPlayer: ${player} | Computer: ${computer}`);
    if (player == 5){
        player = 0;
        computer = 0;
        winner = 0;
        final.textContent = "You WIN!!"
        console.log("You WIN!!");
    }
    else if (computer == 5){
        player = 0;
        computer = 0;
        winner = 0;
        final.textContent = "You LOSE!!"
        console.log("You LOSE!!");
    }
}