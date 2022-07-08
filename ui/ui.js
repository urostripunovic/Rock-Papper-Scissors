let playerScore = 0;
let computerScore = 0;
let rounds = 0;
let gameOver = false;

function computerPlay() {
    const arr = ['rock', 'paper', 'scissor'];
    return arr[Math.floor(Math.random()*arr.length)];
}

const buttons = document.getElementsByClassName('icons')[0].getElementsByClassName('icon');

for(let i = 0; i < buttons.length; i++) {
    let button = buttons[i];
    button.addEventListener('click', (e) => {
        //console.log(e.target.id)
        if (gameOver) return; //So that the buttons don't respond after
        playRound(e.target.id, computerPlay());
    });
}

function playRound(playerSelection, computerSelection) {
    console.log('You picked: ' + playerSelection,'Computer picked: ' + computerSelection);
    document.querySelector('#result').style.display = 'block';
    if (playerSelection === 'rock') {
        if (computerSelection === 'rock') {
            document.querySelector('#result').innerHTML = 'It is a tie';
        } else if (computerSelection === 'paper') {
            increaseScore(false);
            document.querySelector('#result').innerHTML = 'Paper beats rock, you lose!';
        } else if (computerSelection === 'scissor') {
            increaseScore(true);
            document.querySelector('#result').innerHTML = 'Rock beats scissor, you win!';
        }
    } else if (playerSelection === 'scissor') {
        if (computerSelection === 'scissor') {
            document.querySelector('#result').innerHTML = 'It is a tie';
        } else if (computerSelection === 'paper') {
            increaseScore(true);
            document.querySelector('#result').innerHTML = 'Scissor beats paper, you win!';
            return 'Scissor beats paper, you win!'
        } else if (computerSelection === 'rock') {
            increaseScore(false);
            document.querySelector('#result').innerHTML = 'Rock beats scissor, you lose!';
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'paper') {
            document.querySelector('#result').innerHTML = 'It is a tie';
        } else if (computerSelection === 'scissor') {
            increaseScore(false);
            document.querySelector('#result').innerHTML = 'Scissor beats paper, you lose!';
        } else if (computerSelection === 'rock') {
            increaseScore(true);
            document.querySelector('#result').innerHTML = 'Paper beats rock, you win!';
        }
    }
    winnerWinnerChickenDinner();
}

function animationChange() {

}

//Registrera knapp trycken här
function winnerWinnerChickenDinner() {
    if (playerScore === 3 && playerScore > computerScore) {
        gameOver = true;
        console.log('You won the game');
        document.querySelector('#result').innerHTML = 'You won the game</br></br>Refresh the page to start over';
    } else if (computerScore === 3 && playerScore < computerScore) {
        gameOver = false;
        console.log('Computer won the game');
        document.querySelector('#result').innerHTML = 'Computer won the game</br></br>Refresh the page to start over';
    }
}

//Update inner html when the score is updated
function increaseScore(playerWon) {
    playerWon ? playerScore++ : computerScore++;
    document.querySelector('#user-score').innerHTML = playerScore;
    document.querySelector('#computer-score').innerHTML = computerScore;
}