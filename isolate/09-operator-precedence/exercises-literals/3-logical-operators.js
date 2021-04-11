"use strict";

// write lots of comments!  explain your thinking at each step

const expected = true;

// the original expression
const step0 = !undefined && !"";
console.assert(step0 === expected, "Step 0");
console.log("step0 => ", step0, typeof step0);
/*

*/
const step1 = !NaN && !undefined;
console.log("step1 => ", step1, typeof step1);
console.assert(step1 === expected, "Step 1");

/*
 
*/
const step2 = !!"1" && !!1;
console.log("step2 => ", step2, typeof step2);
console.assert(step2 === expected, "Step 2");

/*

*/
const step3 = true && Boolean("true");
console.log("step3 => ", step3, typeof step3);
console.assert(step3 === expected, "Step 3");
