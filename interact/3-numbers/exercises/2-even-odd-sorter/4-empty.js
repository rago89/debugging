"use strict";
// A program thar ask users to enter a number nad show them if even or odd
// To leave the program you have to enter a number
// cancelling or enter nothing is not an option

// data:
let userNumber = NaN;
let userInput = null;

while (true) {
  userInput = prompt("enter a number");

  if (userInput === "" || userInput === null) {
    alert("Cancelling or enter nothing is not an option");
  }
  /* -- BEGIN: exit if userInput is a valid number -- */
  userNumber = Number(userInput);
  /* -- END -- */
  if (Number.isNaN(userNumber)) {
    alert(`"${userInput}" is not a number `);
    continue;
  } else {
    break;
  }
}

const message = userNumber % 2 === 0 ? " is even" : " is odd";
alert(userNumber + message);
