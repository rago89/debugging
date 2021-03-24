'use strict';

// fill in the blank to pass the assertion
// to pass the asertion should be a prompt because it returns a string if the users enter somthing or nothing
// it returns null if the user clicks cancel
const inputValue = prompt('asdf');

console.log('inputValue:', typeof inputValue, inputValue);

const inputAssertion = typeof inputValue === 'object'
  || typeof inputValue === 'string';

console.assert(inputAssertion, 'inputValue should be a string or an object');
