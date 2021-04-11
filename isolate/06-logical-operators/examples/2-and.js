'use strict';

/* &&
  the and operator does not evaluate to true or false!
  it returns the left value or the right value
  - if the left is falsy, it evaluates(returns) the left value
  - if the left is truthy, it evaluates(returns) the right value
  https://javascript.info/logical-operators
*/

const and1 = 0 && 0;
console.log(typeof and1, and1);

const and2 = 1 && 0;
console.log(typeof and2, and2);

const and3 = 0 && 1;
console.log(typeof and3, and3);

const and4 = 1 && 1;
console.log(typeof and4, and4);

const and5 = '' && 'asdf';
console.log(typeof and5, and5);

const and6 = 'asdf' && '';
console.log(typeof and6, and6);

const and7 = true && false;
console.log(typeof and7, and7);

const and8 = NaN && undefined;
console.log(typeof and8, and8);

const and9 = 'poiu' && 'asdf';
console.log(typeof and9, and9);