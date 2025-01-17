'use strict';

/* All the Rest

  All other arithmetic operators in JavaScript are simpler than +

  to keep things simple for now, focus just on primitive types:

    coerce both values to Number
    do math with the numbers


  the example below shows subtraction, but it's the same for all the rest

    - * / % **

*/


// try different values to see what happens
const a = 2;
const b = true;


const realSubtraction = a - b;

const aNum = Number(a);
const bNum = Number(b);

const fakeSubtraction = aNum - bNum;

console.log('fakeSubtraction=> ', fakeSubtraction, typeof fakeSubtraction)
console.assert(realSubtraction === fakeSubtraction, 'always the same!');
