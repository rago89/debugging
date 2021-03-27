'use strict';

let userInput = '';
let isTooShort = true;
while (isTooShort) {
  userInput = prompt('enter anything longer than 5 characters');
  console.log('userInput:', typeof userInput, userInput);

  // continue if the user did not input anything
<<<<<<< HEAD:interact/3-input-output-loops/exercises/3-long-string.js
  if (!userInput) {
    alert('Cancelling is not an option');
    continue;
  }
=======
  ___;
>>>>>>> upstream/master:interact/2-input-output-loops/exercises/3-long-string/1-blanks.js

  // continue if the input is too short (5 characters or less)
  if (userInput.length <= 5) {
    alert('too short');
  }
  // toggle the flag variable, telling the loop to finish
<<<<<<< HEAD:interact/3-input-output-loops/exercises/3-long-string.js
  isTooShort = false;

=======
  isTooShort = _;
>>>>>>> upstream/master:interact/2-input-output-loops/exercises/3-long-string/1-blanks.js
}

const finalMessage = '"' + userInput + '" is ' + userInput.length + ' characters long';
alert(finalMessage);
