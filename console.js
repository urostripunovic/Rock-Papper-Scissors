let playerScore = 0;
let computerScore = 0;
let rounds = 0;


function computerPlay() {
    const arr = ['rock', 'paper', 'scissor'];
    return arr[Math.floor(Math.random()*arr.length)];
}

function playRound(playerSelection, computerSelection) {
    console.log('Round: ' + rounds);

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    console.log('Your choice: ' + playerSelection + ', Computer choice: ' + computerSelection);
    
    if (playerSelection.includes('roc')) {
        if (computerSelection === 'rock') {
            return 'It is a tie';
        } else if (computerSelection === 'paper') {
            increaseScore(false);
            printScore();
            return 'Paper beats rock, you lose!';
        } else if (computerSelection === 'scissor') {
            increaseScore(true);
            printScore();
            return 'Rock beats scissor, you win!';
        }
    } else if (playerSelection.includes('sci')) {
        if (computerSelection === 'scissor') {
            printScore();
            return 'It is a tie';
        } else if (computerSelection === 'paper') {
            increaseScore(true);
            printScore();
            return 'Scissor beats paper, you win!'
        } else if (computerSelection === 'rock') {
            increaseScore(false);
            printScore();
            return 'Rock beats scissor, you lose!';
        }
    } else if (playerSelection.includes('pap')) {
        if (computerSelection === 'paper') {
            printScore();
            return 'It is a tie';
        } else if (computerSelection === 'scissor') {
            increaseScore(false);
            printScore();
            return 'Scissor beats paper, you lose!'
        } else if (computerSelection === 'rock') {
            increaseScore(true);
            printScore();
            return 'Paper beats rock, you win!';
        }
    }
}

function printScore() {
    console.log("player: " + playerScore + " computer: " + computerScore);
}

function game() {
    console.clear();
    alert('You play against the computer for a best of 5')
    while (playerScore < 3 && computerScore < 3) {
        rounds++;
        let playerSelection = prompt('Type rock, paper or scissor');
        if (playerSelection !== null) {
            //TODO: Så spelet inte forsätter även om vi skriver fel
            playerSelection = playerSelection.toLowerCase();
            while (!playerSelection.includes('roc') && !playerSelection.includes('pap') && !playerSelection.includes('sci')) {
                playerSelection = prompt("Type rock, paper, or scissors\nTry and spell  the first three letters correctly");
                if (playerSelection === null) return alert("Thanks for playing!");
            }
            let computerSelection = computerPlay();
            console.log(playRound(playerSelection, computerSelection));
        } else {
            return alert('Thanks for playing!');
        }
    }
    winnerWinnerChickenDinner();
    resetGame();
}

function increaseScore(playerWon) {
    playerWon ? playerScore++ : computerScore++;
}

function winnerWinnerChickenDinner() {
    if (playerScore > computerScore) {
        alert('You Won');
    } else if (playerScore < computerScore) {
        alert('Computer Won');
    } else {
        alert('It is a draw');
    }
}

function resetGame() {
    rounds = 0;
    playerScore = 0;
    computerScore = 0;
}

document.getElementById('btn').addEventListener('click', () => {
    game();
});