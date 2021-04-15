'use strict';

let userInput = '';
while (true) {
  userInput = prompt('tell me something about frogs');

  if (!userInput) {
    alert('Please enter something');
    continue;
  }

  /* -- BEGIN: validate input -- */
  // the search method search for the index of the word is ther is not match returns -1
  else if (userInput.toLowerCase().search(/frogs/g) !== -1) {
    break;
  }

  /* -- END: validate input -- */
  else {
    alert("'" + userInput + "'" + 'is not about frogs')
  }


}

const finalMessage =
  'i just learned something cool about frogs!\n\n- "' + userInput + '"';
alert(finalMessage);
