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
    }

    return results;
}

//game function
function game() {

    // for loop 
    for (let i = 0; i < 5; i++) {
        let flag = true;
        while (flag) {
            //prompt for input
            const playerSelection = prompt("Enter Rock, Paper or Scissors:");
            //computer output
            const computerSelection = computerPlay();
            if (!playerRound(playerSelection, computerSelection)) {
                //prompt user for coreect input values           
                console.log("Please enter a valid input:");
            } else {
                //console log 
                console.log(playerRound(playerSelection, computerSelection));
                flag = false;
            }
        }
    }
    //condition that selects winner
    if (playerScore > computerScore) {
        console.log(" You have won!");
    }
    else if (playerScore < computerScore) {
        console.log("The computer has won!");
    } else {
        console.log("No winner or loser! Tie!");
    }

}
//calling the game function
game();