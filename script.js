
const choices = ["Rock", "Paper", "Scissors"];;

function getComputerChoice(){

    return choices[Math.floor((Math.random()*10)%3)].toLowerCase();
}

function playRound(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        console.log("Its a Draw");
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

    for(let i=0;i<10 || gameWon || gameLost ;i++){
        let playerSelection = prompt("Pick you Weapon");
        playRound(playerSelection, getComputerChoice().toLowerCase());
        if(wins==3)
        {
            console.log("Congratulations you won " + wins + "-" + losses);
            let gameWon = 1;
            break;
        }
        else if(losses==3){
            console.log("Shucks you lost " + losses + "-" + wins );
            let gameLost = 1;
            break;
        }
        else {
            console.log("The game goes on its now  " + wins + "-" + losses + "for you." );
        }
    }

}
let losses = 0;
let wins = 0;
game();






