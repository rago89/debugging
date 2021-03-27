'use strict';

let validInput = '';
while (true) {
  const userInput = prompt('enter anything with "e" or "E" as the 5th letter');
  console.log('userInput:', typeof userInput, userInput);

  // make sure the user entered something
<<<<<<< HEAD:interact/3-input-output-loops/exercises/5-e-at-5.js
  if (!userInput) {
    alert('Cancelling is not an option');
    continue;
  }

  // make sure it is long enough to have an "e" in the 5th letter
  if (userInput < 5) {
    alert('Too short')
  }
=======
  ___;

  // make sure it is long enough to have an "e" in the 5th letter
  ___;
>>>>>>> upstream/master:interact/2-input-output-loops/exercises/4-e-at-5/1-blanks.js

  // check if the 5th character is an "e" or "E"
  if (userInput[4] === 'e' || userInput[4] === 'E') {
    validInput = userInput;
    break;
  }

  alert('input has no "e" or "E" as the 5th character');
}

alert('done: "' + validInput + '"');
