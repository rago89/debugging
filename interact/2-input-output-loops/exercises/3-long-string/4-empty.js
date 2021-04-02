"use strict";
// data
let userInput = "";
// set flag
let userHasInputted = false;

while (!userHasInputted) {
  // iteration with user
  userInput = prompt("enter at least 5 characters");

  userHasInputted = !userInput
    ? alert("please enter something")
    : userInput.length <= 5
    ? alert("Too short")
    : (userHasInputted = true);
}

const finalMessage =
  '"' + userInput + '" is ' + userInput.length + " characters long";

alert(finalMessage);
