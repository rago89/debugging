'use strict';

let userInput = '';
let isValidName = false;
while (!isValidName) {

  userInput = prompt('please enter your name');

  /* -- BEGIN: validate input -- */
  if (!userInput) {
    alert('leaving is not an option');
  }

  /* -- END: validate input -- */
  let confirmMessage = `are you sure this is your name ?  "${userInput}"`;
  isValidName = confirm(confirmMessage);
}

const finalMessage = `your name is: "${userInput}"`;
alert(finalMessage);
