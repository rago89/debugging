"use strict";
// data
let average = 0;
let sum = 0;
let inputCount = 0;
// Flag
let userHasInputed = true;

const instructions =
  "calculate the average of many numbers:\n\n" +
  "- you must input something\n" +
  "- input a number and it will be added to the sum\n" +
  '- input "done" and the program will finish (case insensitive)\n' +
  "- input anything else and it will be ignored\n\n" +
  "when you have finished inputting numbers, the average will be displayed";
alert(instructions);

while (userHasInputed) {
  let userInput = prompt(
    "input a numbermit will be added to the sum.\b" + "write 'done' to finish"
  );

  if (userInput === "" || userInput === null) {
    alert("nothing is not allowed");
    continue;
  }

  if (userInput.toLowerCase().includes("done")) {
    userHasInputed = false;
    break;
  }

  let numberToCount = Number(userInput);

  if (Number.isNaN(numberToCount)) {
    alert("is not a number");
    continue;
  }

  sum += numberToCount;
  /* -- END -- */
  inputCount += 1;
}

average = sum / inputCount;
alert("The average is " + average);
