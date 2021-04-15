'use strict';

const userString = prompt('enter a number:');

/* -- BEGIN: check if input is a number -- */
const numberTocast = Number(userString);
console.log('Number casted=> ', numberTocast, typeof numberTocast);
/* -- END -- */
const inputIsANumber = !Number.isNaN(numberTocast);
console.log('Evaluating is number casted is a number=> ', inputIsANumber, typeof inputIsANumber);

/* -- BEGIN: ask the user if they think their input is a number -- */
const userMessage = 'Are you sure that you enter a number \n\n' 
+ 'Yes: Is you enter a number \n'
+ 'Cancel: if you do not enter a number';
/* -- END -- */
let userThinksItsANumber = confirm(userMessage);

const userIsCorrect = userThinksItsANumber === inputIsANumber;
console.log('Output userIsCorrect=> ', userIsCorrect, typeof userIsCorrect);

if (userIsCorrect) {
  alert('correct!');
} else {
  alert('nope :(');
}
