'use strict';

/* Uppercaseify

  you can use for loops to do some logic for each element in a string

  this loop should create a new string with each character upper-cased

*/

const lowerCaseString = 'abcde';
console.log('lowerCaseString:', lowerCaseString);

let upperCaseString = '';

for (let i = 0; i < lowerCaseString.length; i++) {

  const nextLetter = lowerCaseString[i];
  const letterUpperCased = nextLetter.toUpperCase();
  upperCaseString += letterUpperCased;

  console.log(i); // your stepper variable
  console.log('upperCaseString:', upperCaseString);
}

console.assert(upperCaseString === 'ABCDE', 'upper case string is all upper case');
