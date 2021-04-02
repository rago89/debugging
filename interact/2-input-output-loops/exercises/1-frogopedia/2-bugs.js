'use strict';

let userInput = '';
let inputIsAboutFrogs = true;
let wordTomatch = /frog/g;  // word to search global
while (inputIsAboutFrogs) {
  userInput = prompt('tell me something about frogs');

  if (inputIsAboutFrogs === '' && inputIsAboutFrogs === null) {
    alert('that is not something');
    // .test is going to return true if found a match in the string
  } else if (wordTomatch.test(userInput)) {
    inputIsAboutFrogs = false;
  } else {
    alert('nope, not about frogs.  try again.');
  }
}

const finalMessage = 'i just learned something cool about frogs!\n\n- "' + userInput + '"';
alert(finalMessage);
