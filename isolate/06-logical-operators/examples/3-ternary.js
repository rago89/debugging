"use strict";

/* the Ternary Operator (or Conditional Operator)


/*
   check if the user entered nothing, or clicked cancel
   TERNARY OPERATOR The conditional operator is the only ternary operator (three operands) 
   in JavaScript and is sometimes actually called the ternary operator.
   1- if the left side of '?' If the value of the first operand is truthy, then the second operand is evaluated, and its value is returned
   2- if the left side of '?' is false them is going to return the second 
   Otherwise, if the first operand is falsy, then the third operand is evaluated and its value is returned.
*/

const ternary1 = 1 ? "A" : "B";
console.log(ternary1);

const ternary2 = "non-empty strings" ? "A" : "B";
console.log(ternary2);

const ternary3 = true ? "A" : "B";
console.log(ternary3);

const ternary4 = undefined ? "A" : "B";
console.log(ternary4);

const ternary5 = null ? "A" : "B";
console.log(ternary5);

const ternary6 = false ? "A" : "B";
console.log(ternary6);

const ternary7 = 0 ? "A" : "B";
console.log(ternary7);

const ternary8 = "" ? "A" : "B";
console.log(ternary8);

const ternary9 = NaN ? "A" : "B";
console.log(ternary9);
