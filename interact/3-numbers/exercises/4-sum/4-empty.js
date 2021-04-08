"use strict";
// A program to that makes aditions

// data
/* 
  sum must start with null that means nothing or 0 that is a number, if starts with an empty string
  we have to keep in ming that javaScript evaluates from left to right and instead of 
  adding it will concatenate 
*/
let sum = 0;
// flag
let userIsNotDone = true;

// game instructions
const instructions =
  "calculate the sum of many numbers:\n\n" +
  "- you must input something\n" +
  "- input a number and it will be added to the sum\n" +
  '- input "done" and the program will finish (case insensitive)\n' +
  "- input anything else and it will be ignored";
alert(instructions);

while (userIsNotDone) {
  let userInput = prompt(
    "input a numbermit will be added to the sum, write 'done' to finish"
  );

  if (!userInput) {
    alert("Please enter a number");
    continue;
  }

  let numberToValidate = Number(userInput);

  userIsNotDone = userInput.toLowerCase().includes("done")
    ? (userIsNotDone = false)
    : !Number.isNaN(numberToValidate)
    ? (sum += numberToValidate)
    : alert("is not a number");
}

alert('total is ' + sum)