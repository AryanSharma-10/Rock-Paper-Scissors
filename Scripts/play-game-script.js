let score = {
    wins: 0,
    losses: 0,
    ties: 0
}

function playGame(playerMove) {
    let computerMove;
    const num = Math.random();
    let result = '';

    if (num > 0.6) {
        computerMove = 'rock';
    }

    else if (0.3 < num && num <= 0.6) {
        computerMove = 'paper'
    }

    else
        computerMove = 'scissors'

    console.log(computerMove);

    if (playerMove === computerMove) {
        result = 'Tie!';
        score.ties++;
    }

    else if ((playerMove == 'rock' && computerMove == 'scissors') || (playerMove == 'paper' && computerMove == 'rock') || (playerMove == 'scissors' && computerMove == 'paper')) {
        result = 'You Win!'
        score.wins++;
    }

    else {
        result = 'You Lose!';
        score.losses++;
    }

    document.querySelector('.result').innerHTML = result;
    document.querySelector('.icon-result').innerHTML =
        `<div>
            <p class="image-text" >You</p>
            <img class="player-move" src="Images/${playerMove}-white.png">
        </div>

        <div>
            <p class="image-text" >Computer</p>
            <img class="computer-move" src="Images/${computerMove}-white.png">
        </div>`

    updateScoreBoard();
}

const rockButton = document.querySelector('.rock-button');
rockButton.onclick = function () {
    document
    playGame('rock');
}

const paperButton = document.querySelector('.paper-button');
paperButton.onclick = function () {
    playGame('paper');
}

const scissorsButton = document.querySelector('.scissors-button');
scissorsButton.onclick = function () {
    playGame('scissors');
}

const scoreButton = document.querySelector('.score-btn');
let flag = true;

scoreButton.onclick = function () {
    if (flag) {
        document.querySelector('.score-display').innerHTML =
            `<p class="scoreboard-text">Wins: ${score.wins}</p>
        <p class="scoreboard-text">Loses: ${score.losses}</p>
        <p class="scoreboard-text">Ties: ${score.ties}</p>
        `
        flag = false;
    }
    else {
        document.querySelector('.score-display').innerHTML = '';
        flag = true;
    }
}


function updateScoreBoard() {
    let scoreBoard = document.querySelector('.score-display');
    if (!flag) {
        scoreBoard.innerHTML = `<p class="scoreboard-text">Wins: ${score.wins}</p>
        <p class="scoreboard-text">Loses: ${score.losses}</p>
        <p class="scoreboard-text">Ties: ${score.ties}</p>
        `
        console.log(scoreBoard);
    }
}