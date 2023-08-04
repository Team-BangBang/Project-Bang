'strict';


const scoreBoardButton = document.getElementById('score-board-button');
const playAgainButton = document.getElementById('ret-urn-button');


playAgainButton.addEventListener('click', function() {
  window.location.href = '../index.html';
});

scoreBoardButton.addEventListener('click', function() {
  window.location.href = '../scoreboard/scoreboard.html';
});

