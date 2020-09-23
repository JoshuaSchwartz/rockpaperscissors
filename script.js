let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)];
}

function playRound() {
    let playerSelection = prompt('Rock, paper, or scissors?', 'rock').toLowerCase();
    const computerSelection = computerPlay();
    if (playerSelection == computerSelection) {
        let result = `It's a tie! Your score is ${playerScore}. Computer's score is ${computerScore}.`
        return result;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors' || 
                playerSelection === 'paper' && computerSelection === 'rock' ||
                playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++;
        let result = `Player wins! ${playerSelection} beats ${computerSelection}. Your score is ${playerScore}. Computer's score is ${computerScore}.`
        return result;
    } else if (playerSelection === 'rock' && computerSelection === 'paper' ||
                playerSelection === 'paper' && computerSelection === 'scissors' ||
                playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore++;
        let result = `Player loses! ${computerSelection} beats ${playerSelection}. Your score is ${playerScore}. Computer's score is ${computerScore}.`
        return result;
    }
}

function announceWinner() {
    if (playerScore > computerScore) {
        alert(`PLAYER WINS! GOOD JOB :)`);
    } else if (computerScore > playerScore) {
        alert(`PLAYER LOSES! BETTER LUCK NEXT TIME :(`)
    } else if (playerScore == computerScore) {
        alert(`TIE! PLAY AGAIN?`);
    }
}

function game() {
    console.log(playRound());
    console.log(playRound());
    console.log(playRound());
    console.log(playRound());
    console.log(playRound());

    announceWinner();
}

game();

