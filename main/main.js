'use strict';


// Get the canvas element and context
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Define a variable to store the score
let score = 0;

// Array to store targets
let targets = [];

let startTime;
let endTime;

// Function to create a new target at random position
function createTarget() {
  const target = {
    x: Math.random() * (canvas.width - 50), // Random x position (limiting width)
    y: Math.random() * (canvas.height - 50), // Random y position (limiting height)
    size: 30, // Target size
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
  if (targets.length < 6) {
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
    endTime = Date.now();

    ctx.fillText('Final Score: ' + score, 20, 80);
    const timeTaken = (endTime - startTime) / 1000;
    ctx.fillText('Time Taken: ' + timeTaken + ' seconds', 20, 120);
    return;
  }

  // Request the next animation frame
  requestAnimationFrame(updateGame);
}

// Event listener to handle mouse clicks on the canvas
canvas.addEventListener('click', shootTarget);

// Start the game loop
updateGame();
