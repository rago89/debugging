'use strict';
// A program that ask to the user if has entered a nomber or not 

// User iteraction
const userString = prompt('enter a number:');
// coercing user's input
const userNumber = Number(userString);
// testing if the coerced input is a number
// without the not operator the method normally returns true only when the value evaluated is NaN or undefined, the rest is false
// with the not opeartor the boolean output is inverted, giving more logic to the name of the variable
const inputIsANumber = !Number.isNaN(userNumber);

const confirmMessage =
  'did you really enter a number?\n\n' + 'yes -> "ok"\n' + 'no  -> "cancel"';
// returns boolean value, true if user select yes and false if user select cancel  
let userThinksItsANumber = confirm(confirmMessage);
// return a boolean value because is a comparison operator 
const userIsCorrect = (userThinksItsANumber === inputIsANumber);
// ternary operator, if the left side of the question mark is true evaluates the right side, otherwise evaluates after the colon 
alert(userIsCorrect ? 'correct!' : 'nope :(');
