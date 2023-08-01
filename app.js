// Function to start the game with the provided username
function startGame(username) {
  alert('Game is starting for user: ' + username);
}

// Function to store the user's scores in local storage
function storeScores(username, score) {
  // Get existing data from local storage or initialize an empty array
  let scoresData = JSON.parse(localStorage.getItem('scoresData')) || [];

  // Add the new score to the array
  scoresData.push({ username, score });

  // Save the updated data back to local storage
  localStorage.setItem('scoresData', JSON.stringify(scoresData));
}

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
  // Add an event listener to the form submission
  document.getElementById('userInfo').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior
    const username = document.getElementById('username').value;
    if (username.trim() !== '') {
    // Did the user enter a valid username?
      if (confirm('Are you ready to start the game, ' + username + '?')) {
        // Call the function to start the game with the username as an argument
        startGame(username);
      } else {
        // User didn't want to play
        alert('Maybe next time, ' + username + '!');
      }
    } else {
    // User did not enter a valid username
      alert('Please enter a valid username!');
    }
  });
});
