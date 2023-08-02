// app.js

// Function to start the game with the provided username
function startGame(username) {
  // Save the username to local storage
  localStorage.setItem('username', username);

  // Redirect to the main.html page
  window.location.href = 'main/main.html';
}

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
  // Get the form element
  const userInfoForm = document.getElementById('userInfo');

  // Add an event listener to the form submission
  userInfoForm.addEventListener('submit', function (event) {
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

