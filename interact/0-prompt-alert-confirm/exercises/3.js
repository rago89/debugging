'use strict';

// fill in the blank to pass the assertion
// returns nothind because there isnot valur to be returned only display a string
const interactionValue = alert('asdf');

console.log('interactionValue:', typeof interactionValue, interactionValue);

console.assert(typeof interactionValue === 'undefined', 'interactionValue should be undefined');
