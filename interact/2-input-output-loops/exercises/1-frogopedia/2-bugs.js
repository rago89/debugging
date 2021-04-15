"use strict";

<<<<<<< HEAD
let userInput = "";
=======
/* look out for:

  - logical operators
  - boolean flag values

*/

let userInput = '';
>>>>>>> upstream/master
let inputIsAboutFrogs = true;
let wordTomatch = /frog/g; // word to search global
while (inputIsAboutFrogs) {
  userInput = prompt("tell me something about frogs");

<<<<<<< HEAD
  if (inputIsAboutFrogs === "" && inputIsAboutFrogs === null) {
    alert("that is not something");
    // .test is going to return true if found a match in the string
  } else if (wordTomatch.test(userInput)) {
=======
  if (inputIsAboutFrogs === '' && inputIsAboutFrogs === null) {
    alert('that is not something');
  }
  // regular expression: this works!
  else if (/frog/i.test(userInput) === true) {
>>>>>>> upstream/master
    inputIsAboutFrogs = false;
  } else {
    alert("nope, not about frogs.  try again.");
  }
}

const finalMessage =
  'i just learned something cool about frogs!\n\n- "' + userInput + '"';
alert(finalMessage);
