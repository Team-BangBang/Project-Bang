# Software Requirements

## Vision

What is the vision of this product?

- The vision of this product is to provide users with a fun and engaging platform to practice and improve their mouse aiming skills. By presenting them with randomly generated objects to click on, the product aims to create an addictive and challenging experience that encourages users to refine their precision and speed. Through the accumulation of points, users can track their progress and compete with others, fostering a sense of achievement and healthy competition. The ultimate goal is to offer an entertaining and rewarding way for users to enhance their mouse dexterity and have a great time while doing so.

What pain point does this project solve?

- This project addresses the pain point of individuals seeking to enhance their mouse aiming skills in a fun and interactive manner. Many people, especially gamers or those who work extensively with computers, often rely on precise mouse control. However, finding a dedicated and engaging platform solely focused on mouse aiming practice can be challenging. This project fills that gap by offering a convenient and accessible solution where users can sharpen their skills in a gamified environment. Additionally, it provides a sense of accomplishment and healthy competition, which further motivates users to continue improving their mouse dexterity.

Why should we care about your product?

- You should care about our product because it provides a unique and entertaining way to address a common need: improving mouse aiming skills. Whether you're a gamer looking to gain a competitive edge, a professional working extensively with computers, or simply someone who enjoys interactive challenges, our product offers something for everyone. By using our platform, you can elevate your mouse dexterity and precision in a fun and addictive environment. The ability to track your progress and compete with others adds an extra layer of excitement, fostering continuous improvement. Investing in our product means investing in your personal growth and enjoyment, making it a valuable addition to your digital experience.

## Scope (In/Out)

IN - What will your product do - describe the individual features.

1. Randomly Generated Targets: The interactive site will present users with a variety of randomly generated objects as targets for mouse aiming practice. These targets will appear at different locations and sizes, offering a dynamic and challenging experience.

2. Point Accumulation System: The product will track and display points earned by users based on their successful clicks on the targets. As users hit more targets accurately and swiftly, their points will accumulate, motivating them to improve their performance continuously.

3. Time-Based Challenges: The platform will offer time-based challenges to test users' speed and accuracy. Users can participate in timed sessions to see how many targets they can click on within a specified period, adding an element of urgency and excitement to their practice.

4. Leaderboard and Social Sharing: The product will feature a leaderboard where users can see their ranking based on accumulated points or completed challenges. Users will have the option to share their achievements and scores on social media, inviting friendly competition among friends and a sense of community.

5. Customization Options: To cater to users' preferences, the site will offer customization options, allowing users to adjust the difficulty level, choose different target themes, or select specific aiming exercises that focus on particular skills or movements.

These features collectively create an engaging and immersive platform for users to practice and enhance their mouse aiming abilities while fostering healthy competition and self-improvement.

OUT - What will your product not do.

My product will not include the following features:

1. Multiplayer Mode: The development will not focus on implementing a real-time multiplayer mode where users can compete directly against each other. While healthy competition is encouraged through the leaderboard, the product will not support simultaneous gameplay between multiple users.

2. In-Depth Tutorial or Training Courses: While the product will offer a user-friendly interface, it will not provide in-depth tutorials or extensive training courses on mouse aiming techniques. The aim is to create a straightforward and accessible platform for practice rather than a comprehensive training program.

## Minimum Viable Product

What will your MVP functionality be?

Randomly Generated Targets: The MVP will generate a basic set of randomly placed and sized objects on the screen, acting as targets for users to click on.

Point Accumulation System: The product will have a simple points system to track and display the user's score based on successful clicks on the targets.

Time-Based Challenges: The MVP will offer basic time-based challenges, allowing users to participate in timed sessions and attempt to click on as many targets as possible within a given time limit.

Leaderboard: The product will feature a basic leaderboard to display the top scores achieved by users, fostering a sense of competition and encouraging users to improve their performance.

User Interface: The MVP will have a clean and intuitive user interface, providing users with easy navigation and a seamless experience throughout the mouse aiming practice.

What are your stretch goals?

- Some stretch goals are:

Target variety - Introduce a wider range of target types, such as moving targets, static targets with different shapes, and challenging patterns, to diversify the aiming exercises and add more complexity to the practice.

Power-Ups and Obstacles -  Implement power-ups that grant temporary advantages, like slowing down time or increasing target size, as well as obstacles that users need to avoid clicking on to make the practice more engaging and strategic.

In-game Rewards and Obstacles - Introduce a reward system where users can earn in-game currency or unlock new features, skins, or challenges by reaching specific milestones or achieving high scores.

## Functional Requirements

List the functionality of your product.

1. User Registration and Authentication - users can create new accounts by providing information like username, email and password.

2. Mouse Aiming Practice - Users can access the e main mouse aiming practice area, where randomly generated targets are displayed on the screen. Users can alsp click on targets to accumulate points based on their accuracy and speed.

3. Time-Based Challenges - Users can opt for time-based challenges, where they attempt to click on as many targets as possible within a set time limit.
The system tracks the number of successful clicks and calculates the user's score.

4. Leaderboard and Competition - Users can view the leaderboard to see their own ranking and compare their scores with other users.
The leaderboard displays the top scores achieved by users in different challenges.

### Data Flow

User Registration and Authentication:

When a new user visits the app, they can click on the "Sign Up" button and provide their registration details.
The app sends the user's registration data to the server for validation and account creation.
Upon successful registration, the user is automatically logged in.

Mouse Aiming Practice:

Users access the main practice area by clicking on the "Start Practice" button.
The app generates randomly placed and sized targets on the screen for the user to click on.
When the user clicks on a target, the app calculates the accuracy of the click and updates the user's score accordingly.

Time-Based Challenges:

From the practice area, users can opt for a time-based challenge by clicking on the "Challenge Mode" button.
The app starts a timer and generates targets for the user to click on within the specified time limit.
As the user clicks on targets, the app tracks their performance and updates the score in real-time.
Leaderboard and Competition:

After completing a practice session or challenge, the app automatically updates the user's score on the leaderboard.
The app fetches the top scores achieved by users from the server and displays them on the leaderboard for comparison.
