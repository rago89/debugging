'use strict';

let userInput = '';
let userConfirmed = false;
// was missing the not operator 
while (!userConfirmed) {
  userInput = prompt('enter your name:');
  console.log('userInput:', typeof userInput, userInput);

  if (userInput === false) {
    alert('nothing is not a name');
    continue;
  }

  const confirmMessage = 'is this correct?\n"' + userInput + '"';
  // the user confirmed was using an alert instead of confirm function
  userConfirmed = confirm(confirmMessage);
}

const finalMessage = `your name is: "${userInput}"`;
alert(finalMessage);
