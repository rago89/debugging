'use strict';

let validInput = '';
let isNotValid = false;
while (!isNotValid) {
  const userInput = prompt('enter anything with "e" or "E" as the 5th letter');

  /* -- BEGIN: validate input -- */

   isNotValid = !userInput ?  alert('that is nothing') : (userInput.length < 5) ? alert('too short') : (userInput[4] === 'e' || userInput[4] === 'E') ?  validInput = userInput : alert('input has no "e" or "E" as the 5th character');

  /* -- END: validate input -- */
}

alert('done: "' + validInput + '"');
