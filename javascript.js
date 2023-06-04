function getComputerChoice(){
    let items = ["rock","paper","scissors"];
    let choice = items[Math.floor(Math.random()*items.length)];
    return choice;
}

function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection)
        console.log("It's a tie!");
    else if((playerSelection == "rock" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "scissors") || (playerSelection == "scissors" && computerSelection == "rock")){
        console.log(`You lose! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}!`);
        return 0;
    }
    else if((playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "paper") || (playerSelection == "rock" && computerSelection == "scissors")){
        console.log(`You win! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}!`);
        return 1;
    }
    else{
        console.log("Invalid choice!");
    }
}

function game(){
    let player=0;
    let computer=0;
    for(let i=0;i<5;i++){
        let ps = prompt("Enter your choice").toLowerCase();
        let cs = getComputerChoice();
        console.log(`Player chose: ${ps}`);
        console.log(`Computer chose: ${cs}`);
        let rv = playRound(ps,cs);
        if(rv==0)
            computer++;
        else if(rv==1)
            player++;
        console.log(`Points\nPlayer: ${player} | Computer: ${computer}`)
    }
    if(player>computer)
        console.log("You WIN!!");
    else if(computer>player)
        console.log("You LOSE!!");
    else
        console.log("It's a TIE!!");
}

game();