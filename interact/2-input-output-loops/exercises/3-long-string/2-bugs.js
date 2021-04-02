'use strict';

let userInput = '';
let isLongEnough = false;
// was missing the not operator
while (!isLongEnough) {
  userInput = prompt('enter anything longer than 5 characters');

  if (userInput === null || userInput === '') {
    alert('that is nothing');
  } else if (userInput.length <= 5) {
    alert('too short');
  } else {
    // it was using a strict equal operator instead of assigning
    isLongEnough = true;
  }
}

const finalMessage =
  '"' + userInput + '" is ' + userInput.length + ' characters long';
alert(finalMessage);
