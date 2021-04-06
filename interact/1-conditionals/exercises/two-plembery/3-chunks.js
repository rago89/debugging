"use strict";

/* Two-Player Remembery

  fill in the blanks to complete the logic

*/

const instructions = `Two-Player Remembery

  Player 1:
    enter three phrases

  Player 2:
    see the three phrases in order
    then enter them back in order
    if you get one wrong - game over!
`;
alert(instructions);

alert("Player 2: go hide");

const phrase1 = prompt("Player 1, enter your first phrase:");
const phrase2 = prompt("Player 1, enter your second phrase:");
const phrase3 = prompt("Player 1, enter your third phrase:");

alert("Player 2, get back here");

const phrasesToRemember = `Player 2, remember these:
  1. "${phrase1}"
  2. "${phrase2}"
  3. "${phrase3}"
`;
alert(phrasesToRemember);

/* -- BEGIN: gather player 2's guesses) -- */
let firstGuess = prompt("plyer 2, please enter the first phrase to guess");
console.log("Player 2 first guess: ", firstGuess, typeof firstGuess);

let points = 0;

if (firstGuess === phrase1) {
  points += 1;

  let secondGuess = prompt("plyer 2, please enter the second phrase to guess");
  console.log("Player 2 second guess: ", secondGuess, typeof secondGuess);
  if (secondGuess === phrase2) {
    points += 1;

    let thirdGuess = prompt("plyer 2, please enter the third phrase to guess");
    console.log("Player 2 third guess: ", thirdGuess, typeof thirdGuess);
    if (thirdGuess === phrase3) {
      points += 1;
    }
  }
}
/* -- END: gather player 2's guesses -- */

alert('Great you have scored ' + points + ' ' + 'points');
