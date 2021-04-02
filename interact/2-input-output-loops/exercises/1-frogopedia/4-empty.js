"use strict";

// a function where the user have to unput simothing about frogs
// there is no way to scape from the interaction is he does'nt input about frogs

// data
let userInput = "";
// Boolean flag
let inputIsAboutFrogs = false;
// loop
while (!inputIsAboutFrogs) {
  userInput = prompt("enter something about frogs");
  // usyng ternary operator, if user input something is going to evaluate the right side of the interrogation mark
  // is the user enter nothing or cancel is going to evaluate what is after the colon

  inputIsAboutFrogs = !userInput
    ? alert("leaving is not an option")
    : userInput.toLowerCase().includes("frog") !== true
    ? alert("input is not about frogs")
    : userInput.toLowerCase().includes("frog");
}

const finalMessage =
  'i just learned something cool about frogs!\n\n- "' + userInput + '"';

alert(finalMessage);
