'use strict';

/* look out for:

  - math operators
  - break vs. continue
  - off-by-one string index

*/

let validInput = '';

let index = 0;
while (true) {
  ;

  const userInput = prompt(
    `enter anything with "e" or "E" as the 5th letter`
  );

  // make sure the user entered something
  if (userInput === null || userInput === '') {
    alert('that is nothing');
    continue;
  }

  // make sure it is long enough to have an "e" in the 5th letter
  if (userInput.length < 5) {
    alert('too short');
    continue;
  }

  if (userInput[4] === 'e' || userInput[4] === 'E') {
    validInput = userInput;
    break;
  }

  alert('input has no "e" or "E" as the 5th character');
}

alert('done: "' + validInput + '"');
