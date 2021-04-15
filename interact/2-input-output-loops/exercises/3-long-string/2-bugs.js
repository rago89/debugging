'use strict';

<<<<<<< HEAD
let userInput = '';
let isLongEnough = false;
// was missing the not operator
while (!isLongEnough) {
=======
/* look out for:

  - loop checks
  - conditional checks
  - variable declarations
  - assignment vs. comparison

*/

const userInput = '';
const isLongEnough = false;
while (isLongEnough) {
>>>>>>> upstream/master
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
