"use strict";

let userNumber = NaN;
while (Number.isNaN(userNumber)) {
  const userInput = prompt("enter a number");

  if (userInput === "" && userInput === null) {
    alert("enter something!");
    break;
  }

  userNumber = Number(userInput);

  if (Number.isNaN(userNumber)) {
    alert('"' + userInput + '" is not a number');
  }
}
// modulus operator, returns the reminder of a division
if (userNumber % 2 === 0) {
  alert(userNumber + " is even");
} else {
  alert(userNumber + " is odd");
}
