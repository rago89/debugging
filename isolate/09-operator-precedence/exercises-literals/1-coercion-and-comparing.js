'use strict';

// write lots of comments!  explain your thinking at each step

const expected = true;

// the original expression
const step0 = typeof NaN === typeof Infinity;
console.assert(step0 === expected, 'Step 0');

/*
the comparition willl be true because what is comparing is 
the typeof the value and in both cases the typeof is 'number'
*/
const step1 = NaN !== NaN;
console.assert(step1 === expected, 'Step 1');

/*
NaN is not equal to it self
*/
const step2 = typeof '12' === typeof 'hello';
console.assert(step2 === expected, 'Step 2');

/*
the comparition willl be true because what is comparing is 
the typeof the value and in both cases the typeof is 'string'
*/
const step3 = !false === !null;
console.assert(step3 === expected, 'Step 3');

/*
the comparition willl be true because both cases are falsey values
*/