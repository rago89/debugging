"use strict";

<<<<<<< HEAD:interact/3-input-output-loops/exercises/1-frogopedia.js
let userInput = "";
let inputIsAboutFrogs = false;
while (!inputIsAboutFrogs) {
  userInput = prompt("tell me something about frogs");
  console.log("userInput:", typeof userInput, userInput);

  // check if the user entered nothing, or clicked cancel
  // TERNARY OPERATOR The conditional operator is the only ternary operator (three operands)
  //in JavaScript and is sometimes actually called the ternary operator.
  // if the left side of '?' If the value of the first operand is truthy, then the second operand is evaluated, and its value is returned
  // if the left side of '?' is false them is going to return the second
  // Otherwise, if the first operand is falsy, then the third operand is evaluated and its value is returned.

  inputIsAboutFrogs = userInput ? userInput.toLowerCase().includes("frog") : alert("nope, not about frogs.  try again.");
}

const finalMessage =
  'i just learned something cool about frogs!\n\n- "' + userInput + '"';
=======
let userInput = '';
let inputIsAboutFrogs = _;
while (!inputIsAboutFrogs) {
  userInput = prompt('tell me something about frogs');
  console.log('userInput:', typeof userInput, userInput);

  // check if the user entered nothing, or clicked cancel
  if (_) {
    alert('that is not something');
    continue;
  }

  // search the user input for "frog", upper or lower case
  if (_) {
    inputIsAboutFrogs = _;
    continue;
  }

  alert('nope, not about frogs.  try again.');
}

const finalMessage = 'i just learned something cool about frogs!\n\n- "' + userInput + '"';
>>>>>>> upstream/master:interact/2-input-output-loops/exercises/1-frogopedia/1-blanks.js
alert(finalMessage);
