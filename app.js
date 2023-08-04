'use strict';

// Get the canvas element and context
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
// Get a reference to the audio element
const backgroundAudio = document.getElementById('backgroundAudio');
//this is for the button on our main page, it will refresh page when the play again button is pressed.
const refreshButton = document.getElementById('playagain-button');
const playButton = document.getElementById('main-play-game');
const scoreBoardButton = document.getElementById('scoreboard-button');
const aboutUsButton = document.getElementById('about-us-button');

// Play the audio
backgroundAudio.play();

// Pause the audio
backgroundAudio.pause();

// Adjust the volume (0.0 to 1.0)
backgroundAudio.volume = 0.5; // Adjust as needed

// Define variables to store the score, targets, and start time
let score = 0;
let targets = [];
let particles = [];
let startTime;
let endTime;
const targetImages = [
  '16bit/monsters/beholder eye gif.gif',
  '16bit/monsters/floaty demon.png',
  '16bit/monsters/flying demon.png',
  '16bit/monsters/Flying_monster.gif',
  // '16bit/monsters/slime gif.gif',
];

// Declare the username variable in the global scope
let username;
// Function to create a new target at random position
function createTarget() {
  const target = {
    x: Math.random() * (canvas.width - 50),
    y: Math.random() * (canvas.height - 50),
    size: 100,
    image: new Image(),
  }; 
  const randomImageIndex = Math.floor(Math.random() * targetImages.length);
  target.image.src = targetImages[randomImageIndex];
  targets.push(target);
}

// Function to draw all targets on the canvas
function drawTargets() {
  for (const target of targets) {
    ctx.drawImage(target.image, target.x, target.y, target.size, target.size); 
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
      score++; 

      for (let j = 0; j < 20; j++) {
        createParticle(target.x + target.size / 2, target.y + target.size / 2);
      }
      break;
    }
  }
}

function createParticle(x, y) {
  const particle = {
    x,
    y,
    size: Math.random() * 3 + 5,
    color: 'rgba(255, 0, 0, 0.7)',
    vx: (Math.random() - 0.5) * 4,
    vy: 3 + Math.random() * 2,
    lifespan: 60,
  };
  particles.push(particle);
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
  updateParticles();
  drawParticles();

  // Display the score on the canvas
  ctx.font = '20px Arial';
  ctx.fillStyle = 'black';
  ctx.fillText('Score: ' + score, 20, 40);
  // Play the background audio
  backgroundAudio.play();
  if (!startTime) {
    startTime = Date.now();
  }

  if (Date.now() - startTime >= 35000) {
    // Game over, show final score and prompt for username
    endTime = Date.now();
    backgroundAudio.pause(); // Pause the audio
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

// Update Particle Positions and Lifespans
function updateParticles() {
  for (let i = particles.length - 1; i >= 0; i--) {
    const particle = particles[i];
    particle.x += particle.vx;
    particle.y += particle.vy;
    particle.lifespan--;

    if (particle.lifespan <= 0) {
      particles.splice(i, 1);
    }
  }
}

// Draw Particles on Canvas
function drawParticles() {
  for (const particle of particles) {
    ctx.beginPath();
    ctx.fillStyle = particle.color;
    ctx.arc(particle.x, particle.y, particle.size / 2, 0, Math.PI * 2);
    ctx.fill();
  }
}


// Event listener to handle mouse clicks on the canvas
canvas.addEventListener('click', shootTarget);

// Start the game loop
// document.addEventListener('DOMContentLoaded', function () {
//   updateGame(); // Call the function to start the game loop
// });

playButton.addEventListener('click', function () {
  updateGame();
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
  // window.location.href = '/scoreboard/scoreboard.html';     David removed ;-;
}

// Function to store scores in local storage
function storeScores(username, score) {
  let scoresData = JSON.parse(localStorage.getItem('scoresData')) || [];
  scoresData.push({ username, score });
  scoresData.sort((a, b) => b.score - a.score); // Sort scores in descending order
  scoresData = scoresData.slice(0, 10); // Keep only the top 10 scores
  localStorage.setItem('scoresData', JSON.stringify(scoresData));
}

refreshButton.addEventListener('click', function() {
  location.reload();
});

scoreBoardButton.addEventListener('click', function() {
  window.location.href = 'scoreboard/scoreboard.html';
});

aboutUsButton.addEventListener('click', function() {
  window.location.href = 'aboutus/aboutus.html';
});
