"use strict";

<<<<<<< HEAD
let validInput = "";
=======
/* look out for

  - comparison vs. assignment
  - off-by-one character index
  - reversing boolean flag

*/

let validInput = '';
>>>>>>> upstream/master
let isValid = false;
while (!isValid) {
  const userInput = prompt('enter anything with "e" or "E" as the 5th letter');

  if (userInput === null || userInput === "") {
    alert("that is nothing");
  } else if (userInput.length < 5) {
    alert("too short");
  } else if (userInput[4] === "e" || userInput[4] === "E") {
    validInput = userInput;
    isValid = true;
  } else {
    alert('input has no "e" or "E" as the 5th character');
  }
}

alert('done: "' + validInput + '"');
