
const choices = ["Rock", "Paper", "Scissors"];;

function getComputerChoice(){

    return choices[Math.floor((Math.random()*10)%3)].toLowerCase();
}

function playRound(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        console.log("Its a Draw");
        gamesDrawn++;
    }
    else if(playerSelection == "rock"){
        if(computerSelection == "paper"){
            console.log("You lose. Paper beats Rock.");
            losses++;
        }
        else{
            console.log("You win. Rock beats Scissors.");
            wins++;
        }
    }
    else if(playerSelection == "paper"){
        if(computerSelection == "scissors"){
            console.log("You lose. Scissors beats Paper.");
            losses++;
        }
        else{
            console.log("You win. Paper beats Rock.");
            wins++;
        }
    }
    else if(playerSelection == "scissors"){
        if(computerSelection == "rock"){
            console.log("You lose. Rock beats Scissors.");
            losses++;
        }
        else{
            console.log("You win. Scissors beats Paper.");
            wins++;
        }
    }
    else {
        console.log("Please put a valid input.")
    }


}

function game(){

    for(let i=0;i<gameTime+gamesDrawn ;i++){
        let playerSelection = prompt("Pick you Weapon");
        playRound(playerSelection, getComputerChoice().toLowerCase());
        if(wins == neededWins)
        {
            console.log("Congratulations you won " + wins + "-" + losses);
            gameEnd = 1;
            break;
        }
        else if(losses == neededWins){
            console.log("Shucks you lost " + losses + "-" + wins );
            gameEnd = 1;
            break;
        }
        else {
            console.log("The game goes on its now  " + wins + "-" + losses + " for you." );
        }
    }

}
let neededWins = 3;
let gamesDrawn = 0;
let gameSetting = prompt("Please set game end condition input 1 for total games input 2 for won games needed.")
let gameTime;
if(gameSetting-1){
    neededWins = +prompt("Set number of wins needed");
    gameTime = neededWins*2;
}
else{
    gameTime = +prompt("Set number of total games. Draws are excluded.");
    neededWins = undefined;
}
let losses = 0;
let wins = 0;
let gameEnd = 0;
game();






