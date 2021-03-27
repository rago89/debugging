'use strict';

let userNumber = NaN;
let userNumberIsNaN = true;
while (userNumberIsNaN) {
  const userInput = prompt('enter a number');
  console.log('userInput:', typeof userInput, userInput);

  // make sure the user entered something
<<<<<<< HEAD:interact/3-input-output-loops/exercises/4-even-odd-sorter.js
  
=======
  ___;
>>>>>>> upstream/master:interact/3-numbers/exercises/2-even-odd-sorter/1-blanks.js

  userNumber = Number(userInput);
  console.log('userNumber:', typeof userNumber, userNumber);

  // check if the input was a valid number
  // returns true everything that is not a number
  if (Number.isNaN(userNumber)) {
    alert('"' + userInput + '" is not a number');
  } else {
    // if the input was a number, toggle the flag
    userNumberIsNaN = false;
  }
}

if (userNumber % 2 === 0) {
  const evenMessage = userNumber + ' is even';
  alert(evenMessage);
} else {
  const oddMessage = userNumber + ' is odd';
  alert(oddMessage);
}
