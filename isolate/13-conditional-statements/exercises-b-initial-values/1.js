'use strict';

// there may be more than one correct answer
//  try finding as many as you can
//  what do all the solutions have in common?
// or maybe the asserted path is unreachable!

const value1 = true;
const value2 = 0;
let path = '';

if (value1 && !value2) {
  path = 'if';

} else if (!value1 || !value2) {
  path = 'else if';
}

console.assert(path === 'else if');

const value3 = 'hello';
const value4 = null;
let path1 = '';

if (value3 && !value4) {
  path1 = 'if';

} else if (!value3 || !value4) {
  path1 = 'else if';
}

console.assert(path1 === 'if');