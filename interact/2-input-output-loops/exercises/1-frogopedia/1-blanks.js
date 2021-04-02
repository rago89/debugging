"use strict";


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

  inputIsAboutFrogs =  !userInput ? alert('leaving is not an option') : (userInput.toLowerCase().includes('frog') !== true) ? alert('input is not about frogs') : userInput.toLowerCase().includes('frog') 
}

const finalMessage =
  'i just learned something cool about frogs!\n\n- "' + userInput + '"';

alert(finalMessage);
