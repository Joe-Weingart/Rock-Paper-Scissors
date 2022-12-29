// The computer will randomly select rock, paper or scissors
function getComputerChoice(){
    let x = Math.floor(Math.random()*3);
    switch(x){
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
        default:
            return "rock";
    }
};

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const playerScore = document.querySelector('.playerScore');
const computerScore = document.querySelector('.computerScore');

let compScore = 0;
let playScore = 0;

playerScore.innerHTML = "Player score: " + playScore;
computerScore.innerHTML = "Computer score: " + compScore;


rock.addEventListener('click', () => {playRPS("rock", getComputerChoice())});
paper.addEventListener('click', () => {playRPS("paper", getComputerChoice())});
scissors.addEventListener('click', () => {playRPS("scissors", getComputerChoice())});


// This determines if the player has won, tied or lost a round
function playRPS(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection==="rock"){
        if(computerSelection==="rock") {
            document.querySelector('.results').textContent = "Tie";
        }
        if(computerSelection==="paper"){
            document.querySelector('.results').textContent = "Computer plays paper, you lose";
            compScore++;
        }
        if(computerSelection==="scissors"){
            document.querySelector('.results').textContent = "Computer plays scissors, you win";
            playScore++
        }
    };
    if(playerSelection==="paper"){
        if(computerSelection==="rock") {
            document.querySelector('.results').textContent = "Computer plays rock, you win";
        }
        if(computerSelection==="paper"){
            document.querySelector('.results').textContent = "Tie";
        }
        if(computerSelection==="scissors"){
            document.querySelector('.results').textContent = "Computer plays scissors, you lose";
        }
    };
    if(playerSelection==="scissors"){
        if(computerSelection==="rock") {
            document.querySelector('.results').textContent = "Computer plays rock, you lose";
        }
        if(computerSelection==="paper"){
            document.querySelector('.results').textContent = "Computer plays paper, you win";
        }
        if(computerSelection==="scissors"){
            document.querySelector('.results').textContent = "Tie";
        }
    };
    playerScore.innerHTML = "Player score: " + playScore;
    computerScore.innerHTML = "Computer score: " + compScore;

};


// A game of five rock paper scissors matches
/*
function game(){
    for(i=0; i<5; i++){
        userPick = prompt("Rock, paper, or scissors?");
        computerPick = getComputerChoice();
        console.log(playRPS(userPick, computerPick));

    }
}*/