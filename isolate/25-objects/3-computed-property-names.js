'use strict';

/*
  hint: use JS Tutor
*/

// you can also use bracket notation to define key names
//  this isn't very common, but is very nice when it's needed

const key1 = 'firstName';
const value1 = 'Brendan';

const key2 = 'lastName';
const value2 = 'Eich';
// in bracket notation i also can give acces to the value putting the key name as a string
const computedPropertyNames = {
<<<<<<< HEAD:isolate/z23-objects/examples/3-computed-property-names.js
  ['firstName']: value1,
  [key2]: value2
=======
  [key1]: value1,
  [key2]: value2,
>>>>>>> upstream/master:isolate/25-objects/3-computed-property-names.js
};

console.log(computedPropertyNames.firstName); // 'Brendan'
console.log(computedPropertyNames.lastName); // 'Eich'

// https://ui.dev/computed-property-names/
