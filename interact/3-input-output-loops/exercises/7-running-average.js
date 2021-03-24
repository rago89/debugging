'use strict';

const instructions = 'calculate the average of many numbers:\n\n'
  + '- you must input something\n'
  + '- input a number and it will be added to the sum\n'
  + '- input "done" and the program will finish (case insensitive)\n'
  + '- input anything else and it will be ignored\n\n'
  + 'when you have finished inputting numbers, the average will be displayed';
alert(instructions);

let sum = 0;
let inputCount = 0;

let userInput = '';

// write this program!
//  you may use any strategy you like


while (true) {
// Seeting user's input
  userInput = prompt('Please enter a number to calculate de average');

// Setting contidion to make the user unput something if he cancel or enter nothing
  if (!userInput) {
    alert('Do nothing is not an option');
    continue;
  }

  // Setting the scape of the loop
  if (userInput.toLowerCase().includes('done')) {
    break;
  }
  
    // Casting if the user input something
  const stringToCast = Number(userInput);
  console.log('String to cast:', typeof stringToCast, stringToCast);
  // Verifying if the user has entered a number
  if (Number.isNaN(stringToCast)) {
    alert('Is not a number');
    continue;
  } 
  // Counting the iteration  
  inputCount++;
  console.log('inputCount:', typeof inputCount, inputCount);

  // Adition of user's input 
  sum += stringToCast;
  console.log('Adition:', typeof sum, sum);
}



const average = sum / inputCount;
console.log('average:', typeof average, average);

const averageMessage = 'the average of your numbers is: ' + average;
alert(averageMessage);
