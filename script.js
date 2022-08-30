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

    if(playerSelection.toUpperCase() == 'ROCK' && computerPlay == 'paper'){

    }
    else if(playerSelection.toUpperCase() == 'PAPER' && computerPlay == 'rock'){

    }

    if(playerSelection.toUpperCase() == 'SCISSORS' && computerPlay == 'paper'){

    }
    else if(playerSelection.toUpperCase() == 'PAPER' && computerPlay == 'scissors'){

    }    

    if(playerSelection.toUpperCase() == 'PAPER' && computerPlay == '')
    //return results
    return results;
}

//game function
function game() {

}