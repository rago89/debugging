'use strict';

// replace the _ to pass the asserts

const comparison1 = 4 === '4';
const test1 = comparison1 === false;
console.assert(test1, 'Test 1');

const comparison2 = Infinity === 'Infinity';
const test2 = comparison2 === false;
console.assert(test2, 'Test 2');

const comparison3 = "x" === `x`;
const test3 = comparison3 === true;
console.assert(test3, 'Test 3');

const comparison4 = 'null' === 'null';
const test4 = comparison4 === true;
console.assert(test4, 'Test 4');

const comparison5 = 'null' === null;
const test5 = comparison5 === false;
console.assert(test5, 'Test 5');

const comparison6 = 0.0 === 0;
const test6 = comparison6 === true;
console.assert(test6, 'Test 6');

const comparison7 = null === undefined;
const test7 = comparison7 === false;
console.assert(test7, 'Test 7');

