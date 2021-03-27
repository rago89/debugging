'use strict';

const instructions =
  'calculate the sum of many numbers:\n\n' +
  '- you must input something\n' +
  '- input a number and it will be added to the sum\n' +
  '- input "done" and the program will finish (case insensitive)\n' +
  '- input anything else and it will be ignored';
alert(instructions);

let sum = 0;

let userInput = '';
while (true) {
  userInput = prompt('enter a number to add, or "done" to finish');
  console.log('userInput:', typeof userInput, userInput);

  // make sure the user input something
<<<<<<< HEAD:interact/3-input-output-loops/exercises/6-running-total.js
  if (!userInput) {
    alert('please enter ss=omething');
    continue;
  }
=======
  ___;
>>>>>>> upstream/master:interact/3-numbers/exercises/4-sum/1-blanks.js

  // check if the user input is "done", case-insensitive
  if (userInput.toLowerCase().includes('done')) {
    break;
  }

  const nextNumber = Number(userInput);
  console.log('nextNumber:', typeof nextNumber, nextNumber);

  // continue if the input is not a number
<<<<<<< HEAD:interact/3-input-output-loops/exercises/6-running-total.js
  if (Number.isNaN(nextNumber)) {
    alert('Please enter a number');
    continue;
  }

=======
  ___;
>>>>>>> upstream/master:interact/3-numbers/exercises/4-sum/1-blanks.js

  // add the new number to the sum
  sum += nextNumber;
  console.log('sum:', typeof sum, sum);
}

const sumMessage = 'the sum of your numbers is: ' + sum;
alert(sumMessage);
