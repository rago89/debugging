"use strict";

// write lots of comments!  explain your thinking at each step

const expected = NaN;

// the original expression
const step0 = -(null + "10") * 15;
console.log("step0 => ", step0, typeof step0);
console.assert(Object.is(step0, expected), "Step 0");

/*
The result is NaN because inside of parenthesis happens is a 
concatenation "null10" and in arithmetic is impossible give a result
*/
const step1 = (false + true) / "fifteen";
console.log("step1 => ", step1, typeof step1);
console.assert(Object.is(step1, expected), "Step 1");

/*
between parenthesis javaScript is going to try to make the operation 
and in order to do thar is going to cast both values to a number, 
make the addition and is going to try to make the division with a string 
and as mentioned in arithmetic is impossible give a numeric result between 
numbers and letters 
*/
const step2 = undefined * 15;
console.log("step2 => ", step2, typeof step2);
console.assert(Object.is(step2, expected), "Step 2");
/*
the result is NaN because when javaScript is going to coerce undefined to a number
the result is NaN and any operation with NaN the result is NaN
*/
const step3 = (false * null) / "";
console.log("step3 => ", step3, typeof step3);
console.assert(Object.is(step3, expected), "Step 3");

/*
the result is NaN because all the values can be coerced to number 
and 0/0 give as result NaN
*/
