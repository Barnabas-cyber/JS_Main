//JS rock, paper or scissors game

//score counting variables
let playerScore = 0, computerScore = 0;

//computer function
function computerPlay() {
    // Name list 
    const NAME_LIST = ["rock", "paper", "scissors"];

    //floor method for all possibilities
    let ind = Math.floor(Math.random() * 10) % 3;

    //return NAME_LIST
    return NAME_LIST[ind];
}

//player round function
function playerRound(playerSelection, computerSelection) {
    // if statements for all possible rounds
    let results = '';
    // Rock and Paper
    if (playerSelection.toUpperCase() == 'ROCK' && computerSelection == 'paper') {
        results = `You lose! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`
        computerScore++;
    }
    else if (playerSelection.toUpperCase() == 'PAPER' && computerSelection == 'rock') {
        results = `You win! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`
        playerScore++;
    }
    //Paper and scissors
    else if (playerSelection.toUpperCase() == 'PAPER' && computerSelection == 'scissors') {
        results = `You lose! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`
        computerScore++;
    }
    else if (playerSelection.toUpperCase() == 'SCISSORS' && computerSelection == 'paper') {
        results = `You win ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`
        playerScore++;
    }
    // Rock and scissors
    else if (playerSelection.toUpperCase() == 'SCISSORS' && computerSelection == 'rock') {
        results = `You lose! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`
        computerScore++;
    }
    else if (playerSelection.toUpperCase() == 'ROCK' && computerSelection == 'scissors') {
        results = `You win! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`
        playerScore++;
    } else {
        console.log("It's a tie!");
    }

    return results;
}

//game function
function game() {

    // for loop 
    for (let i = 0; i < 5; i++) {
        //prompt user 
        const playerSelection = prompt("Enter Rock, Paper or Scissors:");
        const computerSelection = computerPlay();

        //comsole log 
        console.log(playerRound(playerSelection, computerSelection));

    }
    //condition that selects winner
    if (playerScore > computerScore) {
        console.log(" You have won!");
    } /* else {
        console.log("Computer has won!");
    }*/
    else if (playerScore < computerScore) {
        console.log("The computer has won!");
    } else {
        console.log("It is a tie!");
    }

}
//calling the game function
game();