'use strict';

// Get the canvas element and context
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Define variables to store the score, targets, and start time
let score = 0;
let targets = [];
let startTime;
let endTime;

// Declare the username variable in the global scope
let username;

// Function to create a new target at random position
function createTarget() {
  const target = {
    x: Math.random() * (canvas.width - 50),
    y: Math.random() * (canvas.height - 50),
    size: 30,
  };
  targets.push(target);
}

// Function to draw all targets on the canvas
function drawTargets() {
  for (const target of targets) {
    ctx.fillStyle = 'red';
    ctx.fillRect(target.x, target.y, target.size, target.size);
  }
}

// Function to handle shooting a target
function shootTarget(event) {
  const rect = canvas.getBoundingClientRect();
  const mouseX = event.clientX - rect.left;
  const mouseY = event.clientY - rect.top;

  for (let i = targets.length - 1; i >= 0; i--) {
    const target = targets[i];
    if (
      mouseX >= target.x &&
      mouseX <= target.x + target.size &&
      mouseY >= target.y &&
      mouseY <= target.y + target.size
    ) {
      // Target is hit, remove from the targets array
      targets.splice(i, 1);
      score++; // Increase the score
    }
  }
}

// Function to update the game state and create new targets
function updateGame() {
  if (targets.length < 3) {
    createTarget();
  }
  // Clear the entire canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw all targets on the canvas
  drawTargets();

  // Display the score on the canvas
  ctx.font = '20px Arial';
  ctx.fillStyle = 'black';
  ctx.fillText('Score: ' + score, 20, 40);

  if (!startTime) {
    startTime = Date.now();
  }

  if (Date.now() - startTime >= 30000) {
    // Game over, show final score and prompt for username
    endTime = Date.now();
    ctx.fillText('Final Score: ' + score, 20, 80);
    const timeTaken = (endTime - startTime) / 1000;
    ctx.fillText('Time Taken: ' + timeTaken + ' seconds', 20, 120);

    // Prompt for username and store score
    promptForUsername();
    return;
  }

  // Request the next animation frame
  requestAnimationFrame(updateGame);
}

// Event listener to handle mouse clicks on the canvas
canvas.addEventListener('click', shootTarget);

// Start the game loop
document.addEventListener('DOMContentLoaded', function () {
  updateGame(); // Call the function to start the game loop
});

// Function to prompt the user for their username and store the score
function promptForUsername() {
  username = prompt('Enter your username to save your score: ');
  if (username && username.trim() !== '') {
    // Store the score and username in local storage
    storeScores(username, score);
  } else {
    alert('Invalid username. Score will not be saved.');
  }

  // Redirect to the scoreboard page
  window.location.href = '/scoreboard/scoreboard.html';
}

// Function to store scores in local storage
function storeScores(username, score) {
  let scoresData = JSON.parse(localStorage.getItem('scoresData')) || [];
  scoresData.push({ username, score });
  scoresData.sort((a, b) => b.score - a.score); // Sort scores in descending order
  scoresData = scoresData.slice(0, 10); // Keep only the top 10 scores
  localStorage.setItem('scoresData', JSON.stringify(scoresData));
}


