"use strict";
// data
let validInput = "";

let index = 0;
let isValid = false;
while (!isValid) {
  index = index + 1;

  const userInput = prompt(
    `enter anything with "e" or "E" as the ${index}th letter`
  );

  isValid = !userInput
    ? alert("Enter something")
    : userInput.length < 5
    ? alert("too short")
    : userInput[4] === "e" || userInput[4] === "E"
    ? (validInput = userInput)
    : alert(`input has no "e" or "E" as the ${index}th character`);


  /* -- END: validate input -- */
}

alert('done: "' + validInput + '"');
