// Function to display the scoreboard on the scoreboard page
function displayScoreboard() {
  // Read scores from local storage
  const scoresData = JSON.parse(localStorage.getItem('scoresData')) || [];

  // Get the scoreboard table element from the DOM
  const scoreboardTable = document.getElementById('scoreboard');

  // Iterate through the top 10 scores and display them in the table
  for (let i = 0; i < Math.min(scoresData.length, 10); i++) {
    const rank = i + 1;
    const { username, score } = scoresData[i];
    scoreboardTable.insertAdjacentHTML(
      'beforeend',
      `
        <tr>
          <td>${rank}</td>
          <td>${username}</td>
          <td>${score}</td>
        </tr>
        `
    );
  }
}

// Call the displayScoreboard function when the scoreboard page loads
document.addEventListener('DOMContentLoaded', displayScoreboard);

