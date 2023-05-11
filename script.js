'use strict';

// --------------------- My Workaround -----------------------

// const number = Math.trunc(Math.random() * (21 - 1) + 1);

// document.querySelector('.check').addEventListener('click', function () {
//   let guess = Number(document.querySelector('.guess').value);
//   // const number = Number(document.querySelector('.number').textContent);
//   const score = Number(document.querySelector('.score').textContent);
//   const highscore = Number(document.querySelector('.highscore').textContent);
//   // console.log(typeof guess, guess);

//   if (!guess) {
//     document.querySelector('.message').textContent = 'No Number!';
//   } else if (guess > number) {
//     document.querySelector('.message').textContent = 'Too high!';
//     document.querySelector('.score').textContent = score - 1;
//   } else if (guess < number) {
//     document.querySelector('.message').textContent = 'Too low!';
//     document.querySelector('.score').textContent = score - 1;
//   } else if (guess === number) {
//     document.querySelector('.message').textContent = 'You won!';
//     if (score > highscore) {
//       document.querySelector('.highscore').textContent = score;
//     }
//   }

// if (score === 15) {
//   document.querySelector('.message').textContent = 'You lost!';
//   console.log(score);
// }
// });

// ---------------------- With Course ------------------------

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// Mini functions

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};
const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};
const displayHighscore = function (highscore) {
  document.querySelector('.highscore').textContent = highscore;
};

// Check button handler

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    // document.querySelector('.message').textContent = 'No Number!';
    displayMessage('No Number!');
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      score--;
      displayScore(score);
    } else {
      displayMessage('You lost the game!');
      displayScore(0);
    }
    // } else if (guess > secretNumber) {
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = 'Too high!';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = 'You lost the game!';
    //     document.querySelector('.score').textContent = 0;
    //   }
    // } else if (guess < secretNumber) {
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = 'Too low!';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = 'You lost the game!';
    //     document.querySelector('.score').textContent = 0;
    //   }
  } else if (guess === secretNumber) {
    displayMessage('You won!');
    displayNumber(secretNumber);

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      displayHighscore(highscore);
    }
  }
});
