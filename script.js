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

}

//game function
function game() {

}