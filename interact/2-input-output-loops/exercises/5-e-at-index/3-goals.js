'use strict';

let validInput = '';

let index = 0;
let isValid = false;
while (!isValid) {
  index = index + 1;

  const userInput = prompt(
    `enter anything with "e" or "E" as the ${index}th letter`
  );

  /* -- BEGIN: validate input -- */
  if (!userInput) {
    alert('Enter something')
  } else if (userInput.length < 5) {
    alert('too short');
  } else if (userInput[4] === 'e' || userInput[4] === 'E') {
    validInput = userInput;
    isValid =true;
  } else {
    alert(`input has no "e" or "E" as the ${index}th character`);
  }

  


  /* -- END: validate input -- */
}

alert('done: "' + validInput + '"');
