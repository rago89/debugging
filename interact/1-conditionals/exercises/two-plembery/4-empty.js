"use strict";

// two player remembering game
// first player enter 3 phases to guess
// second player see the 3 phrases
// secong player have to guess in order
// if secong player fails Game over

// data first player
let playerOneFirstInput = null;
let playerOneSecondInput = null;
let playerOneThirdInput = null;
// data second player
let firstGuess = null;
let secondGuess = null;
let thirdGuess = null;
// score data
let points = 0;
// setting flag
let playerHasInputted = false;

const gameInstructions = ` Welcome to remembery game!
  
  Player 1:
    enter three phrases

  Player 2:
    see the three phrases in order
    then enter them back in order
    if you get one wrong - game over!

  ENTER NOTHING OR CANCELLING IS NOT AN OPTION!
`;

alert(gameInstructions);

alert("Player 2 go hide");

// setting player 1 input
while (!playerHasInputted) {
  playerOneFirstInput = prompt("Please enter first phrase to guess");
 if  (playerOneFirstInput === null || playerOneFirstInput === "") {
    alert('You have to enter al least one phrase'); 
 } else {
   playerHasInputted = true;
 }
}
console.log('printing flags value after user\'s first inputted ', playerHasInputted, typeof playerHasInputted)
// if user input something flag will be true
while (playerHasInputted) {
  playerOneSecondInput = prompt("Please enter second phrase to guess");
 if  (playerOneSecondInput === null || playerOneSecondInput === "") {
    alert('You have to enter al least one phrase'); 
 } else {
   playerHasInputted = false;
 }
}
console.log('printing flags value after user\'s second inputted ', playerHasInputted, typeof playerHasInputted)
// if user input something flag will be false
while (!playerHasInputted) {
  playerOneThirdInput = prompt("Please enter third phrase to guess");
 if  (playerOneThirdInput === null || playerOneThirdInput === "") {
    alert('You have to enter al least one phrase'); 
 } else {
   playerHasInputted = true;
 }
}
console.log('printing flags value after user\'s third inputted ', playerHasInputted, typeof playerHasInputted)
// Last status of the flag is true


// CALLING BACK PLAYER 2
alert("It's time to call player 2");
// PHRASES TO SHOW PLAYER 2
const phrasesToRemember = `Player 2, remember these:
  1. "${playerOneFirstInput}"
  2. "${playerOneSecondInput}"
  3. "${playerOneThirdInput}"
`;
// showing phrases to player 2
alert(phrasesToRemember);

// player 2 first iteraction
while (firstGuess === null || firstGuess === "") {
  firstGuess = prompt("Enter first phrase ");
}
// setting game's first condition
if (firstGuess === playerOneFirstInput) {
  points += 1;
  // player 2 second iteraction
  while (secondGuess === null || secondGuess === "") {
    secondGuess = prompt("Enter second phrase");
  }
  // setting game's second condition
  if (secondGuess === playerOneSecondInput) {
    points += 1;
    // player 2 third iteraction
    while (thirdGuess === null || thirdGuess === "") {
      thirdGuess = prompt("Enter third phrase");
    }
    // setting game's third condition
    if (thirdGuess === playerOneThirdInput) {
      points += 1;
    }
  }
}

alert('You\'re score is ' + points);
