let score = 0;
let highScore = 0;
const leaderboard = [];

function playGame(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result = '';

    if (playerChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = 'You win!';
        score++;
    } else {
        result = 'You lose!';
        if (score > highScore) {
            highScore = score;
            updateLeaderboard(score);
        }
        score = 0;
    }

    document.getElementById('result').innerText = `You chose ${playerChoice}. Computer chose ${computerChoice}. ${result}`;
    document.getElementById('score').innerText = score;
    document.getElementById('highScore').innerText = highScore;
    document.getElementById('retryButton').style.display = 'block';
    disableGameButtons();
}

function disableGameButtons() {
    const buttons = document.querySelectorAll('.buttons button');
    buttons.forEach(button => {
        button.disabled = true;
    });
}

function enableGameButtons() {
    const buttons = document.querySelectorAll('.buttons button');
    buttons.forEach(button => {
        button.disabled = false;
    });
}

function retryGame() {
    document.getElementById('result').innerText = '';
    document.getElementById('retryButton').style.display = 'none';
    enableGameButtons();
}

function updateLeaderboard(score) {
    leaderboard.push(score);
    leaderboard.sort((a, b) => b - a);
    displayLeaderboard();
}

function displayLeaderboard() {
    const leaderboardElement = document.getElementById('leaderboard');
    leaderboardElement.innerHTML = '';
    leaderboard.slice(0, 5).forEach((score, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `#${index + 1}: ${score}`;
        leaderboardElement.appendChild(listItem);
    });
}
