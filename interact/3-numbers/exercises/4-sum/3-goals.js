"use strict";

const instructions =
  "calculate the sum of many numbers:\n\n" +
  "- you must input something\n" +
  "- input a number and it will be added to the sum\n" +
  '- input "done" and the program will finish (case insensitive)\n' +
  "- input anything else and it will be ignored";
alert(instructions);

let sum = 0;

let userInput = "";
let isDone = false;
while (!isDone) {
  userInput = prompt('enter a number to add, or "done" to finish');

  if (!userInput) {
    alert("please enter something");
    continue;
  } else if (userInput.toLowerCase().includes("done")) {
    isDone = true;
  } else {
    let numberTocast = Number(userInput);
    /* -- BEGIN: handle user input - nothing, done, a number or not a number -- */
    if (Number.isNaN(numberTocast)) {
      alert("is not a number");
      continue;
    } else {
      /* -- END -- */
      sum += numberTocast;
    }
  }
}
const sumMessage = "the sum of your numbers is: " + sum;
alert(sumMessage);
