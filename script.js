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
function writeScore(win, loss){
    const para = document.createElement('p');
    para.textContent = "The game goes on it is now " + win + " - " +  loss;
    container.appendChild(para);
    console.log("The game goes on it is now " + win + " - " +  loss)
}


// function game(){

//     for(let i=0;i<gameTime+gamesDrawn ;i++){
//         let playerSelection = prompt("Pick your Weapon");
//         playRound(playerSelection, getComputerChoice().toLowerCase());
//         if(wins == neededWins)
//         {
//             console.log("Congratulations you won " + wins + "-" + losses);
//             gameEnd = 1;
//             break;
//         }
//         else if(losses == neededWins){
//             console.log("Shucks you lost " + losses + "-" + wins );
//             gameEnd = 1;
//             break;
//         }
//         else {
//             console.log("The game goes on its now  " + wins + "-" + losses + " for you." );
//         }
//     }

// }
const choices = ["Rock", "Paper", "Scissors"];


const body = document.querySelector('body');
const container = document.createElement('div');

body.appendChild(container);





let neededWins = 3;
let gamesDrawn = 0;
let introBox = document.createElement('p')
introBox.textContent = "Please set game end condition. Input 1 for total games input 2 for won games needed."
container.appendChild(introBox);
let inputBox = document.createElement('input');
container.appendChild(inputBox);
let gameSetting = +inputBox.textContent;
console.log(gameSetting);
let gameTime;
if(+gameSetting-1){
    introBox.textContent = "Set number of total games, draws excluded";
    gameTime = neededWins*2;
}
else{
    gameTime = +prompt("Set number of total games. Draws are excluded.");
    neededWins = undefined;
}
let losses = 0;
let wins = 0;
let gameEnd = 0;

const infoBox = document.createElement('p');
infoBox.textContent = "Game starts.";


choices.forEach(choice => {
    const choiceButton = document.createElement('button');
    choiceButton.textContent = choice;
    let playerChoice = choice.toLowerCase();
    console.log(choice);
    choiceButton.addEventListener('click', playRound(playerChoice,getComputerChoice));
    choiceButton.addEventListener('click',writeScore(wins,losses));
    container.appendChild(choiceButton);
});
container.appendChild(infoBox);





