'use strict';

// fill in the blank to pass the assertion
// to fill the blank should be a confirm function, because it returns true if the user confirm 
// or false if not confirm
const interactionValue = confirm('asdf');

console.log('interactionValue:', typeof interactionValue, interactionValue);

console.assert(typeof interactionValue === 'boolean', 'interactionValue should be boolean');

