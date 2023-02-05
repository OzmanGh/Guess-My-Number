/*
document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 12;

document.querySelector('.guess').value = 14;
 */

// usually when we get output from console it's string...

function randomNumber() {
  return Math.trunc(Math.random() * 20 + 1);
}

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const Score = function (score) {
  document.querySelector('.score').textContent = score;
};

let secretNumber = randomNumber();
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  let guessedNumber = Number(document.querySelector('.guess').value);

  if (!guessedNumber) {
    displayMessage('🚫no number!!');
  } else if (guessedNumber === secretNumber) {
    displayMessage('Correct Guess 🎉🎉');
    document.getElementsByTagName('body')[0].style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guessedNumber !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guessedNumber > secretNumber ? 'Too High 📈' : 'Too Low 📉'
      );
      score--;
      Score(score);
    } else {
      displayMessage('Game Over 🔥');
      Score(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = randomNumber();
  score = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  Score(score);
  document.querySelector('.guess').value = '';
});
