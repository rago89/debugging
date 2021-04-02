'use strict';

let userInput = '';
while (userInput === '') {
  userInput = prompt("Enter something longuer than 5 characters");
  /* -- BEGIN: validate input -- */
  if (!userInput) {
    alert('cancelling is not an option');
    userInput = '';
  }

  if (userInput.length <= 5) {
     alert("Too short");
     userInput = '';
  } else{
    break;
  }
  /* -- END: validate input -- */
}
const finalMessage =
  '"' + userInput + '" is ' + userInput.length + ' characters long';
alert(finalMessage);
