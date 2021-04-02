"use strict";
// set data
let userInput = "";
// set flag
let userHasInputted = false;

// set while loop
while (!userHasInputted) {
  // set user iteraction
  userInput = prompt("Please enter your name");
  let confirmMessage = `are you sure this is your name ?  "${userInput}"`;
  // ternary operator
  userHasInputted = !userInput
    ? alert("leaving or input nothing is not an option")
    : confirm(confirmMessage);
}

const finalMessege = `Your name is  "${userInput}"`;

alert(finalMessege);
