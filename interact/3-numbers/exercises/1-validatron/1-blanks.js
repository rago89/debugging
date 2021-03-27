'use strict';

/* Fill in the Blanks

  there are three types of blanks you will need to fill:

  1. interactions: prompt, alert, or confirm?
  2. type casting: coercing user input
  3. comparisons, they each have a hint

*/

// get user input as a String
const userString = prompt('enter a number:');
console.log('user\'s entry=> ',userString, typeof(userString))
// coerce it to a Number
const userNumber = Number(userString);
console.log('user\'s entry casted=> ', userNumber, typeof(userNumber))
// is the number NaN or not?
// see: isolate/05-explicit-coercion/examples/4-about-nan.js
const inputIsANumber = !Number.isNaN(userNumber);
console.log(inputIsANumber, typeof(inputIsANumber));
// does the user think their String becomes a Number?
<<<<<<< HEAD:interact/2-user-flow/exercises/1-validatron.js
const confirmMessage = 'did you really enter a number?\n\n'
  + 'yes -> "ok"\n'
  + 'no  -> "cancel"';
const userThinksItsANumber = confirm(confirmMessage);
=======
const confirmMessage = 'did you really enter a number?\n\n' + 'yes -> "ok"\n' + 'no  -> "cancel"';
const userThinksItsANumber = _(confirmMessage);
>>>>>>> upstream/master:interact/3-numbers/exercises/1-validatron/1-blanks.js

// compare userThinksItsANumber and inputIsANumber
// does the user think the same thing as JavaScript?
// see: isolate/04-comparing-and-assertion/examples/1-strict-equality.js
const userIsCorrect = console.assert(userThinksItsANumber === inputIsANumber, 'fail test is not a number')
;

// which variable "knows" if the user was correct?
<<<<<<< HEAD:interact/2-user-flow/exercises/1-validatron.js
// the return of the value is boolean that is why the comparition should be with a boolean value
if (userThinksItsANumber) {
  alert('correct!');

=======
if (_) {
  _('correct!');
>>>>>>> upstream/master:interact/3-numbers/exercises/1-validatron/1-blanks.js
} else {
  alert('nope :(');
}
