'use strict';

/* Uppercaseify

  you can use for loops to do some logic for each element in a string

*/

const originalString = 'abcde';
console.log('originalString:', originalString);

let reverseUpperCase = '';

for (let i = originalString.length - 1; i >= 0; i--) {
  // a blank canvas :)
  reverseUpperCase += originalString[i].toUpperCase();
  console.log(i, 'the stepper variable' );
  console.log(reverseUpperCase)

}

console.assert(reverseUpperCase === 'EDCBA', 'reversed string is the original reversed');
