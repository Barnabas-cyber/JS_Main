//JS rock, paper or scissors game

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
    }
    else if (playerSelection.toUpperCase() == 'PAPER' && computerSelection == 'rock') {
        results = `You win! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`
    }
    //Scissors and paper
    if (playerSelection.toUpperCase() == 'PAPER' && computerSelection == 'scissors') {
        results = `You lose! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`
    }
    else if (playerSelection.toUpperCase() == 'SCISSORS' && computerSelection == 'paper') {
        results = `You win ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`
    }
    // Rock and scissors
    if (playerSelection.toUpperCase() == 'SCISSORS' && computerSelection == 'rock') {
        results = `You lose! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`
    }
    else if (playerSelection.toUpperCase() == 'ROCK' && computerSelection == 'scissors') {
        results = `You win! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`
    }

    return results;
}

//game function
function game() {

    // for loop 
    for (let i = 0; i < 5; i++) {
        //prompt user 
        const playerSelection = prompt("");
        const computerSelection = computerPlay();

        //comsole log 
        console.log(playerRound(playerSelection,computerSelection));

    }

}